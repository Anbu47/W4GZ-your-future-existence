# W4GZ — Your Future Existence

**Bạn có thể bị AI thay thế? / Could AI replace you?**

Một quiz của *Writing for Gen Z* (W4GZ), dựa trên 13 kỹ năng của **WEF Future of Jobs Report 2025**.

- **26 câu hỏi** — mỗi kỹ năng 2 câu, mỗi câu 8 đáp án (4 kiểu "máy", 4 kiểu "người"), thứ tự đáp án được xáo trộn.
- **26 bài kiểm tra kỹ năng** — mỗi kỹ năng 2 bài, xen giữa các câu hỏi. Người chơi không được báo đáp án đúng; kết quả chỉ cộng vào điểm kỹ năng.
- **Kết quả:** độ khó thay thế (0–100%), nhóm lợi thế mạnh nhất (Công nghệ · Tư duy · Bản thân · Con người · Trái đất), 13 thanh kỹ năng, một gợi ý cho kỹ năng yếu nhất, và thẻ giới thiệu W4GZ.

Tiếng Việt là ngôn ngữ mặc định. Bản tiếng Anh cho câu hỏi và bài kiểm tra mới đang được bổ sung.

*Create narratives worth living* — [www.w4gz.com](https://www.w4gz.com)

## The 13 WEF skills

AI & dữ liệu lớn · Mạng & an ninh mạng · Hiểu biết công nghệ · Tư duy phân tích · Tư duy sáng tạo · Linh hoạt & bền bỉ · Tò mò & học suốt đời · Động lực & tự nhận thức · Lãnh đạo & ảnh hưởng xã hội · Phát triển người khác · Thấu cảm & lắng nghe · Định hướng phục vụ · Bảo vệ môi trường

## Files

| File | What to edit there |
| --- | --- |
| `data/questions.js` | The 26 questions, answers and the points each answer gives |
| `data/challenges.js` | The 26 skill tests and their correct answers |
| `data/results.js` | The 13 skills, the 5 groups (result types), growth tips |
| `data/settings.js` | Default language and the score bands |
| `data/sources.js` | Research sources shown on the result page |
| `index.html`, `style.css`, `app.js` | Page layout, W4GZ look and quiz engine |

No build step. Open `index.html` in a browser, or turn on GitHub Pages (Settings → Pages → Deploy from branch, folder `/`).

## Sources

- World Economic Forum — [Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/)
- ILO — Generative AI and Jobs: A Refined Global Index (2025)
- Microsoft Research — Working with AI (2025)
- Frey & Osborne — The Future of Employment (Oxford, 2013)
