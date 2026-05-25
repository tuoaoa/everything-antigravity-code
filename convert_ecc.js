const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, 'everything-claude-code', 'agents');
const OUTPUT_DIR = path.join(__dirname, 'converted_agents');
const REGISTRY_FILE = path.join(__dirname, 'expert_registry.json');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function parseMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    console.warn(`[WARN] File ${path.basename(filePath)} does not have valid frontmatter.`);
    return null;
  }

  const yamlBlock = match[1];
  const bodyBlock = match[2];

  const metadata = {};
  yamlBlock.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      let value = parts.slice(1).join(':').trim();
      // Clean quotes
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.substring(1, value.length - 1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.substring(1, value.length - 1);
      }
      if (key === 'tools') {
        try {
          value = JSON.parse(value.replace(/'/g, '"'));
        } catch (e) {
          // If parse fails, clean square brackets and split by comma
          value = value.replace(/[\[\]]/g, '').split(',').map(s => s.trim().replace(/"/g, ''));
        }
      }
      metadata[key] = value;
    }
  });

  return { metadata, body: bodyBlock };
}

function convert() {
  const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));
  const registry = {};

  console.log(`Found ${files.length} agent profiles to convert...`);

  files.forEach(file => {
    const filePath = path.join(SOURCE_DIR, file);
    const parsed = parseMarkdown(filePath);
    if (!parsed) return;

    const { metadata, body } = parsed;
    const agentName = metadata.name || path.basename(file, '.md');

    // Clean up Claude-specific references and replace with Antigravity
    let cleanedBody = body
      .replace(/Claude Code/gi, 'Antigravity')
      .replace(/Claude/gi, 'Antigravity')
      .replace(/\.claudecode/gi, '.antigravity');

    // Add Token Optimization and Memory Persistence Rules
    const rulesBlock = `

## ⚡ TOKEN OPTIMIZATION RULE
- Only read the absolutely necessary code files. Do not provide overly verbose explanations or repeat full files. Keep responses highly dense, technical, and token-efficient.

## 💾 MEMORY PERSISTENCE RULE
- Review the active task progress in \`scratch/agent_memory.md\` before starting any task.
- Update \`scratch/agent_memory.md\` with your progress, actions, and key findings when you complete your task to ensure memory continuity across sessions.
`;

    // Append to prompt
    cleanedBody += rulesBlock;

    // Map tools to boolean flags for define_subagent tool
    // In everything-claude-code, "Write" means write permissions.
    // If they have Write, allow write tools.
    // If they use subagents or orchestrate, allow subagent tools.
    // All get mcp tools for complete capability.
    const tools = metadata.tools || [];
    const hasWrite = tools.some(t => t.toLowerCase() === 'write' || t.toLowerCase() === 'all' || t.toLowerCase() === 'bash');
    const isPlannerOrStaff = ['planner', 'chief-of-staff', 'architect'].includes(agentName);

    const subagentSpec = {
      name: agentName,
      description: metadata.description || `Expert subagent for ${agentName}`,
      system_prompt: cleanedBody.trim(),
      enable_write_tools: hasWrite || isPlannerOrStaff,
      enable_subagent_tools: isPlannerOrStaff,
      enable_mcp_tools: true
    };

    // Save individual agent spec
    const outPath = path.join(OUTPUT_DIR, `${agentName}.json`);
    fs.writeFileSync(outPath, JSON.stringify(subagentSpec, null, 2), 'utf-8');

    registry[agentName] = {
      specPath: outPath,
      description: subagentSpec.description,
      enable_write_tools: subagentSpec.enable_write_tools,
      enable_subagent_tools: subagentSpec.enable_subagent_tools
    };
  });

  // Save registry
  fs.writeFileSync(REGISTRY_FILE, JSON.stringify(registry, null, 2), 'utf-8');
  console.log(`Conversion complete! Generated ${Object.keys(registry).length} subagent specifications.`);
}

convert();
