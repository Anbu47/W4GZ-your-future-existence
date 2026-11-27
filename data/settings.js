// W4GZ — Your Future Existence: settings you can edit.
window.SETTINGS = {
  defaultLang: "vi",           // "vi" or "en"

  // Who the quiz is for. Each button on the start screen picks one; questions and tests with an "aud" entry
  // use that audience's version (ids must match "grad" / "work" in data/questions.js and data/challenges.js).
  audiences: [
    { id: "grad", label: { vi: "Sinh viên mới ra trường", en: "New graduate" } },
    { id: "work", label: { vi: "Người đã đi làm", en: "Working professional" } }
  ],
  brand: "Writing for gen Z",
  slogan: "Create narratives worth living", // stays in English in both languages
  website: "https://www.w4gz.com",

  // Score bands (overall "human edge" %, 0–100). Checked from top to bottom.
  bands: [
    {
      min: 70,
      title: { vi: "Rất khó bị thay thế", en: "Very hard to replace" },
      text: {
        vi: "Công việc bạn muốn làm và kỹ năng bạn đang có khớp với những gì nghiên cứu cho là khó tự động hoá nhất. Hãy tiếp tục nuôi dưỡng chúng.",
        en: "The work you want and the skills you have match what research sees as hardest to automate. Keep growing them."
      }
    },
    {
      min: 40,
      title: { vi: "Bạn và AI sẽ là đồng đội", en: "You and AI will be teammates" },
      text: {
        vi: "Theo ILO, phần lớn công việc sẽ thay đổi chứ không biến mất. AI có thể làm một phần việc của bạn, còn bạn giữ phần quan trọng nhất.",
        en: "According to the ILO, most jobs will change rather than disappear. AI could take some of your tasks while you keep the most important part."
      }
    },
    {
      min: 0,
      title: { vi: "AI có thể làm thay bạn — ở thời điểm này", en: "AI could do this for you — for now" },
      text: {
        vi: "Nhiều lựa chọn của bạn giống các việc mà nghiên cứu cho là AI làm tốt: xử lý thông tin, giấy tờ, việc lặp lại. Tin tốt: những kỹ năng khó thay thế đều học được. Bắt đầu từ gợi ý bên dưới nhé.",
        en: "Many of your choices look like tasks research says AI does well: information, paperwork, repetition. Good news: hard-to-replace skills can all be learned. Start with the tip below."
      }
    }
  ]
};
