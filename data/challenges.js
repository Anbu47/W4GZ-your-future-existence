// 26 skill tests, two per WEF skill. One test is shown after each question, in this order
// (ordered so a test never follows a question about the same skill).
// Players are NOT told whether they were right; the result only feeds the skill bars.
// Each test scores 0–2 points on its skill: points = round(correct / items × 2).
// type "choice": items with a correct answer index c (0 = first). type "switch": the rule-change game in app.js.
// Answer order inside a test is shuffled on screen. Vietnamese first; English to be added.
{
  const T = (vi, en) => ({ vi, en: en || vi });
  const one = (id, edge, title, intro, q, o, c) => ({ id, edge, type: "choice", title: T(title), intro: T(intro), items: [{ q: T(q), o: o.map((x) => T(x)), c }] });

  window.CHALLENGES = [
    // ---------- Round 1 ----------
    one("talent-1", "talent", "Chia việc cho nhóm",
      "Nhóm bạn có 3 người: An vẽ rất đẹp, Bình nói trước đám đông rất tốt, Chi rất giỏi tìm tài liệu. Cả nhóm phải làm một bài thuyết trình.",
      "Cách chia việc nào hợp lý nhất?", [
        "An tìm tài liệu, Bình làm hình minh hoạ, Chi thuyết trình.",
        "Chi tìm tài liệu, An làm hình minh hoạ, Bình thuyết trình.",
        "Mỗi người làm một phần ba của mọi việc.",
        "Bình làm hết cho nhanh vì Bình tự tin nhất."], 1),

    one("analytic-1", "analytic", "Con số này có đáng tin?",
      "Một bài đăng viết: \"90% học sinh dùng AI bị điểm kém hơn!\" Bên dưới ghi nhỏ: \"Khảo sát 10 người trong một nhóm Facebook.\"",
      "Điều đáng nghi ngờ nhất là gì?", [
        "Con số 90% nghe quá cao.",
        "Chỉ hỏi 10 người trong một nhóm — quá ít và không đại diện.",
        "Bài đăng không có hình ảnh.",
        "Bài đăng dùng dấu chấm than."], 1),

    one("environment-1", "environment", "Giảm rác nhựa",
      "Bạn uống khoảng 2 chai nước mỗi ngày ở trường.",
      "Cách nào giảm rác thải nhiều nhất?", [
        "Mua chai nhựa rồi bỏ vào thùng tái chế.",
        "Dùng một bình nước cá nhân trong nhiều năm.",
        "Mua chai nhựa to hơn để mua ít lần hơn.",
        "Uống bằng ống hút giấy."], 1),

    one("ai-1", "ai", "AI nói có đúng không?",
      "Bạn hỏi AI về Nguyễn Du. Nó trả lời bằng 4 câu dưới đây.",
      "Câu nào AI đã bịa ra?", [
        "Nguyễn Du (1765–1820) là đại thi hào của Việt Nam.",
        "Ông là tác giả Truyện Kiều, viết bằng chữ Nôm.",
        "Truyện Kiều có hơn 3.000 câu thơ lục bát.",
        "Năm 2010, ông xuất bản cuốn hồi ký \"Đời tôi và Kiều\"."], 3),

    { id: "creative-1", edge: "creative", type: "choice",
      title: T("Tìm từ nối"), intro: T("Tìm một từ liên quan đến cả ba từ."),
      items: [
        { q: T("Biển · Bầu trời · Lá cây"), o: [T("xanh"), T("nước"), T("gió"), T("rộng")], c: 0 },
        { q: T("Đồng hồ · Trái tim · Âm nhạc"), o: [T("kim"), T("giờ"), T("đập"), T("nhịp")], c: 3 }
      ] },

    one("empathy-1", "empathy", "Tin nhắn của bạn thân",
      "Bạn thân vừa bị loại khỏi đội bóng của trường và nhắn: \"Thôi kệ, tui ổn mà 🙂\"",
      "Bạn trả lời thế nào?", [
        "Ổn thì tốt rồi! Mai đi chơi nha.",
        "Bị loại chắc buồn lắm. Muốn kể thì tui nghe, không thì mình đi ăn gì đó nha.",
        "Đội đó cũng chẳng hay gì đâu, bỏ đi.",
        "Lần sau tập chăm hơn là được mà."], 1),

    one("cyber-1", "cyber", "Đường link nào an toàn?",
      "Ngân hàng Sao Mai (một ngân hàng giả định) có trang web chính thức là saomaibank.vn. Bạn nhận được 4 đường link.",
      "Link nào là trang thật của ngân hàng?", [
        "https://saomaibank.vn/dang-nhap",
        "https://saomaibank-vn.com/dang-nhap",
        "https://saomaibank.vn.xacthuc-taikhoan.com",
        "http://sa0maibank.vn/dang-nhap"], 0),

    { id: "resilience-1", edge: "resilience", type: "switch",
      title: T("Đổi luật giữa chừng"),
      intro: T("Chạm vào hình mẫu giống với hình ở giữa. Bạn sẽ được báo Đúng hay Sai — hãy tự tìm ra luật. Cẩn thận: luật có thể thay đổi mà không báo trước!") },

    one("motivation-1", "motivation", "Kế hoạch ôn thi",
      "Bạn còn 3 ngày để ôn 3 môn: Toán (bạn đang yếu), Văn (khá), Anh (giỏi).",
      "Cách chia thời gian nào hợp lý nhất?", [
        "Chia đều mỗi môn một ngày.",
        "Học Anh nhiều nhất vì mình thích môn đó.",
        "Dành nhiều thời gian nhất cho Toán, ôn nhẹ Anh.",
        "Hứng môn nào thì học môn đó."], 2),

    one("techlit-1", "techlit", "Gửi file lớn",
      "Bạn cần gửi cho bạn một video dài 2 GB.",
      "Cách nào hợp lý nhất?", [
        "Đính kèm vào email.",
        "Tải lên một dịch vụ lưu trữ đám mây rồi gửi link.",
        "Chụp màn hình từng cảnh rồi gửi.",
        "Chia thành 100 tin nhắn."], 1),

    one("service-1", "service", "Trả lời khách hàng",
      "Bạn bán áo online. Một khách nhắn: \"Áo giao bị sai size, mai tôi cần mặc đi tiệc.\"",
      "Câu trả lời nào tốt nhất?", [
        "Shop không đổi hàng ạ.",
        "Bạn đã đọc kỹ bảng size chưa ạ?",
        "Xin lỗi bạn! Shop gửi ngay áo đúng size bằng giao hoả tốc hôm nay, bạn cứ giữ áo cũ, mai shop qua lấy nhé.",
        "Shop sẽ xem xét trong 7 ngày làm việc."], 2),

    one("curiosity-1", "curiosity", "Học nhanh một ngôn ngữ lạ",
      "Trong ngôn ngữ Zipa: \"ka\" nghĩa là 1 con mèo, \"kaka\" là 2 con mèo, \"lu\" là 1 con chó, \"ka-lu\" là 1 con mèo và 1 con chó.",
      "\"lululu-ka\" nghĩa là gì?", [
        "3 con mèo và 1 con chó.",
        "1 con chó và 3 con mèo.",
        "3 con chó và 1 con mèo.",
        "4 con chó."], 2),

    one("leadership-1", "leadership", "Nhóm sắp trễ hạn",
      "Nhóm 4 người còn 2 ngày nữa phải nộp dự án, nhưng mới làm được 30%.",
      "Việc nên làm đầu tiên là gì?", [
        "Tự mình làm hết cho chắc.",
        "Họp nhanh, chia việc và đặt hạn chót cho từng người.",
        "Xin thầy cô lùi hạn nộp.",
        "Chờ mọi người tự giác làm."], 1),

    // ---------- Round 2 ----------
    one("cyber-2", "cyber", "Mật khẩu nào mạnh nhất?",
      "Bạn đang tạo tài khoản mới và nghĩ ra 4 mật khẩu.",
      "Mật khẩu nào khó bị đoán nhất?", [
        "12345678",
        "Nguyen2008",
        "matkhau123",
        "Meo#an3QuaXoai!"], 3),

    one("service-2", "service", "Gia hạn sách thư viện",
      "Bạn trực thư viện trường. Quy định là mượn sách tối đa 2 tuần. Một bạn xin giữ sách thêm 3 ngày để làm xong bài.",
      "Bạn nên làm gì?", [
        "Từ chối, quy định là quy định.",
        "Kiểm tra xem có ai đang đặt cuốn đó không; nếu không, cho gia hạn 3 ngày.",
        "Bảo bạn ấy tự đi mua sách.",
        "Cho giữ sách thêm 2 tháng cho thoải mái."], 1),

    one("ai-2", "ai", "Hỏi AI sao cho hay",
      "Bạn muốn nhờ AI viết giúp một đoạn văn cho bài thuyết trình.",
      "Cách hỏi nào giúp AI trả lời tốt nhất?", [
        "Viết về môi trường.",
        "Môi trường?",
        "Viết một đoạn khoảng 150 chữ cho học sinh lớp 8 về cách giảm rác nhựa ở trường, có 3 ví dụ cụ thể.",
        "Viết thật hay vào."], 2),

    one("empathy-2", "empathy", "Lắng nghe",
      "Một bạn cùng lớp nói với bạn: \"Dạo này nhà mình có chuyện, mình mệt quá.\"",
      "Câu trả lời nào thể hiện lắng nghe tốt nhất?", [
        "Ai mà chẳng mệt.",
        "Nghe có vẻ bạn đang phải chịu nhiều thứ. Bạn có muốn kể không?",
        "Thôi đừng nghĩ nữa, đi chơi game đi.",
        "Nhà mình còn tệ hơn nhiều."], 1),

    one("environment-2", "environment", "Bữa ăn và khí hậu",
      "Các loại thực phẩm tạo ra lượng khí nhà kính rất khác nhau khi được sản xuất.",
      "Món nào thường tạo ra nhiều khí nhà kính nhất?", [
        "Rau luộc.",
        "Cơm trắng.",
        "Thịt bò.",
        "Đậu phụ."], 2),

    one("leadership-2", "leadership", "Hai bạn cãi nhau",
      "Bạn là nhóm trưởng. Hai bạn trong nhóm cãi nhau to về cách làm dự án.",
      "Bạn nên làm gì trước?", [
        "Đứng về phía bạn thân với mình hơn.",
        "Cho mỗi bạn trình bày ý mình, rồi cả nhóm chọn theo mục tiêu chung.",
        "Mặc kệ để hai bạn tự giải quyết.",
        "Tự quyết theo ý mình, không hỏi ai."], 1),

    { id: "creative-2", edge: "creative", type: "choice",
      title: T("Tìm từ nối (tiếp)"), intro: T("Tìm một từ ghép được với cả ba từ."),
      items: [
        { q: T("Cửa · Chìa · Ổ"), o: [T("nhà"), T("khoá"), T("sắt"), T("gỗ")], c: 1 },
        { q: T("Mặt · Ánh · Ông"), o: [T("trời"), T("sáng"), T("nắng"), T("đèn")], c: 0 }
      ] },

    one("talent-2", "talent", "Kèm em học",
      "Bạn kèm một em lớp dưới học toán. Em làm sai một bài.",
      "Bạn nên làm gì?", [
        "Làm lại hộ em cho đúng.",
        "Chỉ ra chỗ sai rồi để em tự sửa.",
        "Bảo em học lại từ đầu.",
        "Cho em chép đáp án."], 1),

    one("curiosity-2", "curiosity", "Câu hỏi hay",
      "Bạn đang tìm hiểu: \"Vì sao lá cây đổi màu vào mùa thu?\"",
      "Câu hỏi tiếp theo nào giúp bạn hiểu sâu nhất?", [
        "Lá cây có những màu gì?",
        "Bao giờ thì lá rụng hết?",
        "Điều gì bên trong lá thay đổi khiến màu lá thay đổi?",
        "Cây nào có lá đẹp nhất?"], 2),

    one("resilience-2", "resilience", "Sự cố khi thuyết trình",
      "Bạn đang thuyết trình trước lớp thì máy chiếu bị hỏng.",
      "Bạn nên làm gì?", [
        "Dừng lại, xin lỗi rồi về chỗ ngồi.",
        "Tiếp tục nói và vẽ ý chính lên bảng.",
        "Đứng chờ đến khi sửa xong máy mới nói tiếp.",
        "Trách người chuẩn bị máy chiếu."], 1),

    one("analytic-2", "analytic", "So sánh tỉ lệ",
      "Năm ngoái lớp A có 20 bạn học giỏi trên tổng 40 bạn. Năm nay lớp B có 25 bạn học giỏi trên tổng 50 bạn.",
      "Lớp nào có tỉ lệ học sinh giỏi cao hơn?", [
        "Lớp A.",
        "Lớp B, vì có nhiều bạn giỏi hơn.",
        "Hai lớp bằng nhau.",
        "Không thể so sánh được."], 2),

    one("motivation-2", "motivation", "Hay mất tập trung",
      "Bạn nhận ra mình hay mất tập trung khi học buổi tối.",
      "Việc nên làm đầu tiên là gì?", [
        "Ép mình học thêm giờ cho bù.",
        "Để ý xem điều gì làm mình xao nhãng (điện thoại, mệt, ồn…) rồi điều chỉnh.",
        "Bỏ hẳn việc học buổi tối.",
        "Uống thật nhiều cà phê."], 1),

    one("techlit-2", "techlit", "File đáng ngờ",
      "Bạn nhận được 4 file từ một tài khoản lạ.",
      "File nào nguy hiểm nhất, không nên mở?", [
        "baitap.docx",
        "anh_lop.jpg",
        "hinhnen.jpg.exe",
        "nhac.mp3"], 2)
  ];
}
