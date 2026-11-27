// The 13 skills of the WEF Future of Jobs Report 2025 (fastest-growing + core skills).
// Each skill gets 2 questions (data/questions.js) and 1 skill test (data/challenges.js).
// GROUPS decide the result type: your strongest group (average of its skills).
// Your growth tip comes from your weakest single skill.
window.DIMENSIONS = {
  ai:          { group: "tech",   label: { vi: "AI & dữ liệu lớn", en: "AI & big data" },
                 tip: { vi: "Dùng AI để học một điều mới, rồi tự kiểm tra lại câu trả lời từ một nguồn khác.", en: "Use AI to learn something new, then check its answer against another source." } },
  cyber:       { group: "tech",   label: { vi: "Mạng & an ninh mạng", en: "Networks & cybersecurity" },
                 tip: { vi: "Bật xác thực hai lớp cho tài khoản quan trọng và dùng mật khẩu khác nhau cho mỗi tài khoản.", en: "Turn on two-factor sign-in for important accounts and use a different password for each." } },
  techlit:     { group: "tech",   label: { vi: "Hiểu biết công nghệ", en: "Technological literacy" },
                 tip: { vi: "Mỗi tháng học dùng thành thạo một công cụ mới: bảng tính, dựng video, làm web.", en: "Each month, get good at one new tool: spreadsheets, video editing, web building." } },
  analytic:    { group: "think",  label: { vi: "Tư duy phân tích", en: "Analytical thinking" },
                 tip: { vi: "Trước khi tin một con số, hỏi: ai đo, đo bao nhiêu người, đo bằng cách nào?", en: "Before trusting a number, ask: who measured it, how many people, and how?" } },
  creative:    { group: "think",  label: { vi: "Tư duy sáng tạo", en: "Creative thinking" },
                 tip: { vi: "Mỗi tuần làm ra một thứ nhỏ của riêng bạn: một câu chuyện từ trải nghiệm thật, một bức vẽ, một món đồ tự chế.", en: "Each week, make one small thing of your own: a story from real life, a sketch, something you build." } },
  resilience:  { group: "self",   label: { vi: "Linh hoạt & bền bỉ", en: "Resilience, flexibility & agility" },
                 tip: { vi: "Khi thất bại, viết ra một điều bạn học được rồi thử lại theo cách khác.", en: "When you fail, write down one thing you learned and try again a different way." } },
  curiosity:   { group: "self",   label: { vi: "Tò mò & học suốt đời", en: "Curiosity & lifelong learning" },
                 tip: { vi: "Giữ một danh sách \"những điều mình muốn biết\" và tìm hiểu một điều mỗi tuần.", en: "Keep a \"things I want to know\" list and look into one each week." } },
  motivation:  { group: "self",   label: { vi: "Động lực & tự nhận thức", en: "Motivation & self-awareness" },
                 tip: { vi: "Đặt một mục tiêu nhỏ cho tuần này và cuối tuần tự hỏi: mình làm được gì, vì sao?", en: "Set one small goal this week and at the end ask yourself: what did I do, and why?" } },
  leadership:  { group: "people", label: { vi: "Lãnh đạo & ảnh hưởng xã hội", en: "Leadership & social influence" },
                 tip: { vi: "Lần tới khi nhóm bế tắc, thử đứng ra tóm tắt các ý kiến và đề xuất bước tiếp theo.", en: "Next time your group is stuck, try summing up the views and proposing a next step." } },
  talent:      { group: "people", label: { vi: "Phát triển người khác", en: "Talent management" },
                 tip: { vi: "Chỉ cho một bạn một điều bạn giỏi — và để bạn ấy tự làm, đừng làm hộ.", en: "Teach a friend something you're good at — and let them do it, don't do it for them." } },
  empathy:     { group: "people", label: { vi: "Thấu cảm & lắng nghe", en: "Empathy & active listening" },
                 tip: { vi: "Lần tới khi ai đó kể chuyện, hãy hỏi thêm một câu trước khi đưa lời khuyên.", en: "Next time someone shares something, ask one more question before giving advice." } },
  service:     { group: "people", label: { vi: "Định hướng phục vụ", en: "Service orientation" },
                 tip: { vi: "Khi ai đó nhờ giúp, hỏi rõ họ thật sự cần gì trước khi làm.", en: "When someone asks for help, ask what they really need before you act." } },
  environment: { group: "earth",  label: { vi: "Bảo vệ môi trường", en: "Environmental stewardship" },
                 tip: { vi: "Chọn một thói quen xanh để giữ trong một tháng: bình nước riêng, phân loại rác, tắt điện khi ra ngoài.", en: "Pick one green habit to keep for a month: your own bottle, sorting rubbish, switching lights off." } }
};

window.GROUPS = {
  tech: {
    label: { vi: "Công nghệ", en: "Technology" },
    type: { vi: "Người Bắt Nhịp", en: "The Navigator" },
    about: { vi: "Bạn dùng công nghệ như một công cụ và biết tự bảo vệ mình trên mạng. WEF xếp AI & dữ liệu lớn, an ninh mạng và hiểu biết công nghệ là ba kỹ năng tăng nhanh nhất đến 2030.",
             en: "You use technology as a tool and know how to stay safe online. WEF ranks AI & big data, cybersecurity and tech literacy as the three fastest-growing skills to 2030." }
  },
  think: {
    label: { vi: "Tư duy", en: "Thinking" },
    type: { vi: "Người Kiến Tạo", en: "The Maker" },
    about: { vi: "Bạn biết phân tích vấn đề và nghĩ ra cái mới. Tư duy phân tích là kỹ năng cốt lõi số 1 theo WEF, còn sáng tạo là thứ máy móc khó bắt chước nhất.",
             en: "You analyse problems and come up with new ideas. Analytical thinking is WEF's number-one core skill, and creativity is one of the hardest things for machines to copy." }
  },
  self: {
    label: { vi: "Bản thân", en: "Self" },
    type: { vi: "Người Lướt Sóng", en: "The Surfer" },
    about: { vi: "Bạn bền bỉ, ham học và hiểu chính mình. Khi kỹ năng thay đổi nhanh, người biết tự học và đứng dậy sau thất bại sẽ luôn tìm được đường đi tiếp.",
             en: "You're resilient, eager to learn and know yourself. When skills change fast, people who teach themselves and bounce back always find a way forward." }
  },
  people: {
    label: { vi: "Con người", en: "People" },
    type: { vi: "Người Kết Nối", en: "The Connector" },
    about: { vi: "Bạn giỏi lắng nghe, dẫn dắt và giúp người khác lớn lên. WEF dự báo các nghề chăm sóc, giáo dục và quản lý sẽ tăng — đây là phần việc AI khó thay con người nhất.",
             en: "You listen, lead and help others grow. WEF expects care, education and management jobs to grow — the part of work AI finds hardest to take over." }
  },
  earth: {
    label: { vi: "Trái đất", en: "Planet" },
    type: { vi: "Người Giữ Xanh", en: "The Guardian" },
    about: { vi: "Bạn nghĩ đến hậu quả lâu dài cho môi trường. \"Bảo vệ môi trường\" lần đầu lọt vào top 10 kỹ năng tăng nhanh nhất của WEF, kéo theo các nghề như kỹ sư môi trường, kỹ sư năng lượng tái tạo.",
             en: "You think about long-term effects on the planet. Environmental stewardship entered WEF's top 10 fastest-growing skills for the first time, alongside jobs like environmental and renewable energy engineers." }
  }
};
