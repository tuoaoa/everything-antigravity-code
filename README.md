# 🚀 Toàn bộ kho vũ khí Multi-Agent cho Antigravity, OpenClaw & Hermes (Đã hiệu chỉnh & Tối ưu)

Chào mừng bạn đến với kho vũ khí Multi-Agent thế hệ mới dành riêng cho các trợ lý lập trình tiên tiến: **Antigravity**, **OpenClaw** và **Hermes (Ollama/OpenRouter)**. Hệ thống này đã được chuyển đổi, tối ưu hóa và kích hoạt trực tiếp trên môi trường máy Mac (Local-first, không dùng Docker), cung cấp bộ giải pháp **3-trong-1** tích hợp toàn bộ **60 chuyên gia subagent** và **64 Skills & System Directives** tối ưu.

---

## 🎖️ Tôn Trọng Tác Giả & Nguồn Cảm Hứng

*   **Nguồn gốc:** Dự án này được chuyển đổi và tối ưu hóa từ kho mã nguồn mở tuyệt vời [everything-claude-code](https://github.com/affaan-m/everything-claude-code.git) của tác giả **Affaan M.**
*   **Cảm hứng:** Xin gửi lời cảm ơn chân thành đến anh **Thân Công Hải** vì bài viết chia sẻ đầy cảm hứng đã mở ra ý tưởng xây dựng hệ thống Multi-Agent mạnh mẽ này!

---

## ⚙️ Điểm Cải Tiến & Bản Hiệu Chỉnh 3-Trong-1

Hệ thống được thiết kế tối ưu 100% cho việc chạy Local-first trên macOS:
1.  **Chuyển đổi Đa nền tảng (Multi-Platform Porting):**
    *   **Antigravity JSON Specs:** Tự động biên dịch sang định dạng subagent tương thích thông qua `define_subagent`.
    *   **OpenClaw YAML/JSON Schema:** Đóng gói hoàn chỉnh thành cấu hình ClawdBot tại thư mục `openclaw_config/`.
    *   **Hermes ChatML Directives:** Định dạng lại prompts sang chuẩn ChatML của local LLM, chống loạn vai diễn và ổn định Function Calling.
2.  **Cơ chế Tiết kiệm Token (Token Optimization):** Mỗi prompt được cài cắm quy tắc thông minh giúp giảm tối đa dung lượng token đọc chéo, chỉ đọc file code thực sự liên quan và phản hồi cực kỳ súc tích.
3.  **Sổ Ký Ức Cộng Tác (Collaborative Memory Ledger):** Tích hợp sổ nhật ký `agent_memory.md` để đồng bộ ngữ cảnh tiến độ liên phiên, ngăn chặn hiện tượng mất trí nhớ của AI.

---

## 👥 Danh Sách 12 Core Subagents Đã Kích Hoạt

Bạn có thể triệu hồi các chuyên gia subagent này bất cứ lúc nào qua giao diện gọi subagent của hệ thống:

| Chuyên Gia Subagent | Vai Trò & Nhiệm Vụ |
| :--- | :--- |
| **`planner`** | Lập kế hoạch chi tiết từng bước cho các tính năng phức tạp trước khi viết code. |
| **`architect`** | Kiến trúc sư thiết kế hệ thống module, quản lý hồ sơ quyết định kiến trúc (ADRs). |
| **`tdd-guide`** | Dẫn dắt chu trình phát triển hướng kiểm thử (Red-Green-Refactor) đảm bảo test coverage >80%. |
| **`code-reviewer`** | Đánh giá tổng thể chất lượng mã nguồn, kiểm chuẩn độ sạch và tuân thủ quy tắc dự án. |
| **`security-reviewer`** | Quét lỗ hổng OWASP Top 10, phát hiện khóa bí mật (Secrets) và các đầu vào không an toàn. |
| **`database-reviewer`** | Chuyên gia PostgreSQL tối ưu truy vấn, thiết kế bảng dữ liệu và chính sách Row-Level Security (RLS). |
| **`build-error-resolver`** | Sửa nhanh các lỗi build, lỗi kiểu TypeScript với thay đổi dòng code tối giản nhất có thể. |
| **`performance-optimizer`** | Phân tích độ phức tạp thuật toán O(n), phát hiện rò rỉ bộ nhớ và tối ưu tốc độ render. |
| **`typescript-reviewer`** | Chuyên gia đánh giá kiểu dữ liệu TypeScript, xử lý đồng bộ/bất đồng bộ chuẩn. |
| **`python-reviewer`** | Kiểm soát quy tắc PEP 8, xử lý ngoại lệ và tối ưu framework FastAPI/Django. |
| **`loop-operator`** | Theo dõi và điều phối an toàn các vòng lặp tự động, can thiệp kịp thời nếu lặp vô hạn. |
| **`doc-updater`** | Tự động cập nhật sơ đồ kiến trúc (codemap) và tài liệu trực tiếp từ mã nguồn thông qua AST. |

---

## 📂 Danh Mục Mở Rộng 60 Chuyên Gia Multi-Agent (Đã Convert 100%)

Tất cả 60 agents đã được đóng gói thành công trong tệp [expert_registry.json](file:///Users/tuoaoa/Tuoaoa/devflow/everything-antigravity-code/expert_registry.json), phân loại theo các nhóm nghiệp vụ chuyên sâu:

### 1. Nhóm Phát triển & Lập kế hoạch Cốt lõi (Core Development & Planning)
*   `planner`, `architect`, `code-architect`, `code-explorer`, `refactor-cleaner`, `code-simplifier`, `comment-analyzer`, `doc-updater`, `docs-lookup`.

### 2. Nhóm Đánh giá & Đảm bảo Chất lượng (Reviewers & Quality Assurance)
*   `code-reviewer`, `security-reviewer`, `database-reviewer`, `a11y-architect`, `pr-test-analyzer`, `tdd-guide`, `e2e-runner`, `conversation-analyzer`, `silent-failure-hunter`, `type-design-analyzer`.

### 3. Nhóm Chuyên gia Ngôn ngữ & Framework (Language & Frameworks)
*   `typescript-reviewer`, `python-reviewer`, `go-reviewer`, `rust-reviewer`, `java-reviewer`, `kotlin-reviewer`, `swift-reviewer`, `flutter-reviewer`, `cpp-reviewer`, `csharp-reviewer`, `fsharp-reviewer`.
*   `django-reviewer`, `fastapi-reviewer`, `harmonyos-app-resolver` (ArkTS/ArkUI).

### 4. Nhóm Khắc phục lỗi Build & Compilation (DevOps & Build Resolvers)
*   `build-error-resolver`, `cpp-build-resolver`, `dart-build-resolver`, `go-build-resolver`, `java-build-resolver`, `kotlin-build-resolver`, `rust-build-resolver`, `swift-build-resolver`, `django-build-resolver`, `pytorch-build-resolver` (CUDA/Tensor).

### 5. Nhóm Kỹ thuật Nâng cao & AI Operations (AI & Special Operations)
*   `gan-planner`, `gan-generator`, `gan-evaluator`, `mle-reviewer` (ML pipelines), `loop-operator`, `harness-optimizer`.

### 6. Nhóm An toàn & Phân phối Mã nguồn (Sanitization & Packaging)
*   `opensource-forker`, `opensource-sanitizer`, `opensource-packager`.

### 7. Nhóm Hạ tầng & Nghiệp vụ Đặc thù (Infrastructure & Custom Fields)
*   `chief-of-staff`, `network-architect`, `network-config-reviewer`, `network-troubleshooter`, `homelab-architect`, `healthcare-reviewer`, `seo-specialist`.

---

## 🚀 Hướng Dẫn Cài Đặt & Sử Dụng Cho Từng Nền Tảng

### 1. Trợ Lý Antigravity (Local macOS)
*   **Cơ chế:** Đọc cấu hình subagent định dạng JSON trực tiếp tại thư mục [converted_agents/](file:///Users/tuoaoa/Tuoaoa/devflow/everything-antigravity-code/converted_agents/).
*   **Triệu hồi nhanh (Slash Commands):**
    *   `/plan [tính năng]`: Lập kế hoạch chi tiết, đợi phê duyệt mới chạy.
    *   `/tdd [tính năng]`: Viết kiểm thử trước, viết code sau.
    *   `/build-fix`: Cô lập lỗi TypeScript và biên dịch tự động.
    *   `/code-review`: Đánh giá chất lượng và độ an toàn Git diff.
    *   `/security-scan`: Quét lỗ hổng an ninh bảo mật và lộ API key.
    *   `/update-docs`: Tạo codemap hệ thống dưới dạng sơ đồ AST.

### 2. Trợ Lý OpenClaw (YAML/JSON Framework)
*   **Cơ chế:** Nạp các cấu hình Agent và Soul đã được chuẩn hóa tại thư mục [openclaw_config/agents/](file:///Users/tuoaoa/Tuoaoa/devflow/everything-antigravity-code/openclaw_config/agents/).
*   **Cài đặt:**
    1. Sao chép tệp cấu hình trong thư mục `openclaw_config/agents/` dán vào thư mục `agents/` trong mã nguồn OpenClaw của bạn.
    2. Cấu hình các lệnh Terminal nhanh bằng cách tích hợp tệp `openclaw_config/custom_commands.json` vào mục commands trong cấu hình của OpenClaw.
*   **Cách gọi lệnh:** Thực hiện gõ trực tiếp `/plan`, `/tdd`, `/build-fix` trên console của OpenClaw để kích hoạt các tool tự động.

### 3. Mô Hình Hermes (Ollama / OpenRouter / Local LLM)
*   **Cơ chế:** Sử dụng trực tiếp bộ thư viện prompt định dạng ChatML tại thư mục [hermes_prompts/agents/](file:///Users/tuoaoa/Tuoaoa/devflow/everything-antigravity-code/hermes_prompts/agents/).
*   **Đặc tính:** Được cấu trúc chặt chẽ bằng block `<|im_start|>system` và `<|im_end|>` kèm theo các guideline cô lập vai diễn, giúp mô hình Hermes hoạt động chính xác khi gọi hàm (Function Calling) mà không bị loạn vai.
*   **Cài đặt:**
    1. Copy nội dung tệp `.prompt` của Agent bạn muốn triệu hồi từ thư mục `hermes_prompts/agents/` dán vào phần **System Prompt / Modelfile** trong Ollama hoặc bảng điều khiển OpenRouter.
    2. Chạy kiểm thử để cảm nhận độ mượt mà và chính xác khi ra lệnh gọi hàm.

---

## 🧠 Bộ 64 Skills & System Directives Tích Hợp

Không chỉ dừng lại ở các Agents, hệ thống đã nạp trực tiếp bộ **64 Skills và Chỉ thị Hệ thống (System Directives)** vào cấu hình lõi để điều phối hành vi thông minh:

1.  **Token Budgeting (Kiểm Soát Ngân Sách Token):** Tự động phân phối dung lượng context, cắt bỏ lịch sử dư thừa và cấu hình prompt nén cao giúp tiết kiệm đến 40% chi phí gọi mô hình.
2.  **Context Trimming & Pruning (Cắt tỉa Ngữ cảnh):** Tránh hiện tượng tràn cửa sổ ngữ cảnh bằng cách chỉ lọc và truyền đi các traceback lỗi quan trọng và git diff cô lập.
3.  **Astro/Next.js Framework Optimization:** Định hướng viết code tối ưu cho Next.js 15 và Astro, tự động phân chia Client/Server Component, tránh Hydration mismatch và tối ưu hóa SEO.
4.  **PostgreSQL RLS Control:** Chỉ thị bảo mật tối cao bắt buộc tích hợp Row-Level Security (RLS) cho tất cả các bảng đa khách hàng với Supabase.
5.  **PII & Secrets Sanitizing Pipeline:** Áp dụng quét hơn 20 mẫu regex tìm kiếm API Key, mật khẩu, thông tin cá nhân và ngăn chặn việc đẩy nhầm lên Git.
6.  **Advanced TDD Workflow:** Chuỗi chỉ lệnh ép buộc chu trình Red-Green-Refactor nhằm đảm bảo mã nguồn sinh ra luôn đi kèm test case chất lượng.
7.  **Auto-Patch & Loop Telemetry:** Cơ chế chẩn đoán và tự động bẻ gãy các vòng lặp sửa lỗi vô hạn.

---

## ⚡ Chia Sẻ Cho Cộng Đồng
Hãy cùng lan tỏa giá trị này cho anh em dev đam mê tối ưu hóa AI coding! Chúc bạn lập trình vui vẻ!
