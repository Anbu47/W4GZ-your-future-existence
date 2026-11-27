# W4GZ — Your Future Existence

**Bạn có thể bị AI thay thế? / Could AI replace you?**

Một quiz 12 câu của *Writing for gen Z* (W4GZ). Người chơi trả lời cùng một bộ câu hỏi theo thứ tự cố định và nhận được:

- **Độ khó thay thế** (0–100%), hiển thị trên thanh từ "Máy" đến "Con người"
- **Kiểu người** dựa trên "lợi thế con người" mạnh nhất: Sáng tạo, Thấu cảm, Phán đoán, Thích nghi, Tiếng nói riêng
- **Một gợi ý để phát triển** cho lợi thế yếu nhất

Tiếng Việt là ngôn ngữ mặc định, có nút chuyển sang tiếng Anh.

*Create narratives worth living* — www.w4gz.com

## Files

| File | What to edit there |
| --- | --- |
| `data/questions.js` | Questions, answers and the points each answer gives |
| `data/results.js` | The five edges: names, result types, descriptions, growth tips |
| `data/settings.js` | Default language and the score bands (titles and texts) |
| `index.html`, `style.css`, `app.js` | Page layout, look and quiz engine |

No build step. Open `index.html` in a browser, or turn on GitHub Pages (Settings → Pages → Deploy from branch `main`, folder `/`).
