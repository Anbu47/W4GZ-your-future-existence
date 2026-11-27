// 26 skill tests, two per WEF skill. One test is shown after each question, in this order
// (ordered so a test never follows a question about the same skill).
// Every multiple-choice test has its own version for each audience: aud.grad / aud.work, each with intro and items.
// Players are NOT told whether they were right; the result only feeds the skill bars.
// Each test scores 0–1 point on its skill: points = correct / items (a two-part test gives 0.5 per part).
// items: { q, o (answers), c (index of the correct answer, 0 = first) }. Answer order is shuffled on screen.
// Games (scored 0–1 in app.js, played once, no going back mid-game):
//   "switch" rule-change tapping game (same for both audiences) · "sort" waste sorting against the clock ·
//   "swipe" scam or safe inbox · "predict" guess your own score, then 5 quick questions (scored on how close the guess is) ·
//   "order" tap people in the order you would help them.
// Vietnamese first; English to be added.
{
  const T = (vi, en) => ({ vi, en: en || vi });
  const V = (intro, q, o, c) => ({ intro: T(intro), items: [{ q: T(q), o: o.map((x) => T(x)), c }] });
  const R = (intro, pairs) => ({ intro: T(intro), items: pairs.map(([q, o, c]) => ({ q: T(q), o: o.map((x) => T(x)), c })) });
  const X = (id, edge, title, grad, work) => ({ id, edge, type: "choice", title: T(title), aud: { grad, work } });

  window.CHALLENGES = [
    // ---------- Round 1 ----------
    X("talent-1", "talent", "Chia việc cho nhóm",
      V("Nhóm làm đồ án tốt nghiệp của bạn có 3 người: An thiết kế rất đẹp, Bình nói trước đám đông rất tốt, Chi rất giỏi tìm tài liệu. Sắp đến buổi bảo vệ.",
        "Cách chia việc nào hợp lý nhất?", [
          "An tìm tài liệu, Bình thiết kế slide, Chi thuyết trình.",
          "Chi tìm tài liệu, An thiết kế slide, Bình thuyết trình.",
          "Mỗi người làm một phần ba của mọi việc.",
          "Bình làm hết cho nhanh vì Bình tự tin nhất."], 1),
      V("Nhóm dự án của bạn có 3 người: An thiết kế rất đẹp, Bình trình bày rất thuyết phục, Chi rất giỏi phân tích số liệu. Cả nhóm phải trình bày đề xuất cho khách hàng.",
        "Cách chia việc nào hợp lý nhất?", [
          "An phân tích số liệu, Bình thiết kế slide, Chi trình bày.",
          "Chi phân tích số liệu, An thiết kế slide, Bình trình bày.",
          "Mỗi người làm một phần ba của mọi việc.",
          "Bình làm hết cho nhanh vì Bình tự tin nhất."], 1)),

    X("analytic-1", "analytic", "Con số này có đáng tin?",
      V("Quảng cáo một khoá học viết: \"95% học viên có việc lương cao sau 3 tháng!\" Bên dưới ghi nhỏ: \"Khảo sát 20 học viên xuất sắc nhất.\"",
        "Điều đáng nghi ngờ nhất là gì?", [
          "Con số 95% nghe quá cao so với thực tế thị trường lao động hiện nay.",
          "Chỉ hỏi 20 học viên giỏi nhất, không đại diện cho mọi người.",
          "Quảng cáo không ghi rõ mức lương cao là bao nhiêu tiền.",
          "Khoá học chỉ 3 tháng thì quá ngắn để tìm được việc."], 1),
      V("Một bài đăng viết: \"90% nhân viên dùng AI làm việc kém hơn!\" Bên dưới ghi nhỏ: \"Khảo sát 10 người trong một nhóm Facebook.\"",
        "Điều đáng nghi ngờ nhất là gì?", [
          "Con số 90% nghe quá cao, chắc là nói quá lên.",
          "Chỉ hỏi 10 người trong một nhóm, quá ít và không đại diện.",
          "Bài đăng không nói rõ \"làm việc kém hơn\" là kém ở điểm nào cụ thể.",
          "Người đăng bài có vẻ vốn không thích dùng AI."], 1)),

    { id: "environment-1", edge: "environment", type: "sort",
      title: T("Phân loại rác"),
      intro: T("Từng món rác sẽ hiện ra. Chạm vào đúng thùng trước khi hết giờ!"),
      bins: [T("Tái chế"), T("Hữu cơ"), T("Nguy hại"), T("Rác còn lại")],
      seconds: 100,
      // b = correct bin: 0 Tái chế · 1 Hữu cơ · 2 Nguy hại · 3 Rác còn lại
      aud: {
        grad: { items: [
          { t: T("Vỏ lon nước ngọt"), b: 0 }, { t: T("Vỏ chuối"), b: 1 }, { t: T("Pin AA đã hết"), b: 2 },
          { t: T("Khăn giấy đã dùng"), b: 3 }, { t: T("Chai nhựa rỗng"), b: 0 }, { t: T("Bã cà phê"), b: 1 },
          { t: T("Sạc dự phòng bị phồng"), b: 2 }, { t: T("Hộp xốp đựng cơm dính dầu"), b: 3 },
          { t: T("Tập giáo trình cũ"), b: 0 }, { t: T("Cơm thừa"), b: 1 } ] },
        work: { items: [
          { t: T("Giấy in hỏng"), b: 0 }, { t: T("Hộp mực máy in đã hết"), b: 2 }, { t: T("Bã trà"), b: 1 },
          { t: T("Khăn giấy đã dùng"), b: 3 }, { t: T("Bóng đèn huỳnh quang hỏng"), b: 2 }, { t: T("Vỏ lon cà phê"), b: 0 },
          { t: T("Thùng carton"), b: 0 }, { t: T("Vỏ cam"), b: 1 }, { t: T("Pin chuột không dây"), b: 2 },
          { t: T("Tăm và giấy ăn bẩn"), b: 3 } ] }
      } },
    X("ai-1", "ai", "AI nói có đúng không?",
      V("Bạn hỏi AI về Nguyễn Du để chuẩn bị bài thi tuyển. Nó trả lời bằng 4 câu dưới đây.",
        "Câu nào AI đã bịa ra?", [
          "Nguyễn Du (1765–1820) là đại thi hào của dân tộc Việt Nam.",
          "Ông là tác giả Truyện Kiều, viết bằng chữ Nôm.",
          "Truyện Kiều có hơn 3.000 câu thơ lục bát.",
          "Năm 2010, ông xuất bản cuốn hồi ký \"Đời tôi và Kiều\"."], 3),
      V("Bạn nhờ AI viết phần mở đầu cho bài thuyết trình về lịch sử công nghệ. Nó viết 4 câu dưới đây.",
        "Câu nào AI đã bịa ra?", [
          "Alexander Graham Bell được cấp bằng sáng chế điện thoại vào năm 1876 tại Mỹ.",
          "Chiếc iPhone đầu tiên ra mắt năm 2007.",
          "Email đã được dùng từ đầu thập niên 1970.",
          "Năm 1950, Steve Jobs giới thiệu chiếc máy tính đầu tiên của Apple."], 3)),

    X("creative-1", "creative", "Tìm từ nối",
      R("Tìm một từ liên quan đến cả ba từ.", [
        ["Biển · Bầu trời · Lá cây", ["xanh", "nước", "gió", "rộng"], 0],
        ["Đồng hồ · Trái tim · Âm nhạc", ["kim", "giờ", "đập", "nhịp"], 3]]),
      R("Tìm một từ ghép được với cả ba từ.", [
        ["Núi · Bật · Xe", ["máy", "lửa", "đèn", "khói"], 1],
        ["Bờ · Bãi · Sóng", ["cát", "gió", "biển", "đá"], 2]])),

    X("empathy-1", "empathy", "Tin nhắn của bạn thân",
      V("Bạn thân vừa trượt vòng phỏng vấn cuối ở công ty mơ ước và nhắn: \"Thôi kệ, tui ổn mà 🙂\"",
        "Bạn trả lời thế nào?", [
          "Ổn thì tốt rồi! Mai tụi mình đi chơi cho vui, quên chuyện đó đi nha.",
          "Trượt vòng cuối chắc buồn lắm. Muốn kể thì tui nghe, không thì đi ăn gì đó nha.",
          "Công ty đó cũng chẳng hay gì đâu, bạn xứng đáng với chỗ tốt hơn mà.",
          "Lần sau chuẩn bị kỹ hơn là được, tối nay tui gửi bạn mấy mẹo phỏng vấn hay lắm nha."], 1),
      V("Bạn thân vừa không được thăng chức như kỳ vọng và nhắn: \"Thôi kệ, tui ổn mà 🙂\"",
        "Bạn trả lời thế nào?", [
          "Ổn thì tốt rồi! Cuối tuần đi chơi cho khuây khoả, quên chuyện đó đi nha.",
          "Không được như mong đợi chắc buồn lắm. Muốn kể thì tui nghe, không thì đi ăn gì nha.",
          "Sếp đó chẳng biết nhìn người, bạn xứng đáng ở một công ty tốt hơn nhiều.",
          "Năm sau cố gắng hơn là được mà, tối nay tui gửi bạn mấy cách để được thăng chức nhanh nha."], 1)),

    { id: "cyber-1", edge: "cyber", type: "swipe",
      title: T("Săn lừa đảo"),
      intro: T("Hộp thư của bạn có 8 tin nhắn. Với mỗi tin, chọn Lừa đảo hay An toàn."),
      aud: {
        grad: { items: [
          { from: T("Phòng Đào tạo <daotao@truong.edu.vn>"), t: T("Lịch nhận bằng tốt nghiệp đã có trên cổng thông tin của trường."), scam: false },
          { from: T("Tuyển CTV online"), t: T("Like dạo kiếm 500.000đ/ngày! Nộp 200.000đ phí kích hoạt tài khoản để bắt đầu."), scam: true },
          { from: T("SaoMaiBank"), t: T("Tài khoản của bạn bị tạm khoá. Xác minh ngay tại saomaibank-xacminh.com."), scam: true },
          { from: T("Ứng dụng tìm việc bạn đang dùng"), t: T("Hồ sơ của bạn vừa được một nhà tuyển dụng xem. Mở ứng dụng để xem chi tiết."), scam: false },
          { from: T("Số lạ trên Zalo"), t: T("Mình là HR công ty A. Bạn trúng tuyển rồi, gửi ảnh hai mặt căn cước để làm hợp đồng nhé."), scam: true },
          { from: T("Bạn thân"), t: T("Ê, mai đi phỏng vấn ở công ty kia chung không? Mình qua đón."), scam: false },
          { from: T("\"Bưu điện\""), t: T("Bưu phẩm của bạn bị giữ lại. Thanh toán 15.000đ phí lưu kho tại bit.ly/buupham."), scam: true },
          { from: T("Công ty Sao Mai <hr@saomai.vn>"), t: T("Mời bạn phỏng vấn lúc 9h thứ Hai tại văn phòng. Vui lòng xác nhận qua email này."), scam: false } ] },
        work: { items: [
          { from: T("Phòng IT <it@congty.vn>"), t: T("Hệ thống email bảo trì từ 22h tối nay. Bạn không cần làm gì."), scam: false },
          { from: T("\"Giám đốc\" qua Zalo số lạ"), t: T("Em chuyển gấp 50 triệu cho đối tác giúp anh, anh đang họp không nghe máy được."), scam: true },
          { from: T("\"Phòng IT\" <it-support@congty-vn.com>"), t: T("Mật khẩu của bạn đã hết hạn. Đăng nhập lại tại đường link này để tiếp tục dùng email."), scam: true },
          { from: T("Đồng nghiệp trong nhóm chat công ty"), t: T("File báo cáo quý mình để trong thư mục chung rồi nhé."), scam: false },
          { from: T("\"Đối tác\" từ một email lạ"), t: T("Bên em vừa đổi số tài khoản nhận tiền, anh chị chuyển khoản vào tài khoản mới này nhé."), scam: true },
          { from: T("Phòng Nhân sự <hr@congty.vn>"), t: T("Phiếu lương tháng này đã có trên hệ thống nội bộ."), scam: false },
          { from: T("\"Cơ quan thuế\""), t: T("Bạn được hoàn thuế 3.200.000đ. Nhập số thẻ ngân hàng tại đường link để nhận tiền."), scam: true },
          { from: T("Khách hàng quen <ketoan@doitac.vn>"), t: T("Gửi anh chị bản hợp đồng đã ký như hai bên đã thống nhất hôm qua."), scam: false } ] }
      } },
    { id: "resilience-1", edge: "resilience", type: "switch",
      title: T("Đổi luật giữa chừng"),
      intro: T("Chạm vào hình mẫu giống với hình ở giữa. Bạn sẽ được báo Đúng hay Sai — hãy tự tìm ra luật. Cẩn thận: luật có thể thay đổi mà không báo trước!") },

    { id: "motivation-1", edge: "motivation", type: "predict",
      title: T("Đoán điểm của mình"),
      intro: T("Sắp tới là 5 câu tính nhanh. Trước khi làm, hãy đoán xem mình sẽ đúng mấy câu. Điểm của trò này không nằm ở số câu đúng, mà ở việc bạn đoán sát đến đâu."),
      aud: {
        grad: { items: [
          { q: T("Tiền trọ 2.400.000đ chia đều cho 3 người. Mỗi người trả bao nhiêu?"), o: ["700.000đ", "800.000đ", "900.000đ", "1.200.000đ"].map((x) => T(x)), c: 1 },
          { q: T("Một chiếc áo giá 300.000đ được giảm 20%. Giá còn lại?"), o: ["280.000đ", "260.000đ", "240.000đ", "200.000đ"].map((x) => T(x)), c: 2 },
          { q: T("Lương thực tập 4 triệu/tháng, bạn tiêu 75%. Mỗi tháng để dành được bao nhiêu?"), o: ["750.000đ", "1 triệu", "1,25 triệu", "3 triệu"].map((x) => T(x)), c: 1 },
          { q: T("Xe buýt 15 phút có một chuyến, chuyến đầu lúc 6:00. Chuyến thứ 5 chạy lúc mấy giờ?"), o: ["6:45", "7:00", "7:15", "7:30"].map((x) => T(x)), c: 1 },
          { q: T("Mỗi ngày đọc 12 trang, cuốn sách dày 300 trang. Bao nhiêu ngày thì đọc xong?"), o: ["20 ngày", "25 ngày", "30 ngày", "36 ngày"].map((x) => T(x)), c: 1 } ] },
        work: { items: [
          { q: T("Doanh thu 120 triệu, chi phí 90 triệu. Lợi nhuận bằng bao nhiêu phần trăm doanh thu?"), o: ["25%", "30%", "33%", "75%"].map((x) => T(x)), c: 0 },
          { q: T("Báo giá 50 triệu, khách xin giảm 8%. Giá mới là bao nhiêu?"), o: ["42 triệu", "45 triệu", "46 triệu", "48 triệu"].map((x) => T(x)), c: 2 },
          { q: T("Một việc 3 người làm mất 4 ngày. Nếu 6 người làm cùng tốc độ thì mất bao lâu?"), o: ["1 ngày", "2 ngày", "3 ngày", "8 ngày"].map((x) => T(x)), c: 1 },
          { q: T("Cuộc họp bắt đầu lúc 14:45 và kéo dài 75 phút. Họp xong lúc mấy giờ?"), o: ["15:30", "15:45", "16:00", "16:15"].map((x) => T(x)), c: 2 },
          { q: T("Tháng trước bán 80 đơn, tháng này bán 100 đơn. Số đơn tăng bao nhiêu phần trăm?"), o: ["20%", "25%", "80%", "125%"].map((x) => T(x)), c: 1 } ] }
      } },
    X("techlit-1", "techlit", "Gửi file lớn",
      V("Bạn cần gửi portfolio 2 GB (ảnh và video) cho nhà tuyển dụng.",
        "Cách nào hợp lý nhất?", [
          "Nén lại thành một file zip rồi đính kèm vào email gửi đi.",
          "Tải lên một dịch vụ lưu trữ đám mây rồi gửi link, cho phép xem.",
          "Gửi từng ảnh, từng video qua tin nhắn cho nhà tuyển dụng.",
          "Giảm chất lượng ảnh và video thật thấp cho vừa dung lượng một email."], 1),
      V("Bạn cần chia sẻ một thư mục tài liệu cho khách hàng, nhưng không muốn họ sửa được.",
        "Cách nào hợp lý nhất?", [
          "Gửi mật khẩu tài khoản của mình cho khách.",
          "Chia sẻ link thư mục với quyền chỉ xem.",
          "Chia sẻ quyền chỉnh sửa cho tiện.",
          "In ra rồi gửi bưu điện."], 1)),

    { id: "service-1", edge: "service", type: "order",
      title: T("Quầy hỗ trợ"),
      intro: T("5 người cùng cần bạn giúp. Chạm lần lượt để xếp thứ tự bạn sẽ giúp ai trước, ai sau."),
      // r = correct position (1 = help first)
      aud: {
        grad: { place: T("Bạn đang làm thêm ở một quán cà phê."), items: [
          { t: T("Một khách vừa bị bỏng nhẹ vì làm đổ cà phê nóng."), r: 1 },
          { t: T("Một khách đã chờ 15 phút mà vẫn chưa có nước."), r: 2 },
          { t: T("Một khách cần thanh toán gấp vì sắp trễ giờ làm."), r: 3 },
          { t: T("Một khách hỏi mật khẩu wifi."), r: 4 },
          { t: T("Một khách vừa vào, vẫn đang xem menu."), r: 5 } ] },
        work: { place: T("Bạn đang trực bộ phận chăm sóc khách hàng."), items: [
          { t: T("Khách báo thiết bị công ty bán bốc khói khi đang sạc."), r: 1 },
          { t: T("Khách doanh nghiệp báo cả hệ thống ngừng chạy, 50 nhân viên không làm việc được."), r: 2 },
          { t: T("Khách bị trừ tiền hai lần cho cùng một đơn hàng."), r: 3 },
          { t: T("Khách hỏi cách đổi mật khẩu tài khoản."), r: 4 },
          { t: T("Khách góp ý nên có thêm màu mới cho sản phẩm."), r: 5 } ] }
      } },
    X("curiosity-1", "curiosity", "Học nhanh một quy tắc lạ",
      V("Trong ngôn ngữ Zipa: \"ka\" nghĩa là 1 con mèo, \"kaka\" là 2 con mèo, \"lu\" là 1 con chó, \"ka-lu\" là 1 con mèo và 1 con chó.",
        "\"lululu-ka\" nghĩa là gì?", [
          "3 con mèo và 1 con chó.",
          "1 con chó và 3 con mèo.",
          "3 con chó và 1 con mèo.",
          "4 con chó."], 2),
      V("Trong mã hàng của một kho: \"A1\" là 1 thùng táo, \"A2\" là 2 thùng táo, \"B1\" là 1 thùng cam, \"A1-B1\" là 1 thùng táo và 1 thùng cam.",
        "\"B3-A1\" nghĩa là gì?", [
          "3 thùng táo và 1 thùng cam.",
          "1 thùng cam và 3 thùng táo.",
          "3 thùng cam và 1 thùng táo.",
          "4 thùng cam."], 2)),

    X("leadership-1", "leadership", "Nhóm sắp trễ hạn",
      V("Nhóm đồ án 4 người còn 2 ngày nữa phải nộp, nhưng mới làm được 30%.",
        "Việc nên làm đầu tiên là gì?", [
          "Tự mình thức trắng làm hết cho chắc, khỏi phải chờ ai.",
          "Họp nhanh, chia việc và đặt hạn chót cho từng người.",
          "Xin thầy cô lùi hạn nộp thêm vài ngày cho cả nhóm.",
          "Nhắn nhóm chat nhắc mọi người tự giác làm phần mình."], 1),
      V("Nhóm dự án 4 người còn 2 ngày nữa phải giao cho khách, nhưng mới làm được 30%.",
        "Việc nên làm đầu tiên là gì?", [
          "Tự mình làm thêm giờ làm hết cho chắc, khỏi phải chờ ai.",
          "Họp nhanh, chia việc và đặt hạn chót cho từng người.",
          "Xin cấp trên lùi hạn giao thêm vài ngày cho cả nhóm.",
          "Nhắn nhóm chat nhắc mọi người tự giác làm phần mình."], 1)),

    // ---------- Round 2 ----------
    X("cyber-2", "cyber", "Giữ an toàn tài khoản",
      V("Bạn đang tạo tài khoản trên một trang tìm việc và nghĩ ra 4 mật khẩu.",
        "Mật khẩu nào khó bị đoán nhất?", [
          "nguyenvanan2003",
          "matkhaucuatoi123",
          "1234567890abc",
          "Meo#an3QuaXoai!"], 3),
      V("Một đồng nghiệp nhờ bạn cho đăng nhập tài khoản công ty của bạn để lấy giúp một file.",
        "Bạn nên làm gì?", [
          "Đọc mật khẩu qua điện thoại cho họ rồi đổi lại sau.",
          "Đăng nhập giúp trên máy họ rồi để họ tự lấy file.",
          "Chia sẻ riêng file đó qua hệ thống của công ty.",
          "Viết mật khẩu ra giấy đưa họ, dặn dùng xong thì xé."], 2)),

    X("service-2", "service", "Linh hoạt với quy định",
      V("Bạn làm thêm ở quầy lễ tân một trung tâm tiếng Anh. Quy định: đổi lịch học phải báo trước 24 giờ. Một học viên báo trước 20 giờ vì phải nhập viện.",
        "Bạn nên làm gì?", [
          "Từ chối khéo léo, vì quy định áp dụng cho mọi học viên.",
          "Kiểm tra lớp khác còn chỗ không, rồi báo quản lý xin ngoại lệ.",
          "Bảo học viên tự liên hệ giáo viên phụ trách để thoả thuận lại lịch học.",
          "Đồng ý luôn và đổi lịch mà không cần báo cho ai biết."], 1),
      V("Bạn làm ở quầy hỗ trợ. Quy định là đổi trả trong 7 ngày. Một khách mua hàng được 9 ngày, sản phẩm lỗi ngay từ đầu nhưng khách đi công tác nên chưa mang tới được.",
        "Bạn nên làm gì?", [
          "Từ chối lịch sự, vì quy định đổi trả trong 7 ngày áp dụng cho mọi khách hàng.",
          "Kiểm tra có phải lỗi nhà sản xuất không; nếu đúng, báo quản lý xin đổi.",
          "Hướng dẫn khách tự liên hệ trung tâm bảo hành của nhà sản xuất.",
          "Đổi luôn sản phẩm mới mà không cần kiểm tra hay báo cho ai cả."], 1)),

    X("ai-2", "ai", "Hỏi AI sao cho hay",
      V("Bạn muốn nhờ AI góp ý CV của mình.",
        "Cách hỏi nào giúp AI trả lời tốt nhất?", [
          "Bạn là chuyên gia tuyển dụng giỏi nhất thế giới. Hãy sửa CV của tôi thật hay, thật chuyên nghiệp và thật ấn tượng giúp tôi nhé.",
          "Viết lại toàn bộ CV này cho tôi, thêm vài kinh nghiệm làm việc cho CV trông ấn tượng hơn với nhà tuyển dụng.",
          "Đây là CV của tôi cho vị trí nhân viên marketing mới ra trường. Hãy chỉ ra 3 điểm yếu và gợi ý cách viết lại phần kinh nghiệm.",
          "CV này có ổn không? Nếu chưa ổn thì sửa giúp tôi luôn, càng nhanh càng tốt vì tôi sắp phải nộp hồ sơ rồi."], 2),
      V("Bạn muốn nhờ AI viết một đoạn giới thiệu dịch vụ của công ty.",
        "Cách hỏi nào giúp AI trả lời tốt nhất?", [
          "Bạn là chuyên gia marketing giỏi nhất thế giới. Hãy viết đoạn giới thiệu dịch vụ của công ty thật hay, thật chuyên nghiệp nhé.",
          "Viết đoạn giới thiệu dịch vụ, nói công ty mình là số 1 Việt Nam và tốt hơn mọi đối thủ để khách hàng tin tưởng.",
          "Viết một đoạn khoảng 150 chữ giới thiệu dịch vụ của công ty cho khách hàng 25–35 tuổi, giọng thân thiện, nêu 3 lợi ích cụ thể.",
          "Viết giúp tôi về công ty: dịch vụ, khách hàng, lịch sử, tầm nhìn, sứ mệnh, giải thưởng, đối tác, càng dài càng tốt."], 2)),

    X("empathy-2", "empathy", "Lắng nghe",
      V("Một bạn cùng đợt thực tập nói: \"Mình thấy mình chẳng làm được gì ra hồn, chắc không được giữ lại đâu.\"",
        "Câu trả lời nào thể hiện lắng nghe tốt nhất?", [
          "Ai mới đi thực tập mà chẳng vậy, vài tuần nữa là quen thôi, đừng lo.",
          "Nghe có vẻ bạn đang áp lực lắm. Bạn muốn kể mình nghe chuyện gì xảy ra không?",
          "Thôi đừng nghĩ nhiều, tối nay đi chơi game với tụi mình cho vui đi.",
          "Mình còn tệ hơn bạn nhiều, hôm qua mình bị chị quản lý nhắc nhở tận ba lần liền."], 1),
      V("Một đồng nghiệp nói với bạn: \"Dạo này nhà mình có chuyện, mình mệt quá.\"",
        "Câu trả lời nào thể hiện lắng nghe tốt nhất?", [
          "Ai mà chẳng có lúc mệt, cố lên rồi mọi chuyện sẽ ổn thôi mà.",
          "Nghe có vẻ bạn đang phải chịu nhiều thứ. Bạn có muốn kể không?",
          "Thôi đừng nghĩ nữa, tối nay đi nhậu với cả phòng cho khuây khoả.",
          "Nhà mình còn tệ hơn nhiều, để mình kể bạn nghe chuyện nhà mình."], 1)),

    X("environment-2", "environment", "Giảm khí thải",
      V("Các loại thực phẩm tạo ra lượng khí nhà kính rất khác nhau khi được sản xuất.",
        "Món nào thường tạo ra nhiều khí nhà kính nhất?", [
          "Rau luộc.",
          "Cơm trắng.",
          "Thịt bò.",
          "Đậu phụ."], 2),
      V("Công ty muốn giảm khí thải từ việc đi lại hằng ngày của 200 nhân viên.",
        "Cách nào giảm nhiều nhất?", [
          "Phát nước uống miễn phí và trồng thêm cây xanh ở sảnh chính.",
          "Cho làm từ xa vài ngày mỗi tuần và khuyến khích đi chung xe.",
          "Treo poster kêu gọi tiết kiệm năng lượng ở mọi tầng văn phòng.",
          "Đổi toàn bộ bóng đèn trong toà nhà sang loại tiết kiệm điện."], 1)),

    X("leadership-2", "leadership", "Hai người cãi nhau",
      V("Bạn là nhóm trưởng đồ án. Hai bạn trong nhóm cãi nhau to về cách làm.",
        "Bạn nên làm gì trước?", [
          "Đứng về phía bạn có ý kiến hợp với mình hơn để kết thúc nhanh.",
          "Cho mỗi bạn trình bày ý mình, rồi cả nhóm chọn theo mục tiêu chung.",
          "Mặc kệ để hai bạn tự giải quyết với nhau, nhóm trưởng không nên can thiệp.",
          "Tự quyết theo ý mình luôn, không hỏi thêm ai để đỡ mất thời gian."], 1),
      V("Bạn là trưởng nhóm. Hai nhân viên tranh cãi gay gắt ngay trong cuộc họp.",
        "Bạn nên làm gì trước?", [
          "Đứng về phía người có kinh nghiệm hơn để kết thúc cuộc họp cho nhanh.",
          "Tạm dừng, gặp riêng từng người, rồi cả nhóm chọn theo mục tiêu dự án.",
          "Mặc kệ để hai người tự giải quyết, trưởng nhóm không nên can thiệp.",
          "Tự quyết theo ý mình luôn, không hỏi thêm ai để đỡ mất thời gian."], 1)),

    X("creative-2", "creative", "Tìm từ nối (tiếp)",
      R("Tìm một từ ghép được với cả ba từ.", [
        ["Cửa · Chìa · Ổ", ["nhà", "khoá", "sắt", "gỗ"], 1],
        ["Mặt · Nắng · Ông", ["trời", "sáng", "mây", "đèn"], 0]]),
      R("Tìm một từ ghép được với cả ba từ.", [
        ["Ánh · Mặt · Tuần", ["sáng", "trăng", "lễ", "nắng"], 1],
        ["Bóng · Hòn · Nước", ["mắt", "sông", "đá", "chuyền"], 2]])),

    X("talent-2", "talent", "Hướng dẫn người mới",
      V("Bạn hướng dẫn một bạn thực tập khoá sau làm báo cáo. Bạn ấy làm sai một phần.",
        "Bạn nên làm gì?", [
          "Làm lại hộ phần đó cho đúng rồi gửi lại.",
          "Chỉ ra chỗ sai rồi để bạn ấy tự sửa.",
          "Bảo bạn ấy làm lại toàn bộ từ đầu.",
          "Gửi bản đúng của mình để bạn ấy chép."], 1),
      V("Bạn hướng dẫn một nhân viên mới. Họ làm sai một bước trong quy trình.",
        "Bạn nên làm gì?", [
          "Làm lại hộ bước đó cho đúng rồi thôi.",
          "Chỉ ra chỗ sai rồi để họ tự sửa.",
          "Bảo họ làm lại toàn bộ quy trình.",
          "Gửi bản làm đúng để họ chép theo."], 1)),

    X("curiosity-2", "curiosity", "Câu hỏi hay",
      V("Bạn đang tìm hiểu: \"Vì sao lá cây đổi màu vào mùa thu?\"",
        "Câu hỏi tiếp theo nào giúp bạn hiểu sâu nhất?", [
          "Lá cây ở các nước khác đổi sang những màu gì?",
          "Vào mùa thu, mất bao lâu thì lá cây rụng hết?",
          "Điều gì bên trong lá thay đổi khiến màu lá thay đổi?",
          "Loài cây nào ở Việt Nam có lá đổi màu đẹp nhất vào mùa thu?"], 2),
      V("Doanh số tháng này của nhóm bạn bỗng giảm 20%.",
        "Câu hỏi tiếp theo nào giúp bạn hiểu sâu nhất?", [
          "Tháng sau doanh số có tự tăng lại như cũ hay không?",
          "Có nên đổi logo và màu sắc thương hiệu cho mới mẻ, bắt mắt hơn không?",
          "Điều gì đã thay đổi so với tháng trước khiến khách mua ít hơn?",
          "Đối thủ có đang chạy quảng cáo nhiều hơn mình không?"], 2)),

    X("resilience-2", "resilience", "Sự cố khi thuyết trình",
      V("Bạn đang thuyết trình bảo vệ đồ án tốt nghiệp thì máy chiếu bị hỏng.",
        "Bạn nên làm gì?", [
          "Dừng lại, xin lỗi rồi về chỗ ngồi.",
          "Tiếp tục nói và vẽ ý chính lên bảng.",
          "Đứng chờ đến khi sửa xong máy mới nói tiếp.",
          "Trách người chuẩn bị máy chiếu."], 1),
      V("Bạn đang thuyết trình trước khách hàng thì máy chiếu bị hỏng.",
        "Bạn nên làm gì?", [
          "Dừng lại, xin lỗi khách rồi hẹn một buổi khác để trình bày.",
          "Tiếp tục trình bày, dùng tài liệu in hoặc vẽ ý chính lên bảng.",
          "Đứng chờ đến khi bộ phận kỹ thuật sửa xong máy chiếu rồi mới nói tiếp.",
          "Trách người chuẩn bị máy chiếu ngay trước mặt khách hàng."], 1)),

    X("analytic-2", "analytic", "So sánh tỉ lệ",
      V("Ngành A có 200 sinh viên tốt nghiệp, 150 người có việc đúng ngành. Ngành B có 80 sinh viên tốt nghiệp, 60 người có việc đúng ngành.",
        "Ngành nào có tỉ lệ có việc đúng ngành cao hơn?", [
          "Ngành A, vì có nhiều người có việc hơn.",
          "Ngành B.",
          "Hai ngành bằng nhau.",
          "Không thể so sánh được."], 2),
      V("Tháng trước, cửa hàng A có 20 khách quay lại trên tổng 40 khách. Tháng này, cửa hàng B có 25 khách quay lại trên tổng 50 khách.",
        "Cửa hàng nào có tỉ lệ khách quay lại cao hơn?", [
          "Cửa hàng A.",
          "Cửa hàng B, vì có nhiều khách quay lại hơn.",
          "Hai cửa hàng bằng nhau.",
          "Không thể so sánh được."], 2)),

    X("motivation-2", "motivation", "Hay mất tập trung",
      V("Bạn nhận ra mình hay mất tập trung khi tự học ở nhà.",
        "Việc nên làm đầu tiên là gì?", [
          "Ép mình ngồi học thêm giờ để bù lại phần đã mất.",
          "Để ý điều gì làm mình xao nhãng rồi điều chỉnh.",
          "Bỏ hẳn việc tự học buổi tối cho đỡ áp lực.",
          "Uống thật nhiều cà phê để tỉnh táo hơn."], 1),
      V("Bạn nhận ra mình hay mất tập trung khi làm việc buổi chiều.",
        "Việc nên làm đầu tiên là gì?", [
          "Ép mình làm thêm giờ buổi tối để bù lại phần việc còn dở.",
          "Để ý điều gì làm mình xao nhãng rồi điều chỉnh.",
          "Dồn hết việc khó sang buổi sáng hôm sau.",
          "Uống thật nhiều cà phê để tỉnh táo hơn."], 1)),

    X("techlit-2", "techlit", "File đáng ngờ",
      V("Một \"nhà tuyển dụng\" lạ gửi cho bạn 4 file.",
        "File nào nguy hiểm nhất, không nên mở?", [
          "mo_ta_cong_viec_chi_tiet.pdf",
          "logo_cong_ty_sao_mai.jpg",
          "phieu_trung_tuyen.pdf.exe",
          "video_gioi_thieu_cong_ty.mp4"], 2),
      V("Một email lạ gửi vào hộp thư công ty kèm 4 file.",
        "File nào nguy hiểm nhất, không nên mở?", [
          "hop_dong.pdf",
          "anh_san_pham.jpg",
          "bang_gia.jpg.exe",
          "ghi_am_cuoc_hop.mp3"], 2))
  ];
}
