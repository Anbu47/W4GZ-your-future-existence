// W4GZ — Your Future Existence: settings you can edit.
window.SETTINGS = {
  defaultLang: "vi",           // "vi" or "en"
  brand: "Writing for gen Z",
  slogan: "Create narratives worth living", // stays in English in both languages
  website: "https://www.w4gz.com",

  // Score bands (overall "human edge" %, 0–100). Checked from top to bottom.
  bands: [
    {
      min: 70,
      title: { vi: "Rất khó bị thay thế", en: "Very hard to replace" },
      text: {
        vi: "Những gì bạn mang lại — góc nhìn, sự thấu cảm, phán đoán — là thứ AI chưa thể sao chép. Hãy tiếp tục nuôi dưỡng chúng.",
        en: "What you bring — perspective, empathy, judgment — is something AI can't copy yet. Keep growing it."
      }
    },
    {
      min: 40,
      title: { vi: "Bạn và AI sẽ là đồng đội", en: "You and AI will be teammates" },
      text: {
        vi: "AI có thể làm một phần việc của bạn, nhưng bạn giữ phần quan trọng nhất. Biết dùng AI đúng lúc sẽ khiến bạn mạnh hơn.",
        en: "AI could take part of your work, but you keep the most important part. Using AI at the right moments makes you stronger."
      }
    },
    {
      min: 0,
      title: { vi: "AI có thể làm thay bạn — ở thời điểm này", en: "AI could do this for you — for now" },
      text: {
        vi: "Tin tốt: những kỹ năng khó thay thế nhất đều học được. Bắt đầu từ một điều nhỏ trong gợi ý bên dưới nhé.",
        en: "Good news: the hardest-to-replace skills can all be learned. Start with one small step from the tips below."
      }
    }
  ]
};
