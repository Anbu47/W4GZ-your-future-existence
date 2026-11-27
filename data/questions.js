// 26 questions per audience: 2 for each of the 13 WEF skills (keys in data/results.js).
// Two audiences (data/settings.js → audiences): "grad" = Sinh viên mới ra trường, "work" = Người đã đi làm.
// Every question has its own version for each audience: aud.grad / aud.work, each with q (question) and o (answers).
// If an audience version has no o, the question's shared answers (o) are used.
// Each question: 4 "machine" answers M (−2 each, see MACHINE_POINTS) + 4 "human" answers H (+1) + 1 harmful answer (NEG, −2, at the end of this file).
// Players may choose several answers. Answer order is shuffled on screen.
// H(text, { skill: weight }) — every good answer is worth +1 in total, split by these weights. Vietnamese first; English to be added.
{
  const M = (vi, en) => ({ t: { vi, en: en || vi }, s: {} });
  // A good answer is worth +1 in total; an answer tagged with two skills gives +0.5 to each.
  const H = (vi, s, en) => {
    const tot = Object.values(s).reduce((x, y) => x + y, 0);
    const pts = {}; Object.entries(s).forEach(([k, v]) => { pts[k] = v / tot; });
    return { t: { vi, en: en || vi }, s: pts };
  };
  const T = (vi, en) => ({ vi, en: en || vi });
  const Q = (skill, o, aud) => ({ skill, q: T(""), o, aud });
  const A = (q, o) => ({ q: T(q), o });

  window.QUESTIONS = [
    // 1 · AI & big data
    Q("ai", [
      M("Chép nguyên câu trả lời của AI."), M("Nhờ AI viết hết rồi gửi đi."), M("Không dám dùng vì sợ sai."), M("Hỏi AI một lần, được gì lấy nấy."),
      H("Hỏi AI theo nhiều cách để so sánh các câu trả lời.", { ai: 2 }),
      H("Nhờ AI gợi ý dàn ý rồi tự viết.", { ai: 1, creative: 1 }),
      H("Kiểm tra lại các số liệu mà AI đưa ra.", { ai: 1, analytic: 1 }),
      H("Ghi rõ phần nào mình đã dùng AI hỗ trợ.", { ai: 2 })
    ], {
      grad: A("Nơi bạn thực tập cho phép dùng AI để viết báo cáo tuần. Bạn sẽ…"),
      work: A("Sếp cho phép dùng AI để làm báo cáo gửi khách hàng. Bạn sẽ…")
    }),
    // 2 · Empathy
    Q("empathy", [
      M("Gửi một link \"10 cách vượt qua thất bại\"."), M("Bảo \"có gì đâu mà buồn\"."), M("Kể ngay chuyện của mình cho người đó nghe."), M("Khuyên \"lần sau chuẩn bị kỹ hơn là được\"."),
      H("Ngồi nghe người đó kể, không vội khuyên.", { empathy: 2 }),
      H("Hỏi người đó đang cảm thấy thế nào.", { empathy: 2 }),
      H("Nghe xong rồi mới kể lần mình cũng từng thất bại.", { empathy: 2 }),
      H("Rủ người đó đi ăn hay đi dạo cho thay đổi không khí.", { empathy: 1, service: 1 })
    ], {
      grad: A("Bạn thân của bạn buồn vì vừa trượt vòng phỏng vấn ở công ty mơ ước. Bạn…"),
      work: A("Một đồng nghiệp buồn vì dự án họ làm suốt 3 tháng bị huỷ. Bạn…")
    }),
    // 3 · Cybersecurity
    Q("cyber", [], {
      grad: A("Bạn nhận tin nhắn: \"Chúc mừng bạn trúng tuyển! Bấm link, điền số tài khoản ngân hàng và nộp 500.000đ phí giữ chỗ.\"", [
        M("Bấm link và điền ngay kẻo lỡ cơ hội."), M("Chuyển phí giữ chỗ cho chắc."), M("Tin vì tin nhắn có logo công ty."), M("Gửi luôn ảnh căn cước cho nhanh."),
        H("Không bấm, tự tìm website chính thức của công ty để kiểm tra.", { cyber: 2 }),
        H("Nhớ rằng công ty thật không thu phí tuyển dụng.", { cyber: 2 }),
        H("Gọi số điện thoại chính thức của công ty để hỏi.", { cyber: 1, analytic: 1 }),
        H("Cảnh báo bạn bè đang tìm việc về kiểu lừa này.", { cyber: 1, service: 1 })
      ]),
      work: A("Bạn nhận email từ \"Phòng IT\": \"Tài khoản công ty sắp bị khoá. Bấm link và nhập mật khẩu để xác minh.\"", [
        M("Bấm vào link ngay."), M("Nhập mật khẩu cho nhanh."), M("Tin vì email có logo công ty."), M("Chuyển tiếp email cho cả phòng làm theo."),
        H("Không bấm, tự mở hệ thống chính thức để kiểm tra.", { cyber: 2 }),
        H("Xem kỹ địa chỉ người gửi và đường link.", { cyber: 2 }),
        H("Báo ngay cho bộ phận IT thật.", { cyber: 1, service: 1 }),
        H("Bật xác thực hai lớp cho tài khoản.", { cyber: 2 })
      ])
    }),
    // 4 · Creative thinking
    Q("creative", [], {
      grad: A("Bạn cần viết thư xin việc cho vị trí mình rất thích. Bạn sẽ…", [
        M("Nhờ AI viết rồi gửi luôn."), M("Chép một mẫu thư trên mạng."), M("Điền đúng theo mẫu có sẵn."), M("Viết cho đủ dài là xong."),
        H("Kể một trải nghiệm thật cho thấy mình phù hợp.", { creative: 2 }),
        H("Mở đầu bằng góc nhìn riêng của mình về công ty.", { creative: 2 }),
        H("Viết theo cách thể hiện được cá tính.", { creative: 2 }),
        H("Kết nối hai lĩnh vực mình biết để tạo điểm khác biệt.", { creative: 2 })
      ]),
      work: A("Bạn cần viết bài giới thiệu sản phẩm mới của công ty. Bạn sẽ…", [
        M("Nhờ AI viết rồi đăng luôn."), M("Chép bài của đối thủ rồi sửa tên."), M("Viết theo đúng khuôn bài cũ."), M("Viết cho đủ số chữ là xong."),
        H("Kể câu chuyện thật của một khách hàng.", { creative: 2 }),
        H("Tìm một góc nhìn chưa ai nói tới.", { creative: 2 }),
        H("Nghĩ ra cách trình bày mới để khách dễ nhớ.", { creative: 2 }),
        H("Kết hợp ý tưởng từ một ngành khác.", { creative: 2 })
      ])
    }),
    // 5 · Analytical thinking
    Q("analytic", [], {
      grad: A("Bạn thấy tin tuyển dụng: \"Lương 30 triệu/tháng cho sinh viên mới ra trường, không cần kinh nghiệm, làm tại nhà!\"", [
        M("Ứng tuyển ngay kẻo hết chỗ."), M("Tin vì có nhiều người bình luận \"đã nhận lương\"."), M("Chia sẻ cho cả lớp cùng ứng tuyển."), M("Gửi CV kèm ảnh căn cước luôn."),
        H("So sánh với mức lương thật của vị trí tương tự.", { analytic: 2 }),
        H("Tra tên công ty, mã số thuế và đánh giá của nhân viên cũ.", { analytic: 2 }),
        H("Tự hỏi họ được lợi gì khi trả lương cao như vậy.", { analytic: 1, creative: 1 }),
        H("Hỏi người quen đang làm trong ngành.", { analytic: 1, curiosity: 1 })
      ]),
      work: A("Trong nhóm chat công ty lan truyền tin: \"Công ty sắp cắt giảm 50% nhân sự!\"", [
        M("Chia sẻ ngay cho các nhóm khác."), M("Tin vì nhiều người đang bàn tán."), M("Nộp đơn nghỉ việc trước cho chắc."), M("Thêm thắt vài chi tiết khi kể lại."),
        H("Hỏi xem tin này từ đâu ra.", { analytic: 2 }),
        H("Chờ thông báo chính thức trước khi kết luận.", { analytic: 2 }),
        H("Xem lại tình hình kinh doanh thật của công ty.", { analytic: 1, curiosity: 1 }),
        H("Hỏi trực tiếp quản lý một cách bình tĩnh.", { analytic: 1, leadership: 1 })
      ])
    }),
    // 6 · Resilience
    Q("resilience", [
      M("Bỏ cuộc luôn."), M("Đổ lỗi cho người khác."), M("Làm lại y hệt như cũ."), M("Không dám thử nữa."),
      H("Buồn một chút rồi thử lại.", { resilience: 2 }),
      H("Tìm hiểu vì sao để lần sau làm khác.", { resilience: 1, analytic: 1 }),
      H("Nhờ người khác góp ý rồi làm lại.", { resilience: 2 }),
      H("Thử một con đường khác.", { resilience: 1, creative: 1 })
    ], {
      grad: A("Bạn gửi hồ sơ tới 10 công ty nhưng đều bị từ chối. Bạn thường…"),
      work: A("Đề xuất bạn chuẩn bị rất kỹ bị cấp trên từ chối. Bạn thường…")
    }),
    // 7 · Curiosity & lifelong learning
    Q("curiosity", [], {
      grad: A("Công việc đầu tiên yêu cầu dùng một phần mềm bạn chưa từng học ở trường.", [
        M("Than \"trường không dạy cái này\"."), M("Chờ công ty đào tạo rồi mới học."), M("Nhờ đồng nghiệp làm giúp mãi."), M("Chỉ học đúng một nút cần bấm."),
        H("Tự tìm video, khoá học ngắn để học trước.", { curiosity: 2 }),
        H("Hỏi người đi trước những mẹo hay.", { curiosity: 1, empathy: 1 }),
        H("Thử làm một việc nhỏ để quen dần.", { curiosity: 1, resilience: 1 }),
        H("Tìm hiểu vì sao công ty chọn phần mềm này.", { curiosity: 2 })
      ]),
      work: A("Công ty bắt đầu dùng một công cụ AI mới cho cả phòng.", [
        M("Né, tiếp tục làm theo cách cũ."), M("Chờ người khác dùng thạo rồi hỏi."), M("Chỉ dùng khi bị nhắc."), M("Phàn nàn rằng cách cũ vẫn tốt."),
        H("Tự thử ngay và ghi lại những gì học được.", { curiosity: 2 }),
        H("Tìm hiểu công cụ này làm được gì và không làm được gì.", { curiosity: 1, ai: 1 }),
        H("Đăng ký một khoá học ngắn về nó.", { curiosity: 2 }),
        H("Chia sẻ mẹo hay cho cả phòng.", { curiosity: 1, talent: 1 })
      ])
    }),
    // 8 · Leadership
    Q("leadership", [], {
      grad: A("Nhóm làm đồ án tốt nghiệp của bạn tranh cãi về hướng làm, sắp đến hạn nộp.", [
        M("Im lặng, ai quyết thì mình theo."), M("Để người học giỏi nhất quyết hết."), M("Làm phần mình rồi mặc kệ."), M("Bốc thăm cho xong."),
        H("Nghe từng người rồi tìm điểm chung.", { leadership: 1, empathy: 1 }),
        H("Đề xuất một hướng thứ ba kết hợp các ý.", { leadership: 1, creative: 1 }),
        H("Chia việc rõ ràng và lên lịch đến hạn nộp.", { leadership: 2 }),
        H("Đề nghị thầy hướng dẫn góp ý để chọn nhanh.", { leadership: 1, analytic: 1 })
      ]),
      work: A("Nhóm dự án của bạn tranh cãi về hướng đi, khách hàng đang chờ.", [
        M("Im lặng, ai quyết thì mình theo."), M("Để người to tiếng nhất quyết định."), M("Rút ra, làm phần của mình thôi."), M("Bỏ phiếu cho xong, không cần hiểu nhau."),
        H("Nghe từng người rồi tìm điểm chung.", { leadership: 1, empathy: 1 }),
        H("Đề xuất một phương án thứ ba hoàn toàn mới.", { leadership: 1, creative: 1 }),
        H("Chia việc rõ ràng và giữ cả nhóm đúng hướng.", { leadership: 2 }),
        H("Đề nghị thử nhanh từng cách để xem cách nào hiệu quả.", { leadership: 1, analytic: 1 })
      ])
    }),
    // 9 · Environment
    Q("environment", [], {
      grad: A("Hội cựu sinh viên nhờ bạn lo một phần cho buổi gặp mặt khoá. Bạn chọn…", [
        M("Mua thật nhiều đồ nhựa dùng một lần cho tiện."), M("Làm y như các khoá trước."), M("Không quan tâm rác sau buổi gặp."), M("In thật nhiều băng rôn để một lần."),
        H("Tính xem buổi gặp tạo ra bao nhiêu rác và cách giảm.", { environment: 1, analytic: 1 }),
        H("Đề xuất dùng đồ tái sử dụng.", { environment: 2 }),
        H("Kêu gọi mọi người mang ly cá nhân.", { environment: 1, leadership: 1 }),
        H("Tận dụng đồ cũ để trang trí.", { environment: 1, creative: 1 })
      ]),
      work: A("Công ty bạn tổ chức hội nghị khách hàng. Bạn lo phần nào?", [
        M("Đặt thật nhiều chai nước nhựa cho tiện."), M("Làm y như năm ngoái."), M("Không quan tâm rác sau hội nghị."), M("In tài liệu giấy cho từng khách."),
        H("Tính lượng rác, điện năng của sự kiện và cách giảm.", { environment: 1, analytic: 1 }),
        H("Gửi tài liệu điện tử thay cho bản in.", { environment: 2 }),
        H("Thuyết phục ban tổ chức dùng đồ tái sử dụng.", { environment: 1, leadership: 1 }),
        H("Chọn quà tặng thân thiện với môi trường.", { environment: 1, creative: 1 })
      ])
    }),
    // 10 · Service orientation
    Q("service", [], {
      grad: A("Bạn đang làm thêm ở quán cà phê. Một khách phàn nàn vì nhận sai món.", [
        M("Cãi rằng khách gọi nhầm."), M("Im lặng làm lại, mặt khó chịu."), M("Bảo khách tự ra quầy đổi."), M("Gọi quản lý rồi bỏ đi."),
        H("Xin lỗi và làm lại món đúng ngay.", { service: 2 }),
        H("Hỏi khách có muốn đổi món khác không.", { service: 2 }),
        H("Lắng nghe hết rồi mới giải thích.", { service: 1, empathy: 1 }),
        H("Ghi lại để lần sau ghi món kỹ hơn.", { service: 1, analytic: 1 })
      ]),
      work: A("Một khách hàng gọi đến phàn nàn sản phẩm của công ty bị lỗi.", [
        M("Cãi lại rằng đó không phải lỗi của mình."), M("Đọc đúng câu trả lời có sẵn."), M("Chuyển máy cho người khác rồi thôi."), M("Hứa sẽ xử lý rồi quên luôn."),
        H("Lắng nghe hết rồi xin lỗi.", { service: 1, empathy: 1 }),
        H("Đổi sản phẩm hoặc tìm cách giải quyết ngay.", { service: 2 }),
        H("Hỏi để hiểu khách thật sự cần gì.", { service: 2 }),
        H("Ghi lại để lần sau làm tốt hơn.", { service: 1, analytic: 1 })
      ])
    }),
    // 11 · Talent management
    Q("talent", [
      M("Làm luôn phần của người đó cho nhanh."), M("Mặc kệ."), M("Than phiền với cả nhóm."), M("Giao việc dễ nhất rồi thôi."),
      H("Chỉ cho người đó từng bước.", { talent: 2 }),
      H("Tìm việc hợp với thế mạnh của người đó.", { talent: 2 }),
      H("Khen khi người đó tiến bộ.", { talent: 1, empathy: 1 }),
      H("Hỏi người đó đang cần giúp gì.", { talent: 1, empathy: 1 })
    ], {
      grad: A("Một bạn thực tập cùng đợt còn làm chậm và hay hỏi lại."),
      work: A("Một nhân viên mới trong nhóm bạn còn làm chậm.")
    }),
    // 12 · Motivation & self-awareness
    Q("motivation", [], {
      grad: A("Sắp bước vào công việc đầu tiên, bạn biết rõ điều gì về bản thân?", [
        M("Chưa bao giờ nghĩ tới."), M("Chỉ biết điểm tốt nghiệp của mình."), M("Ai khuyên ngành nào thì theo ngành đó."), M("Đi làm vì gia đình bảo vậy."),
        H("Mình giỏi gì và cần cải thiện gì.", { motivation: 2 }),
        H("Kiểu công việc nào khiến mình muốn cố gắng.", { motivation: 2 }),
        H("Mình làm việc tốt nhất trong môi trường nào.", { motivation: 2 }),
        H("Mục tiêu mình muốn đạt sau 1 năm đi làm.", { motivation: 2 })
      ]),
      work: A("Sau vài năm đi làm, bạn biết rõ điều gì về bản thân?", [
        M("Chưa bao giờ nghĩ tới."), M("Chỉ biết điểm KPI của mình."), M("Sếp đánh giá sao thì tin vậy."), M("Làm vì đã quen, không nghĩ nữa."),
        H("Mình giỏi gì và cần cải thiện gì.", { motivation: 2 }),
        H("Phần việc nào khiến mình hứng thú nhất.", { motivation: 2 }),
        H("Khi nào mình làm việc hiệu quả nhất.", { motivation: 2 }),
        H("Mình muốn ở đâu trong 3 năm tới.", { motivation: 2 })
      ])
    }),
    // 13 · Technological literacy
    Q("techlit", [], {
      grad: A("10 phút trước buổi phỏng vấn online, laptop của bạn bỗng chạy rất chậm.", [
        M("Đập bàn phím."), M("Hoảng và huỷ buổi phỏng vấn."), M("Mặc kệ, vào phỏng vấn với máy giật lag."), M("Ngồi chờ máy tự hết chậm."),
        H("Tắt các ứng dụng đang chiếm bộ nhớ.", { techlit: 2 }),
        H("Khởi động lại máy và kiểm tra mạng.", { techlit: 2 }),
        H("Chuẩn bị điện thoại làm phương án dự phòng.", { techlit: 1, resilience: 1 }),
        H("Báo trước cho nhà tuyển dụng nếu có thể trễ vài phút.", { techlit: 1, service: 1 })
      ]),
      work: A("Máy tính làm việc của bạn bỗng chạy chậm bất thường.", [
        M("Đập bàn phím."), M("Chờ người khác sửa giùm."), M("Mặc kệ, dùng tiếp."), M("Đòi đổi máy mới luôn."),
        H("Kiểm tra ứng dụng nào đang chiếm bộ nhớ.", { techlit: 2 }),
        H("Tìm cách khắc phục trên mạng.", { techlit: 1, curiosity: 1 }),
        H("Cập nhật phần mềm.", { techlit: 1, cyber: 1 }),
        H("Dọn bớt những tệp không cần.", { techlit: 2 })
      ])
    }),

    // 14 · Analytical thinking
    Q("analytic", [], {
      grad: A("Bạn nhận được hai lời mời làm việc cùng lúc. Bạn chọn thế nào?", [
        M("Chọn chỗ lương cao hơn, không cần xem gì khác."), M("Chọn chỗ bạn bè đang làm."), M("Bốc thăm."), M("Chọn chỗ trả lời trước."),
        H("Liệt kê ưu và nhược điểm của từng nơi.", { analytic: 2 }),
        H("So sánh cơ hội học hỏi và lộ trình phát triển.", { analytic: 2 }),
        H("Tính cả thời gian đi lại và chi phí sống.", { analytic: 2 }),
        H("Hỏi người đang làm ở hai nơi đó.", { analytic: 1, curiosity: 1 })
      ]),
      work: A("Nhóm bạn phải chọn giữa hai ý tưởng dự án.", [
        M("Chọn ý được nói ra đầu tiên."), M("Chọn theo người to tiếng nhất."), M("Bốc thăm."), M("Chọn cái dễ nhất cho xong."),
        H("Liệt kê ưu và nhược điểm của từng ý.", { analytic: 2 }),
        H("Thử làm nhỏ cả hai rồi so sánh.", { analytic: 1, resilience: 1 }),
        H("Hỏi xem ý nào giải quyết đúng vấn đề.", { analytic: 2 }),
        H("Ước tính thời gian và chi phí của mỗi ý.", { analytic: 2 })
      ])
    }),
    // 15 · Technological literacy
    Q("techlit", [
      M("Nhờ người khác làm hết."), M("Quay một đoạn rồi gửi, không chỉnh gì."), M("Không làm vì không biết cách."), M("Chép video của người khác."),
      H("Tự học một ứng dụng dựng video.", { techlit: 1, curiosity: 1 }),
      H("Dùng AI để tạo phụ đề và nhạc nền.", { techlit: 1, ai: 1 }),
      H("Lên kịch bản trước khi quay.", { techlit: 1, creative: 1 }),
      H("Chỉ người khác cách làm cùng.", { techlit: 1, talent: 1 })
    ], {
      grad: A("Nhà tuyển dụng yêu cầu gửi một video 1 phút giới thiệu bản thân."),
      work: A("Bạn cần làm một video ngắn giới thiệu sản phẩm cho khách hàng.")
    }),
    // 16 · Environment
    Q("environment", [], {
      grad: A("Ở phòng trọ hoặc ký túc xá, hằng ngày bạn thường…", [
        M("Gọi đồ ăn kèm hộp nhựa mỗi bữa."), M("Để điều hoà chạy cả khi ra ngoài."), M("Vứt rác chung, không phân loại."), M("Mua đồ mới, đồ cũ vứt luôn."),
        H("Mang bình nước và hộp cơm riêng.", { environment: 2 }),
        H("Phân loại rác.", { environment: 2 }),
        H("Tắt điện, điều hoà khi ra ngoài.", { environment: 2 }),
        H("Trao đổi, bán lại đồ cũ thay vì vứt.", { environment: 1, creative: 1 })
      ]),
      work: A("Ở văn phòng, hằng ngày bạn thường…", [
        M("In tài liệu ra giấy cho dễ đọc."), M("Dùng cốc nhựa một lần mỗi lần pha cà phê."), M("Để máy tính và đèn chạy qua đêm."), M("Không biết rác văn phòng đi đâu."),
        H("Đọc và chia sẻ tài liệu bằng file.", { environment: 2 }),
        H("Dùng cốc và bình nước riêng.", { environment: 2 }),
        H("Tắt máy, tắt đèn khi về.", { environment: 2 }),
        H("Đề xuất văn phòng phân loại rác.", { environment: 1, leadership: 1 })
      ])
    }),
    // 17 · Leadership
    Q("leadership", [
      M("Ngồi im chờ người khác."), M("Từ chối vì sợ làm sai."), M("Đẩy việc cho trưởng nhóm."), M("Đồng ý nhưng không làm gì."),
      H("Xung phong và rủ thêm vài người.", { leadership: 2 }),
      H("Trình bày ý tưởng để mọi người hào hứng.", { leadership: 2 }),
      H("Chia việc theo thế mạnh từng người.", { leadership: 1, talent: 1 }),
      H("Nhận một phần việc và làm thật tốt.", { leadership: 1, motivation: 1 })
    ], {
      grad: A("Công ty cần người đứng ra tổ chức buổi gặp mặt cho nhân viên mới, nhưng không ai xung phong."),
      work: A("Phòng bạn cần người dẫn dắt một dự án mới, nhưng không ai nhận.")
    }),
    // 18 · Cybersecurity
    Q("cyber", [], {
      grad: A("Bạn tạo tài khoản trên nhiều trang tìm việc. Mật khẩu của bạn…", [
        M("Là ngày sinh của mình."), M("Dùng chung một mật khẩu cho mọi trang."), M("Lưu trong ghi chú điện thoại, ai mở cũng thấy."), M("Gửi cho bạn bè để nhờ nộp hồ sơ giúp."),
        H("Dài, có chữ, số và ký hiệu.", { cyber: 2 }),
        H("Mỗi trang một mật khẩu riêng.", { cyber: 2 }),
        H("Được lưu trong trình quản lý mật khẩu.", { cyber: 1, techlit: 1 }),
        H("Chỉ đăng ký trên các trang tuyển dụng uy tín.", { cyber: 1, analytic: 1 })
      ]),
      work: A("Mật khẩu tài khoản công ty của bạn…", [
        M("Là ngày sinh của mình."), M("Giống hệt mật khẩu Facebook cá nhân."), M("Được ghi ra giấy dán ở bàn làm việc."), M("Được chia sẻ cho đồng nghiệp khi cần."),
        H("Dài, có chữ, số và ký hiệu.", { cyber: 2 }),
        H("Khác hoàn toàn với mật khẩu cá nhân.", { cyber: 2 }),
        H("Được lưu trong trình quản lý mật khẩu.", { cyber: 1, techlit: 1 }),
        H("Được đổi ngay khi nghi bị lộ.", { cyber: 2 })
      ])
    }),
    // 19 · Empathy
    Q("empathy", [], {
      grad: A("Trong nhóm thực tập có một bạn rất ít nói, hay ngồi một mình.", [
        M("Mặc kệ, ít nói thì thôi."), M("Trêu bạn ấy cho vui."), M("Nghĩ bạn ấy không muốn chơi với ai."), M("Giao việc mà không hỏi bạn ấy."),
        H("Rủ bạn ấy đi ăn trưa cùng.", { empathy: 2 }),
        H("Để ý xem bạn ấy có ổn không.", { empathy: 2 }),
        H("Hỏi ý kiến bạn ấy khi cả nhóm bàn việc.", { empathy: 1, leadership: 1 }),
        H("Lắng nghe kỹ khi bạn ấy nói.", { empathy: 2 })
      ]),
      work: A("Trong nhóm có một người rất ít nói trong các buổi họp.", [
        M("Mặc kệ, ít nói thì thôi."), M("Nói thay người đó luôn."), M("Nghĩ người đó không có ý kiến gì."), M("Giao việc mà không hỏi người đó."),
        H("Hỏi riêng ý kiến của người đó.", { empathy: 2 }),
        H("Để ý xem người đó có ổn không.", { empathy: 2 }),
        H("Tạo cơ hội để người đó được nói.", { empathy: 1, leadership: 1 }),
        H("Lắng nghe kỹ khi người đó nói.", { empathy: 2 })
      ])
    }),
    // 20 · Motivation & self-awareness
    Q("motivation", [], {
      grad: A("Trong lúc chờ kết quả xin việc, không ai bắt buộc, bạn…", [
        M("Ngủ và lướt mạng chờ tin."), M("Bắt đầu nhiều thứ nhưng bỏ dở hết."), M("Chờ có hứng mới làm gì đó."), M("Chỉ làm khi bố mẹ nhắc."),
        H("Tự đặt mục tiêu nhỏ mỗi tuần, ví dụ học một kỹ năng.", { motivation: 2 }),
        H("Theo dõi những gì mình đã làm được mỗi ngày.", { motivation: 1, analytic: 1 }),
        H("Tự thưởng khi hoàn thành mục tiêu.", { motivation: 2 }),
        H("Khi nản, nhớ lại lý do mình chọn ngành này.", { motivation: 1, resilience: 1 })
      ]),
      work: A("Ngoài giờ làm, không ai bắt buộc, bạn có tự phát triển bản thân đều đặn không?", [
        M("Không, đi làm về là nghỉ."), M("Bắt đầu nhiều khoá học nhưng bỏ dở hết."), M("Chờ công ty cử đi học."), M("Chỉ học khi sắp bị đánh giá."),
        H("Có, mình tự đặt mục tiêu nhỏ mỗi tháng.", { motivation: 2 }),
        H("Mình theo dõi tiến bộ của bản thân.", { motivation: 1, analytic: 1 }),
        H("Mình tự thưởng khi hoàn thành.", { motivation: 2 }),
        H("Khi nản, mình nhớ lại lý do mình bắt đầu.", { motivation: 1, resilience: 1 })
      ])
    }),
    // 21 · AI & big data
    Q("ai", [], {
      grad: A("Bạn có kết quả khảo sát 200 sinh viên cho khoá luận tốt nghiệp. Bạn làm gì với nó?", [
        M("Để đó, nhiều số quá."), M("Chỉ lấy con số đẹp nhất để viết."), M("Chép nguyên bảng vào khoá luận."), M("Nhờ bạn khác phân tích hộ."),
        H("Vẽ biểu đồ để thấy xu hướng.", { ai: 1, analytic: 1 }),
        H("Dùng bảng tính hoặc AI để lọc và đếm.", { ai: 2 }),
        H("Tìm điều bất ngờ trong dữ liệu.", { ai: 1, curiosity: 1 }),
        H("Kiểm tra dữ liệu có bị trùng hay sai không.", { ai: 2 })
      ]),
      work: A("Bạn nhận được dữ liệu bán hàng 12 tháng của công ty. Bạn làm gì với nó?", [
        M("Để đó, nhiều số quá."), M("Chỉ nhìn tổng doanh thu."), M("Chép nguyên bảng vào báo cáo."), M("Nhờ người khác đọc giùm."),
        H("Vẽ biểu đồ để thấy xu hướng theo tháng.", { ai: 1, analytic: 1 }),
        H("Dùng bảng tính hoặc AI để lọc và tìm sản phẩm bán chạy.", { ai: 2 }),
        H("Tìm điều bất ngờ trong dữ liệu.", { ai: 1, curiosity: 1 }),
        H("Biến số liệu thành câu chuyện dễ hiểu cho sếp.", { ai: 1, creative: 1 })
      ])
    }),
    // 22 · Service orientation
    Q("service", [], {
      grad: A("Ở ngày hội việc làm, một bạn khoá dưới nhờ bạn xem giúp CV.", [
        M("Bảo \"bận lắm\" rồi đi."), M("Nhìn qua rồi bảo \"ổn mà\"."), M("Gửi CV của mình cho bạn ấy chép."), M("Chê thẳng rồi thôi."),
        H("Ngồi xem kỹ và góp ý từng phần.", { service: 2 }),
        H("Hỏi bạn ấy đang ứng tuyển vị trí gì.", { service: 1, empathy: 1 }),
        H("Hẹn một buổi khác nếu đang vội.", { service: 2 }),
        H("Gợi ý vài mẫu và nguồn tham khảo tốt.", { service: 1, talent: 1 })
      ]),
      work: A("Một khách hàng gọi hỏi một việc không thuộc bộ phận của bạn.", [
        M("Bảo \"không phải việc của tôi\"."), M("Cúp máy cho nhanh."), M("Trả lời đại cho xong."), M("Bảo khách tự gọi tổng đài lại."),
        H("Hỏi rõ khách cần gì rồi chuyển đúng người.", { service: 2 }),
        H("Ghi lại thông tin để người phụ trách gọi lại.", { service: 2 }),
        H("Báo khách thời gian dự kiến được trả lời.", { service: 1, empathy: 1 }),
        H("Gọi lại kiểm tra xem khách đã được giúp chưa.", { service: 2 })
      ])
    }),
    // 23 · Creative thinking
    Q("creative", [], {
      grad: A("Bạn có một tuần rảnh trước khi đi làm. Bạn chọn…", [
        M("Lướt mạng cả tuần."), M("Xem hết video này đến video khác tự phát."), M("Chơi đi chơi lại một game."), M("Ngủ bù cả tuần."),
        H("Làm ra thứ gì đó: vẽ, viết, nấu ăn, chế đồ.", { creative: 2 }),
        H("Thử một ý tưởng kinh doanh nhỏ.", { creative: 1, curiosity: 1 }),
        H("Biến đồ cũ trong phòng thành đồ mới.", { creative: 1, environment: 1 }),
        H("Làm một dự án cá nhân để đưa vào hồ sơ.", { creative: 1, motivation: 1 })
      ]),
      work: A("Một ngày nghỉ cuối tuần, bạn chọn…", [
        M("Lướt mạng cả ngày."), M("Xem hết video này đến video khác tự phát."), M("Chơi đi chơi lại một game."), M("Làm cho xong việc mang về nhà."),
        H("Làm ra thứ gì đó: vẽ, viết, nấu ăn, chế đồ.", { creative: 2 }),
        H("Thử một ý tưởng hay công thức mới.", { creative: 1, curiosity: 1 }),
        H("Biến một món đồ cũ thành đồ mới.", { creative: 1, environment: 1 }),
        H("Lên kế hoạch cho một dự án riêng.", { creative: 1, motivation: 1 })
      ])
    }),
    // 24 · Talent management
    Q("talent", [
      M("Làm hộ luôn cho nhanh."), M("Cười chê người đó."), M("Không quan tâm."), M("Bảo \"tự lên mạng xem đi\"."),
      H("Giải thích lại theo cách dễ hiểu hơn.", { talent: 2 }),
      H("Để người đó tự làm rồi góp ý.", { talent: 2 }),
      H("Hẹn hướng dẫn thêm vài buổi.", { talent: 1, leadership: 1 }),
      H("Chia sẻ tài liệu và mẹo của mình.", { talent: 1, service: 1 })
    ], {
      grad: A("Bạn dùng Excel rất giỏi, còn một bạn thực tập cùng đợt chưa biết dùng."),
      work: A("Bạn rành một phần mềm mà đồng nghiệp mới chưa biết dùng.")
    }),
    // 25 · Resilience
    Q("resilience", [], {
      grad: A("Công ty bạn sắp vào làm bỗng báo dời ngày nhận việc thêm 1 tháng.", [
        M("Bực bội cả tháng."), M("Nằm chờ, không làm gì."), M("Đổ lỗi cho công ty rồi bỏ luôn."), M("Than phiền trên mạng."),
        H("Dùng 1 tháng đó để học thêm kỹ năng cần cho công việc.", { resilience: 1, curiosity: 1 }),
        H("Bình tĩnh chấp nhận và lên kế hoạch mới.", { resilience: 2 }),
        H("Tìm một việc làm thêm ngắn hạn.", { resilience: 2 }),
        H("Hỏi công ty có thể làm gì để chuẩn bị trước.", { resilience: 1, motivation: 1 })
      ]),
      work: A("Sự kiện ngoài trời của công ty bị huỷ phút chót vì mưa.", [
        M("Bực bội cả ngày."), M("Về nhà, không làm gì nữa."), M("Đổ lỗi cho người lên kế hoạch."), M("Than phiền trên mạng."),
        H("Nghĩ ngay một kế hoạch B trong nhà.", { resilience: 1, creative: 1 }),
        H("Vui vẻ chấp nhận và chuyển sang việc khác.", { resilience: 2 }),
        H("Giúp mọi người bình tĩnh lại.", { resilience: 1, leadership: 1 }),
        H("Hẹn ngày khác và chuẩn bị tốt hơn.", { resilience: 2 })
      ])
    }),
    // 26 · Curiosity & lifelong learning
    Q("curiosity", [], {
      grad: A("Trong buổi phỏng vấn, người ta nhắc đến một khái niệm bạn chưa nghe bao giờ.", [
        M("Gật gù như đã biết."), M("Bỏ qua, về nhà quên luôn."), M("Nghĩ \"chắc không quan trọng\"."), M("Chỉ đọc tiêu đề trên mạng rồi thôi."),
        H("Thành thật hỏi lại ngay trong buổi phỏng vấn.", { curiosity: 2 }),
        H("Về nhà tìm hiểu cho kỹ.", { curiosity: 2 }),
        H("Ghi lại để hỏi người trong ngành.", { curiosity: 2 }),
        H("Liên hệ nó với những gì mình đã học.", { curiosity: 1, analytic: 1 })
      ]),
      work: A("Trong cuộc họp, khách hàng nhắc đến một xu hướng mới bạn chưa biết.", [
        M("Gật gù như đã biết."), M("Bỏ qua vì không liên quan công việc hiện tại."), M("Đợi khi nào sếp yêu cầu mới học."), M("Chỉ đọc tiêu đề rồi thôi."),
        H("Tìm sách hoặc báo cáo để hiểu thêm.", { curiosity: 2 }),
        H("Hỏi người am hiểu về xu hướng đó.", { curiosity: 2 }),
        H("Ghi lại câu hỏi để tìm hiểu dần.", { curiosity: 2 }),
        H("Nghĩ xem nó ảnh hưởng gì đến công việc của mình.", { curiosity: 1, analytic: 1 })
      ])
    })
  ];

  // One "harmful" answer per question, added for each audience. Its minus points lower only the skill bar
  // (the 13 skills), not the overall hard-to-replace score.
  // A plain text is used for both audiences; { grad, work } gives each audience its own.
  const NEG_POINTS = -2;
  const NEG = [
    "Dùng AI làm hết rồi nói là mình tự làm.",
    "Đem chuyện buồn của người đó kể cho người khác nghe.",
    { grad: "Gửi luôn mật khẩu email cho \"nhà tuyển dụng\" để họ xác minh.", work: "Trả lời email, gửi mật khẩu để \"Phòng IT\" xử lý giúp." },
    { grad: "Chép nguyên thư xin việc của bạn mình rồi đổi tên.", work: "Lấy ý tưởng của đồng nghiệp rồi nói là của mình." },
    { grad: "Thêm thắt cho tin hấp dẫn hơn rồi chia sẻ.", work: "Tự đoán danh sách người bị cắt giảm rồi lan truyền." },
    "Lên mạng nói xấu người đã từ chối mình.",
    { grad: "Nói dối là mình đã biết dùng phần mềm đó rồi.", work: "Cản trở người khác dùng công cụ mới." },
    { grad: "Lén sửa phần của người khác theo ý mình.", work: "Nói xấu người có ý kiến khác sau lưng." },
    { grad: "Đề xuất thả bóng bay và bắn pháo giấy nhựa cho vui.", work: "Tặng mỗi khách một món quà nhựa dùng một lần cho sang." },
    { grad: "Nói với khách \"không thích thì đi quán khác\".", work: "Đăng chuyện khách phàn nàn lên mạng để chê khách." },
    "Chê bai người đó trước mặt cả nhóm.",
    "Tự nhủ \"mình chẳng giỏi gì cả\" rồi thôi không nghĩ nữa.",
    { grad: "Tải phần mềm \"tăng tốc máy\" lạ trên mạng về cài ngay.", work: "Tải phần mềm lậu \"tăng tốc máy\" về máy công ty." },
    { grad: "Nhận lời cả hai nơi rồi im lặng không đi chỗ nào.", work: "Chọn ý của mình và giấu số liệu bất lợi." },
    "Lấy video của người khác rồi ghi là của mình.",
    { grad: "Đốt rác ngay sau dãy trọ cho nhanh.", work: "Bỏ pin và hộp mực in cũ chung với rác thường." },
    "Nhận lời rồi đẩy hết việc cho người khác làm.",
    { grad: "Đăng CV có số căn cước và địa chỉ nhà công khai lên mạng.", work: "Đăng nhập tài khoản công ty ở máy quán net rồi không đăng xuất." },
    { grad: "Bàn tán, trêu chọc bạn ấy với cả nhóm.", work: "Chế giễu người đó trong nhóm chat." },
    "Tự trách mình vô dụng rồi bỏ mặc mọi thứ.",
    { grad: "Sửa bớt số liệu cho kết quả đẹp hơn.", work: "Sửa số liệu cho báo cáo đẹp hơn." },
    { grad: "Chê CV của bạn ấy trước mặt mọi người.", work: "Nói với khách \"bộ phận kia làm ăn kém lắm\"." },
    "Chép dự án của người khác rồi nhận là của mình.",
    "Cố tình chỉ sai để người đó không giỏi hơn mình.",
    { grad: "Lên mạng đăng bài nói xấu công ty.", work: "Trút giận lên người lên kế hoạch trước mặt mọi người." },
    { grad: "Cãi rằng khái niệm đó sai dù không biết nó là gì.", work: "Gạt đi ngay vì \"xưa nay không ai làm vậy\"." }
  ];
  // "Machine" answers (written with M, no points) take MACHINE_POINTS off the question's skill.
  const MACHINE_POINTS = -2;
  const machine = (list, skill) => list.forEach((x) => { if (!Object.keys(x.s).length) x.s = { [skill]: MACHINE_POINTS }; });
  window.QUESTIONS.forEach((q) => {
    machine(q.o, q.skill);
    ["grad", "work"].forEach((a) => { const v = q.aud[a]; if (Array.isArray(v.o)) machine(v.o, q.skill); });
  });

  window.QUESTIONS.forEach((q, i) => {
    const n = NEG[i], add = (list, text) => list.push({ t: { vi: text, en: text }, s: { [q.skill]: NEG_POINTS }, harm: true });
    if (q.o.length) add(q.o, typeof n === "string" ? n : n.grad);
    ["grad", "work"].forEach((a) => {
      const v = q.aud[a];
      if (Array.isArray(v.o) && v.o.length) add(v.o, typeof n === "string" ? n : n[a]);
    });
  });
}
