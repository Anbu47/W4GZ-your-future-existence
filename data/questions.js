// 26 questions: 2 for each of the 13 WEF skills (keys in data/results.js).
// Shown in this order, with a skill test (data/challenges.js) after every 2 questions.
// Each question: 4 "machine" answers M (0 points) + 4 "human" answers H (points). Answer order is shuffled on screen.
// H(text, { skill: points }) — keep each answer at 2 points or less.
// "skill" = the skill this question is mainly about. Vietnamese first; English to be added.
{
  const M = (vi, en) => ({ t: { vi, en: en || vi }, s: {} });
  const H = (vi, s, en) => ({ t: { vi, en: en || vi }, s });
  const Q = (skill, vi, o, en) => ({ skill, q: { vi, en: en || vi }, o });

  window.QUESTIONS = [
    Q("ai", "Thầy cô cho phép dùng AI để làm bài nghiên cứu. Bạn sẽ…", [
      M("Chép nguyên câu trả lời của AI."), M("Nhờ AI viết hết rồi nộp."), M("Không dám dùng vì sợ sai."), M("Hỏi AI một lần, được gì lấy nấy."),
      H("Hỏi AI theo nhiều cách để so sánh các câu trả lời.", { ai: 2 }),
      H("Nhờ AI gợi ý dàn ý rồi tự viết.", { ai: 1, creative: 1 }),
      H("Kiểm tra lại các số liệu mà AI đưa ra.", { ai: 1, analytic: 1 }),
      H("Ghi rõ phần nào mình đã dùng AI hỗ trợ.", { ai: 2 })
    ]),
    Q("empathy", "Bạn thân của bạn buồn vì trượt một kỳ thi. Bạn…", [
      M("Gửi một link \"10 cách vượt qua thất bại\"."), M("Bảo \"có gì đâu mà buồn\"."), M("Kể ngay chuyện của mình cho bạn nghe."), M("Khuyên \"lần sau học chăm hơn là được\"."),
      H("Ngồi nghe bạn kể, không vội khuyên.", { empathy: 2 }),
      H("Hỏi bạn đang cảm thấy thế nào.", { empathy: 2 }),
      H("Nghe xong rồi mới kể lần mình cũng từng thất bại.", { empathy: 2 }),
      H("Rủ bạn làm một việc vui để đổi không khí.", { empathy: 1, service: 1 })
    ]),
    Q("cyber", "Bạn nhận tin nhắn: \"Tài khoản của bạn bị khoá. Bấm vào link và nhập mật khẩu để mở lại.\"", [
      M("Bấm vào link ngay."), M("Nhập mật khẩu cho nhanh."), M("Tin vì tin nhắn có logo thật."), M("Trả lời tin nhắn để hỏi lại."),
      H("Không bấm, tự mở ứng dụng chính thức để kiểm tra.", { cyber: 2 }),
      H("Xem kỹ người gửi và địa chỉ đường link.", { cyber: 2 }),
      H("Báo cho người lớn hoặc nhà trường.", { cyber: 1, service: 1 }),
      H("Bật xác thực hai lớp cho tài khoản.", { cyber: 2 })
    ]),
    Q("creative", "Bài tập: viết một câu chuyện ngắn. Bạn sẽ…", [
      M("Nhờ AI viết rồi nộp."), M("Chép một truyện có sẵn."), M("Viết đúng theo dàn ý mẫu trong sách."), M("Viết cho đủ số chữ là xong."),
      H("Lấy cảm hứng từ chuyện thật của mình.", { creative: 2 }),
      H("Tạo một nhân vật chưa ai từng thấy.", { creative: 2 }),
      H("Kể theo một góc nhìn lạ, ví dụ của một đồ vật.", { creative: 2 }),
      H("Kết hợp hai thể loại khác nhau.", { creative: 2 })
    ]),
    Q("analytic", "Bạn thấy một tin \"hot\" trên mạng có vẻ đáng ngờ.", [
      M("Chia sẻ ngay cho kịp."), M("Tin vì nhiều người đã chia sẻ."), M("Bình luận theo đám đông."), M("Mặc kệ, đúng sai gì cũng được."),
      H("Kiểm tra nguồn tin trước khi tin.", { analytic: 2 }),
      H("Tìm thêm một nguồn thứ hai để đối chiếu.", { analytic: 2 }),
      H("Tự hỏi ai được lợi khi tin này lan ra.", { analytic: 1, creative: 1 }),
      H("Kiểm tra xem ảnh có phải do AI tạo ra không.", { analytic: 1, ai: 1 })
    ]),
    Q("resilience", "Khi thất bại — trượt kỳ thi, bị từ chối — bạn thường…", [
      M("Bỏ cuộc luôn."), M("Đổ lỗi cho người khác."), M("Làm lại y hệt như cũ."), M("Không dám thử nữa."),
      H("Buồn một chút rồi thử lại.", { resilience: 2 }),
      H("Tìm hiểu vì sao để lần sau làm khác.", { resilience: 1, analytic: 1 }),
      H("Nhờ người khác giúp và cùng làm lại.", { resilience: 2 }),
      H("Thử một con đường khác.", { resilience: 1, creative: 1 })
    ]),
    Q("curiosity", "Bạn thường học một điều mới bằng cách nào?", [
      M("Học thuộc những gì được dạy."), M("Chép bài của bạn."), M("Chỉ đọc bản tóm tắt có sẵn."), M("Chờ thầy cô giảng lại."),
      H("Thử, sai, rồi thử lại.", { curiosity: 1, resilience: 1 }),
      H("Hỏi \"tại sao\" và tìm nhiều nguồn khác nhau.", { curiosity: 2 }),
      H("Giảng lại cho người khác.", { curiosity: 1, talent: 1 }),
      H("Làm một dự án nhỏ để áp dụng.", { curiosity: 1, creative: 1 })
    ]),
    Q("leadership", "Nhóm bạn tranh cãi về cách làm dự án chung.", [
      M("Im lặng, ai quyết thì mình theo."), M("Để người to tiếng nhất quyết định."), M("Bỏ nhóm, làm một mình."), M("Bỏ phiếu cho xong, không cần hiểu nhau."),
      H("Nghe từng người rồi tìm điểm chung.", { leadership: 1, empathy: 1 }),
      H("Đề xuất một phương án thứ ba hoàn toàn mới.", { leadership: 1, creative: 1 }),
      H("Chia việc rõ ràng và giữ cả nhóm đúng hướng.", { leadership: 2 }),
      H("Đề nghị thử nhanh từng cách để xem cách nào hiệu quả.", { leadership: 1, analytic: 1 })
    ]),
    Q("environment", "Lớp bạn tổ chức hội chợ. Bạn lo phần nào?", [
      M("Mua thật nhiều đồ nhựa dùng một lần cho tiện."), M("Làm y như năm ngoái."), M("Không quan tâm rác sau hội chợ."), M("In thật nhiều tờ rơi giấy."),
      H("Tính xem hội chợ tạo ra bao nhiêu rác và cách giảm.", { environment: 1, analytic: 1 }),
      H("Đề xuất dùng đồ tái sử dụng.", { environment: 2 }),
      H("Kêu gọi mọi người mang ly cá nhân.", { environment: 1, leadership: 1 }),
      H("Biến đồ cũ thành đồ trang trí.", { environment: 1, creative: 1 })
    ]),
    Q("service", "Bạn bán hàng ở hội chợ. Một khách phàn nàn sản phẩm bị lỗi.", [
      M("Cãi lại rằng đó không phải lỗi của mình."), M("Đọc đúng câu trả lời có sẵn."), M("Bảo khách đi chỗ khác."), M("Im lặng chờ khách tự đi."),
      H("Lắng nghe hết rồi xin lỗi.", { service: 1, empathy: 1 }),
      H("Đổi sản phẩm hoặc tìm cách giải quyết ngay.", { service: 2 }),
      H("Hỏi để hiểu khách thật sự cần gì.", { service: 2 }),
      H("Ghi lại để lần sau làm tốt hơn.", { service: 1, analytic: 1 })
    ]),
    Q("talent", "Một bạn mới vào nhóm còn làm chậm.", [
      M("Làm luôn phần của bạn ấy cho nhanh."), M("Mặc kệ."), M("Than phiền với cả nhóm."), M("Giao việc dễ nhất rồi thôi."),
      H("Chỉ cho bạn ấy từng bước.", { talent: 2 }),
      H("Tìm việc hợp với thế mạnh của bạn ấy.", { talent: 2 }),
      H("Khen khi bạn ấy tiến bộ.", { talent: 1, empathy: 1 }),
      H("Hỏi bạn ấy đang cần giúp gì.", { talent: 1, empathy: 1 })
    ]),
    Q("motivation", "Bạn biết rõ điều gì về bản thân?", [
      M("Chưa bao giờ nghĩ tới."), M("Chỉ biết điểm số của mình."), M("Ai nói gì về mình thì tin vậy."), M("Mình làm việc vì bị bắt phải làm."),
      H("Mình giỏi gì và cần cải thiện gì.", { motivation: 2 }),
      H("Điều gì khiến mình muốn cố gắng.", { motivation: 2 }),
      H("Khi nào mình làm việc tốt nhất.", { motivation: 2 }),
      H("Mục tiêu mình muốn đạt trong năm nay.", { motivation: 2 })
    ]),
    Q("techlit", "Máy tính của bạn bỗng chạy chậm bất thường.", [
      M("Đập bàn phím."), M("Chờ người khác sửa giùm."), M("Mặc kệ, dùng tiếp."), M("Đòi mua máy mới luôn."),
      H("Kiểm tra ứng dụng nào đang chiếm bộ nhớ.", { techlit: 2 }),
      H("Tìm cách khắc phục trên mạng.", { techlit: 1, curiosity: 1 }),
      H("Cập nhật phần mềm.", { techlit: 1, cyber: 1 }),
      H("Dọn bớt những tệp không cần.", { techlit: 2 })
    ]),

    Q("analytic", "Nhóm bạn phải chọn giữa hai ý tưởng dự án.", [
      M("Chọn ý được nói ra đầu tiên."), M("Chọn theo người to tiếng nhất."), M("Bốc thăm."), M("Chọn cái dễ nhất cho xong."),
      H("Liệt kê ưu và nhược điểm của từng ý.", { analytic: 2 }),
      H("Thử làm nhỏ cả hai rồi so sánh.", { analytic: 1, resilience: 1 }),
      H("Hỏi xem ý nào giải quyết đúng vấn đề.", { analytic: 2 }),
      H("Ước tính thời gian và chi phí của mỗi ý.", { analytic: 2 })
    ]),
    Q("techlit", "Bạn cần làm một video giới thiệu lớp.", [
      M("Nhờ người khác làm hết."), M("Quay một đoạn rồi đăng, không chỉnh gì."), M("Không làm vì không biết cách."), M("Chép video của lớp khác."),
      H("Tự học một ứng dụng dựng video.", { techlit: 1, curiosity: 1 }),
      H("Dùng AI để tạo phụ đề và nhạc nền.", { techlit: 1, ai: 1 }),
      H("Lên kịch bản trước khi quay.", { techlit: 1, creative: 1 }),
      H("Chỉ các bạn cùng làm.", { techlit: 1, talent: 1 })
    ]),
    Q("environment", "Hằng ngày, bạn thường…", [
      M("Dùng túi nilon mới mỗi lần mua đồ."), M("Để đèn, quạt chạy khi ra khỏi phòng."), M("Vứt rác chung, không phân loại."), M("Không biết rác mình thải ra đi đâu."),
      H("Mang bình nước và túi vải riêng.", { environment: 2 }),
      H("Phân loại rác.", { environment: 2 }),
      H("Tắt điện khi không dùng.", { environment: 2 }),
      H("Tìm hiểu về biến đổi khí hậu.", { environment: 1, curiosity: 1 })
    ]),
    Q("leadership", "Lớp cần một người đứng ra tổ chức sự kiện, nhưng không ai xung phong.", [
      M("Ngồi im chờ người khác."), M("Từ chối vì sợ làm sai."), M("Đẩy việc cho lớp trưởng."), M("Đồng ý nhưng không làm gì."),
      H("Xung phong và rủ thêm vài bạn.", { leadership: 2 }),
      H("Trình bày ý tưởng để cả lớp hào hứng.", { leadership: 2 }),
      H("Chia việc theo thế mạnh từng người.", { leadership: 1, talent: 1 }),
      H("Nhận một phần việc và làm thật tốt.", { leadership: 1, motivation: 1 })
    ]),
    Q("cyber", "Mật khẩu của bạn thường…", [
      M("Là ngày sinh của mình."), M("Dùng chung cho mọi tài khoản."), M("Được ghi ra giấy dán ở bàn học."), M("Được chia sẻ cho bạn thân."),
      H("Dài, có chữ, số và ký hiệu.", { cyber: 2 }),
      H("Mỗi tài khoản một mật khẩu riêng.", { cyber: 2 }),
      H("Được lưu trong trình quản lý mật khẩu.", { cyber: 1, techlit: 1 }),
      H("Được đổi ngay khi nghi bị lộ.", { cyber: 2 })
    ]),
    Q("empathy", "Trong nhóm có một bạn rất ít nói.", [
      M("Mặc kệ, ít nói thì thôi."), M("Nói thay bạn ấy luôn."), M("Nghĩ bạn ấy không có ý kiến gì."), M("Giao việc mà không hỏi bạn ấy."),
      H("Hỏi riêng ý kiến của bạn ấy.", { empathy: 2 }),
      H("Để ý xem bạn ấy có ổn không.", { empathy: 2 }),
      H("Tạo cơ hội để bạn ấy được nói.", { empathy: 1, leadership: 1 }),
      H("Lắng nghe kỹ khi bạn ấy nói.", { empathy: 2 })
    ]),
    Q("motivation", "Không ai bắt buộc, bạn có tự làm việc gì đó đều đặn không?", [
      M("Không, chỉ làm khi bị nhắc."), M("Bắt đầu nhiều thứ nhưng bỏ dở hết."), M("Chờ có hứng mới làm."), M("Chỉ làm vì sợ bị phạt."),
      H("Có, mình tự đặt mục tiêu nhỏ mỗi tuần.", { motivation: 2 }),
      H("Mình theo dõi tiến bộ của bản thân.", { motivation: 1, analytic: 1 }),
      H("Mình tự thưởng khi hoàn thành.", { motivation: 2 }),
      H("Khi nản, mình nhớ lại lý do mình bắt đầu.", { motivation: 1, resilience: 1 })
    ]),
    Q("ai", "Lớp bạn có kết quả khảo sát của 200 học sinh. Bạn làm gì với nó?", [
      M("Để đó, nhiều số quá."), M("Chỉ nhìn con số cao nhất."), M("Chép nguyên bảng vào báo cáo."), M("Nhờ người khác đọc giùm."),
      H("Vẽ biểu đồ để thấy xu hướng.", { ai: 1, analytic: 1 }),
      H("Dùng bảng tính hoặc AI để lọc và đếm.", { ai: 2 }),
      H("Tìm điều bất ngờ trong dữ liệu.", { ai: 1, curiosity: 1 }),
      H("Biến số liệu thành câu chuyện dễ hiểu.", { ai: 1, creative: 1 })
    ]),
    Q("service", "Một người lạ hỏi đường khi bạn đang vội.", [
      M("Lờ đi."), M("Chỉ đại cho xong."), M("Bảo \"tự tra Google đi\"."), M("Nói không biết dù mình biết."),
      H("Dừng lại chỉ đường thật rõ ràng.", { service: 2 }),
      H("Mở bản đồ trên điện thoại chỉ cho họ.", { service: 1, techlit: 1 }),
      H("Đưa họ tới gần đó nếu tiện đường.", { service: 2 }),
      H("Hỏi họ cần đến đâu và đi bằng gì.", { service: 1, empathy: 1 })
    ]),
    Q("creative", "Một ngày rảnh rỗi, bạn chọn…", [
      M("Lướt mạng cả ngày."), M("Xem hết video này đến video khác tự phát."), M("Chơi đi chơi lại một game."), M("Chép bài tập cho xong."),
      H("Làm ra thứ gì đó: vẽ, viết, nấu ăn, chế đồ.", { creative: 2 }),
      H("Thử một ý tưởng hay công thức mới.", { creative: 1, curiosity: 1 }),
      H("Biến một món đồ cũ thành đồ mới.", { creative: 1, environment: 1 }),
      H("Lên kế hoạch cho một dự án riêng.", { creative: 1, motivation: 1 })
    ]),
    Q("talent", "Bạn giỏi một môn, còn một bạn khác học kém môn đó.", [
      M("Cho bạn ấy chép bài."), M("Cười chê bạn ấy."), M("Không quan tâm."), M("Làm bài hộ bạn ấy."),
      H("Giải thích lại theo cách dễ hiểu hơn.", { talent: 2 }),
      H("Để bạn ấy tự làm rồi góp ý.", { talent: 2 }),
      H("Rủ học nhóm đều đặn.", { talent: 1, leadership: 1 }),
      H("Chia sẻ tài liệu và mẹo học.", { talent: 1, service: 1 })
    ]),
    Q("resilience", "Chuyến đi chơi của lớp bị huỷ phút chót vì mưa.", [
      M("Bực bội cả ngày."), M("Về nhà, không làm gì nữa."), M("Đổ lỗi cho người lên kế hoạch."), M("Than phiền trên mạng."),
      H("Nghĩ ngay một kế hoạch B trong nhà.", { resilience: 1, creative: 1 }),
      H("Vui vẻ chấp nhận và chuyển sang việc khác.", { resilience: 2 }),
      H("Giúp cả nhóm bình tĩnh lại.", { resilience: 1, leadership: 1 }),
      H("Hẹn ngày khác và chuẩn bị tốt hơn.", { resilience: 2 })
    ]),
    Q("curiosity", "Bạn gặp một chủ đề mình chưa biết gì, ví dụ vũ trụ hay lịch sử một nước xa.", [
      M("Bỏ qua vì không có trong bài thi."), M("Đợi khi nào bị kiểm tra mới học."), M("Nghĩ \"mình không giỏi mấy cái này\"."), M("Chỉ đọc tiêu đề rồi thôi."),
      H("Tìm sách hoặc video để hiểu thêm.", { curiosity: 2 }),
      H("Hỏi người biết về chủ đề đó.", { curiosity: 2 }),
      H("Ghi lại câu hỏi để tìm hiểu dần.", { curiosity: 2 }),
      H("Liên hệ nó với những gì mình đã biết.", { curiosity: 1, analytic: 1 })
    ])
  ];
}
