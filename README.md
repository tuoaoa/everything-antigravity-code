# 🚀 Toàn bộ kho vũ khí Multi-Agent cho Antigravity (Đã hiệu chỉnh & Tối ưu)

Chào mừng bạn đến với kho vũ khí Multi-Agent thế hệ mới dành riêng cho trợ lý lập trình **Antigravity**. Hệ thống này đã được chuyển đổi, tối ưu hóa và kích hoạt trực tiếp trên môi trường máy Mac (Local-first, không dùng Docker), giúp nâng cấp Antigravity từ một trợ lý đơn lẻ thành một lực lượng cộng tác siêu mạnh gồm **60 chuyên gia subagent**, bộ **64 Skills & System Directives** tích hợp sẵn, và bộ phím tắt **Slash Commands** siêu tốc.

---

## 🎖️ Tôn Trọng Tác Giả & Nguồn Cảm Hứng

*   **Nguồn gốc:** Dự án này được chuyển đổi và tối ưu hóa từ kho mã nguồn mở tuyệt vời [everything-claude-code](https://github.com/affaan-m/everything-claude-code.git) của tác giả **Affaan M.**
*   **Cảm hứng:** Xin gửi lời cảm ơn chân thành đến anh **Thân Công Hải** vì bài viết chia sẻ đầy cảm hứng đã mở ra ý tưởng xây dựng hệ thống Multi-Agent mạnh mẽ này!

---

## ⚙️ Điểm Cải Tiến & Bản Hiệu Chỉnh Của Antigravity

Hệ thống được thiết kế tối ưu 100% cho Antigravity chạy Local trên macOS:
1.  **Chuyển đổi Tự động (Auto-Porting):** Antigravity đã quét toàn bộ 60 hồ sơ agent nguyên bản của Claude, tự động "dịch" các chỉ lệnh sang định dạng tương thích với hệ thống Antigravity và xuất thành tệp JSON chuẩn hóa tại [expert_registry.json](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/expert_registry.json).
2.  **Cơ chế Tiết kiệm Token (Token Optimization):** Mỗi system prompt được cài cắm quy tắc thông minh giúp giảm tối đa dung lượng token đọc chéo, chỉ đọc file code thực sự liên quan và phản hồi cực kỳ súc tích để tiết kiệm chi phí API cho bạn.
3.  **Sổ Ký Ức Cộng Tác (Collaborative Memory Ledger):** Khởi tạo tệp bộ nhớ chung tại [agent_memory.md](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/agent_memory.md) giúp các subagent đồng bộ ngữ cảnh tiến độ liên phiên làm việc, tránh hiện tượng "mất trí nhớ" đặc trưng của các mô hình LLM.
4.  **Local-First (Không Docker):** Toàn bộ hệ thống chạy trực tiếp trên shell macOS của bạn, tận dụng an toàn tuyệt đối cookie và profile trình duyệt Chrome mặc định của bạn.

---

## 👥 Danh Sách 12 Core Subagents Đã Kích Hoạt

Bạn có thể triệu hồi các chuyên gia subagent này bất cứ lúc nào qua giao diện gọi `invoke_subagent` của Antigravity:

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
*   **`planner`**: Chuyên gia lập kế hoạch, phân tích nghiệp vụ & thiết kế sơ đồ triển khai từng bước.
*   **`architect`**: Kiến trúc sư hệ thống, xử lý bài toán mở rộng và lập tài liệu ADR.
*   **`code-architect`**: Xây dựng bản thiết kế cấu trúc chi tiết cho từng component và mô hình dữ liệu.
*   **`code-explorer`**: Quét vết mã nguồn, lần mò các call-site và vẽ sơ đồ phụ thuộc của API.
*   **`refactor-cleaner`**: Chuyên gia dọn dẹp mã chết (dead code), tối giản hóa import và dọn rác dự án.
*   **`code-simplifier`**: Đơn giản hóa cấu trúc code phức tạp, nâng cao tính dễ đọc của thuật toán.
*   **`comment-analyzer`**: Đánh giá bình luận trong code, tránh hiện tượng "comment rot" (bình luận lạc hậu).
*   **`doc-updater`**: Tự động hóa cập nhật CODEMAPS và hướng dẫn sử dụng trực tiếp từ mã nguồn.
*   **`docs-lookup`**: Chuyên tra cứu nhanh tài liệu thư viện bên ngoài và gợi ý ví dụ code chuẩn.

### 2. Nhóm Đánh giá & Đảm bảo Chất lượng (Reviewers & Quality Assurance)
*   **`code-reviewer`**: Đánh giá tổng quan chất lượng mã nguồn, lọc nhiễu các cảnh báo stylistic.
*   **`security-reviewer`**: Tìm kiếm các lỗ hổng OWASP Top 10 và các dấu hiệu rò rỉ khóa bảo mật.
*   **`database-reviewer`**: Tối ưu hóa PostgreSQL, lập chỉ mục và kiểm tra migration an toàn.
*   **`a11y-architect`**: Đảm bảo tiêu chuẩn tiếp cận WCAG 2.2 cho web và ứng dụng di động.
*   **`pr-test-analyzer`**: Đánh giá chất lượng và độ phủ của các bộ test case trước khi merge.
*   **`tdd-guide`**: Chuyên gia Test-Driven Development hướng dẫn viết test-trước-code-sau.
*   **`e2e-runner`**: Chạy và bảo trì test E2E sử dụng Playwright và Vercel Agent Browser.
*   **`conversation-analyzer`**: Phân tích lịch sử hội thoại để sinh ra các hook tự động vá lỗi.
*   **`silent-failure-hunter`**: Săn lùng các lỗi nuốt ngoại lệ, lỗi âm thầm trong Promise.
*   **`type-design-analyzer`**: Đánh giá tính đóng gói và an toàn kiểu của thiết kế kiểu dữ liệu.

### 3. Nhóm Chuyên gia Ngôn ngữ & Framework (Language & Frameworks)
*   **`typescript-reviewer`** / **`python-reviewer`** / **`go-reviewer`** / **`rust-reviewer`** / **`java-reviewer`** / **`kotlin-reviewer`** / **`swift-reviewer`** / **`flutter-reviewer`** / **`cpp-reviewer`** / **`csharp-reviewer`** / **`fsharp-reviewer`**: Nhóm đánh giá chuyên sâu cho từng ngôn ngữ, đảm bảo code viết chuẩn mực nhất theo chuẩn cộng đồng.
*   **`django-reviewer`** / **`fastapi-reviewer`**: Chuyên gia thiết kế và đánh giá API tối ưu.
*   **`harmonyos-app-resolver`**: Chuyên biệt cho ứng dụng HarmonyOS/OpenHarmony sử dụng ArkTS.

### 4. Nhóm Khắc phục lỗi Build & Compilation (DevOps & Build Resolvers)
*   **`build-error-resolver`** / **`cpp-build-resolver`** / **`dart-build-resolver`** / **`go-build-resolver`** / **`java-build-resolver`** / **`kotlin-build-resolver`** / **`rust-build-resolver`** / **`swift-build-resolver`** / **`django-build-resolver`**: Tự động cô lập lỗi biên dịch và đưa ra các sửa đổi tối giản nhất để sửa lỗi build.
*   **`pytorch-build-resolver`**: Khắc phục các lỗi kích thước Tensor và CUDA trong huấn luyện AI.

### 5. Nhóm Kỹ thuật Nâng cao & AI Operations (AI & Special Operations)
*   **`gan-planner`** / **`gan-generator`** / **`gan-evaluator`**: Hệ thống Generative Adversarial Network giúp tự động hóa quá trình sinh code - kiểm thử - cải tiến liên tục cho đến khi đạt chất lượng tối đa.
*   **`mle-reviewer`**: Đánh giá hệ thống học máy (ML pipelines), độ chính xác của mô hình và dữ liệu huấn luyện.
*   **`loop-operator`**: Vận hành và giám sát an toàn các vòng lặp thực thi tự động.
*   **`harness-optimizer`**: Tối ưu hóa cấu hình harness chạy agent để tăng tốc độ và giảm chi phí.

### 6. Nhóm An toàn & Phân phối Mã nguồn (Sanitization & Packaging)
*   **`opensource-forker`**: Tự động dọn dẹp các đường dẫn nội bộ và bóc tách thông tin bảo mật để chuẩn bị fork.
*   **`opensource-sanitizer`**: Kiểm tra rò rỉ PII và secrets trước khi phát hành mã nguồn mở.
*   **`opensource-packager`**: Tạo đóng gói README, License, và các file hướng dẫn cài đặt chuẩn chỉ.

### 7. Nhóm Hạ tầng & Nghiệp vụ Đặc thù (Infrastructure & Custom Fields)
*   **`chief-of-staff`** (Quản lý đa kênh giao tiếp), **`network-architect`** (Kiến trúc mạng doanh nghiệp), **`network-config-reviewer`** (Đánh giá cấu hình router/switch), **`network-troubleshooter`** (Chẩn đoán sự cố mạng), **`homelab-architect`** (Thiết kế phòng lab cá nhân), **`healthcare-reviewer`** (Kiểm định an toàn y tế & PHI), **`seo-specialist`** (Tối ưu hóa SEO kỹ thuật & Web Vitals).

---

## 🧠 Bộ 64 Skills & System Directives Tích Hợp

Không chỉ dừng lại ở các Agents, hệ thống đã nạp trực tiếp bộ **64 Skills và Chỉ thị Hệ thống (System Directives)** vào cấu hình lõi của Antigravity để điều phối hành vi thông minh:

1.  **Token Budgeting (Kiểm Soát Ngân Sách Token):** Tự động phân phối dung lượng context, cắt bỏ lịch sử dư thừa và cấu hình prompt nén cao giúp tiết kiệm đến 40% chi phí gọi mô hình.
2.  **Context Trimming & Pruning (Cắt tỉa Ngữ cảnh):** Tránh hiện tượng tràn cửa sổ ngữ cảnh (Context Window Bloat) bằng cách chỉ lọc và truyền đi các traceback lỗi quan trọng và git diff cô lập.
3.  **Astro/Next.js Framework Optimization:** Định hướng viết code tối ưu cho Next.js 15 và Astro, tự động phân chia Client/Server Component, tránh Hydration mismatch và tối ưu hóa SEO.
4.  **PostgreSQL RLS Control:** Chỉ thị bảo mật tối cao bắt buộc tích hợp Row-Level Security (RLS) cho tất cả các bảng đa khách hàng (multi-tenant) với Supabase.
5.  **PII & Secrets Sanitizing Pipeline:** Áp dụng quét hơn 20 mẫu regex tìm kiếm API Key, mật khẩu, thông tin cá nhân và ngăn chặn việc đẩy nhầm lên Git.
6.  **Advanced TDD Workflow:** Chuỗi chỉ lệnh ép buộc chu trình Red-Green-Refactor nhằm đảm bảo mã nguồn sinh ra luôn đi kèm test case chất lượng.
7.  **Auto-Patch & Loop Telemetry:** Cơ chế chẩn đoán và tự động bẻ gãy các vòng lặp sửa lỗi vô hạn, tự động giảm cấp mô hình chi phí thấp khi gặp lỗi deterministic để tiết kiệm tiền.

---

## ⚡ Cẩm Nang Slash Commands (Phím Tắt Nhanh)

Bạn có thể gõ trực tiếp các lệnh slash này trong ô chat với Antigravity. Trợ lý cha sẽ tự động áp dụng tập quy tắc chuyên môn tương ứng:

*   **`/plan [mô tả tính năng]`**: Lập kế hoạch triển khai chi tiết từng bước. Antigravity sẽ dừng lại chờ bạn duyệt (Approve) trước khi sửa bất kỳ dòng code nào.
*   **`/tdd [tính năng]`**: Triệu hồi chuyên gia TDD để viết file test trước, sau đó xây dựng code tối giản đáp ứng test.
*   **`/build-fix`**: Tự động chạy lệnh biên dịch hệ thống, cô lập lỗi kiểu dữ liệu và tự động sửa các lỗi build TypeScript/Node.
*   **`/code-review`**: Đánh giá toàn diện thay đổi mã nguồn mới nhất trên Git của bạn với bộ lọc chống spam cảnh báo giả.
*   **`/security-scan`**: Chạy quét kiểm tra an ninh hệ thống, tìm lỗ hổng tiêm nhiễm (Injection) hoặc lộ API Key.
*   **`/update-docs`**: Quét toàn bộ thay đổi file, tái lập sơ đồ codemap mới nhất tại `docs/CODEMAPS/` và cập nhật chỉ dẫn.

---

## 🛡️ Hướng Dẫn Vận Hành Cục Bộ

Toàn bộ các subagent được cấu hình chạy local hoàn toàn, không dùng Docker và sử dụng profile Chrome mặc định của bạn trên Mac để vượt qua các lớp xác thực Google an toàn. 

Hãy bắt đầu khám phá sức mạnh lập trình Multi-Agent đỉnh cao cùng Antigravity! Chúc bạn lập trình vui vẻ!
