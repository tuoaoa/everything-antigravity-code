# 📖 Antigravity Multi-Agent Upgrade Manual / Cẩm Nang Nâng Cấp Hệ Thống Multi-Agent

Welcome to the newly upgraded Antigravity Multi-Agent environment! This manual details the 12 core expert subagents and 10 high-frequency slash command shims integrated into your macOS local workspace.

Chào mừng bạn đến với môi trường Multi-Agent đã được nâng cấp của Antigravity! Tài liệu này hướng dẫn chi tiết về 12 subagent chuyên gia cốt lõi và 10 lệnh slash-command tần suất cao đã được tích hợp vào không gian làm việc cục bộ của bạn trên macOS.

---

## 🧠 Collaborative Memory Ledger / Sổ Ký Ức Cộng Tác
To ensure all subagents maintain long-term memory across sessions and avoid "amnesia", a centralized memory ledger has been initialized:
Để đảm bảo tất cả các subagent duy trì ký ức dài hạn qua các phiên làm việc và tránh bị "mất trí nhớ", sổ ký ức tập trung đã được khởi tạo:

📍 **Path / Đường dẫn:** [scratch/agent_memory.md](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/agent_memory.md)

*Every subagent is strictly instructed to read this ledger at startup and update it upon completion.*
*Mỗi subagent đều được cấu hình bắt buộc phải đọc sổ ký ức này khi khởi động và cập nhật tiến độ ngay khi hoàn thành nhiệm vụ.*

---

## 👥 Converted Expert Subagents / Danh Sách Subagent Chuyên Gia

You can invoke these specialized agents at any time using the `invoke_subagent` tool. They are optimized for macOS, token-efficient, and collaborative.
Bạn có thể gọi các chuyên gia này bất kỳ lúc nào bằng công cụ `invoke_subagent`. Họ được tối ưu hóa cho macOS, tiết kiệm token tối đa, và cộng tác chặt chẽ.

| Agent Name / Tên Agent | Role & Description / Vai Trò & Mô Tả |
| :--- | :--- |
| **`planner`** | **Planning Specialist / Chuyên gia lập kế hoạch**<br>Analyzes requirements and drafts comprehensive, structured step-by-step implementation plans before any code changes.<br>*Phân tích yêu cầu và soạn thảo kế hoạch triển khai chi tiết từng bước trước khi chạm vào code.* |
| **`architect`** | **System Architect / Kiến trúc sư hệ thống**<br>Designs modular, scalable system architectures, evaluates technical trade-offs, and documents ADRs.<br>*Thiết kế kiến trúc hệ thống module, đánh giá cân bằng kỹ thuật và lập tài liệu quyết định kiến trúc (ADR).* |
| **`tdd-guide`** | **TDD Specialist / Chuyên gia phát triển hướng kiểm thử**<br>Enforces the Red-Green-Refactor cycle, drafts test suites first, and targets 80%+ coverage.<br>*Thúc đẩy chu trình Red-Green-Refactor, thiết kế các bộ test trước khi viết code, nhắm tới độ phủ 80%+.* |
| **`code-reviewer`** | **General Code Reviewer / Chuyên gia đánh giá mã nguồn**<br>Proactively audits codebase changes against security, quality, and project styling conventions with strict noise filtering.<br>*Kiểm tra các thay đổi mã nguồn dựa trên các tiêu chí bảo mật, chất lượng, và quy chuẩn dự án với bộ lọc giảm nhiễu.* |
| **`security-reviewer`**| **Security Specialist / Chuyên gia an ninh bảo mật**<br>Detects OWASP Top 10 vulnerabilities, hardcoded secrets, input validation flaws, and unsafe execution models.<br>*Phát hiện các lỗ hổng OWASP Top 10, lộ bí mật, lỗi kiểm chuẩn đầu vào, và mô hình thực thi không an sau.* |
| **`database-reviewer`**| **PostgreSQL Specialist / Chuyên gia cơ sở dữ liệu**<br>Optimizes query performance, schema design, Row-Level Security (RLS) policies, indexes, and migrations.<br>*Tối ưu hóa hiệu năng truy vấn, thiết kế bảng dữ liệu, chính sách Row-Level Security (RLS), chỉ mục và migration.* |
| **`build-error-resolver`**| **Compilation Fixer / Chuyên gia xử lý lỗi build**<br>Diagnoses and resolves TypeScript and compilation errors surgically with minimal diffs to make the build green quickly.<br>*Chẩn đoán và khắc phục nhanh các lỗi TypeScript và lỗi biên dịch hệ thống với thay đổi tối giản nhất.* |
| **`performance-optimizer`**| **Optimization Specialist / Chuyên gia hiệu năng**<br>Identifies memory leaks, reduces JS bundle sizes, optimizes React rendering, and analyzes time complexity (O(n)).<br>*Tìm kiếm rò rỉ bộ nhớ, giảm dung lượng bundle JS, tối ưu hóa render React, và phân tích độ phức tạp thuật toán.* |
| **`typescript-reviewer`**| **TypeScript Reviewer / Chuyên gia đánh giá TypeScript**<br>Ensures absolute type-safety, correct asynchronous patterns, and proper boundary schema validations (Zod/Zitadel).<br>*Đảm bảo an toàn kiểu dữ liệu tuyệt đối, các mẫu bất đồng bộ chính xác và kiểm chuẩn biên dữ liệu.* |
| **`python-reviewer`** | **Python Reviewer / Chuyên gia đánh giá Python**<br>Enforces PEP 8 styling, correct type hinting, exception handling, and framework-specific patterns (FastAPI/Django).<br>*Đảm bảo chuẩn PEP 8, gợi ý kiểu dữ liệu chuẩn, xử lý ngoại lệ và các mẫu đặc thù của FastAPI/Django.* |
| **`loop-operator`** | **Autonomous Loop Runner / Chuyên gia vận hành vòng lặp**<br>Safely manages autonomous iteration loops, monitors progress checkpoints, and intervenes to prevent infinite loops.<br>*Quản lý an toàn các vòng lặp thực thi tự động, giám sát chặng tiến trình và can thiệp để tránh lặp vô hạn.* |
| **`doc-updater`** | **Documentation Specialist / Chuyên gia cập nhật tài liệu**<br>Generates architectural codemaps, refreshes READMEs/Guides directly from AST analysis of the codebase.<br>*Tự động tạo sơ đồ kiến trúc (codemap), cập nhật README/Hướng dẫn trực tiếp từ phân tích cú pháp mã nguồn.* |

---

## ⚡ Slash Command Shims / Hướng Dẫn Sử Dụng Lệnh Nhanh

Since Antigravity runs locally on macOS, you can type these slash commands in the chat interface. The parent agent will interpret them using the converted expert rules.
Vì Antigravity chạy cục bộ trên macOS, bạn có thể nhập các lệnh slash này ngay trong hộp chat. Agent cha sẽ tự động diễn dịch chúng bằng các quy tắc chuyên gia đã chuyển đổi.

### 1. `/plan` — Lập kế hoạch triển khai
- **English**: Assess requirements, check codebase conventions, identify risks, and write a structured implementation plan. Wait for user approval before writing code.
- **Tiếng Việt**: Đánh giá yêu cầu, kiểm tra các quy chuẩn sẵn có trong codebase, xác định rủi ro và lập bản kế hoạch chi tiết. Chờ người dùng duyệt trước khi sửa code.
- **Example / Ví dụ**: `/plan Thêm tính năng đăng nhập bằng Google OAuth sử dụng profile Chrome cục bộ`

### 2. `/tdd` — Phát triển hướng kiểm thử
- **English**: Delegate to the `tdd-guide` subagent to write a failing test first, make it pass with minimal code, and then refactor safely.
- **Tiếng Việt**: Ủy thác cho subagent `tdd-guide` viết test trước, viết code tối giản để vượt qua test, sau đó tối ưu hóa mã nguồn an toàn.
- **Example / Ví dụ**: `/tdd Tạo function xử lý ghi đè bộ nhớ đệm trong local_brain.db`

### 3. `/build-fix` — Sửa lỗi biên dịch nhanh
- **English**: Trigger `build-error-resolver` to run `tsc` or native compiler, isolate build failures, and apply surgical fixes.
- **Tiếng Việt**: Kích hoạt `build-error-resolver` chạy `tsc` hoặc trình biên dịch, cô lập lỗi và sửa đổi gọn gàng nhất có thể.
- **Example / Ví dụ**: `/build-fix Sửa lỗi kiểu dữ liệu implicitly has any type trong controller`

### 4. `/code-review` — Đánh giá mã nguồn tổng thể
- **English**: Perform a comprehensive code quality and security review on your latest git changes, using strict confidence filters.
- **Tiếng Việt**: Đánh giá chất lượng và bảo mật toàn diện trên các thay đổi git mới nhất, áp dụng bộ lọc giảm thiểu cảnh báo giả.
- **Example / Ví dụ**: `/code-review Đánh giá thay đổi trên nhánh hiện tại trước khi tạo Pull Request`

### 5. `/security-scan` — Quét bảo mật chuyên sâu
- **English**: Run localized npm audits and call `security-reviewer` to scan code for secrets, SQL injection, XSS, and unvalidated paths.
- **Tiếng Việt**: Chạy quét npm audit cục bộ và gọi `security-reviewer` tìm khóa bí mật, lỗi SQL injection, XSS, và đường dẫn không an toàn.
- **Example / Ví dụ**: `/security-scan Kiểm tra an toàn cho controller upload file`

### 6. `/update-docs` — Tự động cập nhật tài liệu
- **English**: Invoke the `doc-updater` to crawl file changes, generate fresh codemaps under `docs/CODEMAPS/`, and refresh project index guides.
- **Tiếng Việt**: Gọi `doc-updater` để quét các thay đổi file, tạo sơ đồ codemap mới dưới `docs/CODEMAPS/` và cập nhật chỉ mục dự án.
- **Example / Ví dụ**: `/update-docs Cập nhật sơ đồ kiến trúc sau khi tổ chức lại thư mục controllers`

---

## 🛡️ Guardrails & Guidelines / Quy Tắc Bảo Vệ Hệ Thống
1. **Local-First macOS Operation**: All commands run directly on your Mac. No Docker containers are spawned, keeping your system lightweight and clean.
2. **Token Economy**: Every system prompt enforces the **Token Optimization Rule**, requesting dense, direct, non-verbose code edits to minimize API costs.
3. **Session Synchronization**: Before stopping any major run, subagents write their progress logs to [agent_memory.md](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/agent_memory.md) to ensure context continuity.

1. **Vận hành Cục bộ trên macOS**: Tất cả các lệnh đều chạy trực tiếp trên máy Mac của bạn. Không dùng Docker, giữ cho hệ thống luôn sạch sẽ và nhẹ nhàng.
2. **Tiết kiệm Token**: Từng system prompt đều cài cắm **Quy tắc Tối ưu Token**, yêu cầu phản hồi súc tích, sửa đổi code trực tiếp, tránh giải thích dông dài để tiết kiệm chi phí API.
3. **Đồng bộ hóa Phiên**: Trước khi kết thúc phiên làm việc, các subagent sẽ lưu lại nhật ký tiến độ vào [agent_memory.md](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/agent_memory.md) để đảm bảo tính liên tục của ngữ cảnh.
