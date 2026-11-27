// Questions, shown to everyone in this order.
// Each option's "s" adds points to edges: create, heart, judge, adapt, story.
// An option with no points ({}) is the "a machine could do this" answer.
// Keep each option's total at 2 or less so the overall score stays fair.
window.QUESTIONS = [
  {
    q: { vi: "Thầy cô giao một bài tập mà ai cũng có thể hỏi AI ra đáp án. Bạn làm gì?",
         en: "Your teacher sets an assignment anyone could answer by asking AI. What do you do?" },
    o: [
      { t: { vi: "Hỏi AI, chép câu trả lời rồi nộp.", en: "Ask AI, copy the answer, hand it in." }, s: {} },
      { t: { vi: "Dùng AI làm bản nháp, rồi viết lại bằng giọng của mình.", en: "Use AI for a draft, then rewrite it in my own voice." }, s: { story: 2 } },
      { t: { vi: "Tìm một góc nhìn lạ mà AI chưa nghĩ tới.", en: "Look for an unusual angle AI wouldn't think of." }, s: { create: 2 } },
      { t: { vi: "Hỏi bạn bè hiểu đề thế nào rồi cùng bàn.", en: "Ask friends how they read it and discuss together." }, s: { heart: 1, adapt: 1 } }
    ]
  },
  {
    q: { vi: "Bạn thân của bạn buồn vì trượt một kỳ thi. Bạn…", en: "Your close friend is upset after failing an exam. You…" },
    o: [
      { t: { vi: "Gửi một link \"10 cách vượt qua thất bại\".", en: "Send a link to \"10 ways to get over failure\"." }, s: {} },
      { t: { vi: "Ngồi nghe bạn kể, không vội khuyên.", en: "Sit and listen, without rushing to give advice." }, s: { heart: 2 } },
      { t: { vi: "Kể về lần mình cũng từng thất bại.", en: "Tell them about a time you failed too." }, s: { story: 1, heart: 1 } },
      { t: { vi: "Rủ bạn làm một việc vui để đổi không khí.", en: "Invite them to do something fun for a change of mood." }, s: { create: 1, heart: 1 } }
    ]
  },
  {
    q: { vi: "Ứng dụng bạn dùng mỗi ngày bỗng thay đổi hoàn toàn.", en: "An app you use every day suddenly changes completely." },
    o: [
      { t: { vi: "Khó chịu và chờ người khác chỉ cách dùng.", en: "Get annoyed and wait for someone to show me." }, s: {} },
      { t: { vi: "Tự mày mò cho đến khi quen.", en: "Poke around until I get used to it." }, s: { adapt: 2 } },
      { t: { vi: "Tìm cách dùng nó cho việc mà nhà sản xuất chưa nghĩ tới.", en: "Find a use for it its makers never imagined." }, s: { create: 1, adapt: 1 } },
      { t: { vi: "Viết hướng dẫn ngắn cho những người còn bối rối.", en: "Write a short guide for people who are still confused." }, s: { story: 1, heart: 1 } }
    ]
  },
  {
    q: { vi: "Một AI đưa ra lời khuyên nghe rất hợp lý, nhưng bạn thấy \"sai sai\".", en: "An AI gives advice that sounds logical, but something feels off." },
    o: [
      { t: { vi: "Cứ làm theo, chắc AI biết hơn mình.", en: "Follow it — AI probably knows better." }, s: {} },
      { t: { vi: "Kiểm tra lại từ những nguồn khác.", en: "Check it against other sources." }, s: { judge: 2 } },
      { t: { vi: "Nghĩ xem lời khuyên đó sẽ ảnh hưởng đến ai.", en: "Think about who that advice would affect." }, s: { judge: 1, heart: 1 } },
      { t: { vi: "Hỏi lại AI theo vài cách khác nhau.", en: "Ask the AI again in a few different ways." }, s: { adapt: 1 } }
    ]
  },
  {
    q: { vi: "Khi viết một câu chuyện, phần bạn thích nhất là…", en: "When writing a story, your favourite part is…" },
    o: [
      { t: { vi: "Có sẵn dàn ý chuẩn để viết cho xong.", en: "Having a standard outline so I can finish fast." }, s: {} },
      { t: { vi: "Tạo ra một nhân vật chưa ai từng thấy.", en: "Inventing a character nobody has seen before." }, s: { create: 2 } },
      { t: { vi: "Đưa trải nghiệm thật của mình vào.", en: "Putting my real experiences into it." }, s: { story: 2 } },
      { t: { vi: "Khiến người đọc cảm thấy được thấu hiểu.", en: "Making the reader feel understood." }, s: { heart: 2 } }
    ]
  },
  {
    q: { vi: "Nhóm bạn tranh cãi về cách làm dự án chung.", en: "Your group is arguing about how to do a shared project." },
    o: [
      { t: { vi: "Im lặng, ai quyết thì mình theo.", en: "Stay quiet and go with whoever decides." }, s: {} },
      { t: { vi: "Nghe từng người rồi tìm điểm chung.", en: "Hear everyone out, then find common ground." }, s: { heart: 1, judge: 1 } },
      { t: { vi: "Đề xuất một phương án thứ ba hoàn toàn mới.", en: "Suggest a brand-new third option." }, s: { create: 2 } },
      { t: { vi: "Nhắc mọi người mục tiêu thật sự của dự án.", en: "Remind everyone what the project is really for." }, s: { judge: 2 } }
    ]
  },
  {
    q: { vi: "Nếu ngày mai AI làm được công việc bạn mơ ước, bạn sẽ…", en: "If tomorrow AI could do your dream job, you would…" },
    o: [
      { t: { vi: "Bỏ luôn ước mơ đó.", en: "Give up on that dream." }, s: {} },
      { t: { vi: "Học cách dùng AI để làm việc đó tốt hơn.", en: "Learn to use AI to do that job even better." }, s: { adapt: 2 } },
      { t: { vi: "Tìm phần việc chỉ con người mới làm được.", en: "Find the part of the job only a human can do." }, s: { judge: 1, heart: 1 } },
      { t: { vi: "Biến ước mơ thành một thứ mới mẻ hơn.", en: "Turn the dream into something newer." }, s: { create: 1, adapt: 1 } }
    ]
  },
  {
    q: { vi: "Bạn thường học một điều mới bằng cách nào?", en: "How do you usually learn something new?" },
    o: [
      { t: { vi: "Học thuộc những gì được dạy.", en: "Memorise what I'm taught." }, s: {} },
      { t: { vi: "Thử, sai, rồi thử lại.", en: "Try, fail, try again." }, s: { adapt: 2 } },
      { t: { vi: "Giảng lại cho người khác.", en: "Explain it to someone else." }, s: { story: 1, heart: 1 } },
      { t: { vi: "Hỏi thật nhiều câu \"tại sao\".", en: "Ask lots of \"why\" questions." }, s: { judge: 1, create: 1 } }
    ]
  },
  {
    q: { vi: "Bạn thấy một tin \"hot\" trên mạng có vẻ đáng ngờ.", en: "You see a \"viral\" post online that seems suspicious." },
    o: [
      { t: { vi: "Chia sẻ ngay cho kịp.", en: "Share it right away." }, s: {} },
      { t: { vi: "Kiểm tra nguồn trước khi tin.", en: "Check the source before believing it." }, s: { judge: 2 } },
      { t: { vi: "Tự hỏi ai được lợi khi tin này lan truyền.", en: "Ask who benefits if this spreads." }, s: { judge: 1, create: 1 } },
      { t: { vi: "Viết vài dòng nhắc mọi người cẩn thận.", en: "Write a few lines reminding people to be careful." }, s: { story: 2 } }
    ]
  },
  {
    q: { vi: "Điều gì khiến bạn khác với những người xung quanh?", en: "What makes you different from the people around you?" },
    o: [
      { t: { vi: "Mình cũng giống mọi người thôi.", en: "I'm pretty much like everyone else." }, s: {} },
      { t: { vi: "Cách mình nhìn mọi thứ.", en: "The way I see things." }, s: { create: 2 } },
      { t: { vi: "Những gì mình đã trải qua.", en: "What I've been through." }, s: { story: 2 } },
      { t: { vi: "Cách mình đối xử với người khác.", en: "How I treat other people." }, s: { heart: 2 } }
    ]
  },
  {
    q: { vi: "Một ngày rảnh rỗi, bạn chọn…", en: "On a free day, you choose to…" },
    o: [
      { t: { vi: "Lướt mạng cả ngày.", en: "Scroll all day." }, s: {} },
      { t: { vi: "Làm ra một thứ gì đó: vẽ, viết, nấu ăn, chế đồ.", en: "Make something: draw, write, cook, build." }, s: { create: 2 } },
      { t: { vi: "Gặp gỡ và trò chuyện với mọi người.", en: "Meet up and talk with people." }, s: { heart: 2 } },
      { t: { vi: "Thử một hoạt động mình chưa từng làm.", en: "Try something I've never done." }, s: { adapt: 2 } }
    ]
  },
  {
    q: { vi: "Bạn được giao một việc lặp đi lặp lại mỗi ngày.", en: "You're given a task that repeats every single day." },
    o: [
      { t: { vi: "Cứ làm y như vậy mãi.", en: "Keep doing it exactly the same way." }, s: {} },
      { t: { vi: "Tự động hoá nó để dành thời gian cho việc khác.", en: "Automate it to free up time for other things." }, s: { adapt: 1, judge: 1 } },
      { t: { vi: "Hỏi xem việc này có thật sự cần thiết không.", en: "Ask whether the task is really needed." }, s: { judge: 2 } },
      { t: { vi: "Thêm chút dấu ấn riêng của mình vào.", en: "Add a bit of my own touch to it." }, s: { story: 1, create: 1 } }
    ]
  }
];
