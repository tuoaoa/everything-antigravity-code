# 🚀 Toàn bộ kho vũ khí Multi-Agent cho Antigravity (Đã hiệu chỉnh & Tối ưu)

Chào mừng bạn đến với kho vũ khí Multi-Agent thế hệ mới dành riêng cho trợ lý lập trình **Antigravity**. Hệ thống này đã được chuyển đổi, tối ưu hóa và kích hoạt trực tiếp trên môi trường máy Mac (Local-first, không dùng Docker), giúp nâng cấp Antigravity từ một trợ lý đơn lẻ thành một lực lượng cộng tác gồm **12 chuyên gia subagent** và bộ phím tắt **Slash Commands** siêu tốc.

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

## ⚡ Cẩm Nang Slash Commands (Phím Tắt Nhanh)

Bạn có thể gõ trực tiếp các lệnh slash này trong ô chat với Antigravity. Trợ lý cha sẽ tự động áp dụng tập quy tắc chuyên môn tương ứng:

*   **`/plan [mô tả tính năng]`**: Lập kế hoạch triển khai chi tiết từng bước. Antigravity sẽ dừng lại chờ bạn duyệt (Approve) trước khi sửa bất kỳ dòng code nào.
*   **`/tdd [tính năng]`**: Triệu hồi chuyên gia TDD để viết file test trước, sau đó xây dựng code tối giản đáp ứng test.
*   **`/build-fix`**: Tự động chạy lệnh biên dịch hệ thống, cô lập lỗi kiểu dữ liệu và tự động sửa các lỗi build TypeScript/Node.
*   **`/code-review`**: Đánh giá toàn diện thay đổi mã nguồn mới nhất trên Git của bạn với bộ lọc chống spam cảnh báo giả.
*   **`/security-scan`**: Chạy quét kiểm tra an ninh hệ thống, tìm lỗ hổng tiêm nhiễm (Injection) hoặc lộ API Key.
*   **`/update-docs`**: Quét toàn bộ thay đổi file, tái lập sơ đồ codemap mới nhất tại `docs/CODEMAPS/` và cập nhật chỉ dẫn.

---

## 📂 Sơ Đồ Cấu Trúc File
*   **Mã nguồn gốc ECC:** [scratch/everything-claude-code/](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/everything-claude-code)
*   **Trình chuyển đổi tự động:** [scratch/convert_ecc.js](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/convert_ecc.js)
*   **Sổ đăng ký chuyên gia:** [scratch/expert_registry.json](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/expert_registry.json)
*   **Danh sách Spec đã dịch:** [scratch/converted_agents/](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/converted_agents/)
*   **Sổ nhật ký ký ức:** [scratch/agent_memory.md](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/agent_memory.md)
*   **Cẩm nang Slash Commands song ngữ:** [scratch/slash_commands_manual.md](file:///Users/tuoaoa/Tuoaoa/devflow/aimemory/scratch/slash_commands_manual.md)

---

## 🚀 Cách Chia Sẻ Lên GitHub Mới Của Bạn

Để chia sẻ toàn bộ thư mục `scratch` đã tối ưu này lên kho chứa GitHub mới của bạn, hãy thực hiện các bước sau:

1.  **Tạo một Repository mới trên GitHub** (ví dụ: `everything-antigravity-code`).
2.  **Mở Terminal tại thư mục dự án và chạy các lệnh sau:**
    ```bash
    # Thêm remote mới trỏ về repo GitHub của bạn
    git remote add origin-antigravity-code https://github.com/TÀI_KHOẢN_CỦA_BẠN/TÊN_REPO.git
    
    # Push code lên kho chứa mới
    git push -u origin-antigravity-code main
    ```

Hãy lan tỏa giá trị này cho anh em dev đam mê tối ưu hóa AI coding! Chúc bạn lập trình vui vẻ!
