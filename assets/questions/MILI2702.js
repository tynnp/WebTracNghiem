var title = document.getElementById("title");
var description = document.getElementById("description");

title.textContent = "Trắc nghiệm học phần MILI2702"
description.innerHTML += "<br>" + "Mình đã cập nhật xong nội dung tất cả các bài, gồm 400 câu hỏi. Bạn có thể nhấn nộp bài ngay để xem đáp án."

const questions = [

    // Bài 1: Phòng, chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ của các thế lực thù địch đối với cách mạng Việt Nam
    
    {
        question: "Thực hiện thủ đoạn “Diễn biến hòa bình” trong lĩnh vực tôn giáo - dân tộc, kẻ thù triệt để lợi dụng chính sách tự do tôn giáo của Đảng ta để:",
        options: [
            "Truyền bá mê tín dị đoan và tư tưởng phản động chống chủ nghĩa xã hội.", 
            "Truyền đạo trái phép nhằm thực hiện âm mưu tôn giáo hóa dân tộc.", 
            "Tuyên truyền để tập hợp lực lượng phản động chống phá cách mạng.", 
            "Xây dựng lực lượng phản động làm tay sai chống phá cách mạng."
        ],
        correctAnswer: 1
    },

    {
        question: "Phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ ở nước ta hiện nay, chúng ta phải thực hiện giải pháp:",
        options: [
            "Nâng cao về nhận thức về âm mưu, thủ đoạn của các thế lực thù địch, nắm chắc mọi diễn biến không để bị động và bất ngờ.", 
            "Nâng cao tinh thần yêu nước, hăng hái lao động sản xuất và tích cực phòng chống thiên tai cho nhân dân.", 
            "Nâng cao đời sống vật chất, tinh thần cho nhân dân, đẩy lùi các hủ tục lạc hậu, mê tín dị đoan và các tệ nạn xã hội.", 
            "Nâng cao ý thức dân tộc, yêu Tổ quốc, yêu đồng bào, trách nhiệm công dân cho tuổi trẻ nhất là học sinh, sinh viên."
        ],
        correctAnswer: 0
    },

    {
        question: "Trong chiến lược “Diễn biến hòa bình”, đối với quân đội, công an, các thế lực thù địch chủ trương vô hiệu hóa sự lãnh đạo của Đảng với luận điểm:",
        options: [
            "Lực lượng hóa.", 
            "Công cụ hóa.", 
            "Phi chính trị hóa.", 
            "Xã hội hóa."
        ],
        correctAnswer: 2
    },

    {
        question: "Trong quá trình bạo loạn, bọn phản động tìm mọi cách để mở rộng:",
        options: [
            "Phạm vi, lực lượng, đập phá trụ sở Đảng, chính quyền.", 
            "Quy mô, lực lượng, kêu gọi nước nhà can thiệp quân sự.", 
            "Lực lượng, uy hiếp chính quyền địa phương, trung ương.", 
            "Phạm vi, quy mô, lực lượng, kêu gọi tài trợ của nước ngoài."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những mục tiêu phòng chống chiến lược “Diễn biến hòa bình”:",
        options: [
            "Giữ vững ổn định chính trị trên cơ sở động lập chủ quyền dân tộc.", 
            "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ.", 
            "Bảo vệ vững chắc độc lập, chủ quyền của quốc gia, dân tộc.", 
            "Bảo vệ vững chắc chế độ nhà nước Việt Nam xã hội chủ nghĩa."
        ],
        correctAnswer: 1
    },

    {
        question: "Các thế lực thù địch lợi dụng gây rối để:",
        options: [
            "Mở màn cho hoạt động phá hoại.", 
            "Mở đầu cho hành động phá hoại.", 
            "Làm mất an ninh chính trị.", 
            "Mở màn cho bạo loạn lật đổ."
        ],
        correctAnswer: 3
    },

    {
        question: "Thực hiện chiến lược “Diễn biến hòa bình” chủ nghĩa đế quốc và các thế lực thù địch lợi dụng sự viện trợ, giúp đỡ kinh tế, đầu tư vốn, chuyển giao công nghệ cho Việt Nam để gây sức ép về chính trị, từng bước chuyển hóa Việt Nam theo con đường tư bản chủ nghĩa là một trong những nội dung của:",
        options: [
            "Thủ đoạn về đối ngoại.", 
            "Thủ đoạn về kinh tế.", 
            "Biện pháp về kinh tế.", 
            "Biện pháp về chính trị"
        ],
        correctAnswer: 1
    },

    {
        question: "Thủ đoạn về chính trị trong chiến lược “Diễn biến hòa bình”, được kẻ thù xác định là:",
        options: [
            "Thủ đoạn cơ bản.", 
            "Thủ đoạn hàng đầu.", 
            "Thủ đoạn chủ yếu.", 
            "Thủ đoạn hậu thuẫn."
        ],
        correctAnswer: 1
    },

    {
        question: "Thực hiện thủ đoạn chính trị trong chiến lược “Diễn biến hòa bình”, các thế lực thù địch thường khai thác, tận dụng những sơ hở trong đường lối, chủ trường, chính sách của Đảng, nhà nước ta để kích động:",
        options: [
            "Học sinh, sinh viên đình công.", 
            "Công nhân đình công phản đối.", 
            "Quần chúng biểu tình, chống đối.", 
            "Nhân dân gây rối chính quyền."
        ],
        correctAnswer: 2
    },

    {
        question: "chủ trương vô hiệu hóa sự lãnh đạo của Đảng, thực hiện âm mưu “phi chính trị hóa” của chủ nghĩa đế quốc và các thế lực thù địch trong “Diễn biến hòa bình” nhằm làm cho quân đội nhân dân Việt Nam:",
        options: [
            "Phai nhạt vai trò nòng cốt, xa rời quần chúng nhân dân.", 
            "Mất bản chất cách mạng, xa rời mục tiêu chiến đầu.", 
            "Mất bản chất nhân dân, mất truyền thống chống ngoại xâm.", 
            "Mất tính kiên cường bất khuất, xa rời chủ nghĩa xã hội."
        ],
        correctAnswer: 1
    },

    {
        question: "Đảng ta xác định rõ nội dung bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa là toàn diện, trong đó coi trọng:",
        options: [
            "An ninh kinh tế, chính trị, trật tự xã hội, lãnh thổ.", 
            "An ninh chính trị, xã hội, biên giới, biển đảo.", 
            "An ninh kinh tế, chính trị, văn hóa, tư tưởng.", 
            "An ninh chính trị, đối ngoại, trật tự an toàn xã hội."
        ],
        correctAnswer: 2
    },

    {
        question: "Từ sau thất bại ở Việt Nam, Mỹ đã từng bước thay đổi chiến lược chuyển từ tiến công bằng sức mạnh quân sự là chính, sang tiến công bằng: ",
        options: [
            "Đánh đòn phủ đầu là chủ yếu.", 
            "Vượt trên ngăn chặn là chủ yếu.", 
            "Chiến lược ngăn chặn là chủ yếu.", 
            "\"Diễn biến hòa bình\" là chủ yếu."
        ],
        correctAnswer: 3
    },

    {
        question: "Đặc trưng của chiến lược “Diễn biến hòa bình” là sử dụng:",
        options: [
            "Biện pháp phi quân sự.", 
            "Chính sách ngoại giao.", 
            "Biện pháp kinh tế.", 
            "Thủ đoạn vũ trang."
        ],
        correctAnswer: 0
    },

    {
        question: "Để nhanh chóng đạt được mục đích của “Diễn biến hòa bình”, chủ nghĩa đế quốc và các thế lực thù địch thường tiến hành thủ đoạn:",
        options: [
            "Bạo loạn vũ trang.", 
            "Can thiệp quân sự.", 
            "Bạo loạn lật đổ.", 
            "Hành động bạo lực."
        ],
        correctAnswer: 2
    },

    {
        question: "Hoa Kỳ xóa bỏ lệnh cấm vận kinh tế đối với Việt Nam từ:",
        options: [
            "03/02/1995.", 
            "03/02/1994.", 
            "02/03/1994.", 
            "02/03/1995."
        ],
        correctAnswer: 1
    },

    {
        question: "Hoa Kỳ bình thường hóa quan hệ với Việt Nam từ:",
        options: [
            "11/07/1995.", 
            "11/07/1996.", 
            "07/11/1995.", 
            "07/11/1996."
        ],
        correctAnswer: 0
    },

    {
        question: "Đối với Việt Nam, sau thất bại về quân sự (năm 1975), chủ nghĩa đế quốc và các thế lực thù địch chuyển sang chiến lược \"Diễn biến hòa bình\" với nhiều thủ đoạn như:",
        options: [
            "Cấm vận kinh tế, văn hóa và cô lập ngoại giao.", 
            "Bao vây cấm vận kinh tế, cô lập về ngoại giao.", 
            "Bao vây, phong tỏa chính trị, quân sự, an ninh.", 
            "Cấm vận triệt để về chính trị, quân sự, văn hóa."
        ],
        correctAnswer: 1
    },

    {
        question: "Nguyên tắc xử lý khi có bạo loạn diễn ra là:",
        options: [
            "Kiên quyết, triệt để, nhẹ nhàng, đúng đối tượng, không để lan rộng, kéo dài.", 
            "Kiên quyết, triệt để, đúng đối tượng, không để dây dưa, lan rộng, kéo dài.", 
            "Nhanh gọn, linh hoạt mạnh mẽ, đúng đối tượng, không để lan rộng, kéo dài.", 
            "Nhanh gọn, kiên quyết, linh hoạt, đúng đối tượng, không để lan rộng, kéo dài."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những mục tiêu phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ ở nước ta là:",
        options: [
            "Bảo vệ chủ quyền lãnh thổ của quốc gia và bảo vệ nhân dân.", 
            "Bảo vệ hệ thống chính trị, các tổ chức quần chúng và văn hóa.", 
            "Bảo vệ an ninh quốc gia, trật tự an toàn xã hội và nền văn hóa.", 
            "Bảo vệ vững chắc nền văn hóa và những giá trị tinh thần của dân tộc."
        ],
        correctAnswer: 2
    },

    {
        question: "Trong phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ, chúng ta phải:",
        options: [
            "Bảo vệ vững chắc hòa bình, sự nghiệp phát triển kinh tế.", 
            "Bảo vệ đường lối đổi mới và quyền làm chủ của nhân dân.", 
            "Bảo vệ quốc gia, dân tộc và an ninh, trật tự an toàn xã hội.", 
            "Bảo vệ sự nghiệp đổi mới, lợi ích quốc gia, lợi ích dân tộc."
        ],
        correctAnswer: 3
    },

    {
        question: "Đấu tranh phòng chống chiến lược “Diễn biến hòa bình” ở nước ta là một cuộc đấu tranh:",
        options: [
            "Đối đầu lịch sử giai cấp gay go, quyết liệt và phức tạp trên mọi lĩnh vực.", 
            "Dân tộc gay go, một mất một còn trên mọi lĩnh vực của đời sống xã hội.", 
            "Giai cấp, dân tộc gay go, quyết liệt, lâu dài và phức tạp trên mọi lĩnh vực.", 
            "Chính trị lâu dài, phức tạp giữa chủ nghĩa tư bản và chủ nghĩa xã hội."
        ],
        correctAnswer: 2
    },

    {
        question: "Cơ sở manh nha hình thành chiến lược “Diễn biến hòa bình” là",
        options: [
            "Thực hiện chiến lược “ngăn chặn” chủ nghĩa cộng sản.", 
            " Thất bại trong chiến tranh thế giới lần thứ hai.", 
            "Lôi kéo các nước tiến bộ ở Tây Âu phụ thuộc vào Mỹ.", 
            "Phá hoại các nước xã hội chủ nghĩa còn non yếu."
        ],
        correctAnswer: 0
    },

    {
        question: "Nội dung nào sau đây là trách nhiệm của sinh viên trong phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ?",
        options: [
            "Thường xuyên xây dựng cơ sở chính trị - xã hội vững mạnh.", 
            "Xây dựng ý thức bảo vệ Tổ quốc cho toàn dân.", 
            "Xây dựng và luyện tập các phương án chống bạo loạn lật đổ.", 
            "Thường xuyên nêu cao tinh thần cảnh giác cách mạng."
        ],
        correctAnswer: 3
    },

    {
        question: "Nội dung chính của chiến lược “Diễn biến hòa bình” là kẻ thù sử dụng mọi thủ đoạn kinh tế, chính trị, văn hóa, xã hội, tư tưởng, đối ngoại, quốc phòng, an ninh,... để:",
        options: [
            "Phá hoại, làm suy yếu các nước xã hội chủ nghĩa từ bên trong.", 
            "Chia rẽ, thành lập các tổ chức phản động để can thiệp quân sự.", 
            "Phá hoại các nước từ bên trong để dễ dàng tiến công từ bên ngoài.", 
            "Chia rẽ, gây mâu thuẫn để các nước xẩy ra xung đột, lấy cớ tiến công."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những nội dung kẻ thù chống phá về chính trị trong “Diễn biến hòa bình” là: ",
        options: [
            "Phá vỡ hệ thống nguyên tắc tổ chức của Đảng, chính quyền, tổ chức đoàn thể.", 
            "Phá vỡ hệ thống nguyên tắc tổ chức trong bộ máy lãnh đạo Đảng, Nhà nước ta.", 
            "Chia rẽ sự thống nhất của các tổ chức, nhất là tổ chức chính trị, quân sự.", 
            "Chia rẽ mối quan hệ giữa Đảng với nhân dân và khối đại đoàn kết toàn dân tộc."
        ],
        correctAnswer: 3
    },

    {
        question: "Đảng ta xác định nội dung bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa hiện nay là toàn diện, vì kẻ thù thực hiện chiến lược “Diễn biến hòa bình”:",
        options: [
            "Kết hợp với răn đe quân sự, biểu tình và bạo loạn lật đổ.", 
            "Với nhiều đòn tiến công trên tất cả mọi lĩnh vực.", 
            "Với bao vây cấm vận, cô lập ngoại giao, răn đe quân sự.", 
            "Kết hợp với các biện pháp vũ trang và phi vũ trang."
        ],
        correctAnswer: 1
    },

    {
        question: "Để đạt được ý đồ thống trị thế giới và xóa bỏ các nước xã hội chủ nghĩa còn lại, chủ nghĩa đế quốc tiếp tục điều chỉnh chiến lược toàn cầu, trong đó chiến lược “Diễn biến hòa bình” là:",
        options: [
            "Bộ phận quan trọng.", 
            "Bộ phận chủ yếu.", 
            "Bộ phận trọng yếu.", 
            "Bộ phận quyết định."
        ],
        correctAnswer: 2
    },

    {
        question: "Khởi đầu thực hiện bạo loạn lật đổ, các thế lực thù địch thường tiến hành:",
        options: [
            "Gây rối, làm mất ổn định trật tự an toàn xã hội.", 
            "Bạo động, đập phá gây mất trật tự nơi công cộng.", 
            "Ngăn chặn, gây rối, chống người thi hành công vụ.", 
            "Tập hợp lực lượng, tuyên truyền nói xấu chế độ."
        ],
        correctAnswer: 0
    },

    {
        question: "Vị Tổng thống Mỹ đã bổ sung, hình thành và công bố thực hiện chiến lược “ngăn chặn” chủ nghĩa cộng sản là:",
        options: [
            "Kenman.", 
            "Truman.", 
            "Aixenhao.", 
            "Kennơdi."
        ],
        correctAnswer: 1
    },

    {
        question: "Thực hiện chiến lược “Diễn biến hòa bình”, chủ nghĩa đế quốc và các thế lực thù địch cho rằng, phải làm xói mòn tư tưởng, đạo đức, niềm tin cộng sản của thế hệ trẻ để:",
        options: [
            "Tự diễn biến, tự suy yếu, dẫn đến sự sụp đổ, tan rã của các nước XHCN còn lại.", 
            "Tự đấu tranh, đòi yêu sách, dẫn đến bạo loạn lật đổ các nước XHCN còn lại.", 
            "Tự diễn biến, gây mâu thuẫn, kích động biểu tình, bạo loạn lật đổ chế độ XHCN.", 
            "Gây mất đoàn kết, tạo mâu thuẫn, tự đấu tranh dẫn đến sụp đổ các nước XHCN."
        ],
        correctAnswer: 0
    },

    {
        question: "Trong chiến lược “Diễn biến hòa bình”, đối với sinh viên, kẻ thù đặc biệt coi trọng:",
        options: [
            "Tuyên truyền lối sống tư sản, tham gia hoạt động các tổ chức phi chính phủ.", 
            "Khích lệ lối sống tư sản, từng bước làm phai nhạt mục tiêu xã hội chủ nghĩa.", 
            "Kích động đòi yêu sách, phúc lợi xã hội và tham gia các tổ chức phản động.", 
            "Khích lệ lối sống tự do, xuống đường đấu tranh đòi dân chủ phương tây."
        ],
        correctAnswer: 1
    },

    {
        question: "Để chống phá các nước tiến bộ, trước hết là các nước xã hội chủ nghĩa, chủ nghĩa đế quốc và các thế lực thù địch thực hiện “Diễn biến hòa bình”, bạo loạn lật đổ với:",
        options: [
            "Cấm vận kinh tế.", 
            "Cô lập ngoại giao.", 
            "Răn đe quân sự.", 
            "Dân chủ, nhân quyền."
        ],
        correctAnswer: 2
    },

    {
        question: "Đẩy mạnh chiến lược “Diễn biến hòa bình” ở nước ta, chủ nghĩa đế quốc và các thế lực thù địch thường triệt để khai thác và lợi dụng những khó khăn, sai sót của Đảng, Nhà nước tạo nên sức ép, từng bước chuyển hóa để:",
        options: [
            "Thay đổi chế độ, theo phương tây để được bảo hộ của tư bản.", 
            "Lôi kéo quần chúng nhân dân đi theo chúng để được giàu có.", 
            "Thay đổi đường lối chính trị, đi theo quỹ đạo chủ nghĩa tư bản.", 
            "Gây mâu thuẫn, kích động nhân dân bạo loạn vũ trang."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những chiêu bài mà chủ nghĩa đế quốc và các thế lực thù địch sử dụng trong “Diễn biến hòa bình” đối với Việt Nam là:",
        options: [
            "Nhân quyền, bình đẳng.", 
            "Tự do, dân chủ.", 
            "Dân chủ, nhân quyền.", 
            "Bình đẳng, tự do."
        ],
        correctAnswer: 2
    },

    {
        question: "Trước những thắng lợi của công cuộc đổi mới toàn diện ở Việt Nam, chủ nghĩa đế quốc và các thế lực thù địch đã tuyên bố xóa bỏ cấm vận, bình thường hóa quan hệ để chuyển sang những thủ đoạn mới, đẩy mạnh hoạt động xâm nhập:",
        options: [
            "Can thiệp, thâm độc, hiểm, sâu.", 
            "Dính líu, ngầm, sâu, hiểm.", 
            "Lôi kéo, công khai, hiểm, sâu.", 
            "Xúi dục, can thiệp, ngầm, sâu."
        ],
        correctAnswer: 1
    },

    {
        question: "Chủ nghĩa đế quốc và các thế lực thù địch chống phá cách mạng nước ta hiện nay là toàn diện, trên tất cả các lĩnh vực của đời sống xã hội với:",
        options: [
            "Các thủ đoạn xảo quyệt dễ nhận được.", 
            "Nhiều thủ đoạn tinh vi khó nhận biết.", 
            "Nhiều hình thức tinh vi khó nhận rõ.", 
            "Các biện pháp khôn khéo khó nhận ra."
        ],
        correctAnswer: 1
    },

    {
        question: "“Diễn biến hòa bình” là:",
        options: [
            "Phương thức chủ yếu của chủ nghĩa đế quốc và các thế lực phản động.", 
            "Chiến lược cơ bản của chủ nghĩa đế quốc và các thế lực phản động.", 
            "Sách lược chủ yếu của chủ nghĩa đế quốc và các thế lực phản động.", 
            "Thủ đoạn cơ bản của chủ nghĩa đế quốc và các thế lực phản động."
        ],
        correctAnswer: 1
    },

    {
        question: "Biện pháp của chủ nghĩa đế quốc và các thế lực phản động tiến hành chiến lược “Diễn biến hòa bình” là:",
        options: [
            "Biện pháp phi quân sự.", 
            "Biện pháp quân sự.", 
            "Biện pháp ngoại giao.", 
            "Biện pháp bạo loạn."
        ],
        correctAnswer: 0
    },

    {
        question: "Chiến lược “Diễn biến hòa bình” được bắt nguồn từ:",
        options: [
            "Nước Nga.", 
            "Nước Đức.", 
            "Nước Mỹ.", 
            "Nước Pháp."
        ],
        correctAnswer: 2
    },

    {
        question: "Chủ nghĩa đế quốc và các thế lực thù địch sử dụng chiến lược “Diễn biến hòa bình” đối với Việt Nam nhằm:",
        options: [
            "Tự do hóa đời sống chính trị, xã hội.", 
            "Xóa bỏ hệ thống chính trị, kinh tế.", 
            "Lật đổ chế độ, theo quỹ đạo của chúng.", 
            "Xóa bỏ vai trò lãnh đạo của Đảng."
        ],
        correctAnswer: 3
    },

    {
        question: "Chiến lược “Diễn biến hòa bình” bắt đầu hình thành từ:",
        options: [
            "Năm 1930.", 
            "Năm 1945.", 
            "Năm 1960.", 
            "Năm 1954."
        ],
        correctAnswer: 1
    },

    {
        question: "Mục tiêu của chủ nghĩa đế quốc và các thế lực thù địch sử dụng chiến lược “Diễn biến hòa bình” đối với Việt Nam là:",
        options: [
            "Xóa bỏ hệ thống chính trị - xã hội.", 
            "Thực hiện chế độ đa nguyên chính trị.", 
            "Thực hiện tự do chính trị - xã hội.", 
            "Xóa bỏ chế độ xã hội chủ nghĩa."
        ],
        correctAnswer: 3
    },

    {
        question: "Vùng lãnh thổ nào của nước ta mà kẻ thù kích động đồng bào đòi ly khai thành lập nhà nước Đề Ga?",
        options: [
            "Tây Bắc.", 
            "Tây Nguyên.", 
            "Tây Nam.", 
            "Đông Bắc."
        ],
        correctAnswer: 1
    },

    {
        question: "Mục đích chống phá tư tưởng - văn hóa trong chiến lược “ Diễn biến hòa bình” là:",
        options: [
            "Xóa bỏ nguồn gốc tư tưởng XHCN.", 
            "Xóa bỏ chủ nghĩa Mác Lênin, tư tưởng Hồ Chí Minh.", 
            "Xóa bỏ đường lối chính trị của Đảng Cộng sản.", 
            "Xóa bỏ tư tưởng vô sản,thiết lập tư tưởng tư sản."
        ],
        correctAnswer: 1
    },

    {
        question: "Hình thức của bạo loạn lật đổ gồm có:",
        options: [
            "Bạo loạn vũ trang, bạo loạn chính trị hoặc bạo loạn chính trị với gây rối.", 
            "Bạo loạn chính trị với gây rối hoặc kết hợp gây rối với phá hoại.", 
            "Bạo loạn chính trị, bạo loạn vũ trang, hoặc bạo loạn chính trị với vũ trang.", 
            " Bạo loạn chính trị kết hợp với quân sự hoặc chính trị kết hợp với kinh tế."
        ],
        correctAnswer: 2
    },

    {
        question: "Phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ, chúng ta phải:",
        options: [
            "Xây dựng các tổ chức chính trị, tổ chức quần chúng vững chắc.", 
            "Xây dựng ý thức bảo vệ Tổ quốc cho toàn dân.", 
            "Xây dựng các lực lượng vũ trang đặc biệt là công an vững mạnh.", 
            "Nâng cao nhận thức về âm mưu phá hoại của kẻ thù."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những giải pháp phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ là:",
        options: [
            "Đẩy mạnh công nghiệp hóa hiện đại hóa, chống tụt hậu kinh tế.", 
            "Xây dựng hệ thống chính trị cả nước vững mạnh toàn diện.", 
            "Chăm lo xây dựng lực lượng vũ trang ở địa phương vững mạnh.", 
            "Xây dựng lòng yêu nước cho tuổi trẻ nhất là học sinh, sinh viên."
        ],
        correctAnswer: 2
    },

    {
        question: "“Bạo loạn lật đổ” là thủ đoạn gắn liền với:",
        options: [
            "Chính sách “Cấm vận kinh tế, cô lập ngoại giao”.", 
            "Biện pháp “Ngăn chặn chủ nghĩa cộng sản”.", 
            "Chiến lược “Phi quân sự”.", 
            "Chiến lươc “Diễn biến hòa bình”."
        ],
        correctAnswer: 3
    },

    {
        question: "Nhiệm vụ cấp bách hàng đầu trong các nhiệm vụ quốc phòng, an ninh ở nước ta là: ",
        options: [
            "Phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ.", 
            "Phòng chống địch tiến công hỏa lực bằng vũ khí công nghệ cao.", 
            "Phòng chống địch lợi dụng vấn đề dân tộc, tôn giáo.", 
            "Phòng chống tội phạm, tệ nạn xã hội và bảo vệ an ninh quốc gia."
        ],
        correctAnswer: 0
    },

    {
        question: "Chủ nghĩa đế quốc và các thế lực thù địch kích động người H’Mông đòi thành lập khu tự trị riêng ở:",
        options: [
            "Vùng Đông Bắc.", 
            "Vùng Tây Nguyên.", 
            "Vùng Tây Bắc.", 
            "Vùng Tây Nam Bộ."
        ],
        correctAnswer: 2
    },

    {
        question: "Lực lượng tiến hành bạo loạn lật đổ thường là:",
        options: [
            "Lực lượng đối lập phối hợp chặt chẽ với lực lượng ly khai bên ngoài.", 
            "Lực lượng ly khai, đối lập trong nước hoặc cấu kết với nước ngoài.", 
            "Lực lượng ly khai phối hợp với lực lượng dân chủ, nhân quyền.", 
            "Lực lượng bất mãn chống đối trong nước cấu kết với kẻ thù từ bên ngoài."
        ],
        correctAnswer: 1
    },

    {
        question: "Thực hiện chiến lược “Diễn biến hòa bình”, chủ nghĩa đế quốc và các thế lực thù địch khích lệ lối sống tư sản, từng bước làm phai nhạt mục tiêu, lý tưởng xã hội chủ nghĩa ở tầng lớp:",
        options: [
            "Thanh niên, nhất là sinh viên.", 
            "Học sinh, sinh viên thành thị.", 
            "Công nhân các khu công nghiệp.", 
            "Người dân nghèo ở thành thị."
        ],
        correctAnswer: 0
    },

    {
        question: "Bạo loạn lật đổ có thể xẩy ra ở nhiều nơi, nhiều vùng của đất nước, trọng điểm là:",
        options: [
            "Các khu công nghiệp tập trung.", 
            "Các trung tâm chính trị, kinh tế.", 
            "Các trung tâm văn hóa, khoa học.", 
            "Các khu công nghệ, kỹ thuật cao."
        ],
        correctAnswer: 1
    },

    {
        question: "Thực hiện chiến lược “Diễn biến hòa bình” chống phá chủ nghĩa xã hội, chủ nghĩa đế quốc và các thế lực thù địch luôn coi Việt Nam là:",
        options: [
            "Vấn đề trọng điểm.", 
            "Vấn đề cơ bản.", 
            "Một trọng tâm.", 
            "Một trọng điểm."
        ],
        correctAnswer: 3
    },

    {
        question: "Sau thất bại về chiến lược quân sự, chủ nghĩa đế quốc và các thế lực thù địch chuyển sang chiến lược “Diễn biến hòa bình” đối với Việt Nam từ năm:",
        options: [
            "1976.", 
            "1979.", 
            "1975.", 
            "1973."
        ],
        correctAnswer: 2
    },

    {
        question: "Chủ nghĩa đế quốc và các thế lực thù địch thực hiện chiến lược “Diễn biến hòa bình” đối với Việt Nam từ khi nào?",
        options: [
            "Sau thất bại chiến tranh xâm lược Việt Nam.", 
            "Khi đưa quân vào xâm lược miền Nam.", 
            "Sau biến động chế độ xã hội chủ nghĩa ở Liên Xô.", 
            "Khi Việt Nam tiến hành sự nghiệp đổi mới."
        ],
        correctAnswer: 0
    },

    {
        question: "Trong các nhiệm vụ quốc phòng - an ninh hiện nay ở nước ta, phòng, chống chiến lược “Diễn biến hòa bình” là:",
        options: [
            "Nhiệm vụ cơ bản hàng đầu.", 
            "Nhiệm vụ thường xuyên hàng đầu.", 
            "Nhiệm vụ cấp bách hàng đầu.", 
            "Nhiệm vụ chiến lược hàng đầu."
        ],
        correctAnswer: 2
    },

    {
        question: "Nội dung nào sau đây là một trong những giải pháp phòng chống chiến lược “diễn biến hòa bình”, bạo loạn lật đổ?",
        options: [
            "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước và chăm lo nâng cao đời sống vật chất, tinh thần cho nhân dân lao động.", 
            "Xây dựng Đảng vững mạnh,xây dựng tinh thần đoàn kết và xây dựng các tổ chức quần chúng vững mạnh.", 
            "Đẩy lùi các hủ tục lạc hậu,mê tín dị đoan và các tệ nạn xã hội, chăm lo đời sống vật chất, tinh thần cho nhân dân lao động.", 
            "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước, chống nguy cơ lạc hậu về kinh tế, khắc phục các tiêu cực trong xã hội."
        ],
        correctAnswer: 0
    },

    {
        question: "Thủ đoạn trên lĩnh vực quốc phòng - an ninh trong chiến lược “Diễn biến hòa bình” là:",
        options: [
            "Chia rẽ quân đội, công an, dân quân tự vệ và bộ đội biên phòng.", 
            "Mua chuộc cán bộ cao cấp của quân đội và lực lượng vũ trang.", 
            "Phủ nhận vai trò quốc phòng - an ninh trong sự nghiệp đổi mới.", 
            "Phủ nhận vai trò lãnh đạo của Đảng trong lĩnh vực quốc phòng - an ninh."
        ],
        correctAnswer: 3
    },

    {
        question: "Phòng chống chiến lược “diễn biến hòa bình”, bạo loạn lật đổ, chúng ta phải thực hiện giải pháp:",
        options: [
            "Xây dựng cơ sở chính trị - xã hội vững mạnh về mọi mặt.", 
            "Đẩy mạnh công nghiệp hóa, chống nguy cơ tụt hậu kinh tế.", 
            "Đẩy lùi các hủ tục lạc hậu, mê tín dị đoan và các tệ nạn xã hội.", 
            "Xây dựng lòng yêu nước cho tuổi trẻ nhất là học sinh, sinh viên."
        ],
        correctAnswer: 0
    },

    {
        question: "Nhiệm vụ phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ được xác định là nhiệm vụ:",
        options: [
            "Trọng tâm lâu dài của cách mạng Việt Nam.", 
            "Chủ yếu, cấp bách trước mắt cũng như lâu dài.", 
            "Cơ bản trong thời kỳ quá độ xã hội chủ nghĩa.", 
            "Cấp bách hàng đầu, thường xuyên và lâu dài."
        ],
        correctAnswer: 3
    },

    {
        question: "Quan hệ giữa “Diễn biến hòa bình” và bạo loạn lật đổ:",
        options: [
            "“Diễn biến hòa bình” là quá trình đưa đến nguyên nhân và điều kiện của bạo loạn lật đổ.", 
            "“Diễn biến hòa bình” là quá trình tạo nên những điều kiện, thời cơ cho bạo loạn lật đổ.", 
            "“Diễn biến hòa bình” là quá trình tạo yếu tố quyết định cho bạo loạn lật đổ.", 
            "“Diễn biến hòa bình” là quá trình tạo thời cơ quan trọng nhất cho bạo loạn lật đổ."
        ],
        correctAnswer: 1
    },

    {
        question: "Trong chiến lược “Diễn biến hòa bình”, thủ đoạn về kinh tế được kẻ thù xác định là:",
        options: [
            "Thủ đoạn hàng đầu.", 
            "Thủ đoạn chủ yếu.", 
            "Thủ đoạn mũi nhọn.", 
            "Thủ đoạn cơ bản."
        ],
        correctAnswer: 2
    },

    {
        question: "Chống phá về chính trị trong chiến lược “Diễn biến hòa bình”, kẻ thù âm mưu thực hiện:",
        options: [
            "Xóa bỏ vai trò lãnh đạo của Đảng và chế độ xã hội chủ nghĩa.", 
            "Đối lập chủ nghĩa Mác Lênin và tư tưởng Hồ Chí Minh.", 
            "Phủ định chủ nghĩa Mác Lênin, xóa bỏ chủ nghĩa xã hội.", 
            "Đối lập nhiệm vụ kinh tế và quốc phòng, an ninh trật tự."
        ],
        correctAnswer: 0
    },

    {
        question: "Thực hiện thủ đoạn chống phá về chính trị trong chiến lược “Diễn biến hòa bình” đối với cách mạng Việt Nam, kẻ thù tiến hành:",
        options: [
            "Phá vỡ khối đại đoàn kết toàn dân của các tổ chức chính trị, xã hội.", 
            "Kích động đòi thực hiện chế độ “đa nguyên chính trị, đa đảng đối lập”.", 
            "Chia rẽ nội bộ, kích động gây rối loạn các tổ chức trong xã hội.", 
            "Cô lập Đảng, Nhà nước với quân đội nhân dân và công an nhân dân."
        ],
        correctAnswer: 1
    },

    {
        question: "Để cùng cả nước phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ, sinh viên phải:",
        options: [
            "Phát hiện và góp phần đấu tranh đánh bại mọi âm mưu, thủ đoạn của kẻ thù.", 
            "Đẩy mạnh sự nghiệp công nghiệp hóa, hiện đại hóa đưa đất nước phát triển.", 
            "Nâng cao đời sống vật chất, tinh thần cho công nhân và nhân dân lao động.", 
            "Chăm lo xây dựng lực lượng vũ trang ở địa phương vững mạnh toàn diện."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những nội dung chống phá về kinh tế của chiến lược “Diễn biến hòa bình” là:",
        options: [
            "Khuyến khích kinh tế nước ngoài phát triển giữ vai trò chủ đạo của kinh tế đất nước.", 
            "Làm mất vai trò chủ đạo của kinh tế Nhà nước, từng bước lệ thuộc chủ nghĩa đế quốc.", 
            "Kêu gọi kinh tế cá thể phát triển, từng bước đưa kinh tế tư nhân thay thế kinh tế quốc doanh.", 
            "Phát triển nhanh kinh tế tư bản Nhà nước, giữ vai trò chủ đạo của kinh tế đất nước."
        ],
        correctAnswer: 1
    },

    {
        question: "Chống phá trên lĩnh vực đối ngoại trong chiến lược “Diễn biến hòa bình” kẻ thù thực hiện thủ đoạn:",
        options: [
            "Chia rẽ Việt Nam với Lào và các nước xã hội chủ nghĩa còn lại.", 
            "Chia rẽ Việt Nam với các nước tiến bộ, yêu chuộng hòa bình.", 
            "Chia rẽ Việt Nam với Lào, Campuchia và các nước xã hội chủ nghĩa.", 
            "Chia rẽ Việt Nam với Campuchia và các nước tiến bộ trên thế giới."
        ],
        correctAnswer: 2
    },

    {
        question: "Thực hiện thủ đoạn “Diễn biến hòa bình” về văn hóa, kẻ thù tập trung tấn công vào:",
        options: [
            "Những sản phẩm văn hóa quý báu của chúng ta.", 
            "Bản sắc văn hóa và giá trị văn hóa của dân tộc Việt Nam.", 
            "Truyền thống kinh nghiệm của văn hóa Việt Nam.", 
            "Nền văn hóa và sản phẩm văn hóa dân tộc Việt Nam."
        ],
        correctAnswer: 1
    },

    {
        question: "Thực hiện thủ đoạn trong lĩnh vực tôn giáo – dân tộc của chiến lược “Diễn biến hòa bình”, kẻ thù lợi dụng vấn đề dân tộc để kích động tư tưởng:",
        options: [
            "Đòi biểu tình, ly khai lập khu tự trị.", 
            "Chia rẽ các dân tộc, gây mâu thuẫn.", 
            "Đòi li khai, tự quyết dân tộc.", 
            "Gây mâu thuẫn giữa các dân tộc."
        ],
        correctAnswer: 2
    },

    // Bài 2: Một số nội dung cơ bản về dân tộc, tôn giáo, đấu tranh phòng, chống các thế lực thù địch lợi dụng vấn đề dân tộc, tôn giáo chống phá cách mạng Việt Nam

    {
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, giải quyết vấn đề dân tộc:",
        options: [
            "Vừa là quan điểm vừa là phương châm của nhà nước vô sản.", 
            "Vừa là mục tiêu vừa là động lực của cách mạng xã hội chủ nghĩa.", 
            "Vừa là mục tiêu vừa là phương thức của nhà nước xã hội chủ nghĩa.", 
            "Vừa là nội dung vừa là quan điểm của cách mạng xã hội chủ nghĩa."
        ],
        correctAnswer: 1
    },

    {
        question: " Quan hệ dân tộc, sắc tộc hiện nay trên thế giới diễn ra phức tạp, nóng bỏng ở phạm vi: ",
        options: [
            "Các nước ASEAN và EU.", 
            "Châu Phi và châu Mỹ Latinh.", 
            "Châu Á và châu Âu, châu Mỹ.", 
            "Quốc gia, khu vực và quốc tế."
        ],
        correctAnswer: 3
    },

    {
        question: "Nội dung vấn đề dân tộc và giải quyết vấn đề dân tộc theo tư tưởng Hồ Chí Minh là:",
        options: [
            "Toàn diện, phong phú, sâu sắc, khoa học và cách mạng.", 
            "Xây dựng quan hệ sâu sắc, tốt đẹp, phong phú, hài hòa.", 
            "Thiết lập quan hệ với các quốc gia, dân tộc trên thế giới.", 
            "Xây dựng tình đoàn kết, tôn trọng và giúp đỡ lẫn nhau."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những quan điểm, chính sách dân tộc của Đảng, Nhà nước ta là:",
        options: [
            "Chống mọi hành động áp đặt trong công tác dân tộc.", 
            "Chống phân biệt, đối xử khác nhau giữa các dân tộc.", 
            "Chống các biểu hiện kỳ thị, hẹp hòi, chia rẽ dân tộc.", 
            " Chống tuyên truyền, lôi kéo kích động các dân tộc."
        ],
        correctAnswer: 2
    },

    {
        question: "Tăng cường xây dựng củng cố khối đại đoàn kết dân tộc, giữ vững ổn định chính trị xã hội là một trong những nội dung của:",
        options: [
            "Nội dung cơ bản đấu tranh phòng chống địch lợi dụng vấn đề dân tộc, TG.", 
            "Giải pháp cơ bản đấu tranh phòng chống địch lợi dụng vấn đề dân tộc, TG.", 
            "Nhiệm vụ đấu tranh phòng chống địch lợi dụng vấn đề dân tộc, tôn giáo.", 
            "Vị trí quan trọng đấu tranh phòng chống địch lợi dụng vấn đề dân tộc, TG."
        ],
        correctAnswer: 1
    },

    {
        question: "Theo quan điểm chủ nghĩa Mác - Lênin, thực chất của vấn đề dân tộc là:",
        options: [
            "Sự khác biệt về phong tục, tập quán, quyền lợi của nhau giữa các dân tộc trong một quốc gia đa dân tộc và giữa các quốc gia dân tộc với nhau trên thế giới.", 
            "Sự va chạm, đụng độ, mâu thuẫn trong quan hệ đời sống XH giữa các dân tộc trong một QG đa dân tộc và giữa các QG dân tộc với nhau trong quan hệ quốc tế.", 
            "Sự va chạm, mâu thuẫn lợi ích giữa các dân tộc trong quốc gia đa dân tộc và giữa các quốc gia dân tộc với nhau trong quan hệ quốc tế.", 
            "Sự bất bình đẳng, phân biệt chủng tộc trong quá trình phát triển KT, XH giữa các dân tộc trong QG đa dân tộc và giữa các QG dân tộc với nhau trong quan hệ QT."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những lý do dẫn đến vấn đề dân tộc còn tồn tại lâu dài là do:",
        options: [
            "Dân số và trình độ phát triển KT – XH giữa các dân tộc không đều nhau.", 
            "Các dân tộc chưa đồng thời đứng lên đấu tranh chống CNĐQ.", 
            "Sự chống phá của CNĐQ đối với các dân tộc trên toàn thế giới.", 
            "CNĐQ thực hiện chiến lược “Diễn biến hòa bình” trên thế giới."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những nội dung tư tưởng Hồ Chí Minh về vấn đề dân tộc và giải quyết vấn đề dân tộc:",
        options: [
            "Thiết lập và mở rộng mối quan hệ khăng khít, gắn bó với các quốc gia, dân tộc trên thế giới.", 
            "Xây dựng quan hệ sâu sắc, tốt đẹp, phong phú, hài hòa giữa các dân tộc.", 
            "Khắc phục tàn dư tư tưởng phân biệt, kỳ thị dân tộc, tư tưởng dân tộc lớn, dân tộc hẹp hòi.", 
            "Xây dựng tình đoàn kết hữu nghị, bình đẳng, tôn trọng và giúp đỡ nhau cùng phát triển."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những đặc điểm của các dân tộc ở Việt Nam là các dân tộc ở nước ta có quy mô dân số và:",
        options: [
            "Trình độ phát triển khá đồng đều.", 
            "Trình độ phát triển không đồng đều.", 
            "Trình độ phát triển còn hạn chế.", 
            "Trình độ phát triển đồng đều."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những quan điểm, chính sách dân tộc của Đảng, Nhà nước ta là:",
        options: [
            "Vấn đề dân tộc và đoàn kết dân tộc đi đôi với cải tạo xã hội cũ, xây dựng xã hội mới, xã hội văn minh, tốt đẹp.", 
            "Vấn đề dân tộc và đoàn kết dân tộc có ý nghĩa sâu sắc trong sự nghiệp cách mạng Việt Nam.", 
            "Vấn đề dân tộc và đoàn kết dân tộc gắn liền với quá trình xây dựng và phát triển của cách mạng Việt Nam.", 
            "Vấn đề dân tộc và đoàn kết các dân tộc có vị trí chiến lược lâu dài trong sự nghiệp cách mạng Việt Nam."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những quan điểm, chính sách dân tộc của Đảng, Nhà nước ta là:",
        options: [
            "Thực hiện chính sách ưu tiên trong đào tạo, bồi dưỡng cán bộ, trí thức là người dân tộc thiểu số.", 
            "Ưu tiên trong giáo dục cán bộ, nhân lực, vật lực cho các địa phương vùng đồng bào các dân tộc thiểu số.", 
            "Tập trung phát triển nhanh về văn hóa – xã hội cho các địa phương vùng đồng bào các dân tộc thiểu số.", 
            "Thực hiện tốt các chính sách, nhất là chính sách dân số, kế hoạch hóa gia đình cho đồng bào các dân tộc thiểu số."
        ],
        correctAnswer: 0
    },

    {
        question: "Lĩnh vực trọng yếu mà các thế lực thù địch lợi dụng, lấy đó làm ngòi nổ để chống phá cách mạng Việt Nam là:",
        options: [
            "Vấn đề diễn biến hòa bình.", 
            "Vấn đề dân tộc, tôn giáo.", 
            "Vấn đề bạo loạn lật đổ.", 
            "Vấn đề dân chủ, nhân quyền."
        ],
        correctAnswer: 1
    },

    {
        question: "Để vô hiệu hóa sự lợi dụng vấn đề dân tộc, tôn giáo ở Việt Nam của các thế lực thù địch, giải pháp cơ bản nhất là thực hiện tốt:",
        options: [
            "Chính sách vận động quần chúng.", 
            "Chính sách xóa đói, giảm nghèo.", 
            "Chính sách đại đoàn kết dân tộc.", 
            "Chính sách dân tộc, tôn giáo."
        ],
        correctAnswer: 3
    },

    {
        question: "Lợi dụng những khó khăn của đồng bào dân tộc ít người, những khuyết điểm trong thực hiện chính sách của một bộ phận cán bộ để kích động đòi ly khai, tự quyết dân tộc là một trong những nội dung của thủ đoạn “Diễn biến hòa bình” trong lĩnh vực:",
        options: [
            "Tư tưởng, văn hóa.", 
            "Dân tộc, tôn giáo.", 
            "An ninh lãnh thổ.", 
            "An ninh ninh biên giới."
        ],
        correctAnswer: 1
    },

    {
        question: "Lòng biết ơn, sự tôn kính đối với những người có công khai phá tự nhiên và chống lại các thế lực áp bức trong tình cảm tâm lý con người là nguồn gốc:",
        options: [
            "Tâm lý của tôn giáo.", 
            "Cảm xúc của tôn giáo.", 
            "Nhận thức của tôn giáo.", 
            "Xã hội của tôn giáo."
        ],
        correctAnswer: 0
    },

    {
        question: "Xuất phát từ lợi ích, những lực lượng xã hội khác nhau lợi dụng tôn giáo để thực hiện mục tiêu chính trị của mình, đó là:",
        options: [
            "Tính lịch sử của tôn giáo.", 
            "Tính xã hội của tôn giáo.", 
            "Tính kinh tế của tôn giáo.", 
            "Tính chính trị của tôn giáo."
        ],
        correctAnswer: 3
    },

    {
        question: "Ngày nay thế giới đã phát triển, đời sống ngày càng được nâng cao nhưng con người vẫn tin vào tôn giáo, bởi vì:",
        options: [
            "Trình độ dân trí trên thế giới phát triển chưa đồng đều.", 
            "Con người chưa tin vào hiện thực khách quan.", 
            "Con người vẫn chưa hoàn toàn làm chủ tự nhiên và xã hội.", 
            "Thế giới vẫn còn nhiều bất công, thiên tai, chiến tranh."
        ],
        correctAnswer: 2
    },

    {
        question: "Tôn giáo có tính quần chúng, bởi vì:",
        options: [
            "Tôn giáo phản ánh sự khát vọng của quần chúng.", 
            "Tôn giáo gắn liền với hoạt động xã hội của quần chúng.", 
            "Quần chúng lấy tôn giáo làm mục đích cho tinh thần.", 
            "Quần chúng dựa vào tâm linh trong mọi hoạt động."
        ],
        correctAnswer: 0
    },

    {
        question: "Tôn giáo có nguồn gốc từ các yếu tố:",
        options: [
            "Kinh tế - xã hội, ý thức và hành vi.", 
            "Kinh tế - xã hội, nhận thức và tâm lý.", 
            "Chính trị xã hội, tinh thần và tâm lý.", 
            "Chính trị-xã hội, kinh tế và tinh thần."
        ],
        correctAnswer: 1
    },

    {
        question: "Vấn đề dân tộc, sắc tộc đã gây nên những hậu quả nặng nề về:",
        options: [
            "Chính trị tinh thần, văn hóa, xã hội và có thể gây ra chiến tranh.", 
            "Kinh tế, chính trị, văn hóa, xã hội, môi trường cho các quốc gia.", 
            "Mọi hoạt động của đời sống xã hội của các quốc gia trên thế giới.", 
            "Đời sống vật chất, tinh thần của nhân dân trên mọi quốc gia."
        ],
        correctAnswer: 1
    },

    {
        question: "Các dân tộc thiểu số ở Việt Nam cư trú phân tán và xen kẽ trên địa bàn rộng lớn, chủ yếu là ở:",
        options: [
            "Biên giới, vùng cao, hải đảo.", 
            "Rừng núi, trung du, biển đảo.", 
            "Miền núi, biên giới, hải đảo.", 
            "Vùng sâu, vùng xa, biển đảo."
        ],
        correctAnswer: 2
    },

    {
        question: "Tăng cường công tác đào tạo, bồi dưỡng cán bộ làm công tác tôn giáo, là một trong những nội dung:",
        options: [
            "Chính sách tôn giáo của Đảng, Nhà nước ta.", 
            "Quan điểm tôn giáo của chủ nghĩa Mác - Lê nin.", 
            "Quan điểm tôn giáo của Đảng, Nhà nước ta.", 
            "Chính sách tôn giáo của Chủ nghĩa Mác - Lê nin."
        ],
        correctAnswer: 0
    },

    {
        question: "Tôn giáo đã trở thành nhu cầu tinh thần, đức tin, lối sống của một bộ phận không nhỏ đã thể hiện rõ:",
        options: [
            "Tính phổ biến của tôn giáo.", 
            "Tính quần chúng của tôn giáo.", 
            "Tính xã hội của tôn giáo.", 
            "Tính rộng rãi của tôn giáo."
        ],
        correctAnswer: 1
    },

    {
        question: " Tôn giáo ra đời, tồn tại, biến đổi phản ánh và phụ thuộc vào sự vận động, phát triển của tồn tại xã hội, nhưng nó sẽ mất đi khi con người làm chủ hoàn toàn tự nhiên, xã hội và tư duy, điều đó khẳng định:",
        options: [
            "Tính xã hội của tôn giáo.", 
            "Tính phức tạp của tôn giáo.", 
            "Tính phát triển của tôn giáo.", 
            "Tính lịch sử của tôn giáo."
        ],
        correctAnswer: 3
    },

    {
        question: "Việc mở rộng giao lưu giữa các tổ chức tôn giáo Việt Nam với các tổ chức tôn giáo thế giới đã giúp cho việc tăng cường trao đổi thông tin, góp phần xây dựng tinh thần hợp tác hữu nghị, hiểu biết lẫn nhau vì:",
        options: [
            "Lợi ích phát triển chung của các tôn giáo.", 
            "Phù hợp với phát triển tôn giáo thế giới.", 
            "Lợi ích của các giáo hội và đất nước.", 
            "Sự phát triển toàn diện của đất nước."
        ],
        correctAnswer: 2
    },

    {
        question: "Tôn trọng tự do tín ngưỡng là phải không ngừng tạo điều kiện cho quần chúng phát triển, tiến bộ về mọi mặt, bài trừ mê tín dị đoan, bảo đảm cho:",
        options: [
            "Tôn giáo đoàn kết, phát triển theo kịp thế giới.", 
            "Đồng bào tôn giáo tự do, bình đẳng trước pháp luật.", 
            "Giáo sỹ, tín dồ tôn giáo ngày càng phát triển bền vững.", 
            "Tín dồ, chức sắc tôn giáo hoạt động theo đúng pháp luật."
        ],
        correctAnswer: 3
    },

    {
        question: "Các thế lực thù địch vẫn luôn lợi dụng vấn đề tôn giáo, dân tộc để chống phá cách mạng Việt Nam, chúng gắn vấn đề “dân chủ”, “nhân quyền” với:",
        options: [
            " “Tự do”, “dân chủ” để kích động biểu tình, bạo loạn.", 
            "“Tự do tôn giáo” để chia rẽ tôn giáo, dân tộc.", 
            "“Dân chủ tôn giáo” để chia rẽ dân tộc, tôn giáo.", 
            "Chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ."
        ],
        correctAnswer: 1
    },

    {
        question: "Nội dung cốt lõi của công tác tôn giáo ở Việt Nam là vận động quần chúng:",
        options: [
            "Sống “tốt đời, đẹp đạo”.", 
            "“Kính chúa yêu nước”.", 
            "“Phúc âm trong lòng dân tộc”.", 
            "Phải “từ bi, bác ái”."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những giải pháp cơ bản để vô hiệu hóa sự lợi dụng vấn đề dân tộc, tôn giáo ở Việt Nam của các thế lực thù địch là:",
        options: [
            "Tăng cường quản lý trật tự trị an, thực hiện tốt chính sách đền ơn đáp nghĩa, phát triển kinh tế - xã hội ở địa phương.", 
            "Thực hiện tốt chính sách đại đoàn kết dân tộc, bảo vệ, đấu tranh vạch trần các phần tử ly khai, phản động.", 
            "Đẩy mạnh thực hiện chính sách xóa đói giảm nghèo, nêu cao cảnh giác không làm theo kẻ tuyên truyền chống đối.", 
            "Tăng cường xây dựng củng cố khối đại đoàn kết toàn dân tộc, giữ vững ổn định chính trị - xã hội."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những giải pháp cơ bản đấu tranh phòng chống các thế lực thù địch lợi dụng vấn đề dân tộc, tôn giáo là:",
        options: [
            "Tạo điều kiện cho đồng bào các dân tộc, tôn giáo thực hiện tốt nghĩa vụ đối với đất nước.", 
            "Chăm lo nâng cao đời sống vật chất, tinh thần của đồng bào các dân tộc, các tôn giáo.", 
            "Chú trọng công tác thuyết phục đối với các già làng, trưởng bản, chức sắc tôn giáo.", 
            "Kịp thời phát hiện, ngăn chặn đối phó có hiệu quả đối với những lực lượng phản động."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những giải pháp cơ bản đấu tranh phòng chống các thế lực thù địch lợi dụng vấn đề dân tộc, tôn giáo là:",
        options: [
            "Kịp thời phát hiện, ngăn chặn đấu tranh có hiệu quả đối với những hành vi chống đối.", 
            "Chăm lo nâng cao đời sống tinh thần và đoàn kết của đồng bào các dân tộc miền núi.", 
            "Chú trọng công tác tuyên truyền thông qua các già làng, trưởng bản, chức sắc tôn giáo.", 
            "Ra sức tuyên truyền, quán triệt quan điểm, chính sách dân tộc, tôn giáo của Đảng, Nhà nước."
        ],
        correctAnswer: 3
    },

    {
        question: "Để đấu tranh phòng chống các thế lực thù địch lợi dụng vấn đề dân tộc, tôn giáo, chúng ta phải phát huy vai trò của:",
        options: [
            "Đồng bào các dân tộc, tôn giáo.", 
            "Cả hệ thống chính trị.", 
            "Các tổ chức quần chúng.", 
            "Các già làng, chức sắc tôn giáo."
        ],
        correctAnswer: 1
    },

    {
        question: "Để thực hiện thủ đoạn lợi dụng vấn đề dân tộc, tôn giáo chống phá cách mạng Việt Nam, các thế lực thù địch thường sử dụng chiêu bài:",
        options: [
            "“truyền đạo”, “dân chủ”, “tự do”.", 
            "“dân chủ”, “tuyên truyền”, “tự do”.", 
            "“nhân quyền”, “dân chủ”, “tự do”.", 
            "“nhân quyền”, “kích động”, “dân chủ."
        ],
        correctAnswer: 2
    },

    {
        question: "Ở Việt Nam vị vua được tôn vinh Phật hoàng là",
        options: [
            "Trần Nhân Tông.", 
            "Lý Thái Tông.", 
            "Trần Thánh Tông.", 
            "Lý Nhân Tông."
        ],
        correctAnswer: 0
    },

    {
        question: "Vấn đề cốt lõi xuyên suốt trong công tác dân tộc ở nước ta hiện nay là:",
        options: [
            "Nâng cao đời sống vật chất, tinh thần, điều kiện sinh sống giữa các dân tộc.", 
            "Khắc phục sự cách biệt về trình độ phát triển kinh tế - xã hội giữa các dân tộc.", 
            "Giải quyết các tệ nạn xã hội, ưu tiên phát triển toàn diện các DT ít người.", 
            "Khắc phục sự chênh lệch giàu, nghèo, sự phân hóa trong xã hội hiện nay."
        ],
        correctAnswer: 1
    },

    {
        question: "Tôn giáo là một cộng đồng xã hội với các yếu tố:",
        options: [
            "Hệ thống giáo khoa tôn giáo, nghi thức tôn giáo, đội ngũ giáo sỹ, tín đồ đông đảo và cơ sở vật chất phục vụ cho hoạt động tôn giáo.", 
            "Hệ thống giáo khoa tôn giáo, nghi thức tôn giáo, tổ chức tôn giáo với đội ngũ giáo sỹ, tín đồ, cơ sở vật chất phục vụ cho hoạt động tôn giáo.", 
            "Hệ thống giáo lý tôn giáo, nghi thức tôn giáo, tổ chức tôn giáo với các thành viên và cơ sở vật chất phục vụ cho hoạt động tôn giáo.", 
            "Hệ thống giáo lý tôn giáo, nghi lễ tôn giáo, tổ chức tôn giáo với đội ngũ giáo sỹ, tín đồ, cơ sở vật chất phục vụ cho hoạt động tôn giáo."
        ],
        correctAnswer: 3
    },

    {
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, vấn đề dân tộc là:",
        options: [
            "Vấn đề quan trọng của cách mạng XHCN.", 
            "Vấn đề chiến lược của cách mạng XHCN.", 
            "Vấn đề cần thiết của cách mạng XHCN.", 
            " Vấn đề sách lược của cách mạng XHCN."
        ],
        correctAnswer: 1
    },

    {
        question: "Việt Nam là một quốc gia dân tộc thống nhất gồm:",
        options: [
            "56 dân tộc cùng sinh sống.", 
            "52 dân tộc cùng sinh sống.", 
            "57 dân tộc cùng sinh sống.", 
            "54 dân tộc cùng sinh sống."
        ],
        correctAnswer: 3
    },

    {
        question: "Tính chất của Tôn giáo là:",
        options: [
            "Tính lịch sử, tính quần chúng, tính chính trị.", 
            "Tính kế thừa, tính phát triển, tính chính trị.", 
            "Tính chính trị, tính chọn lọc, tính phát triển.", 
            "Tính kế thừa, tính quần chúng, tính thực tiễn."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những nội dung giải quyết vấn đề dân tộc theo quan điểm của Lênin:",
        options: [
            "Các dân tộc phải ly khai, tự trị.", 
            "Các dân tộc phải phân chia đẳng cấp.", 
            "Các dân tộc hoàn toàn bình đẳng.", 
            "Các dân tộc phải có nền văn hóa chung."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những đặc điểm của các dân tộc ở Việt Nam là:",
        options: [
            "Các dân tộc Việt namđều có chung phong tục,tập quán.", 
            "Mỗi dân tộc ở Việt Nam đều có sắc thái văn hóa riêng.", 
            "Mỗi dân tộc Việt nam đều có nền văn hóa riêng.", 
            "Các dân tộc Việt nam đều có các tôn giáo riêng."
        ],
        correctAnswer: 2
    },

    {
        question: "Tôn giáo là một hình thái ý thức xã hội, phản ánh hiện thực khách quan theo:",
        options: [
            "Trào lưu của xã hội phùhợp với tư tưởng, tình cảm,niềm tin của con người.", 
            "Quy luật phát triển của đời sống xã hội, được mọi người tin tưởng tham gia.", 
            "Quan niệm hoang đường,ảo tưởng, phù hợp với tâm lý, hành vi của con người.", 
            "Chuẩn mực đạo đức, truyền thống phù hợp với tâm lý, của mọi người."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những nội dung về vấn đề dân tộc theo quan điểm của chủ nghĩa Mác - Lênin, là:",
        options: [
            "Gắn kết chặt chẽ với vấn đề giai cấp.", 
            "Gắn kết chặt chẽ với dân tộc, dân chủ.", 
            "Gắn kết chặt chẽ với độc lập dân tộc.", 
            "Gắn kết chặt chẽ với bản chất quốc tế."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những đặc điểm của các dân tộc thiểu số ở Việt Nam là:",
        options: [
            "Cư trú du canh và du cư.", 
            "Cư trú tập trung.", 
            "Cư trú phân tán và xen kẽ.", 
            "Cư trú ở rừng núi."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những nội dung giải quyết vấn đề dân tộc theo quan điểm của Lênin là:",
        options: [
            "Các dân tộc được tự chủ, tự trị.", 
            "Các dân tộc được quyền tự quyết.", 
            "Các dân tộc phải phân chia đẳng cấp.", 
            "Các dân tộc phải có văn hóa chung."
        ],
        correctAnswer: 1
    },

    {
        question: "Quyền tự do tín ngưỡng tôn giáo, được hiểu là:",
        options: [
            "Mọi người đều được tự do cầu trời, cầu tự cho mình.", 
            "Mọi người đều được tự do thờ cúng hoặc không thờ cúng.", 
            "Mọi người đều được tự do tin hay không tin ở thần linh.", 
            "Mọi người đều được tự do theo hoặc không theo tôn giáo."
        ],
        correctAnswer: 3
    },

    {
        question: "Việc phân biệt rõ hai mặt chính trị và tư tưởng trong giải quyết vấn đề tôn giáo nhằm:",
        options: [
            "Xây dựng khối đại đoàn kết toàn dân tộc.", 
            "Thống nhất nhận thức cho mọi người.", 
            "Thống nhất tư tưởng trong các tôn giáo.", 
            "Xây dựng tinh thần đoàn kết tôn giáo."
        ],
        correctAnswer: 0
    },

    {
        question: "Tôn giáo xuất hiện đầu tiên ở Việt Nam là:",
        options: [
            "Cao Đài.", 
            "Phật Giáo.", 
            "Công Giáo.", 
            "Tin Lành."
        ],
        correctAnswer: 1
    },

    {
        question: "Tôn giáo có nguồn gốc từ các yếu tố:",
        options: [
            "Chính trị - quân sự, tâm lý và nhận thức.", 
            "Chính trị - xã hội, tâm lý và ý thức.", 
            "Kinh tế - xã hội, ý thức và giáo lý.", 
            "Kinh tế - xã hội, nhận thức và tâm lý."
        ],
        correctAnswer: 3
    },

    {
        question: "Khái niệm dân tộc được hiểu theo nghĩa của một quốc gia là các thành viên cùng dân tộc sử dụng:",
        options: [
            "Nhiều ngôn ngữ để cùng giao tiếp.", 
            "Một ngôn ngữ chung để giao tiếp.", 
            "Một tiếng nói chung thống nhất.", 
            "Chung một môi trường ngôn ngữ."
        ],
        correctAnswer: 1
    },

    {
        question: "Đặc trưng cơ bản của một cộng đồng quốc gia dân tộc là:",
        options: [
            "Được thiết lập trên một lãnh thổ chung.", 
            "Dựa trên nguồn gốc sinh ra từ lâu đời.", 
            "Được xác định chung huyết thống.", 
            "Dựa trên các sắc tộc cùng màu da."
        ],
        correctAnswer: 0
    },

    {
        question: "Một dân tộc trong một quốc gia đa dân tộc có thể",
        options: [
            "Chỉ sinh sống ở những vùng núi cao.", 
            "Chỉ sinh sống ở một quốc gia dân tộc.", 
            "Sinh sống ở nhiều vùng trên thế giới.", 
            "Sinh sống ở nhiều quốc gia dân tộc."
        ],
        correctAnswer: 3
    },

    {
        question: "Theo quan điểm của chủ nghĩa Mác - Lênin, giải quyết vấn đề tôn giáo trong cách mạng xã hội chủ nghĩa là phải quán triệt:",
        options: [
            "Quan điểm tôn trọng quần chúng.", 
            "Quan điểm tôn trọng luật pháp.", 
            "Quan điểm lịch sử cụ thể.", 
            "Quan điểm tôn trọng giáo lý."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những đặc điểm của các dân tộc ở Việt Nam là:",
        options: [
            "Có truyền thống đoàn kết gắn bó xây dựng quốc gia dân tộc thống nhất.", 
            "Có truyền thống yêu nước, thương nòi kế tiếp đời này qua đời khác.", 
            "Có tinh thần chịu đựng gian khổ, khó khăn, không sợ hy sinh, vất vả.", 
            "Có tinh thần độc lập tự chủ, chịu thương, chịu khó làm ăn sinh sống."
        ],
        correctAnswer: 0
    },

    {
        question: "Các Tôn giáo lớn ở nước ta hiện nay là:",
        options: [
            "Công giáo, Phật giáo, Tin Lành, Hòa Hảo, Cơ Đốc giáo, Chính thống giáo.", 
            "Phật giáo, Công giáo, Tin Lành, Hồi Giáo, Cao Đài, Hòa Hảo.", 
            "Phật giáo, Công giáo, Tin Lành, Cao Đài, Hòa Hảo, Anh giáo.", 
            "Phật giáo, Công giáo, Tin Lành, Ki Tô giáo, Ấn Độ giáo, Cơ Đốc giáo."
        ],
        correctAnswer: 1
    },

    // Bài 3: Phòng, chống vi phạm pháp luật về bảo vệ mội trường

    {
        question: "Luật Bảo vệ môi trường năm 2020 được Quốc hội thông qua:",
        options: [
            "Ngày 17/09 năm 2020.", 
            "Ngày 17/11 năm 2020.", 
            "Ngày 17/10 năm 2020.", 
            "Ngày 17/12 năm 2020."
        ],
        correctAnswer: 1
    },

    {
        question: "Luật Bảo vệ môi trường có hiệu lực từ:",
        options: [
            "Ngày 01/07 năm 2022.", 
            "Ngày 01/01 năm 2021.", 
            "Ngày 01/01 năm 2022.", 
            "Ngày 01/07 năm 2021."
        ],
        correctAnswer: 2
    },

    {
        question: "Theo Luật Bảo vệ môi trường năm 2020 thì môi trường là:",
        options: [
            "Hệ thống các yếu tố vật chất tự nhiên và môi trường xã hội ảnh hưởng đến phát triển kinh tế - xã hội.", 
            "Hệ thống các yếu tố vật chất tự nhiên và nhân tạo quan hệ mật thiết với nhau bao quanh con người.", 
            "Hệ thống các yếu tố vật chất nhân tạo và môi trường xã hội quyết định sự tồn tại và phát triển của con người.", 
            "Hệ thống các yếu tố vật chất nhân tạo và môi trường không gian mạng chi phối đến mọi hoạt động của con người."
        ],
        correctAnswer: 1
    },

    {
        question: "Theo Luật Bảo vệ môi trường năm 2020 thì thành phần môi trường bao gồm",
        options: [
            "Các yếu tố vật chất tự nhiên và xã hội.", 
            "Các yếu tố vất chất nhân tạo và xã hội.", 
            "Các yếu tố vật chất tự nhiên, nhân tạo và xã hội.", 
            "Các yếu tố vật chất tự nhiên và nhân tạo."
        ],
        correctAnswer: 3
    },

    {
        question: "Môi trường tự nhiên bao gồm:",
        options: [
            "Tất cả các yếu tố vật chất trên trái đất.", 
            "Tất cả các yếu tố tự nhiên và vật chất do con người tạo ra.", 
            "Tất cả các yếu tố tự nhiên trên trái đất.", 
            "Tất cả các yếu tố vật chất do con nguời tạo ra."
        ],
        correctAnswer: 2
    },

    {
        question: "Môi trường nhân tạo bao gồm:",
        options: [
            "Các yếu tố vật chất do con người tạo ta.", 
            "Các yếu tố vật chất do máy móc tạo ra.", 
            "Các yếu tố phi vật chất do con người tạo ta.", 
            "Các yếu tố vật chất do con người cải tạo từ tự nhiên."
        ],
        correctAnswer: 0
    },

    {
        question: "“Pháp luật quy định những quy tắc xử sự mà con người phải thực hiện khi khai thác và sử dụng các yếu tố của môi trường” là nói đến:",
        options: [
            "Vị trí của pháp luật bảo vệ môi trường.", 
            "Vai trò của pháp luật về bảo vệ môi trường.", 
            "Tính chất của pháp luật bảo vệ môi trường.", 
            "Đặc điểm của pháp luật bảo vệ môi trường."
        ],
        correctAnswer: 1
    },

    {
        question: " Hệ thống quy chuẩn môi trường, tiêu chuẩn môi trường do:",
        options: [
            "Quốc hội và Hội đồng nhân dân các cấp ban hành.", 
            "Chính phủ và Ủy ban nhân dân các cấp ban hành.", 
            "Cơ quan nhà nước có thẩm quyền ban hành.", 
            "Bộ tài nguyên và môi trường ban hành."
        ],
        correctAnswer: 2
    },

    {
        question: "Quy chuẩn môi trường, tiêu chuẩn môi trường là:",
        options: [
            "Trách nhiệm pháp lý để tòa án áp dụng đối với các cá nhân, tổ chức vi phạm.", 
            "Điều kiện pháp lý để cơ quan bảo vệ pháp luật xử phạt tổ chức, cá nhân vi phạm.", 
            "Nguyên tắc pháp lý để cho mọi cá nhân, tổ chức chấp hành và tuân thủ.", 
            "Cơ sở pháp lý cho việc xác định có vi phạm pháp luật về môi trường hay không."
        ],
        correctAnswer: 3
    },

    {
        question: " Thực chất của quy chuẩn môi trường, tiêu chuẩn môi trường:",
        options: [
            "Quy chuẩn, tiêu chuẩn kỹ thuật.", 
            "Quy chuẩn, thông số kỹ thuật.", 
            "Quy chuẩn, chỉ số kỹ thuật.", 
            "Quy chuẩn, định mức kỹ thuật."
        ],
        correctAnswer: 0
    },

    {
        question: "Các chế tài được áp dụng trong khai thác, sử dụng các yếu tố môi trường là:",
        options: [
            "Chế tài hình sự, chế tài kinh tế, chế tài bảo vệ, chế tài bảo đảm.", 
            "Chế tài hình sự, chế tài kinh tế, chế tài hành chính, chế tài dân sự.", 
            "Chế tài kinh tế, chế tài hành chính, chế tài trừng trị, chế tài khôi phục.", 
            "Chế tài hành chính, chế tài dân sự, chế tài thương mại, chế tài vô hiệu hóa."
        ],
        correctAnswer: 1
    },

    {
        question: "Chế tài được sử dụng trong lĩnh vực bảo vệ môi trường, vừa có tác dụng ngăn chặn các hành vi vi phạm, vừa có tác dụng:",
        options: [
            "Cưỡng chế công dân vi phạm pháp luật bảo vệ môi trường.", 
            "Xử phạt cộng đồng doanh nghiệp vi phạm pháp luật bảo vệ môi trường.", 
            "Giáo dục công dân tôn trọng pháp luật bảo vệ môi trường.", 
            "Truy cứu trách nhiệm doanh nghiệp vi phạm pháp luật bảo vệ môi trường."
        ],
        correctAnswer: 2
    },

    {
        question: "Thông qua pháp luật bảo vệ môi trường Nhà nước quy định:",
        options: [
            "Nghĩa vụ, trách nhiệm, quy định của tổ chức trong công tác bảo vệ môi trường.", 
            "Chức năng, nhiệm vụ, quyền hạn của tổ chức trong công tác bảo vệ môi trường.", 
            "Nguyên tắc hoạt động của cơ quan Nhà nước trong công tác bảo vệ môi trường.", 
            " Quy tắc, thủ tục hành chính của cơ quan Nhà nước trong công tác bảo vệ môi trường."
        ],
        correctAnswer: 1
    },

    {
        question: "Trong giải quyết tranh chấp liên quan đến bảo vệ môi trường thì pháp luật bảo vệ môi trường là:",
        options: [
            "Hệ thống các quy phạm pháp luật điều chỉnh hành vi, xử sự.", 
            "Hệ thống các quy phạm pháp luật điều chỉnh hành vi.", 
            "Hệ thống các quy phạm pháp luật điều chỉnh hành động.", 
            "Hệ thống những quy định và chế tài xử phạt."
        ],
        correctAnswer: 0
    },

    {
        question: "Văn bản quy phạm pháp luật cao nhất trong hệ thống pháp luật Việt Nam về bảo vệ môi trường là: ",
        options: [
            "Luật, pháp lệnh.", 
            "Nghị định, nghị quyết.", 
            "Hiến pháp.", 
            "Văn bản hướng dẫn thi hành."
        ],
        correctAnswer: 2
    },

    {
        question: " Hình thức xử lý vi phạm pháp luật trong lĩnh vực bảo vệ môi trường, bao gồm:",
        options: [
            "Xử lý hình sự, xử lý phạt tù, xử lý phạt tiền.", 
            "Xử lý hình sự, xử lý vi phạm hành chính, xử lý trách nhiệm dân sự.", 
            "Xứ lý vi phạm hành chính, xử lý phạt tiền, bồi thường.", 
            "Xử lý trách nhiệm dân sự, buộc khôi phục trạng thái ban đầu."
        ],
        correctAnswer: 1
    },

    {
        question: "Tội phạm về môi trường là hành vi nguy hiểm cho xã hội được quy định trong:",
        options: [
            "Bộ Luật Tố tụng hình sự năm 2015 (bổ sung, sửa đổi năm 2017).", 
            "Luật Bảo vệ môi trường năm 2020.", 
            "Bộ Luật hình sự năm 2015 (bổ sung, sửa đổi năm 2017).", 
            "Bộ Luật dân sự năm 2015."
        ],
        correctAnswer: 2
    },

    {
        question: "Tội phạm về môi trường là xâm phạm đến các quy định của Nhà nước về bảo vệ môi trường, xâm phạm đến các yếu tố môi trường làm thay đổi:",
        options: [
            "Trạng thái, tính chất của môi trường.", 
            "Quy chuẩn, tiêu chuẩn môi trường.", 
            "Thông số, kỹ thuật môi trường.", 
            "Định mức, kỹ thuật môi trường."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những nguyên nhân điều kiện khách quan dẫn đến vi phạm pháp luật về môi trường là do:",
        options: [
            "Sự phát triển quá nhanh của nền kinh tế.", 
            "Quy chuẩn môi trường, tiêu chuẩn môi trường quá khắt khe.", 
            "Áp lực tăng trưởng kinh tế.", 
            "Các khu đô thị và khu dân cư ngày càng nhiều."
        ],
        correctAnswer: 2
    },

    {
        question: " “Các cơ quan Nhà nước có thẩm quyền ban hành nhiều chính sách ưu đãi để phát triển kinh tế mà không quan tâm đến bảo vệ môi trường” là một trong những:",
        options: [
            "Nguyên nhân, điều kiện chủ quan.", 
            "Nguyên nhân, điều kiện khách quan.", 
            "Nguyên nhân, điều kiện đối tượng vi phạm.", 
            "Nguyên nhân, điều kiện của cơ quan Nhà nước."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những nguyên nhân điều kiện chủ quan dẫn đến vi phạm pháp luật về môi trường là:",
        options: [
            "Chế tài xử lý vi phạm chưa đủ mạnh, chưa đủ sức răn đe.", 
            "Các thủ đoạn vi phạm ngày càng tinh vi, khó kiểm soát.", 
            "Các cơ quan chức năng chưa phát huy hết vai trò, trách nhiệm.", 
            "Công tác quản lý của cơ quan chức năng còn chồng chéo."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những nguyên nhân, điều kiện chủ quan của vi phạm pháp luật về bảo vệ môi trường là:",
        options: [
            "Phần lớn cán bộ trong lực lượng trực tiếp đấu tranh phòng, chống còn thiếu các kiến thức chuyên sâu về môi trường.", 
            "Ý thức coi thường pháp luật, sống thiếu kỷ cương không tuân thủ các quy tắc, chuẩn mực xã hội.", 
            "Các cơ quan chức năng chưa phát huy hết vai trò, trách nhiệm trong phòng, chống vi phạm pháp luật về bảo vệ môi trường.", 
            "Các cơ quan Nhà nước có thẩm quyền ban hành nhiều chính sách ưu đãi để phát triển kinh tế mà không quan tâm đến bảo vệ môi trường."
        ],
        correctAnswer: 0
    },

    {
        question: "“Đội ngũ cán bộ chiến sỹ trực tiếp đấu tranh phòng chống vi phạm pháp luật về bảo vệ môi trường còn thiếu” là một trong những:",
        options: [
            "Nguyên nhân điều kiện khách thể.", 
            "Nguyên nhân, điều kiện chủ quan.", 
            "Nguyên nhân, điều kiện chủ thể.", 
            "Nguyên nhân, điều kiện khách quan."
        ],
        correctAnswer: 1
    },

    {
        question: "Hầu hết các tội phạm về môi trường đều:",
        options: [
            "Có kiến thức nhất định về môi trường.", 
            "Nhận thức yếu kém về môi trường.", 
            "Nhằm mục đích thu lợi bất chính về kinh tế.", 
            "Hoạt động trong lĩnh vực môi trường."
        ],
        correctAnswer: 2
    },

    {
        question: " Phòng, chống vi phạm pháp luật về bảo vệ môi trường là:",
        options: [
            "Hoạt động của Quốc hội và HĐND các cấp.", 
            "Hoạt động của cơ quan Nhà nước.", 
            "Hoạt động của chính phủ và UBND các cấp.", 
            "Hoạt động của cơ quan bảo vệ pháp luật."
        ],
        correctAnswer: 1
    },

    {
        question: "Phòng, chống vi phạm pháp luật về bảo vệ môi trường nhằm:",
        options: [
            "Duy trì môi trường trong sạch và giữ nguyên hiện trạng môi trường.", 
            "Ngăn chặn nguy cơ, điều kiện vi phạm pháp luật về bảo vệ môi trường.", 
            "Bảo đảm cho sự phát triển ổn định, bền vững kinh tế - xã hôi của đất nước.", 
            "Ngăn chặn, hạn chế tình trạng vi phạm pháp luật về bảo vệ môi trường."
        ],
        correctAnswer: 3
    },

    {
        question: "Phòng, chống vi phạm pháp luật về bảo vệ môi trường để:",
        options: [
            "Duy trì trạng thái bình thường, ngăn ngừa các hành vi vi phạm pháp luật về bảo vệ môi trường.", 
            "Không còn tình trạng cá nhân, tổ chức, doanh nghiệp vi phạm pháp luật về bảo vệ môi trường.", 
            "Bảo vệ người dân được sống trong môi trường trong lành, ít bị tác động bởi môi ô nhiễm.", 
            "Kịp thời phát hiện, điều tra, xử lý các hành vi vi phạm pháp luật về bảo vệ môi trường."
        ],
        correctAnswer: 3
    },

    {
        question: "Phòng, chống vi phạm pháp luật là tổng hợp các biện pháp:",
        options: [
            "Phòng ngừa, phát hiện, ngăn chặn và đấu tranh.", 
            "Khởi tố, điều tra, tuy tố và xét xử.", 
            "Phát hiện, ngăn chặn, điều tra và xử lý.", 
            "Điều tra, tuy tố, xét xử và thi hành án."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những đặc điểm phòng, chống vi phạm pháp luật về môi trường:",
        options: [
            "Các cơ quan Nhà nước có thẩm quyền ban hành nhiều chính sách ưu đãi để phát triển kinh tế mà không quan tâm đến bảo vệ môi trường.", 
            "Pháp luật xây dựng hệ thống các quy chuẩn môi trường, tiêu chuẩn môi trường để bảo vệ môi trường.", 
            "Phòng, chống vi phạm pháp luật về bảo vệ môi trường có sự phối kết hợp chặt chẽ giữa các chủ thể tham gia trên cơ sở chức năng, quyền hạn được phân công.", 
            "Các cơ quan chức năng chưa phát huy hết vai trò, trách nhiệm trong phòng, chống vi phạm pháp luật về bảo vệ môi trường."
        ],
        correctAnswer: 2
    },

    {
        question: " “Phòng, chống vi phạm pháp luật về BVMT có liên quan trực tiếp đến việc sử dụng các công cụ phương tiện nghiệp vụ và ứng dụng tiến bộ của KHCN” là:",
        options: [
            "Tính chất phòng, chống vi phạm pháp luật về môi trường.", 
            "Biện pháp phòng, chống vi phạm pháp luật về môi trường.", 
            "Đặc điểm phòng, chống vi phạm pháp luật về môi trường.", 
            " Giải pháp phòng, chống vi phạm pháp luật về môi trường."
        ],
        correctAnswer: 2
    },

    {
        question: "Biện pháp tiến hành phòng, chống vi phạm pháp luật về bảo vệ môi trường có sự kết hợp hài hòa",
        options: [
            "Giữa biện pháp phòng ngừa với biện pháp điều tra, xử lý.", 
            "Giữa biện pháp phòng ngừa xã hội với biện pháp phòng ngừa nghiệp vụ.", 
            "Giữa biện pháp phòng ngừa pháp luật với biện pháp răn đe, xử phạt.", 
            "Giữa biện pháp phòng ngừa hành chính với biện pháp phòng ngừa hình sự."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong các hành vi bị nghiêm cấm trong Điều 6 - Luật Bảo vệ môi trường năm 2020:",
        options: [
            "Phá hoại, xâm chiếm trái phép di tích khảo cổ.", 
            "Phá hoại, xâm chiếm trái phép di sản thiên nhiên.", 
            "Phá hoại, xâm chiếm trái phép di tích lịch sử.", 
            "Phá hoại, xâm chiếm trái phép danh lam thắng cảnh."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong các hành vi bị nghiêm cấm trong Điều 6 - Luật Bảo vệ môi trường năm 2020:",
        options: [
            "Lợi dụng chức vụ, quyền hạn để làm trái quy định của pháp luật về bảo vệ môi trường.", 
            "Lợi dụng chức vụ, quyền hạn để làm thay đổi quy chuẩn môi trường, tiêu chuẩn môi trường.", 
            "Lợi dụng chức vụ, quyền hạn để làm biến đổi các thành phần môi trường tự nhiên và nhân tạo.", 
            "Lợi dụng chức vụ, quyền hạn để làm xê dịch các công trình phục vụ công tác bảo vệ môi trường."
        ],
        correctAnswer: 0
    },

    {
        question: "Nội dung cơ bản của biện pháp tổ chức - hành chính phòng, chống vi phạm pháp luật vệ bảo vệ môi trường là:",
        options: [
            "Dùng các lợi ích vật chất để kích thích chủ thể thực hiện những hoạt động có lợi cho môi trường.", 
            "Ứng dụng các biện pháp khoa học - công nghệ vào giải quyết những vấn đề môi trường.", 
            "Xây dựng, hoàn thiện cơ cấu tổ chức các cơ quan quản lý Nhà nước về bảo vệ môi trường.", 
            "Giáo dục, tuyên truyền đường lối, chính sách của Đảng, pháp luật của Nhà nước nhằm nâng cao nhận thức của cộng đồng vào việc bảo vệ môi trường."
        ],
        correctAnswer: 2
    },

    {
        question: "Mội trong những nội dung biện pháp kinh tế trong phòng, chống vi phạm pháp luật về bảo vệ môi trường là:",
        options: [
            "Giảm ưu đãi về thuế đối với chủ thể vi phạm.", 
            "Xử lý, hạn chế lợi ích kinh tế của chủ thể vi phạm.", 
            "Tăng áp dụng thuế đối với chủ thể vi phạm.", 
            "Khuyến khích sử dụng khoa học công nghệ."
        ],
        correctAnswer: 1
    },

    {
        question: " Biện pháp pháp luật trong phòng, chống vi phạm pháp luật về bảo vệ môi trường là:",
        options: [
            "Tăng cường đấu tranh phòng, chống tội phạm về môi trường và tăng cường pháp chế xã hội chủ nghĩa.", 
            "Nâng cao hiệu quả, hiệu lực quản lý nhà nước về môi trường và đấu tranh phòng, chống tội phạm về môi trường.", 
            "Xây dựng các quy phạm pháp luật và tổ chức thực hiện, áp dụng pháp luật để điều chỉnh các quan hệ xã hội liên quan đến việc bảo vệ môi trường.", 
            "Củng cố, kiện toàn bộ máy và hoạt động của lực lượng chức năng tham gia thực hiện công tác bảo vệ môi trường."
        ],
        correctAnswer: 2
    },

    {
        question: "Vai trò của Đảng Cộng sản Việt Nam trong phòng, chống vi phạm pháp luật về bảo vệ môi trường là:",
        options: [
            "Đảng lãnh đạo trực tiếp, nhiều mặt đối với các cơ quan trực tiếp phòng, chống tội phạm về môi trường.", 
            "Đảng tổ chức mọi mặt các cơ quan chức năng phòng, chống tội phạm vi phạm pháp luật về môi trường.", 
            "Đảng chỉ huy mọi mặt các cơ quan nghiệp vụ trong phòng, chống tội phạm vi phạm pháp luật về môi trường.", 
            " Đảng kiểm tra, giám sát mọi mặt cơ quan bảo vệ pháp luật xử lý những vụ vi phạm pháp luật về môi trường."
        ],
        correctAnswer: 0
    },

    {
        question: "Quốc hội và Hội đồng nhân dân các cấp có chức năng, quyền hạn, nhiệm vụ gì trong công tác phòng, chống vi phạm pháp luật về bảo vệ môi trường?",
        options: [
            "Lãnh đạo các cơ quan chức năng thực hiện tốt trách nhiệm, quyền hạn trong công tác bảo vệ môi trường.", 
            "Ban hành và hoàn thiện hệ thống pháp luật,Pháp lệnh, Nghị quyết về công tác bảo vệ môi trường.", 
            "Chỉ đạo cơ quan bảo vệ pháp luật xử lý nghiêm khắc những hành vi vi phạm pháp luật về bảo vệ môi trường.", 
            "Giám sát hoạt động của Chính phủ và Ủy ban nhân dân các cấp phòng, chống vi phạm pháp luật về môi trường."
        ],
        correctAnswer: 3
    },

    {
        question: "“Tham gia tích cực và hưởng ứng các chương trình, hành động về bảo vệ môi trường do Nhà nước, các Bộ, ngành phát động” là trách nhiện của:",
        options: [
            "Sinh viên.", 
            "Công dân.", 
            "Nhà trường.", 
            "Mọi người."
        ],
        correctAnswer: 2
    },

    {
        question: "“Tích cực học tập, nghiên cứu nắm vững các quy định của pháp luật về phòng, chống vi phạm pháp luật về bảo vệ môi trường” là trách nhiệm của:",
        options: [
            "Sinh viên.", 
            "Công dân.", 
            "Học sinh.", 
            "Mọi người."
        ],
        correctAnswer: 0
    },

    {
        question: "Môi trường là:",
        options: [
            "Hệ thống yếu tố tự nhiên.", 
            "Hệ thống yếu tố tự nhiên và nhân tạo.", 
            "Hệ thống yếu tố nhân tạo.", 
            "Hệ thống các vi sinh vật bao quanh con người."
        ],
        correctAnswer: 1
    },

    {
        question: "Môi trường có tác động ảnh hưởng đến:",
        options: [
            "Đời sống, kinh tế-xã hội và sự tồn tại và phát triển của con người.", 
            "Đời sống con người.", 
            "Đời sống, kinh tế-xã hội và sự tồn tại, phát triển của con người, sinh vật tự nhiên.", 
            "Sự phát triển kinh tế - xã hội."
        ],
        correctAnswer: 2
    },

    {
        question: "Môi trường tự nhiên bao gồm:",
        options: [
            "Tất cả các yếu tố con người, tài nguyên,vi sinh vật.", 
            "Tất cả các yếu tố do con người tạo ra.", 
            " Tất cả các yếu tố tự nhiên và nhân tạo.", 
            "Tất cả các yếu tố tự nhiên trên trái đất."
        ],
        correctAnswer: 3
    },

    {
        question: "Môi trường tự nhiên mang lại:",
        options: [
            "Không gian và điều kiện để con người sinh sống và tồn tại.", 
            "Tài nguyên và khoáng sản.", 
            "Điều kiện phát triển kinh tế.", 
            "Không khí và nước."
        ],
        correctAnswer: 0
    },

    {
        question: "Môi trường nhân tạo bao gồm:",
        options: [
            "Các yếu tố do con người tạo ra.", 
            "Các yếu tố vật chất do con người tạo ra.", 
            "Tất cả những vật chất phục vụ cuộc sống con người.", 
            "Các yếu tố do con người tạo ra và tự nhiên."
        ],
        correctAnswer: 1
    },

    {
        question: "Pháp luật quy định:",
        options: [
            "Quy định bắt buộc mà con người phải thực hiện và khi khai thác và sử dụng các yếu tố của môi trường.", 
            "Nguyên tắc xử sự mà con người phải thực hiện và khi khai thác và sử dụng các yếu tố của môi trường.", 
            "Quy tắc xử sự mà con người phải thực hiện và khi khai thác và sử dụng các yếu tố của môi trường.", 
            "Chế tài thực thi mà con người phải thực hiện và khi khai thác và sử dụng các yếu tố của môi trường."
        ],
        correctAnswer: 2
    },

    {
        question: " Môi trường vừa là điều kiện sống vừa là:",
        options: [
            "Nhu cầu khai thác không tái tạo.", 
            "Đối tượng tác động hàng ngày của con người.", 
            "Đối tượng tác động theo quy luật.", 
            "Nguồn tài nguyên vô tận."
        ],
        correctAnswer: 1
    },

    {
        question: " Pháp luật với tư cách là:",
        options: [
            "Công cụ điều tiết các hành vi của các thành viên trong xã hội.", 
            "Công cụ chi phối các hành vi của các thành viên trong xã hội.", 
            "Công cụ quyết định các hành vi của các thành viên trong xã hội.", 
            " Công cụ răn đe các hành vi của các thành viên trong xã hội."
        ],
        correctAnswer: 0
    },

    {
        question: "Pháp luật xây dựng hệ thống:",
        options: [
            "Quy chuẩn để bảo vệ môi trường.", 
            "Tiêu chuẩn để bảo vệ môi trường.", 
            "Các quy chuẩn môi trường, tiêu chuẩn môi trường để bảo vệ môi trường.", 
            "Bộ quy tắc ứng xử để bảo vệ môi trường."
        ],
        correctAnswer: 2
    },

    {
        question: "Các quy chuẩn môi trường và tiêu chuẩn môi trường là:",
        options: [
            "Hệ thống văn bản quy định xác định có vi phạm pháp luật về môi trường hay không.", 
            "Cơ sở pháp lý xác định có vi phạm pháp luật về môi trường hay không.", 
            "Nguyên tắc quy định xác định có vi phạm pháp luật về môi trường hay không.", 
            "Nguyên tắc pháp lý xác định có vi phạm pháp luật về môi trường hay không."
        ],
        correctAnswer: 1
    },

    {
        question: "Pháp luật quy định:",
        options: [
            "Chức năng, quyền hạn của các cơ quan, tổ chức và cá nhân tham gia bảo vệ môi trường.", 
            "Chức năng, nhiệm vụ, quyền hạn của các cơ quan, tổ chức và cá nhân tham gia bảo vệ môi trường.", 
            "Nhiệm vụ, chức năng và quyền xử phạt của các cơ quan, tổ chức và cá nhân tham gia bảo vệ môi trường.", 
            "Quyền hạn áp dụng quy định xử phạt của các cơ quan, tổ chức và cá nhân tham gia bảo vệ môi trường."
        ],
        correctAnswer: 1
    },

    {
        question: "Pháp luật có tác dụng rất lớn trong việc tạo ra: ",
        options: [
            "Cơ chế hoạt động hiệu quả cho các tổ chức bảo vệ môi trường.", 
            "Cơ chế thuận lợi cho các tổ chức bảo vệ môi trường.", 
            "Không gian hoạt động hiệu quả cho các tổ chức bảo vệ môi trường.", 
            "Lợi ích về vật chất cho các tổ chức bảo vệ môi trường."
        ],
        correctAnswer: 0
    },

    {
        question: "Trong giải quyết tranh chấp liên quan đến bảo vệ môi trường thì Pháp luật bảo vệ môi trường là:",
        options: [
            "Hệ thống các quy phạm pháp luật điều chỉnh hành vi.", 
            "Hệ thống các quy phạm pháp luật điều chỉnh hành động.", 
            "Hệ thống các quy phạm pháp luật điều chỉnh hành vi, xử sự.", 
            "Hệ thống những quy định và chế tài xử phạt."
        ],
        correctAnswer: 2
    },

    {
        question: "Pháp luật xử lý vi phạm trong lĩnh vực bảo vệ môi trường:",
        options: [
            "Xử lý hình sự.", 
            "Xử lý hình sự, vi phạm hành chính và trách nhiệm dân sự.", 
            "Xử lý vi phạm hành chính.", 
            "Xử lý trách nhiệm dân sự."
        ],
        correctAnswer: 1
    },

    {
        question: "Tội phạm về môi trường là hành vi nguy hiểm cho xã hội có:",
        options: [
            "Tác động tiêu cực đến các yếu tố của môi trường, tài nguyên.", 
            "Gây tổn hại ở mức độ đáng kể đến các yếu tố của môi trường, tài nguyên.", 
            "Tác động tiêu cực và gây tổn hại đáng kể đến các yếu tố của môi trường, tài nguyên.", 
            "Gây tổn hại nghiêm trọng đến các yếu tố của môi trường, tài nguyên."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những nguyên nhân điều kiện khách quan dẫn đến vi phạm pháp luật về môi trường là:",
        options: [
            "Áp lực tăng trưởng kinh tế.", 
            "Áp lực đảm bảo cuộc sống mưu sinh của con người.", 
            "Nhận thức của người dân.", 
            "Bùng nổ dân số."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những nguyên nhân điều kiện khách quan dẫn đến vi phạm pháp luật về môi trường là:",
        options: [
            "Phối hợp giữa các cơ quan chức năng chưa chặt chẽ.", 
            "Công tác quản lý nhà nước về môi trường còn chồng chéo, trùng dẫm.", 
            "Hệ thống luật pháp còn lỏng lẻo.", 
            "Tham nhũng của cán bộ làm công tác chuyên môn."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những nguyên nhân điều kiện chủ quan dẫn đến vi phạm pháp luật về môi trường là:",
        options: [
            "Hệ thống pháp luật chưa đủ chặt, đủ mạnh.", 
            "Khung hình phạt chưa mang tính răn đe mạnh.", 
            "Các cơ quan chức năng chưa phát huy hết vai trò, trách nhiệm trong phòng chống vi phạm pháp luật về bảo vệ môi trường.", 
            "Công tác quản lý còn chồng chéo."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những nguyên nhân điều kiện chủ quan dẫn đến vi phạm pháp luật về môi trường là:",
        options: [
            "Phối hợp giữa các cơ quan chức năng chưa chặt chẽ.", 
            "Đội ngũ cán bộ chiến sĩ trực tiếp đấu tranh phòng chống vi phạm pháp luật về bảo vệ môi trường còn thiếu.", 
            "Hệ thống luật pháp còn lỏng lẻo.", 
            "Tham nhũng của cán bộ làm công tác chuyên môn còn xảy ra thường xuyên."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những nguyên nhân dẫn đến vi phạm pháp luật về bảo vệ môi trường của các đối tượng vi phạm:",
        options: [
            "Động cơ trả thù cá nhân.", 
            "Sự quản lý lỏng lẻo của cơ quan chức năng.", 
            "Thiếu trách nhiệm của đội ngũ cán bộ trực tiếp làm nhiệm chuyên môn.", 
            "Thu lợi bất chính về kinh tế."
        ],
        correctAnswer: 3
    },

    // Bài 4: Phòng, chống vi phạm pháp luật về đảm bảo trật tự, an toàn giao thông

    {
        question: "Pháp luật về bảo đảm trật tự, an toàn giao thông nhằm:",
        options: [
            "Điều chỉnh các quan hệ xã hội trong quá trình tổ chức thực hiện hoạt động chấp hành và điều hành của Nhà nước, tổ chức, công dân.", 
            "Điều chỉnh các quan hệ xã hội phát sinh trong quá trình tổ chức thực hiện hoạt động chấp hành và điều hành của Nhà nước, tổ chức, công dân.", 
            "Điều chỉnh hành vi xã hội trong quá trình tổ chức thực hiện hoạt động chấp hành và điều hành của Nhà nước, tổ chức, công dân.", 
            "Điều chỉnh hành vi, ứng xử trong quá trình tổ chức thực hiện hoạt động chấp hành và điều hành của Nhà nước, tổ chức, công dân."
        ],
        correctAnswer: 1
    },

    {
        question: "Pháp luật về đảm bảo trật tự, an toàn giao thông là",
        options: [
            "Công cụ thực thi để thực hiện chức năng quản lý Nhà nước.", 
            "Công cụ xử lý để thực hiện chức năng quản lý Nhà nước.", 
            "Công cụ pháp lý để thực hiện chức năng quản lý Nhà nước.", 
            "Công cụ đấu tranh để thực hiện chức năng quản lý Nhà nước."
        ],
        correctAnswer: 2
    },

    {
        question: "Các dạng vi phạm pháp luật về bảo đảm trật tự an toàn giao thông bao gồm:",
        options: [
            "Vi phạm hành chính; Vi phạm dân sự.", 
            "Vi phạm hành chính; vi phạm hình sự.", 
            "Vi phạm dân sự và vi phạm hình sự.", 
            "Vi phạm dân sự."
        ],
        correctAnswer: 1
    },

    {
        question: "Vi phạm hình sự xảy ra trong lĩnh vực bảo đảm trật tự an toàn giao thông được quy định trong bộ luật nào?",
        options: [
            "Bộ luật tố tụng dân sự.", 
            "Bộ luật dân sự.", 
            "Bộ luật tố tụng hình sự.", 
            "Bộ luật hình sự."
        ],
        correctAnswer: 3
    },

    {
        question: "Độ tuổi quy định chủ thể không phải chịu trách nhiệm hình sự về lỗi vô ý khi vi phạm pháp luật bảo đảm trật tự an toàn giao thông:",
        options: [
            "Từ 12 đến 16 tuổi.", 
            "Từ 14 đến 18 tuổi.", 
            "Từ đủ 14 tuổi đến dưới 16 tuổi.", 
            "Từ 14 tuổi đến đủ 16 tuổi."
        ],
        correctAnswer: 2
    },

    {
        question: "Chủ thể tham gia giao thông đường bộ là:",
        options: [
            "Người đủ 16 tuổi trở lên có khả năng nhận thức và khả năng điều khiển hành vi.", 
            "Người đủ 16 tuổi trở lên.", 
            "Người có năng lực trách nhiệm hình sự.", 
            "Người có nhận thức và làm chủ hành vi."
        ],
        correctAnswer: 0
    },

    {
        question: "Mặt khách quan của tội phạm xâm phạm an toàn giao thông là:",
        options: [
            "Phương tiện không đảm bảo chỉ số kỹ thuật.", 
            "Phương tiện đi quá tốc độ, chở quá người quy định, vượt trái phép, không đúng làn đường.", 
            "Phương tiện lưu thông từ mua bán trái phép.", 
            "Phương tiện quá khổ, quá tải."
        ],
        correctAnswer: 1
    },

    {
        question: "Mặt chủ quan của tội vi phạm tham gia giao thông đường bộ (Điều 11- Bộ luật Hình sự hiện hành)?",
        options: [
            "Thấy trước hành vi có thể gây hậu quả nhưng vẫn cố ý để hậu quả đó xảy ra.", 
            "Không thấy trước hành vi phạm tội của mình.", 
            "Thấy trước hành vi có thể gây hậu quả nhưng cho rằng hậu quả đó sẽ không xảy ra hoặc có thể ngăn ngừa được.", 
            "Thấy trước hành vi phạm tội của mình có thể gây hậu quả nghiêm trọng cho xã hội."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những nguyên nhân, điều kiện dẫn đến vi phạm pháp luật về trật tự, an toàn giao thông:",
        options: [
            "Hệ thống pháp luật còn chưa đủ chặt, đủ mạnh để răn đe.", 
            "Hiện tượng tiêu cực mang tính phổ biến.", 
            "Ý thức tự giác của người tham gia giao thông chưa cao.", 
            "Tác động tiêu cực của các yếu tố thiên nhiên, môi trường đối với người tham gia giao thông."
        ],
        correctAnswer: 3
    },

    {
        question: "An toàn giao thông là tổng hợp:",
        options: [
            "Cách thức, biện pháp được sử dụng để ngăn chặn người tham gia giao thông tử vong hoặc bị thương nặng do tai nạn giao thông.", 
            "Biện pháp được sử dụng để ngăn chặn người tham gia giao thông tử vong hoặc bị thương nặng do tai nạn giao thông.", 
            "Quy định được sử dụng để ngăn chặn người tham gia giao thông tử vong hoặc bị thương nặng do tai nạn giao thông.", 
            "Nguyên tắc được sử dụng để ngăn chặn người tham gia giao thông tử vong hoặc bị thương nặng do tai nạn giao thông."
        ],
        correctAnswer: 0
    },

    {
        question: "Trật tự, an toàn giao thông là trạng thái xã hội có trật tự được hình thành và điều chỉnh bởi:",
        options: [
            "Hệ thống văn bản pháp quy trong lĩnh vực giao thông.", 
            "Các quy phạm pháp luật trong lĩnh vực giao thông.", 
            "Hệ thống nguyên tắc điều chỉnh hành vi trong lĩnh vực giao thông.", 
            "Ý thức công dân tham gia trong lĩnh vực giao thông."
        ],
        correctAnswer: 1
    },

    {
        question: "Phòng chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông là:",
        options: [
            "Hoạt động của các tổ chức.", 
            "Hoạt động của cơ quan Nhà nước.", 
            "Hoạt động của cơ quan Nhà nước, các tổ chức xã hội và công dân.", 
            "Hoạt động của cá nhân."
        ],
        correctAnswer: 2
    },

    {
        question: "Cơ quan hay tổ chức nào trực tiếp chỉ đạo và phân công, phân cấp cụ thể cho các bộ, ngành, cơ quan đoàn thể trong phòng ngừa tội phạm và vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông:",
        options: [
            "Đảng cộng sản Việt Nam.", 
            "Chính phủ, Uỷ ban nhân dân các cấp.", 
            "Quốc hội, Hội đồng nhân dân các cấp.", 
            "Bộ giao thông vận tải."
        ],
        correctAnswer: 1
    },

    {
        question: "Cơ quan nào chịu trách nhiệm trước chính phủ trong việc thực hiện quản lý Nhà nước về đảm bảo trật tự, an toàn giao thông:",
        options: [
            "Bộ giao thông vận tải.", 
            "Bộ công an.", 
            "Cục quản lý đường bộ.", 
            "Cục quản lý đường biển."
        ],
        correctAnswer: 0
    },

    {
        question: "Cơ quan nào trực tiếp chỉ đạo, hướng dẫn kiểm tra thực hiện pháp luật về bảo đảm trật tự, an toàn giao thông:",
        options: [
            "Viện kiểm sát nhân nhân tối cao.", 
            "Tòa án nhân nhân tối cao.", 
            "Bộ công an.", 
            "Bộ giao thông vận tải."
        ],
        correctAnswer: 2
    },

    {
        question: "Cơ quan bảo vệ pháp luật trong bảo đảm trật tự, an toàn giao thông bao gồm:",
        options: [
            "Bộ công an; Bộ quốc phòng; Tòa án nhân dân tối cao.", 
            "Công an; Viện kiểm soát; Tòa án.", 
            "Bộ giao thông vận tải; Bộ công an; Bộ quốc phòng.", 
            "Tòa án; quân đội; công an."
        ],
        correctAnswer: 1
    },

    {
        question: "Phòng, chống vi phạm về bảo đảm TTATGT Là sử dụng các biện pháp, phương tiện để phát hiện, ngăn chặn, đấu tranh, điều tra. Nhằm khắc phục những nguyên nhân, điều kiện dẫn đến phạm tội về vi phạm pháp luật bảo đảm trật tự an toàn giao thông là:",
        options: [
            "Giải pháp phòng chống vi phạm về bảo đảm TTATGT.", 
            "Nhiệm vụ phòng chống vi phạm về bảo đảm TTATGT.", 
            "Khái niệm phòng chống vi phạm về bảo đảm TTATGT.", 
            "Mục tiêu phòng chống vi phạm về bảo đảm TTATGT."
        ],
        correctAnswer: 2
    },

    {
        question: "Tăng cường sự lãnh đạo, chỉ đạo thường xuyên của các cấp ủy đảng, chính quyền, các ngành, các tổ chức đoàn thể từ Trung ương đến địa phương về bảo đảm TTATGT là:",
        options: [
            "Nhiệm vụ phòng chống vi phạm về bảo đảm TTATGT.", 
            "Khái niệm phòng chống vi phạm về bảo đảm TTATGT.", 
            "Giải pháp phòng chống vi phạm về bảo đảm TTATGT.", 
            "Mục tiêu phòng chống vi phạm về bảo đảm TTATGT."
        ],
        correctAnswer: 0
    },

    {
        question: "Nâng cao nhâṇ thức và ý thức tự giác chấp hành pháp luật của người tham gia giao thông, xây dựng văn hóa giao thông trong cộng đồng là:",
        options: [
            "Các giải pháp chủ yếu về bảo đảm TTATGT.", 
            "Trách nhiệm của sinh viên.", 
            "Mục tiêu phòng chống vi phạm về bảo đảm TTATGT.", 
            "Khái niệm phòng chống vi phạm về bảo đảm TTATGT."
        ],
        correctAnswer: 2
    },

    {
        question: "Đổi mới, nâng cao hiệu quả hoạt động tuyên truyền, phổ biến, giáo dục pháp luật về TTATGT là:",
        options: [
            "Khái niệm về bảo đảm TTATGT.", 
            "Các giải pháp chủ yếu về phòng, chống vi phạm pháp luật bảo đảm TTATGT.", 
            "Mục tiêu phòng chống vi phạm về bảo đảm TTATG.", 
            "Nhiệm vụ phòng chống vi phạm về bảo đảm TTATGT."
        ],
        correctAnswer: 1
    },

    {
        question: "Tuyên truyền, vận động mọi người tham gia giao thông tự giác chấp hành pháp luật trật tự an toàn giao thông là:",
        options: [
            "Nhiêm vụ phòng chống vi phạm về bảo đảm TTATGT.", 
            "Mục tiêu phòng, chống vi phạm luật giao thông.", 
            "Trách nhiệm của sinh viên.", 
            "Trách nhiệm của gia đình."
        ],
        correctAnswer: 2
    },

    {
        question: "Nâng cao hiệu quả quản lý Nhà nước trong hoạt động bảo đảm TTATGT; nâng cao ý thức trách nhiệm của người thực thi công vụ về bảo đảm (TTATGT) là:",
        options: [
            "Mục tiêu phòng chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Nhiệm vụ phòng chống vi phạm về bảo đảm TTATGT.", 
            "Giải pháp phòng chống vi phạm về bảo đảm TTATGT.", 
            "Khái niệm về vi phạm pháp luật bảo đảm TTATGT."
        ],
        correctAnswer: 0
    },

    {
        question: "Tiếp tục giảm cả 3 tiêu chí về số vụ, số người chết, số người bị thương do tai nạn giao thông là:",
        options: [
            "Nhiệm vụ phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Mục tiêu phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Biện pháp phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Giải pháp chống vi phạm pháp luật về bảo đảm TTATGT."
        ],
        correctAnswer: 1
    },

    {
        question: "Tập trung nâng cao chất lượng xây dựng và kịp thời ban hành các văn bản quy phạm pháp luật về trật tự an toàn giao thông là:",
        options: [
            "Giải pháp phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Phương hướng phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Nhiệm vụ phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Biện pháp phòng, chống vi phạm pháp luật về bảo đảm TTATGT."
        ],
        correctAnswer: 2
    },

    {
        question: "Đẩy mạnh hoạt động tuần tra, kiểm soát (TTKS) và xử lý nghiêm các hành vi vi phạm TTATGT là:",
        options: [
            "Biện pháp phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Nhiệm vụ phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Khái niệm phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Phương hướng phòng, chống vi phạm pháp luật về bảo đảm TTATGT."
        ],
        correctAnswer: 1
    },

    {
        question: "Nâng cao hiệu quả quản lý Nhà nước trong lĩnh vực bảo đảm TTATGT là:",
        options: [
            "Nhiệm vụ phòng, chống vi phạm pháp luật về bảo đảm TTATGT.", 
            "Khái niệm về phòng, chống vi phạm pháp luật bảo đảm TTATGT.", 
            "Phương hướng về phòng, chống vi phạm pháp luật bảo đảm TTATGT.", 
            "Các giải pháp chủ yếu về phòng, chống vi phạm pháp luật bảo đảm TTATGT."
        ],
        correctAnswer: 3
    },

    {
        question: "Điều 260, mục 1 của luật hình sự qui định phạt tiền từ 30.000.000 đến 100.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm khi tham gia giao thông:",
        options: [
            "Gây thương tích hoặc gây tổn hại cho sức khỏe của 01 người mà tỷ lệ tổn thương cơ thể 41% trở lên.", 
            "Gây thương tích hoặc gây tổn hại cho sức khỏe của 01 người mà tỷ lệ tổn thương cơ thể 61% trở lên.", 
            "Gây thương tích hoặc gây tổn hại cho sức khỏe của 01 người mà tỷ lệ tổn thương cơ thể 51% trở lên.", 
            "Gây thương tích hoặc gây tổn hại cho sức khỏe của 01 người mà tỷ lệ tổn thương cơ thể 71% trở lên."
        ],
        correctAnswer: 1
    },

    {
        question: "Bộ luật hình sự Việt nam được thông qua bởi",
        options: [
            "Quốc hội nước cộng hòa XHCN Việt Nam.", 
            "Nhà nước cộng hòa XHCN Việt Nam", 
            "Đảng cộng sản Việt Nam.", 
            "Mặt trận Tổ quốc Việt Nam."
        ],
        correctAnswer: 0
    },

    {
        question: "Tiếp tục triển khai thực hiện có hiệu quả Chỉ thị số 18-CT/TW ngày 04/9/2012 của Ban Bí thư Trung ương Đảng về tăng cường sự lãnh đạo của Đảng đối với công tác bảo đảm TTATGT là:",
        options: [
            "Biện pháp phòng, chống vi phạm pháp luật bảo đảm TTATGT.", 
            "Phương hướng phòng, chống vi phạm pháp luật bảo đảm TTATGT.", 
            "Các giải pháp chủ yếu về phòng, chống vi phạm pháp luật bảo đảm TTATGT.", 
            "Nhiệm vụ phòng, chống vi phạm pháp luật bảo đảm TTATGT."
        ],
        correctAnswer: 2
    },

    {
        question: "Tích cực tham gia học luật giao thông đường bộ, tìm hiểu nắm vững thêm các điều luật và quy định đảm bảo trật tự an toàn giao thông là nội dung của:",
        options: [
            "Khái niện an toàn giao thông.", 
            "Nhiệm vụ của bảo đảm an toàn giao thông.", 
            "Trách nhiệm của sinh viên.", 
            "Các giải pháp chủ yếu bảo đảm ATGT."
        ],
        correctAnswer: 2
    },

    {
        question: "Chính phủ ban hành Nghị định 100/2019/NĐ-CP quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ và đường sắt vào ngày:",
        options: [
            "Ngày 30/12/2019.", 
            "Ngày 28/12/2019.", 
            "Ngày 29/12/2019.", 
            "Ngày 31/12/2019."
        ],
        correctAnswer: 0
    },

    {
        question: "Chấp hành nghiêm túc hệ thống báo hiệu đường bộ, đi đúng phần đường, làn đường quy định; không sử dụng rượu, bia trước khi điều khiển phương tiện tham gia giao thông, không điều khiển xe chạy quá tốc độ qui định là nội dung:",
        options: [
            "Trách nhiệm của sinh viên.", 
            "Nhiệm vụ của bảo đảm an toàn giao thông.", 
            "Phương hướng đảm an toàn giao thông.", 
            "Giải pháp đảm an toàn giao thông."
        ],
        correctAnswer: 0
    },

    {
        question: "Điều 260, mục 1 của luật hình sự qui định phạt tiền từ 30.000.000 đến 100.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 01 năm đến 05 năm khi tham gia giao thông:",
        options: [
            "Gây thương tích hoặc gây tổn hại cho sức khỏe của 02 người trở lên mà tổng tỷ lệ tổn thương cơ thể của những người này từ 41% đến 121%.", 
            "Gây thương tích hoặc gây tổn hại cho sức khỏe của 02 người trở lên mà tổng tỷ lệ tổn thương cơ thể của những người này từ 61% đến 121%.", 
            "Gây thương tích hoặc gây tổn hại cho sức khỏe của 02 người trở lên mà tổng tỷ lệ tổn thương cơ thể của những người này từ 51% đến 121%.", 
            "Gây thương tích hoặc gây tổn hại cho sức khỏe của 02 người trở lên mà tổng tỷ lệ tổn thương cơ thể của những người này từ 71% đến 121%."
        ],
        correctAnswer: 1
    },

    {
        question: "Nghị định 100/2019/NĐ-CP. Điều 6. Xử phạt người điều khiển xe mô tô, xe gắn máy (kể cả xe máy điện), các loại xe tương tự xe mô tô và các loại xe tương tự xe gắn máy vi phạm quy tắc giao thông đường bộ “Chở người ngồi trên xe sử dụng ô (dù)” sẽ bị:",
        options: [
            "Phạt tiền từ 50.000 đồng đến 150.000 đồng.", 
            "Phạt tiền từ 100.000 đồng đến 250.000 đồng.", 
            "Phạt tiền từ 100.000 đồng đến 200.000 đồng.", 
            "Phạt tiền từ 150.000 đồng đến 300.000 đồng."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong các giải pháp chủ yếu phòng, chống vi phạm pháp luật về bảo đảm TTATGT:",
        options: [
            "Nâng cao nhận thức và ý thức tự giác chấp hành pháp luật của người tham gia giao thông.", 
            "Đẩy mạnh hoạt động tuần tra, kiểm soát (TTKS) và xử lý nghiêm các hành vi vi phạm TTATGT.", 
            "Tăng cường sự lãnh đạo, chỉ đạo thường xuyên của các cấp ủy đảng, chính quyền.", 
            "Nâng cao hiệu quả quản lý Nhà nước trong lĩnh vực bảo đảm TTATGT."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong các nhiệm vụ phòng, chống vi phạm pháp luật về bảo đảm TTATGT:",
        options: [
            "Giảm ùn tắc giao thông trong các đô thị lớn.", 
            "Tập trung nâng cao chất lượng xây dựng và kịp thời ban hành các văn bản quy phạm pháp luật về trật tự an toàn giao thông đường bộ, đường sắt, đường thủy nội địa, hàng hải, hàng không.", 
            "Đổi mới, nâng cao hiệu quả hoạt động tuyên truyền pháp luật về TTATGT.", 
            "Tiếp tục giảm cả 3 tiêu chí về số vụ, số người chết, số người bị thương do tai nạn giao thông."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong các giải pháp phòng, chống vi phạm pháp luật về bảo đảm TTATGT:",
        options: [
            "Nâng cao nhận thức và ý thức tự giác chấp hành phát luật của người tham gia giao thông.", 
            "Tích cực tham gia học luật giao thông đường bộ.", 
            "Giảm ùn tắc giao thông.", 
            "Vận động mọi người tham gia giao thông tự giác chấp hành pháp luật trật tự an toàn giao thông."
        ],
        correctAnswer: 0
    },

    {
        question: "Lực lượng nòng cốt xung kích trong đảm bảo trật tự, an toàn giao thông là:",
        options: [
            "Dân phòng.", 
            "Quân đội.", 
            "Dân quân tự vệ.", 
            "Công an."
        ],
        correctAnswer: 3
    },

    {
        question: "Cơ quan chịu trách nhiệm nghiên cứu phân tích, đánh giá tình trạng vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông:",
        options: [
            "Bộ quốc phòng.", 
            "Quốc hội.", 
            "Bộ công an.", 
            "Bộ giao thông vận tải."
        ],
        correctAnswer: 2
    },

    {
        question: "Cơ quan nào chịu trách nhiệm đề xuất, kiến nghị trong việc hoạch định các chính sách áp dụng các biện pháp xử lý vi phạm pháp luật về đảm bảo trật tự, an toàn giao thông?",
        options: [
            "Bộ công an.", 
            "Quốc hội.", 
            "Bộ giao thông vận tải.", 
            "Mặt trận tổ quốc Việt Nam."
        ],
        correctAnswer: 0
    },

    {
        question: "Cơ quan nào sử dụng các biện pháp nghiệp vụ chuyên môn theo chức năng trong đảm bảo trật tự, an toàn giao thông?",
        options: [
            "Bộ giao thông vận tải.", 
            "Bộ công an.", 
            "Quốc hội.", 
            "Tòa án nhân dân tối cao."
        ],
        correctAnswer: 1
    },

    {
        question: "Lực lượng nào là lực lượng tham gia trực tiếp bảo vệ pháp luật về đảm bảo trật tự, an toàn giao thông?",
        options: [
            "Thanh niên xung phong.", 
            "Quân đội.", 
            "Công an.", 
            "Dân quân tự vệ."
        ],
        correctAnswer: 2
    },

    {
        question: "Trách nhiệm của công dân trong tham gia đảm bảo trật tự, an toàn giao thông:",
        options: [
            "Điều tra các đối tượng vi phạm.", 
            "Tham gia trực tiếp đấu tranh phòng chống vi phạm pháp luật về đảm bảo trật tự, an toàn giao thông.", 
            "Xử lý các trường hợp vi phạm.", 
            "Tích cực hợp tác, chia sẻ thông tin."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những nội dung hợp tác giữa các chủ thể tham gia đảm bảo trật tự, an toàn giao thông là:",
        options: [
            "Phối hợp tổ chức tuyên truyền, giáo dục pháp luật về bảo đảm trật tư, an toàn giao thông.", 
            "Phối hợp trong truy tìm, vây bắt đối tượng vi phạm.", 
            "Phối hợp trong dẫn độ đối tượng vi phạm.", 
            "Phối hợp trong xét xử đối tượng vi phạm."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những biên pháp phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn tham gia giao thông là:",
        options: [
            "Tuyên truyền, phổ biến về chính sách phát triển kinh tế - xã hội.", 
            "Tuyên truyền, phổ biến, giáo dục pháp luật về bảo đảm trật tự, an toàn giao thông cho mọi công dân.", 
            "Tuyên truyền, phổ biến về Bộ luật hình sự hiện hành.", 
            "Tuyên truyền về hậu quả của các hành vi vi phạm và chế tài xử lý."
        ],
        correctAnswer: 1
    },

    {
        question: "Mục đích của công tác tuyên truyền, phổ biến, giáo dục pháp luật về bảo đảm trật tự, an toàn giao thông là:",
        options: [
            "Nâng cao ý thức trong giữ gìn an ninh trật tự.", 
            "Nâng cao tinh thần đấu tranh, tố giác tội phạm.", 
            "Nâng cao ý thức chấp hành pháp luật về bảo đảm trật tự, an toàn giao thông.", 
            "Nâng cao hiểu biết về chính sách phát triển kinh tế - xã hội của đất nước."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những biên pháp phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn tham gia giao thông là:",
        options: [
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp về phát triển kinh tế - xã hội.", 
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp phòng chống vi phạm pháp luật về bảo đảm trật tự ,an toàn giao thông.", 
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp về đảm bảo trị an.", 
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp về đấu tranh trấn át tội phạm."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những biên pháp phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn khi tham gia giao thông là:",
        options: [
            "Tổ chức phát động phong trào toàn dân tham gia phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông.", 
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp về phát triển kinh tế - xã hội.", 
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp về đảm bảo trị an.", 
            "Phát huy vai trò của lực lượng chuyên trách trong xử phạt đối tượng vi phạm."
        ],
        correctAnswer: 0
    },

    {
        question: "Tổ chức phát động phong trào toàn dân tham gia phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông gắn với phong trào:",
        options: [
            "Xóa đói giảm nghèo.", 
            "Phòng chống tệ nạn xã hội.", 
            "Toàn dân tham gia bảo vệ an ninh Tổ quốc.", 
            "Phòng chống dịch Covid."
        ],
        correctAnswer: 2
    },

    {
        question: "Một trong những biên pháp phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông là:",
        options: [
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp về phát triển kinh tế - xã hội.", 
            "Tham mưu, đề xuất với Nhà nước xây dựng và hoàn thiện hệ thống các văn bản pháp luật phục vụ phòng chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông.", 
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp về đảm bảo trị an.", 
            "Tham mưu cho cấp ủy đảng, chính quyền các cấp đề ra chủ trương, biện pháp về nâng cao ý thức cho mọi người dân khi tham gia giao thông."
        ],
        correctAnswer: 1
    },

    // Bài 5: Phòng, chống một số loại tội phạm xâm phạm danh dự, nhân phẩm của người khác

    {
        question: "Bộ Luật hình sự hiện hành của nước Cộng hòa XHCN Việt Nam là:",
        options: [
            "Bộ Luật hình sự năm 2015,sửa đổi, bổ sung năm 2016.", 
            "Bộ Luật hình sự năm 2015, sửa đổi, bổ sung năm 2017.", 
            "Bộ Luật hình sự năm 2015, sửa đổi, bổ sung năm 2018.", 
            "Bộ Luật hình sự năm 2015,sửa đổi, bổ sung năm 2019."
        ],
        correctAnswer: 1
    },

    {
        question: "Bộ Luật Hình sự quy định về:",
        options: [
            "Nhà nước và tội phạm.", 
            "Cơ quan chức năng và tội phạm.", 
            "Pháp luật hình sự và tội phạm.", 
            "Tội phạm và hình phạt."
        ],
        correctAnswer: 3
    },

    {
        question: "Bộ Luật hình sự bao gồm hệ thống quy phạm pháp luật điều chỉnh các quan hệ xã hội liên quan đến:",
        options: [
            "Nhà nước và người phạm tội.", 
            "Nhà nước, Viện kiểm sát và người phạm tội.", 
            "Nhà nước, Tòa án và người phạm tội.", 
            "Nhà nước, Công an và người phạm tội."
        ],
        correctAnswer: 0
    },

    {
        question: "Nội dung nào thể hiện vai trò của Bộ Luật hình sự?",
        options: [
            "Bảo vệ các quan hệ xã hội liên quan đến Nhà nước và người phạm tội.", 
            "Bảo vệ quyền con người, quyền công dân.", 
            "Bảo vệ các quan hệ xã hội được các luật khác thiết lập.", 
            "Bảo vệ lợi ích của Nhà nước, tổ chức, bảo vệ trật tự pháp luật."
        ],
        correctAnswer: 2
    },

    {
        question: "Nội dung nào thể hiện nhiệm vụ của Bộ Luật hình sự:",
        options: [
            "Do cơ quan nhà nước có thẩm quyền ban hành quy định tội phạm và hình phạt.", 
            "Giáo dục mọi người ý thức tuân theo pháp luật và phòng, chống tội phạm.", 
            "Bảo vệ các quan hệ xã hội được các luật khác thiết lập.", 
            "Công cụ sắc bén, để đấu tranh phòng, chống tội phạm."
        ],
        correctAnswer: 1
    },

    {
        question: "“Bộ Luật hình sự là công cụ sắc bén, hữu hiệu để đấu tranh phòng, chống tội phạm” là:",
        options: [
            "Đặc điểm của BLHS.", 
            "Đặc trưng của BLHS.", 
            "Vai trò của BLHS.", 
            "Nhiệm vụ của BLHS."
        ],
        correctAnswer: 2
    },

    {
        question: "Các tội xâm phạm nhân phẩm, danh dự con người được quy định trong:",
        options: [
            "Chương XIV - Bộ Luật hình sự hiện hành.", 
            "Chương XV - Bộ Luật hình sự hiện hành.", 
            "Chương XVI - Bộ Luật hình sự hiện hành.", 
            "Chương XVII - Bộ Luật hình sự hiện hành."
        ],
        correctAnswer: 0
    },

    {
        question: "Nhân phẩm, danh dự của con người là những yêu tố về tinh thần, bao gồm:",
        options: [
            "Những yếu tố gắn liền với quyền nhân thân được pháp luật bảo vệ.", 
            "Tổng hợp những phẩm chất mang tính đặc trưng của mỗi cá nhân.", 
            "Phẩm giá, giá trị, sự tôn trọng, tình cảm yêu mến của những người xung quanh, của xã hội đối với người đó.", 
            "Dư luận xã hội, giá trị tinh thần, đạo đức tốt đẹp của xã hội giành cho người đó."
        ],
        correctAnswer: 2
    },

    {
        question: "Hành vi xâm phạm nhân phẩm, danh dự của con người là:",
        options: [
            "Xâm phạm quyền được tôn trọng và bảo vệ về NP, DD người khác.", 
            "Làm cho người đó bị xúc phạm, tổn thương về tinh thần và xấu hổ.", 
            "Xâm phạm về nhân phẩm, danh dự được pháp luật bảo vệ.", 
            "Hành vi nguy hiểm cho xã hội được quy định trong BLHS năm 2017."
        ],
        correctAnswer: 1
    },

    {
        question: "“Các tội xâm phạm nhân phẩm, danh dự của con người là những hành vi nguy hiểm cho xã hội” là",
        options: [
            "Nội dung của tội xâm phạm nhân phẩm, danh dự.", 
            "Tính chất của tội xâm phạm nhân phẩm, danh dự.", 
            "Khái niệm của tội xâm phạm nhân phẩm, danh dự.", 
            "Đặc điểm của tội xâm phạm nhân phẩm, danh dự."
        ],
        correctAnswer: 3
    },

    {
        question: "Các tội xâm phạm nhân phẩm, danh dự của con người được quy định trong:",
        options: [
            "Bộ Luật hình sự.", 
            "Bộ Luật tố tụng hình sự.", 
            "Bộ Luật dân sự.", 
            "Bộ Luật tố tụng dân sự."
        ],
        correctAnswer: 0
    },

    {
        question: "“Các tội xâm phạm nhân phẩm, danh dự của con người do người có năng lực trách nhiệm hình sự và đủ tuổi chịu trách nhiệm hình sự thực hiện” là",
        options: [
            "Là người có năng lực trách nhiệm hình sự và từ đủ 16 tuổi trở lên.", 
            "Là người có năng lực trách nhiệm hình sự và từ đủ 14 tuổi trở lên.", 
            "Là người có năng lực trách nhiệm hình sự và từ đủ 18 tuổi trở lên.", 
            "Là người có năng lực trách nhiệm hình sự và từ đủ 20 tuổi trở lên."
        ],
        correctAnswer: 1
    },

    {
        question: "Các tội xâm phạm nhân phẩm, danh dự của con người do người có năng lực trách nhiệm hình sự và đủ tuổi chịu trách nhiệm hình sự thực hiện là:",
        options: [
            "Tính chất.", 
            "Đặc trưng.", 
            "Nhiệm vụ.", 
            "Đặc điểm."
        ],
        correctAnswer: 3
    },

    {
        question: "Người nào xâm phạm nhân phẩm, danh dự của người khác phải chịu:",
        options: [
            "Trách nhiệm tố tụng hình sự.", 
            "Trách nhiệm hình sự.", 
            "Trách nhiệm tố tụng dân sự.", 
            "Trách nhiệm dân sự."
        ],
        correctAnswer: 1
    },

    {
        question: "Khách quan của tội phạm xâm phạm nhân phẩm, danh dự của con người là:",
        options: [
            "Cách xử sự nguy hiểm của chủ thể.", 
            "Lỗi của hành vi nguy hiểm.", 
            "Tác hại của hành vi nguy hiểm.", 
            "Hậu quả của hành vi nguy hiểm."
        ],
        correctAnswer: 0
    },

    {
        question: "Chủ quan của tội phạm xâm phạm nhân phẩm, danh dự của con người là:",
        options: [
            "Lỗi.", 
            "Mục đích.", 
            "Động cơ.", 
            "Lỗi, động cơ, mục đích của người phạm tội."
        ],
        correctAnswer: 3
    },

    {
        question: "Tội xâm phạm tình dục là:",
        options: [
            "Hành động xâm phạm thể xác của người khác để thỏa mãn nhu cầu sinh lý.", 
            "Hành động dùng vũ lực để ép buộc người khác quan hệ tình dục.", 
            "Hành vi nguy hiểm cho xã hội được quy định trong Bộ Luật hình sự.", 
            "Do người có năng lực trách nhiệm hình sự thực hiện một cách cố ý hoặc vô ý."
        ],
        correctAnswer: 2
    },

    {
        question: "Bộ Luật hình sự hiện hành quy định về tội hiếp dâm là:",
        options: [
            "Dùng vũ lực, đe dọa dùng vũ lực để thực hiện hành vi quan hệ tình dục.", 
            "Dụ giỗ, lường gạt người khác thực hiện hành vi quan hệ tình dục.", 
            "Ép buộc nạn nhân quan hệ tình dục ngoài ý muốn.", 
            "Thực hiện hành vi giao cấu nhưng không được nạn nhân cho phép."
        ],
        correctAnswer: 0
    },

    {
        question: "Bộ Luật hình sự quy định về tội hiếp dâm với mức án cao nhất là:",
        options: [
            "Tử hình.", 
            "Chung thân.", 
            "20 năm.", 
            "15 năm."
        ],
        correctAnswer: 1
    },

    {
        question: "Phạm tội hiếp dâm trong các trường hợp nào sau đây, thì bị phạt tù từ 07 năm đến 15 năm:",
        options: [
            "Gây thương tích, gây tổn hại cho sức khỏe 61% trở lên.", 
            "Gây thương tích, gây tổn hại cho sức khỏe cơ thể từ 31% đến 60%.", 
            "Dùng vũ lực hoặc đe dọa dùng vũ lực để thực hiện hành vi quan hệ tình dục.", 
            "Phạm tội đối với người từ đủ 16 tuổi đến dưới 18 tuổi."
        ],
        correctAnswer: 1
    },

    {
        question: "Phạm tội hiếp dâm trong các trường hợp nào sau đây, thì bị phạt tù từ 12 năm đến 20 năm hoặc từ chung thân:",
        options: [
            "Nhiều người hiếp một người.", 
            "Có tính chất loạn luân.", 
            "Biết mình bị nhiễm HIV mà vẫn phạm tội.", 
            "Làm nạn nhân có thai."
        ],
        correctAnswer: 2
    },

    {
        question: "Phạm tội mua bán người trong các trường hợp nào sau đây, thì bị phạt tù từ 05 năm đến 10 năm:",
        options: [
            "Chuyển giao hoặc tiếp nhận người để giao, nhận tiền, tài sản hoặc lợi ích vật chất khác.", 
            "Gây thương tích, gây tổn hại cho sức khỏe cơ thể dưới 31%.", 
            "Gây thương tích, gây tổn hại cho sức khỏe cơ thể từ 31% đến 60%.", 
            "Gây thương tích, gây tổn hại cho sức khỏe cơ thể 61% trở lên."
        ],
        correctAnswer: 0
    },

    {
        question: "Phạm tội mua bán người trong các trường hợp nào sau đây thì bị phạt tù từ 08 năm đến 15 năm?",
        options: [
            "Có tính chất chuyên nghiệp.", 
            "Vì động cơ đê hèn.", 
            "Làm nạn nhân chết hoặc tự sát.", 
            "Đã lấy bộ phận cơ thể của nạn nhân."
        ],
        correctAnswer: 1
    },

    {
        question: "Phạm tội mua bán người trong các trường hợp nào sau đây thì bị phạt từ từ 12 năm đến 20 năm?",
        options: [
            "Có tổ chức.", 
            "Phạm tội 02 lần trở lên.", 
            "Vì động cơ đê hèn.", 
            "Có tính chất chuyên nghiệp."
        ],
        correctAnswer: 3
    },

    {
        question: "Phạm tội mua bán người có thể bị phạt tiền:",
        options: [
            "Từ 20.000.000 đồng đến 40.000.000 đồng.", 
            "Từ 20.000.000 đồng đến 60.000.000 đồng.", 
            "Từ 20.000.000 đồng đến 100.000.000 đồng.", 
            "Từ 20.000.000 đồng đến 80.000.000 đồng."
        ],
        correctAnswer: 2
    },

    {
        question: "Tội làm nhục người khác là:",
        options: [
            "Lăng mạ, sỉ nhục, chửi bới,... làm họ bị xúc phạm về nhân phẩm, danh dự.", 
            "Có hành vi làm cho người khác bị mất nhân phẩm, danh dự trước tập thể.", 
            "Hành vi xúc phạm về thể xác ảnh hưởng đến uy tín, danh dự của họ trước tập thể.", 
            "Hành vi xâm phạm đến quyền được bảo hộ về NP, DD của người khác."
        ],
        correctAnswer: 3
    },

    {
        question: "Phạm tội làm nhục người khác, có thể bị phạt tiền:",
        options: [
            "Từ 10.000.000 đồng đến 40.000.000 đồng.", 
            "Từ 10.000.000 đồng đến 30.000.000 đồng.", 
            "Từ 10.000.000 đồng đến 50.000.000 đồng.", 
            "Từ 10.000.000 đồng đến 60.000.000 đồng."
        ],
        correctAnswer: 1
    },

    {
        question: "Phạm tội làm nhục người khác trong các trường hợp nào sau đây thì bị phạt tù từ 02 năm đến 05 năm?",
        options: [
            "Gây rối loạn tâm thần, tỷ lệ tổn thương cơ thể 61% trở lên.", 
            "Gây rối loạn tâm thần, tỷ lệ tổn thương cơ thể từ 31% đến 60%.", 
            "Đối với người dạy dỗ, nuôi dưỡng, chăm sóc, chữa bệnh cho mình.", 
            "Sử dụng mạng máy tính hoặc mạng viễn thông, phương tiện điện tử để phạm tội."
        ],
        correctAnswer: 0
    },

    {
        question: "Tội lây truyền HIV cho người khác là:",
        options: [
            "Không biết mình bị nhiễm HIV mà vô ý lây truyền HIV cho người khác.", 
            "Biết mình nhiễm HIV nhưng vô ý lây truyền HIV cho người khác.", 
            "Biết mình bị nhiễm HIV nhưng cố ý mang bầu và sinh con (đối với phụ nữ).", 
            "Biết mình bị nhiễm HIV mà cố ý lây truyền HIV cho người khác."
        ],
        correctAnswer: 3
    },

    {
        question: "Người phạm tội có ý lây truyền HIV cho người khác có thể bị phạt tù:",
        options: [
            "03 năm đến 05 năm.", 
            "Từ 01 năm đến 03 năm.", 
            "Từ 05 năm đến 09 năm.", 
            "Từ 09 năm đến 12 năm."
        ],
        correctAnswer: 1
    },

    {
        question: "Nội dung nào thể hiện biện pháp kinh tế-xã hội phòng, chống các tội xâm phạm nhân phẩm, danh dự của con người?",
        options: [
            "Quan tâm và có chiến lược giáo dục con cháu hiệu quả.", 
            "Đổi mới nội dung, hình thức, biện pháp tuyên truyền.", 
            "Tăng cường các biện pháp liên quan đến phát hiện và xử lý.", 
            "Huy động các nguồn lực xã hội để đẩy mạnh đầu tư."
        ],
        correctAnswer: 3
    },

    {
        question: "“Tăng cường mở các lớp đào tạo nghề và giải quyết việc làm cho lao động ở các địa phương” là biện pháp:",
        options: [
            "Văn hóa - giáo dục.", 
            "Kinh tế - xã hội.", 
            "Giáo dục của gia đình, nhà nước và xã hội.", 
            "Quản lý nhà nước về ANTT xã hội ở các địa phương."
        ],
        correctAnswer: 1
    },

    {
        question: "“Gắn giáo dục kiến thức văn hoá với giáo dục kỹ năng sống” để phụ nữ và trẻ em:",
        options: [
            "Tham gia công tác phòng, chống tội phạm.", 
            "Tránh xa những đối tượng có tiền án, tiền sự.", 
            "Tự bảo vệ mình trước các nguy cơ bị xâm hại.", 
            "Nâng cao nhận thức về thái độ và trách nhiệm."
        ],
        correctAnswer: 2
    },

    {
        question: "“Tăng cường công tác tuyên truyền, phổ biến giáo dục pháp luật về tội xâm phạm nhân phẩm, danh dự trong cộng đồng dân cư” là nội dung của biện pháp:",
        options: [
            "Văn hóa - giáo dục.", 
            "Kinh tế - xã hội.", 
            "Giáo dục của gia đình.", 
            "Giáo dục của Nhà nước và xã hội."
        ],
        correctAnswer: 0
    },

    {
        question: "Biện pháp văn hóa - giáo dục được xác định là biện pháp:",
        options: [
            "Quan trọng, hàng đầu.", 
            "Thường xuyên, liên tục.", 
            "Cơ bản, lâu dài.", 
            "Bao trùm, cấp thiết."
        ],
        correctAnswer: 1
    },

    {
        question: "“Chú trọng giáo dục đạo đức lẫn kiến thức; lồng ghép nội dung giáo dục giới tính, sức khỏe sinh sản cho học sinh” là trách nhiệm chính của:",
        options: [
            "Gia đình.", 
            "Xã hội.", 
            "Đoàn thể.", 
            "Nhà trường."
        ],
        correctAnswer: 3
    },

    {
        question: "“Thường xuyên tuyên truyền, vận động quần chúng nhân dân trong đấu tranh, phòng, chống tội xâm phạm nhân phẩm, danh dự của con người” là trách nhiệm của:",
        options: [
            "Cơ quan chức năng.", 
            "Quần chúng nhân nhân.", 
            "Đoàn thể ở địa phương.", 
            "Cấp ủy Đảng và chính quyền."
        ],
        correctAnswer: 3
    },

    {
        question: "“Nâng cao hiệu quả phối hợp giữa các chủ thể phòng, chống các tội xâm phạm nhân phẩm, danh dự của con người ở các địa phương” là một trong những nội dung của:",
        options: [
            "Quan điểm phòng, chống.", 
            "Phương hướng phòng, chống.", 
            "Nhiệm vụ phòng, chống.", 
            "Biện pháp phòng, chống."
        ],
        correctAnswer: 3
    },

    {
        question: "“Tập trung giải quyết những vấn đề bức xúc về tội phạm và tệ nạn xã hội, không để hình thành địa bàn phức tạp” là nghĩa vụ và trách nhiệm của các cơ quan chức năng:",
        options: [
            "Công an - Tòa án - Gia đình.", 
            "Công an - Viện Kiểm sát - Nhà trường.", 
            "Viện Kiểm sát – Tòa án - Đoàn thể.", 
            "Công an - Viện Kiểm sát - Tòa án."
        ],
        correctAnswer: 3
    },

    {
        question: "“Tự giác chấp hành các quy định về phòng, chống các tội xâm phạm nhân phẩm, danh dự của con người ở nhà trường và địa phương nơi cư trú” là:",
        options: [
            "Phương hướng, nhiệm vụ của sinh viên.", 
            "Mục đích, yêu cầu của sinh viên.", 
            "Thái độ, nghĩa vụ của sinh viên.", 
            "Vai trò, trách nhiệm của sinh viên."
        ],
        correctAnswer: 3
    },

    {
        question: "Danh dự, nhân phẩm của con người bao gồm:",
        options: [
            "Phẩm giá, giá trị, sự tôn trọng, tình cảm yêu mến của những người xung quanh, của xã hội đối với người đó.", 
            "Phẩm giá, giá trị, sự tôn trong, sự ngưỡng mộ của những người xung quanh, của xã hội đối với người đó.", 
            "Sự tôn trọng, sùng bái, tín nhiệm của những người xung quanh, của xã hội đối với người đó.", 
            "Phẩm giá, sùng bái, tín nhiệm của những người xung quanh, của xã hội đối với người đó."
        ],
        correctAnswer: 0
    },

    {
        question: "Danh dự của con người được xác nhận dựa trên:",
        options: [
            "Giá trị vật chất và uy tín xã hội.", 
            "Giá trị tinh thần, đạo đức tốt đẹp.", 
            "Sự sùng bái của đám đông.", 
            "Giá trị tinh thần và giá trị vật chất."
        ],
        correctAnswer: 1
    },

    {
        question: "Nhân phẩm là phẩm chất, giá trị của một con người được:",
        options: [
            "Cộng đồng bảo vệ.", 
            "Tôn giáo bảo vệ.", 
            "Quần chúng nhân dân bảo vệ.", 
            "Pháp luật bảo vệ."
        ],
        correctAnswer: 3
    },

    {
        question: "Hành vi xâm phạm danh dự, nhân phẩm của con người là làm cho người đó bị:",
        options: [
            "Tổn thương về vật chất và tinh thần.", 
            "Xúc phạm, tổn thương về vật chất.", 
            "Mất cơ hội thăng tiến trong xã hội.", 
            "Xúc phạm, tổn thương về tinh thần và xấu hổ với người xung quanh."
        ],
        correctAnswer: 3
    },

    {
        question: "Đối tượng tác động của các tội xâm phạm danh dự, nhân phẩm là:",
        options: [
            "Con người cụ thể.", 
            "Uy tín trong xã hội.", 
            "Địa vị trong xã hội.", 
            "Cơ hội thăng tiến."
        ],
        correctAnswer: 0
    },

    {
        question: "Mặt khách quan của các tội xâm phạm danh dự, nhân phẩm của con người thể hiện ở:",
        options: [
            "Những hành vi gây ảnh hưởng tới tinh thần xâm phạm trực tiếp tới danh dự, nhân phẩm của con người.", 
            "Những hành vi nguy hiểm cho xã hội xâm phạm trực tiếp tới danh dự, nhân phẩm của con người.", 
            "Những hành vi gây tổn hại vật chất xâm phạm trực tiếp tới danh dự, nhân phẩm của con người.", 
            "Những hành vi đi ngược lại chuẩn mực đạo đức xâm phạm trực tiếp tới danh dự, nhân phẩm của con người."
        ],
        correctAnswer: 1
    },

    {
        question: "Đối tượng xâm hại danh dự, nhân phẩm sử dụng những công cụ, phương tiện khác nhau để gây ra:",
        options: [
            "Thiệt hại về vật chất cho người khác.", 
            "Thiệt hại về tinh thần cho người khác.", 
            "Thiệt hại về tính mạng và tài sản cho người khác.", 
            "Thiệt hại hoặc đe dọa gây ra thiệt hại cho người khác."
        ],
        correctAnswer: 3
    },

    {
        question: "Chủ thể của tội xâm hại danh dự, nhân phẩm là:",
        options: [
            "Những người có tiền án, tiền sự.", 
            "Những người nằm trong khung độ tuổi quy định.", 
            "Những thành phần vô gia cư.", 
            "Những người có năng lực trách nhiệm hình sự và đạt độ tuổi nhất định."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những nguyên nhân, điều kiện của tình trạng phạm tội xúc phạm danh dự, nhân phẩm là:",
        options: [
            "Sự bất đồng quan điểm cá nhân.", 
            "Sự tác động của chênh lệch giàu nghèo.", 
            "Làm mất cơ hội thăng tiến của người khác.", 
            "Sự tác động bởi những mặt trái của nền kinh tế thị trường."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những yếu tố hình thành nguyên nhân, điều kiện của tình trạng phạm tội xúc phạm danh dự, nhân phẩm:",
        options: [
            "Bất bình đẳng giới.", 
            "Tệ nạn xã hội phát triển.", 
            "Giá trị vật chất lên ngôi.", 
            "Phân hóa giàu nghèo."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những nguyên nhân, điều kiện của tình trạng phạm tội xúc phạm danh dự, nhân phẩm là:",
        options: [
            "Hủ tục lạc hậu.", 
            "Kinh tế chậm phát triển.", 
            "Dân trí thấp.", 
            "Tàn dư của những hiện tượng tiêu cực do chế độ cũ để lại."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những tàn dư chế độ cũ để lại làm nảy sinh các hiện tượng tiêu cực trong đó có tội phạm là:",
        options: [
            "Tệ nạn Cờ bạc.", 
            "Tệ nạn Mê tín dị đoan.", 
            "Tệ nạn Ma túy.", 
            "Tư tưởng trọng nam khinh nữ."
        ],
        correctAnswer: 3
    },

    {
        question: "Mục đích của phòng, ngừa tội phạm là:",
        options: [
            "Khắc phục những hạn chế do chế độ cũ để lại.", 
            "Khắc phục những nguyên nhân, điều kiện của tình trạng phạm tội.", 
            "Nâng cao chất lượng đời sống cho người dân.", 
            "Thực hiện mục tiêu phát triển kinh tế - xã hội."
        ],
        correctAnswer: 1
    },

    {
        question: "Mục đích của phòng, ngừa tội phạm là:",
        options: [
            "Nâng cao chất lượng đời sống cho người dân.", 
            "Khắc phục những hạn chế do chế độ cũ để lại.", 
            "Thực hiện mục tiêu phát triển kinh tế - xã hội.", 
            "Ngăn chặn, hạn chế và làm giảm từng bước, tiến tới loại trừ tội phạm ra khỏi đời sống cộng đồng."
        ],
        correctAnswer: 3
    },

    {
        question: "Phòng ngừa tội phạm là thể hiện:",
        options: [
            "Nguyên tắc hoạt động trong công tác đấu tranh, phòng chống tội phạm.", 
            "Biện pháp chính trong công tác đấu tranh, phòng chống tội phạm.", 
            "Tinh thần chỉ đạo trong công tác đấu tranh, phòng chống tội phạm.", 
            "Tư tưởng chỉ đạo trong công tác đấu tranh, phòng chống tội phạm."
        ],
        correctAnswer: 3
    },

    {
        question: "Làm tốt công tác phòng ngừa tội phạm mang ý nghĩa:",
        options: [
            "Giữ vững an ninh quốc gia, trật tự an toàn xã hội.", 
            "Nâng cao chất lượng đời sống một bộ phận người dân.", 
            "Xóa bỏ hủ tục lạc hậu.", 
            "Góp phần phát triển kinh tế- xã hội ở một số khu vực."
        ],
        correctAnswer: 0
    },

    {
        question: "Khắc phục nguyên nhân, điều kiện của tình trạng phạm tội là:",
        options: [
            "Mang tính vĩ mô.", 
            "Mang tính chiến lược.", 
            "Mang tính cơ bản.", 
            "Hướng mang tính cơ bản, chiến lược và lâu dài."
        ],
        correctAnswer: 3
    },

    {
        question: "Đâu là hướng ưu tiên hàng đầu trong phòng chống tội xâm hại danh dự, nhân phẩm:",
        options: [
            "Đẩy mạnh công tác giáo dục tuyên truyền.", 
            "Hạn chế mức thấp nhất hậu quả xảy ra.", 
            "Tăng khung hình phạt dành cho đối tượng phạm tội.", 
            "Khắc phục nguyên nhân, điều kiện của tình trạng phạm tội."
        ],
        correctAnswer: 3
    },

    {
        question: "Đâu là hướng quan trọng trong phòng chống tội phạm xâm hại danh dự, nhân phẩm:",
        options: [
            "Tăng khung hình phạt dành cho đối tượng phạm tội.", 
            "Đẩy mạnh công tác giáo dục tuyên truyền.", 
            "Khắc phục nguyên nhân điều kiện của tình trạng phạm tội.", 
            "Hạn chế đến mức thấp nhất hậu quả, tác hại khi tội phạm gây ra."
        ],
        correctAnswer: 3
    },

    {
        question: "Trong phòng chống tội phạm xâm hại danh dự, nhân phẩm cơ quan nào giữ vai trò ban hành, điều chỉnh các luật, văn bản pháp lý có liên quan:",
        options: [
            "Bộ công an.", 
            "Chính phủ, ủy ban nhân dân các cấp.", 
            "Tòa án nhân dân.", 
            "Quốc hội, hội đồng nhân các cấp."
        ],
        correctAnswer: 3
    },

    {
        question: "Trong phòng chống tội phạm xâm hại danh dự, nhân phẩm cơ quan nào giữ vai trò quản lý, điều hành, bảo đảm điều kiện cần thiết:",
        options: [
            "Bộ công an.", 
            "Bộ tài chính.", 
            "Quốc hội, hội đồng Nhân dân các cấp.", 
            "Chính phủ, ủy ban nhân dân các cấp."
        ],
        correctAnswer: 3
    },

    {
        question: "Trong phòng chống tội phạm xâm hại danh dự, nhân phẩm các cơ quan nào giữ vai trò nghiên cứu, phân tích tình trạng phạm tội, xác định nguyên nhân, điều kiện của tội phạm:",
        options: [
            "Bộ tư pháp, viến kiểm sát nhân dân, quân đội.", 
            "Công an, quân đội, mặt trận tổ quốc.", 
            "Công an, bộ tài chính, bộ tư pháp.", 
            "Công an, viện kiểm sát, tòa án."
        ],
        correctAnswer: 3
    },

    {
        question: "Công dân với tư cách:",
        options: [
            "Khách thể trong phòng chống tội phạm.", 
            "Chủ thể trong phòng chống tội phạm.", 
            "Điều tra trong phòng chống tội phạm.", 
            "Xét xử trong phòng chống tội phạm."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những nguyên tắc tổ chức, hoạt động phòng chống tội phạm xâm hại danh dự, nhân phẩm:",
        options: [
            "Nguyên tắc khoa học.", 
            "Nguyên tắc dân chủ.", 
            "Nguyên tắc cộng sinh.", 
            "Nguyên tắc pháp chế."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những nguyên tắc tổ chức, hoạt động phòng chống tội phạm xâm hại danh dự, nhân phẩm:",
        options: [
            "Nguyên tắc dân chủ.", 
            "Nguyên tắc dân chủ xã hội chủ nghĩa.", 
            "Nguyên tắc khoa học.", 
            "Nguyên tắc cộng sinh."
        ],
        correctAnswer: 1
    },

    {
        question: "Một trong những nguyên tắc tổ chức, hoạt động phòng chống tội phạm xâm hại danh dự, nhân phẩm:",
        options: [
            "Nguyên tắc dân chủ.", 
            "Nguyên tắc khoa học và sự tiến bộ.", 
            "Nguyên tắc pháp lý.", 
            "Nguyên tắc khoa học và tiến bộ trong phòng ngừa."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những nguyên tắc tổ chức, hoạt động phòng chống tội phạm xâm hại danh dự, nhân phẩm:",
        options: [
            "Nguyên tắc khoa học.", 
            "Nguyên tắc dân chủ.", 
            "Nguyên tắc cộng sinh.", 
            "Nguyên tắc nhân đạo trong phòng ngừa."
        ],
        correctAnswer: 3
    },

    {
        question: "Một trong những nguyên tắc tổ chức, hoạt động phòng chống tội phạm xâm hại danh dự, nhân phẩm:",
        options: [
            "Nguyên tắc cụ thể hóa trong phòng ngừa tội phạm.", 
            "Nguyên tắc nhân đạo.", 
            "Nguyên tắc dân chủ.", 
            "Nguyên tắc khoa học."
        ],
        correctAnswer: 0
    },

    {
        question: "Trong nguyên tắc pháp chế phòng chống tội phạm xâm hại danh dự, nhân phẩm nhấn mạnh. Mọi hoạt động phòng ngừa tội phạm của các cơ quan nhà nước, tổ chức, các công dân phải:",
        options: [
            "Phù hợp luật pháp quốc tế.", 
            "Phù hợp với trình độ dân trí.", 
            "Phù hợp văn hóa địa phương.", 
            "Hợp hiến, hợp pháp."
        ],
        correctAnswer: 3
    },

    // Bài 6: An toàn thông tin và phòng, chống vi phạm trên không gian mạng

    {
        question: "Luật An toàn thông tin mạng gồm bao nhiêu chương, điều?",
        options: [
            "08 chương, 54 điều.", 
            "08 chương, 45 điều.", 
            "07 chương, 54 điều.", 
            "07 chương, 45 điều."
        ],
        correctAnswer: 0
    },

    {
        question: "Luật An ninh mạng gồm bao nhiêu chương, điều?",
        options: [
            "07 chương, 34 điều.", 
            "07 chương, 43 điều.", 
            "08 chương, 34 điều.", 
            "08 chương, 43 điều."
        ],
        correctAnswer: 1
    },

    {
        question: "Các đối tượng sử dụng không gian mạng để đăng thông tin độc hại nhằm mục đích:",
        options: [
            "Tạo uy tín cho một vài cá nhân.", 
            "Ngăn chặn, làm giảm tội phạm.", 
            "Xúi giục, lôi kéo, kích động người khác phạm tội.", 
            "Kích thích kinh tế phát triển."
        ],
        correctAnswer: 2
    },

    {
        question: "Luật An toàn thông tin mạng Có hiệu lực thi hành từ:",
        options: [
            "Ngày 07 tháng 01 năm 2016.", 
            "Ngày 01 tháng 07 năm 2016.", 
            "Ngày 01 tháng 07 năm 2015.", 
            "Ngày 07 tháng 01 năm 2015."
        ],
        correctAnswer: 1
    },

    {
        question: "Chủ thể thông tin cá nhân là:",
        options: [
            "Người quản lý thông tin cá nhân đó.", 
            "Người được thu thập thông tin cá nhân đó.", 
            "Người được xác định từ thông tin cá nhân đó.", 
            "Người được kiểm tra thông tin cá nhân đó."
        ],
        correctAnswer: 2
    },

    {
        question: "Các hành vi bị nghiêm cấm của luật an toàn thông tin mạng:",
        options: [
            "Phát tán thư rác, phần mềm độc hại, thiết lập hệ thống thông tin giả mạo, lừa đảo.", 
            "Phát tán thư rác, vi rút độc hại, thiết lập hệ thống thông tin giả mạo, lừa đảo.", 
            "Phát tán thư rác, phần mềm độc hại, tuyên truyền các thông tin giả mạo, lừa đảo.", 
            "Phát tán thư rác, phần mềm độc hại, đưa thông tin giả mạo, lừa đảo, xuyên tạc, tấn công mạng."
        ],
        correctAnswer: 0
    },

    {
        question: "Bảo vệ an ninh mạng là:",
        options: [
            "Phòng ngừa, điều tra, ngăn chặn, xử lý hành vi xâm phạm an ninh mạng.", 
            "Phòng ngừa, phát hiện, ngăn chặn, xử lý hành vi xâm phạm an ninh mạng.", 
            "Phòng ngừa, phát hiện, điều tra, xử lý hành vi xâm phạm an ninh mạng.", 
            "Điều tra, phát hiện, ngăn chặn, xử lý hành vi xâm phạm an ninh mạng."
        ],
        correctAnswer: 1
    },

    {
        question: "Không gian mạng quốc gia là:",
        options: [
            "Không gian mạng do Chính phủ xây dựng, quản lý và kiểm soát.", 
            "Không gian mạng do Chính phủ quản lý và kiểm soát.", 
            "Không gian mạng do Chính phủ xác lập, quản lý và kiểm soát.", 
            "Không gian mạng do Chính phủ xác lập và kiểm soát."
        ],
        correctAnswer: 2
    },

    {
        question: "Khủng bố mạng là:",
        options: [
            "Việc sử dụng tài khoản cá nhân để thực hiện hành vi khủng bố, tài trợ khủng bố.", 
            "Việc sử dụng tài khoản tổ chức để thực hiện hành vi khủng bố, tài trợ khủng bố.", 
            "Việc sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện hành vi khủng bố, tài trợ khủng bố.", 
            "Việc sử dụng tài liệu liên quan đến không gian mạng để thực hiện hành vi khủng bố, tài trợ khủng bố."
        ],
        correctAnswer: 2
    },

    {
        question: "Thông tin trên không gian mạng có nội dung tuyên truyền chống Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam:",
        options: [
            "Tuyên truyền tư tưởng sống tự do, cực đoan; Chiến tranh tâm lý, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc, tôn giáo và nhân dân các nước; Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc.", 
            "Tuyên truyền tư tưởng sống tự do, cực đoan; Đòi tự do, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc, tôn giáo và nhân dân các nước; Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc.", 
            "Tuyên truyền xuyên tạc, phỉ báng chính quyền nhân dân; Đòi tự do, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc, tôn giáo và nhân dân các nước; Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc.", 
            "Tuyên truyền xuyên tạc, phỉ báng chính quyền nhân dân; Chiến tranh tâm lý, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc, tôn giáo và nhân dân các nước; Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc."
        ],
        correctAnswer: 3
    },

    {
        question: "Thông tin trên không gian mạng có nội dung:” Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc”. Là nội dung vi phạm:",
        options: [
            "Thông tin trên không gian mạng có nội dung kích động gây bạo loạn, phá rối an ninh, gây rối TTCC.", 
            "Thông tin trên không gian mạng có nội dung tuyên truyền chống Nhà nước CHXHCH Việt Nam.", 
            "Thông tin trên không gian mạng có nội dung làm nhục, vu khống.", 
            "Thông tin trên không gian mạng có nội dung xâm phạm trật tự quản lý kinh tế ."
        ],
        correctAnswer: 1
    },

    {
        question: "Thông tin trên không gian mạng có nội dung:” Chiến tranh tâm lý, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc, tôn giáo và nhân dân các nước”. Là nội dung vi phạm:",
        options: [
            "Thông tin trên không gian mạng có nội dung kích động gây bạo loạn, phá rối an ninh, gây rối TTCC.", 
            "Thông tin trên không gian mạng có nội dung tuyên truyền chống Nhà nước CHXHCH Việt Nam.", 
            "Thông tin trên không gian mạng có nội dung làm nhục, vu khống.", 
            "Thông tin trên không gian mạng có nội dung xâm phạm trật tự quản lý kinh tế."
        ],
        correctAnswer: 1
    },

    {
        question: "Thông tin trên không gian mạng có nội dung kích động gây bạo loạn, phá rối an ninh, gây rối trật tự công cộng:",
        options: [
            "Chiến tranh tâm lý, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc, tôn giáo và nhân dân các nước.", 
            "Thông tin bịa đặt, sai sự thật xâm phạm danh dự, uy tín, nhân phẩm hoặc gây thiệt hại đến quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân khác.", 
            "Kêu gọi, vận động, xúi giục, đe dọa, gây chia rẽ, tiến hành hoạt động vũ trang hoặc dùng bạo lực nhằm chống chính quyền nhân dân.", 
            "Tuyên truyền xuyên tạc, phỉ báng chính quyền nhân dân."
        ],
        correctAnswer: 2
    },

    {
        question: "Thông tin trên không gian mạng có nội dung làm nhục, vu khống:",
        options: [
            "Xúc phạm nghiêm trọng danh dự, uy tín, nhân phẩm của người khác.", 
            "Tuyên truyền xuyên tạc, phỉ báng chính quyền nhân dân.", 
            "Thông tin bịa đặt, sai sự thật về sản phẩm, hàng hóa, tiền, trái phiếu, tín phiếu, công trái, séc và các loại giấy tờ có giá trị khác.", 
            "Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc."
        ],
        correctAnswer: 0
    },

    {
        question: "Thông tin trên không gian mạng có nội dung xâm phạm trật tự quản lý kinh tế:",
        options: [
            "Thông tin bịa đặt, sai sự thật xâm phạm danh dự, uy tín, nhân phẩm hoặc gây thiệt hại đến quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân khác.", 
            "Thông tin bịa đặt, sai sự thật về sản phẩm, hàng hóa, tiền, trái phiếu, tín phiếu, công trái, séc và các loại giấy tờ có giá trị khác.", 
            "Kêu gọi, vận động, xúi giục, đe dọa, lôi kéo tụ tập đông người gây rối, chống người thi hành công vụ, cản trở hoạt động của cơ quan, tổ chức gây mất ổn định về ANTT.", 
            "Thông tin có nội dung vu khống về sản phẩm, hàng hóa, tiền, trái phiếu, tín phiếu, công trái, séc và các loại giấy tờ có giá trị khác."
        ],
        correctAnswer: 1
    },

    {
        question: "Chính phủ đã ban hành Nghị định số 15/2020/NĐ-CP quy định xử phạt vi phạm hành chính trong lĩnh vực bưu chính, viễn thông, tần số vô tuyến điện, công nghệ thông tin và giao dịch điện tử khi nào?",
        options: [
            "Ngày 02 tháng 03 năm 2020.", 
            "Ngày 03 tháng 02 năm 2019.", 
            "Ngày 03 tháng 02 năm 2020.", 
            "Ngày 02 tháng 03 năm 2019."
        ],
        correctAnswer: 2
    },

    {
        question: "Theo Điều 101 của Nghị định này, hành vi cung cấp, chia sẻ thông tin giả mạo, thông tin sai sự thật, xuyên tạc, vu khống, xúc phạm uy tín của cơ quan, tổ chức, danh dự, nhân phẩm của cá nhân sẽ bị phạt từ:",
        options: [
            "15.000.000 đồng đến 25.000.000 đồng.", 
            "10.000.000 đồng đến 20.000.000 đồng.", 
            "20.000.000 đồng đến 30.000.000 đồng.", 
            "25.000.000 đồng đến 35.000.000 đồng."
        ],
        correctAnswer: 1
    },

    {
        question: "Phạt tiền đối với hành vi xâm phạm đến quyền, lợi ích hợp pháp của chủ sở hữu cơ sở dữ liệu hoặc cản trở việc sử dụng cơ sở dữ liệu của chủ sở hữu khi thực hiện tái sản xuất, phân phối, quảng bá, truyền đưa, cung cấp nội dung hợp thành cơ sở dữ liệu:",
        options: [
            "100.000.000 đồng đến 200.000.000 đồng.", 
            "140.000.000 đồng đến 200.000.000 đồng.", 
            "100.000.000 đồng đến 140.000.000 đồng.", 
            "140.000.000 đồng đến 240.000.000 đồng."
        ],
        correctAnswer: 2
    },

    {
        question: "Phạt tiền đối với hành vi phá hoại cơ sở hạ tầng thông tin hoặc phá hoại thông tin trên môi trường mạng:",
        options: [
            "140.000.000 đồng đến 200.000.000 đồng.", 
            "140.000.000 đồng đến 170.000.000 đồng.", 
            "100.000.000 đồng đến 170.000.000 đồng.", 
            "100.000.000 đồng đến 200.000.000 đồng."
        ],
        correctAnswer: 1
    },

    {
        question: "Phạt tiền đối hành vi bẻ khóa, trộm cắp, sử dụng mật khẩu, khóa mật mã và thông tin của tổ chức, cá nhân khác trên môi trường mạng:",
        options: [
            "10.000.000 đồng đến 25.000.000 đồng.", 
            "10.000.000 đồng đến 20.000.000 đồng.", 
            "15.000.000 đồng đến 20.000.000 đồng.", 
            "15.000.000 đồng đến 25.000.000 đồng."
        ],
        correctAnswer: 1
    },

    {
        question: "Các đối tượng sử dụng không gian mạng để đăng thông tin độc hại nhằm mục đích:",
        options: [
            "Ghi nhận lịch sử, truyền bá tư tưởng.", 
            "Tạo uy tín cho một vài cá nhân.", 
            "Gây hoang mang trong nhân dân.", 
            "Tăng thêm tính đoàn kết cộng đồng."
        ],
        correctAnswer: 2 
    },

    {
        question: "Phạt tiền đối hành vi Thu thập thông tin cá nhân khi chưa có sự đồng ý của chủ thể thông tin cá nhân về phạm vi, mục đích của việc thu thập và sử dụng thông tin đó; Cung cấp thông tin cá nhân cho bên thứ ba khi chủ thể thông tin cá nhân đã yêu cầu ngừng cung cấp:",
        options: [
            "10.000.000 đồng đến 40.000.000 đồng.", 
            "20.000.000 đồng đến 30.000.000 đồng.", 
            "10.000.000 đồng đến 20.000.000 đồng.", 
            "20.000.000 đồng đến 40.000.000 đồng."
        ],
        correctAnswer: 2
    },

    {
        question: "Phạt tiền đối với hành vi Sử dụng không đúng mục đích thông tin cá nhân đã thỏa thuận khi thu thập hoặc khi chưa có sự đồng ý của chủ thể thông tin cá nhân; Cung cấp hoặc chia sẻ hoặc phát tán thông tin cá nhân đã thu thập, tiếp cận, kiểm soát cho bên thứ ba khi chưa có sự đồng ý của chủ thông tin cá nhân; Thu thập, sử dụng, phát tán, kinh doanh trái pháp luật thông tin cá nhân của người khác:",
        options: [
            "10.000.000 đồng đến 30.000.000 đồng.", 
            "20.000.000 đồng đến 40.000.000 đồng.", 
            "10.000.000 đồng đến 40.000.000 đồng.", 
            "20.000.000 đồng đến 30.000.000 đồng."
        ],
        correctAnswer: 3
    },

    {
        question: "Ngăn chặn, yêu cầu tạm ngừng, ngừng cung cấp thông tin mạng; đình chỉ, tạm đình chỉ các hoạt động thiết lập, cung cấp và sử dụng mạng viễn thông, mạng Internet, sản xuất và sử dụng thiết bị phát, thu phát sóng vô tuyến theo quy định của pháp luật là nội dung:",
        options: [
            "Nguyên tắc bảo vệ an ninh mạng.", 
            "Hình thức bảo vệ an ninh mạng.", 
            "Biện pháp bảo vệ an ninh mạng.", 
            "Yêu cầu bảo vệ an ninh mạng."
        ],
        correctAnswer: 2
    },

    {
        question: "Chủ động phòng ngừa, phát hiện, ngăn chặn, đấu tranh, làm thất bại mọi hoạt động sử dụng không gian mạng xâm phạm an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân; sẵn sàng ngăn chặn các nguy cơ đe dọa an ninh mạng là nội dung:",
        options: [
            "Nguyên tắc bảo vệ an ninh mạng.", 
            "Đặc điểm bảo vệ an ninh mạng.", 
            "Yêu cầu bảo vệ an ninh mạng.", 
            "Biện pháp bảo vệ an ninh mạng."
        ],
        correctAnswer: 0
    },

    {
        question: "Kịp thời cung cấp thông tin liên quan đến bảo vệ an ninh mạng, nguy cơ đe dọa an ninh mạng, hành vi xâm phạm an ninh mạng cho cơ quan có thẩm quyền, lực lượng bảo vệ an ninh mạng là nội dung:",
        options: [
            "Biện pháp của cơ quan, tổ chức, cá nhân sử dụng không gian mạng.", 
            "Trách nhiệm của cơ quan, tổ chức, cá nhân sử dụng không gian mạng.", 
            "Nguyên tắc của cơ quan, tổ chức, cá nhân sử dụng không gian mạng.", 
            "Yêu cầu của cơ quan, tổ chức, cá nhân sử dụng không gian mạng."
        ],
        correctAnswer: 1
    },

    {
        question: "Các đối tượng sử dụng không gian mạng để đăng thông tin độc hại nhằm mục đích:",
        options: [
            "Ngăn chặn, làm giảm tội phạm.", 
            "Bảo tồn lưu giữ giá trị văn hóa.", 
            "Tăng thêm tính đoàn kết cộng đồng.", 
            "Tuyên truyền tệ nạn xã hội."
        ],
        correctAnswer: 3
    },

    {
        question: "An toàn thông tin là:",
        options: [
            "An toàn kỹ thuật cho phần mềm thông tin theo tiêu chuẩn kỹ thuật.", 
            "An toàn thông tin cho phần cứng theo tiêu chuẩn kỹ thuật.", 
            "An toàn kỹ thuật cho các hoạt động của các cơ sở hạ tầng thông tin.", 
            "An toàn cho hệ thống máy móc, trang thiết bị."
        ],
        correctAnswer: 2
    },

    {
        question: "An toàn thông tin mạng là:",
        options: [
            "Bảo vệ hệ thống thông tin.", 
            "Sự bảo vệ thông tin, hệ thống thông tin mạng.", 
            "Bảo vệ nội dung truyền tin.", 
            "Bảo vệ phương tiện truyền tin."
        ],
        correctAnswer: 1
    },

    {
        question: "An toàn thông tin mạng nhằm:",
        options: [
            "Chống việc thông tin bị phá hoại, đánh cắp.", 
            "Chống truy nhập, truyền đi nội dung thông tin giả.", 
            "Tránh bị truy nhập, sử dụng, tiết lộ, sửa đổi hoặc phá hoại trái phép thông tin.", 
            "Đảm bảo thông tin thông suốt."
        ],
        correctAnswer: 2
    },

    {
        question: "Mục đích của an toàn thông tin mạng nhằm:",
        options: [
            "Đảm bảo tính bí mật của thông tin.", 
            "Đảm bảo tính nguyên vẹn, tính bảo mật và tính khả dụng của thông tin.", 
            "Đảm bảo tính thông suốt của thông tin.", 
            "Đảm bảo tính nguyên vẹn của thông tin."
        ],
        correctAnswer: 1
    },

    {
        question: "An ninh mạng là sự đảm bảo hoạt động trên không gian mạng không gây phương hại đến:",
        options: [
            "Sự phát triển kinh tế xã hội.", 
            "Quyền tự do ngôn luận.", 
            "An ninh quốc gia, trật tự an toàn xã hội.", 
            "Quyền tự do tín ngưỡng, tôn giáo."
        ],
        correctAnswer: 2
    },

    {
        question: "An ninh mạng là sự đảm bảo hoạt động trên không gian mạng không gây phương hại đến:",
        options: [
            "Sự phát triển kinh tế xã hội.", 
            "Quyền và lợi ích hợp pháp của các cơ quan, tổ chức và cá nhân.", 
            "Quyền tự do ngôn luận.", 
            "Quyền tự do tín ngưỡng, tôn giáo."
        ],
        correctAnswer: 1
    },

    {
        question: "Tội phạm công nghệ cao gây tổn hại đến:",
        options: [
            "An ninh quốc gia.", 
            "Tính mạng và tài sản của tổ chức, cá nhân.", 
            "Lợi ích của nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân.", 
            "Lợi ích của các tổ chức chính trị, xã hội."
        ],
        correctAnswer: 2
    },

    {
        question: "Trong cuộc cách mạng công nghiệp 4.0 thì thông tin được xem là:",
        options: [
            "Một dạng tài sản của từng cá nhân.", 
            "Một dạng tài nguyên.", 
            "Một dạng tài sản nhà nước quản lý.", 
            "Không gian lưu trữ số liệu."
        ],
        correctAnswer: 1
    },

    {
        question: "Mục tiêu chủ yếu tin tặc tấn công liên quan tới lĩnh vực:",
        options: [
            "An ninh.", 
            "Tài chính.", 
            "Quốc phòng.", 
            "Văn hóa."
        ],
        correctAnswer: 1
    },

    {
        question: "Bảo đảm an ninh, an toàn thông tin là nhiệm vụ mang tính:",
        options: [
            "Quan trọng hàng đầu trong tình hình hiện nay.", 
            "Có tính chất sống còn với đất nước ta.", 
            "Quan trọng và cấp bách trong tình hình hiện nay.", 
            "Quan trọng và cấp thiết trong tình hình hiện nay."
        ],
        correctAnswer: 3
    },

    {
        question: "Số liệu thống kê cho thấy tin tặc tấn công vào lĩnh vực tài chính chiếm:",
        options: [
            "21%.", 
            "37%.", 
            "73%.", 
            "12%."
        ],
        correctAnswer: 2
    },

    {
        question: "Số liệu thống kê cho thấy tin tặc tấn công vào lĩnh vực chính trị, tình báo chiếm:",
        options: [
            "31%.", 
            "21%.", 
            "37%.", 
            "73%."
        ],
        correctAnswer: 1
    },

    {
        question: "Theo số liệu thống kê từ năm 2012 -2013, số lần tin tặc tấn công vào cổng thông tin, trang điện tử của Việt Nam là:",
        options: [
            "7000 lượt.", 
            "8000 lượt.", 
            "5000 lượt.", 
            "6000 lượt."
        ],
        correctAnswer: 3
    },

    {
        question: "Năm 2018, thiệt hại do virut máy tính gây ra đối với người dùng Việt Nam ước tính là:",
        options: [
            "14.900 tỷ đồng.", 
            "14.800 tỷ đồng.", 
            "15.900 tỷ đồng.", 
            "15.000 tỷ đồng."
        ],
        correctAnswer: 0
    },

    {
        question: "Một trong những yếu tố góp phần làm giảm các vụ tin tặc tấn công mạng trong thời gian qua là do:",
        options: [
            "Chế tài pháp luật đã tương đối đầy đủ.", 
            "Các quy định, chế tài pháp luật đã đầy đủ và có tính răn đe cao.", 
            "Chế tài pháp luật có tính răn đe cao.", 
            "Các quy định, chế tài pháp luật đã tương đối đầy đủ và có tính răn đe cao."
        ],
        correctAnswer: 1
    },

    {
        question: "Luật An ninh mạng của nước ta có hiệu lực từ khi nào?",
        options: [
            "01/01/2018.", 
            "01/01/2020.", 
            "01/01/2019.", 
            "01/01/2021."
        ],
        correctAnswer: 2
    },

    {
        question: "Tin giả là:",
        options: [
            "Những thông tin sai sự thật, mang tính tuyên truyền, được phát tán dưới vỏ bọc tin quảng cáo.", 
            "Những thông tin không chính xác, mang tính giật gân, được phát tán dưới vỏ bọc tin tức.", 
            "Những thông tin sai sự thật, được phát tán dưới vỏ bọc tin tức.", 
            "Những thông tin sai sự thật, mang tính giật gân, được phát tán dưới vỏ bọc tin tức."
        ],
        correctAnswer: 3
    },

    {
        question: "Hiện nay các đối tượng tạo tin giả bằng cách sử dụng công nghệ để:",
        options: [
            "Giả lý lịch.", 
            "Chiếm đoạt tài sản.", 
            "Giả tiếng, giả hình, giả video.", 
            "Tạo dựng uy tín."
        ],
        correctAnswer: 2
    },

    {
        question: "Tin giả có thể được tạo ra và lan truyền nhằm mục đích:",
        options: [
            "Văn hóa.", 
            "Chính trị.", 
            "Thể thao.", 
            "Tôn giáo."
        ],
        correctAnswer: 1
    },

    {
        question: "Tin giả có thể được tạo ra và lan truyền nhằm mục đích:",
        options: [
            "Thương mại.", 
            "Văn hóa.", 
            "Thể thao.", 
            "Tôn giáo."
        ],
        correctAnswer: 0
    },

    {
        question: "Tin giả có thể gây ra tình trạng:",
        options: [
            "Tăng trưởng kinh tế.", 
            "Rối loạn xã hội.", 
            "Phòng chống dịch bệnh.", 
            "Xóa đói giảm nghèo."
        ],
        correctAnswer: 1
    },

    {
        question: "Mục đích sử dụng tin giả trong lĩnh vực thương mại nhằm:",
        options: [
            "Gây sự chú ý dư luận.", 
            "Tạo ra sự cạnh tranh lành mạnh giữa các bên.", 
            "Chiếm lĩnh thị trường.", 
            "Gây tác động xấu đến đối thủ."
        ],
        correctAnswer: 3
    },

    {
        question: "Nghị định nào hiện nay quy định về xử phạt hành chính trong lĩnh vực bưu chính viễn thông, công nghệ thông tin và tần số vô tuyến:",
        options: [
            "Nghị định 100.", 
            "Nghị định 184.", 
            "Nghị định 174.", 
            "Nghị định 15."
        ],
        correctAnswer: 1
    },

    {
        question: "Nghị định 15/2019/NĐ-CP quy định mức phạt tiền đối với hành vi gửi hoặc phát tán thư điện tử rác, tin nhắn rác, phần mềm độc hại là:",
        options: [
            "85 triệu đồng.", 
            "90 triệu đồng.", 
            "80 triệu đồng.", 
            "95 triệu đồng."
        ],
        correctAnswer: 2
    },

    {
        question: "Các đối tượng sử dụng không gian mạng để đăng thông tin độc hại nhằm mục đích:",
        options: [
            "Phát triển kinh tế xã hội.", 
            "Gây ảnh hưởng đến an ninh quốc gia, trật tự, an toàn xã hội.", 
            "Bảo tồn lưu giữ giá trị văn hóa.", 
            "Tăng thêm tính đoàn kết cộng đồng."
        ],
        correctAnswer: 1
    },

    {
        question: "Các đối tượng sử dụng không gian mạng để đăng thông tin độc hại nhằm mục đích:",
        options: [
            "Ghi nhận lịch sử, truyền bá tư tưởng.", 
            "Bảo tồn lưu giữ giá trị văn hóa.", 
            "Xuyên tạc lịch sử, phủ nhận thành quả cách mạng.", 
            "Ngăn chặn, làm giảm tội phạm."
        ],
        correctAnswer: 2
    },

    // Bài 7: An ninh phi truyền thống và các mối đe dọa an ninh phi truyền thống ở Việt Nam

    {
        question: "An ninh truyền thống chính là:",
        options: [
            "An ninh quốc gia.", 
            "An ninh đất nước.", 
            "An ninh dân tộc.", 
            "An ninh lãnh thổ."
        ],
        correctAnswer: 0
    },

    {
        question: "Nội dung cơ bản của an ninh quốc gia là bảo vệ:",
        options: [
            "Lợi ích của nhà nước.", 
            "Lợi ích của nhân dân.", 
            "Lợi ích của giai cấp.", 
            "Lợi ích của quốc gia."
        ],
        correctAnswer: 3
    },

    {
        question: "Bảo vệ an ninh quốc gia là phải:",
        options: [
            "Loại bỏ những mối đe dọa đến lợi ích cơ bản của nhân dân.", 
            "Đấu tranh với tội phạm và đối tượng phá hoại trật tự xã hội.", 
            "Chặn đứng các hành động phá hoại, xâm phạm tài sản nhân dân.", 
            "Loại trừ những mối uy hiếp đối với lợi ích cơ bản của quốc gia."
        ],
        correctAnswer: 3
    },

    {
        question: "Mục tiêu của an ninh quốc gia là:",
        options: [
            "Phòng ngừa sự chống phá của các loại tội phạm.", 
            "Bảo vệ vững chắc chủ quyền và an ninh quốc gia.", 
            "Bảo vệ truyền thống đoàn kết trong nội bộ.", 
            "Phòng chống nạn tham nhũng, quan liêu."
        ],
        correctAnswer: 1
    },

    {
        question: "An ninh quốc gia chính là:",
        options: [
            "Đất nước thoát khỏi chiến tranh.", 
            "Quốc gia có kỷ cương, kỷ luật.", 
            "Xã hội hoạt động trật tự, nền nếp.", 
            "Sự ổn định, bình yên của đất nước."
        ],
        correctAnswer: 3
    },

    {
        question: "An ninh phi truyền thống có thể hiểu là một loại hình:",
        options: [
            "An ninh xuyên quốc gia.", 
            "An toàn xuyên quốc gia.", 
            "An ninh trong quốc gia.", 
            "An toàn trong hội nhập."
        ],
        correctAnswer: 0
    },

    {
        question: "Giải quyết các nội dung về an ninh phi truyền thống phải là nhiệm vụ:",
        options: [
            "Mang tính toàn cầu.", 
            "Của từng quốc gia.", 
            "Mang tính thống nhất.", 
            "Của từng khu vực."
        ],
        correctAnswer: 0
    },

    {
        question: "Gây ra những hệ lụy như: sản xuất đình trệ, thất nghiệp gia tăng, đứt gãy chuỗi cung ứng sản xuất và tiêu dùng, kinh tế suy thoái, kém phát triển, đời sống người dân gặp khó khăn… là những thách thức, đe dọa từ an ninh phi truyền thống đối với lĩnh vực:",
        options: [
            "Xã hội.", 
            "Kinh tế.", 
            "Môi trường.", 
            "Sản xuất."
        ],
        correctAnswer: 1
    },

    {
        question: "An ninh phi truyền thống xuất phát từ các yếu tố do tự nhiên gây ra như:",
        options: [
            "Biến đổi khí hậu, xung đột biên giới, hỏa hoạn.", 
            "Hạn hán, ô nhiễm môi trường, khủng hoảng kinh tế.", 
            "Biến dổi khí hậu, thiên tai, bão lũ, hạn hán, sóng thần.", 
            "Khủng hoảng kinh tế, hạn hán, tội phạm, ma túy."
        ],
        correctAnswer: 2
    },

    {
        question: "Toàn cầu hóa, các yếu tố an ninh phi truyền thống đe dọa đến sự giữ gìn và phát triển bản sắc văn hóa của mỗi dân tộc là thách thức đe dọa đối với lĩnh vực:",
        options: [
            "Văn hóa xã hội.", 
            "Văn hóa tư tưởng.", 
            "Văn hóa truyền thống.", 
            "Văn hóa dân tộc."
        ],
        correctAnswer: 0
    },

    {
        question: "An ninh phi truyền thống do các yếu tố:",
        options: [
            "Phi kinh tế, phi chính trị gây ra.", 
            "Phi chính trị, phi quân sự gây ra.", 
            "Phi quân sự, phi ngoại giao gây ra.", 
            "Phi quân sự, phi văn hóa gây ra."
        ],
        correctAnswer: 1
    },

    {
        question: "Đảng đã chỉ rõ “sẵn sàng ứng phó với các mối đe dọa an ninh truyền thống và phi truyền thống” tại:",
        options: [
            "Nghị quyết Trung ương 8.", 
            "Đại hội lần thứ XII.", 
            "Đại hội lần thứ X.", 
            "Nghị quyết Trung ương 12."
        ],
        correctAnswer: 1
    },

    {
        question: "Những thách thức, nguy cơ đối với an ninh truyền thống là:",
        options: [
            "Nguy cơ mất lòng tin của nhân dân đối với cách mạng.", 
            "Nguy cơ mất an ninh trật tự, mất ổn định trong xã hội.", 
            "Nguy cơ xâm phạm chủ quyền lãnh thổ, biên giới quốc gia.", 
            "Nguy cơ mất đoàn kết toàn dân tộc, đoàn kết quốc tế."
        ],
        correctAnswer: 2
    },

    {
        question: "Nguy cơ xâm phạm biên giới đất liền, biển đảo, vùng trời của Tổ quốc là một trong những thách thức, nguy cơ đối với:",
        options: [
            "Bất ổn xã hội.", 
            "An ninh truyền thống.", 
            "An toàn truyền thống.", 
            "Bất ổn quốc gia."
        ],
        correctAnswer: 1
    },

    {
        question: "Nguy cơ, thách thức đối với an ninh truyền thống là:",
        options: [
            "Mất ổn định xã hội.", 
            "Mất đoàn kết nội bộ.", 
            "Khủng hoảng lòng tin với Đảng.", 
            "Khủng hoảng kinh tế, xã hội."
        ],
        correctAnswer: 3
    },

    {
        question: "Trong phạm vi quốc gia, Đảng ta đã ra nghị quyết số 24/NQTU về chủ động ứng phó với biến đổi khí hậu, tăng cường quản lý tài nguyên và bảo vệ môi trường vào năm:",
        options: [
            "2016.", 
            "2013.", 
            "2011.", 
            "2014."
        ],
        correctAnswer: 1
    },

    {
        question: "An ninh truyền thống và an ninh phi truyền thống đều nói về an ninh quốc gia, nhưng:",
        options: [
            "Nội hàm có cùng chung các yếu tố tạo thành.", 
            "Cơ bản hoàn toàn giống nhau về nội hàm.", 
            "Phạm vi nội hàm luôn quan hệ với nhau.", 
            "Phạm vi nội hàm không hoàn toàn giống nhau."
        ],
        correctAnswer: 3
    },

    {
        question: "An ninh phi truyền thống xuất phát từ rất nhiều các yếu tố:",
        options: [
            "Do tự nhiên, do xã hội gây ra.", 
            "Do kinh tế, do xã hội gây ra.", 
            "Do con người, do tự nhiên gây ra.", 
            "Do con người, do văn hóa gây ra."
        ],
        correctAnswer: 2
    },

    {
        question: "An ninh phi truyền thống xuất phát từ rất nhiều các yếu tố, trong đó cũng có yếu tố:",
        options: [
            "Do cả con người và tự nhiên cùng gây ra.", 
            "Do cả chính trị và kinh tế cùng gây ra.", 
            "Do cà kinh tế và xã hội cùng gây ra.", 
            "Do cà quân sự và đối ngoại gây ra."
        ],
        correctAnswer: 0
    },

    {
        question: "An ninh phi truyền thống xuất phát từ các yếu tố do con người gây ra như:",
        options: [
            "Khủng hoảng chính trị, quân sự.", 
            "Tội phạm, khủng bố, tham nhũng.", 
            "Xung đột biên giới, lãnh thổ.", 
            "Biến đổi khí hậu, lũ lụt, hạn hán."
        ],
        correctAnswer: 1
    },

    {
        question: "An ninh phi truyền thống xuất phát từ các yếu tố do con người và tự nhiên cùng gây ra như:",
        options: [
            "Lụt bão, hạn mặn, sóng thần.", 
            "Thiên tai, địch họa.", 
            "Dịch bệnh, ô nhiễm môi trường.", 
            "Khủng hoảng tài chính."
        ],
        correctAnswer: 2
    },

    {
        question: "Nội hàm của an ninh phi truyền thống rất rộng, rất đa dạng, giải quyết không phải một lần, một giai đoạn nhất định mà hết, nó có thể:",
        options: [
            "Ngày càng gia tăng, không có điểm dừng.", 
            "Chậm gia tăng và sẽ có điểm dừng nhất định.", 
            "Ngày càng gia tăng đến một giai đoạn nhất định.", 
            "Không gia tăng và không có điểm dừng."
        ],
        correctAnswer: 0
    },

    {
        question: "Hiện nay trên thế giới, về an ninh phi truyền thống bởi xuất phát từ các góc độ nghiên cứu, chế độ chính trị, vị thế và tiềm lực kinh tế của từng nước, nên:",
        options: [
            "Chỉ khác nhau về vấn đề cụ thể của an ninh phi truyền thống.", 
            "Có quan niệm giống nhau về an ninh phi truyền thống.", 
            "Giống nhau từng vấn đề cụ thể của an ninh phi truyền thống.", 
            "Vẫn có những quan niệm khác nhau về an ninh phi truyền thống."
        ],
        correctAnswer: 3
    },

    {
        question: "Những vấn đề được thể hiện trên nhiều lĩnh vực nhưng nằm ngoài vấn đề quân sự, trong bối cảnh liên kết quốc tế ngày càng phát triển đe dọa đến an ninh phi truyền thống, đó là:",
        options: [
            "Cạn kiệt tài nguyên, biến đổi khí hậu.", 
            "Hợp tác quốc tế và trong từng khu vực.", 
            "Đoàn kết dân tộc, tôn giáo từng quốc gia.", 
            "Liên kết quốc tế và trong từng khu vực."
        ],
        correctAnswer: 0
    },

    {
        question: "Thách thức và đe dọa từ an ninh phi truyền thống trên lĩnh vực kinh tế là:",
        options: [
            "An ninh xã hội.", 
            "An ninh năng lượng.", 
            "An ninh dân tộc.", 
            "An ninh tôn giáo."
        ],
        correctAnswer: 1
    },

    {
        question: "Các thế lực thù địch lợi dụng các yếu tố từ an ninh phi truyền thống để:",
        options: [
            "Kết hợp tiến công quân sự với kinh tế.", 
            "Thực hiện kế hoạch can thiệp quân sự.", 
            "Kích động gây rối, làm mất ổn định chính trị.", 
            "Bạo loạn lật đổ và can thiệp vũ trang."
        ],
        correctAnswer: 2
    },

    {
        question: "Các thế lực thù địch lợi dụng xu thế toàn cầu hóa để đưa ra những yêu cầu, khuyến nghị trong các quan hệ nhằm hạn chế hiệu quả lãnh đạo của Đảng, hiệu lực quản lý của Nhà nước là những thách thức đe dọa từ an ninh phi truyền thống đối với lĩnh vực:",
        options: [
            "Chính trị tinh thần.", 
            "Văn hóa tinh thần.", 
            "Kinh tế xã hội.", 
            "Chính trị xã hội."
        ],
        correctAnswer: 0
    },

    {
        question: "Thách thức và đe dọa từ an ninh phi truyền thống, chúng ta phải chịu tác động không nhỏ từ các luồng văn hóa, đạo đức, lối sống thực dụng, độc hại, không lành mạnh, làm lệch chuẩn:",
        options: [
            "Đường lối đối ngoại đa dạng hóa, đa phương hóa.", 
            "Đường lối chủ trương chính sách của Đảng, Nhà nước.", 
            "Chủ nghĩa Mác – Lê nin, tư tưởng Hồ Chí Minh.", 
            "Tư tưởng, phẩm chất, đạo đức lối sống của giới trẻ."
        ],
        correctAnswer: 3
    },

    {
        question: "Những tác động từ các hiểm họa của an ninh phi truyền thống đã ảnh hưởng đến công tác xây dựng lực lượng, thế trận quốc phòng, các công trình phòng thủ quốc gia, là những thách thức, đe dọa từ an ninh phi truyền thống đối với lĩnh vực:",
        options: [
            "Quốc phòng toàn dân.", 
            "Quốc phòng, an ninh.", 
            "Quân sự, an ninh.", 
            "An ninh nhân dân."
        ],
        correctAnswer: 1
    },

    {
        question: "Những thách thức và đe dọa từ an ninh phi truyền thống đối với lĩnh vực quốc phòng, an ninh đã ảnh hưởng lớn đến:",
        options: [
            "Vật lực phát triển quốc phòng, an ninh.", 
            "Nhân lực xây dựng quốc phòng, an ninh.", 
            "Nguồn lực phát triển quốc phòng, an ninh.", 
            "Tài lực mở rộng quốc phòng, an ninh."
        ],
        correctAnswer: 2
    },

    {
        question: "Nâng cao nhận thức về các mối đe dọa của an ninh phi truyền thống đối với an ninh con người, an ninh cộng đồng, an ninh quốc gia và an ninh nhân loại là nghĩa vụ và trách nhiệm của:",
        options: [
            "Mọi công dân.", 
            "Học sinh, sinh viên.", 
            "Lực lượng vũ trang.", 
            "Mọi tổ chức, lực lượng."
        ],
        correctAnswer: 0
    },

    {
        question: "Các mối đe dọa an ninh phi truyền thống không những tác động đối với Việt Nam mà còn tác động đến:",
        options: [
            "Toàn cầu.", 
            "Các nước nghèo.", 
            "Từng khu vực.", 
            "Những nước giàu."
        ],
        correctAnswer: 0
    },

    {
        question: "Một số mối đe dọa an ninh phi truyền thống, có khả năng chuyển hóa thành an ninh truyền thống như:",
        options: [
            "Xung đột biên giới quốc gia.", 
            "Mâu thuẫn đối kháng giai cấp.", 
            "Xung đột chủ quyền lãnh thổ.", 
            "Xung đột dân tộc, sắc tộc, tôn giáo."
        ],
        correctAnswer: 3
    },

    {
        question: "Để quản trị và kiểm soát các mối đe dọa an ninh phi truyền thống có hiệu quả, chúng ta phải:",
        options: [
            "Phát huy sức mạnh đoàn kết quốc tế với lực lượng hòa bình thế giới.", 
            "Nâng cao sức mạnh chiến đấu của lực lượng vũ trang nhân dân.", 
            "Phát huy sức mạnh tổng hợp của hệ thống chính trị và toàn xã hội.", 
            "Đẩy mạnh sự nghiệp đổi mới, công nghiệp hóa, hiện đại hóa."
        ],
        correctAnswer: 2
    },

    {
        question: "Phòng ngừa kiểm soát và ứng phó với các mối đe dọa an ninh phi truyền thống, chúng ta phải:",
        options: [
            "Mở rộng và tăng cường hợp tác quốc tế.", 
            "Giao lưu và tăng cường hợp tác kinh tế.", 
            "Mở rộng và tăng cường đối ngoại quốc tế.", 
            "Liên doanh và liên kết an ninh quốc tế."
        ],
        correctAnswer: 0
    },

    {
        question: "Chủ động và tích cực hội nhập quốc tế trong đó hợp tác về phòng ngừa, ứng phó với các mối đe dọa an ninh phi truyền thống thông qua cơ chế và:",
        options: [
            "Cách thức linh hoạt, nhiều tầng, nhiều lớp.", 
            "Phương thức đa tầng, đa dạng và linh hoạt.", 
            "Giải pháp linh hoạt, đơn phương và đa phương.", 
            "Phương thức linh động, đa dạng, phong phú."
        ],
        correctAnswer: 1
    },

    {
        question: "Mục tiêu của an ninh quốc gia là:",
        options: [
            "Củng cố lòng tin của nhân dân, phát hiện, loại trừ các loại tệ nạn xã hội từ bên ngoài.", 
            "Xây dựng nền tảng tư tưởng vững chắc, phòng ngừa các loại tội phạm và tệ nạn xã hội.", 
            "Phát huy tinh thần độc lập tự chủ, tự lực, tự cường giữ vững trật tự an toàn xã hội.", 
            "Củng cố nền tảng vững chắc bên trong, phòng ngừa sự tiến công xâm phạm từ bên ngoài."
        ],
        correctAnswer: 3
    },

    {
        question: "Đối tượng tác động của an ninh phi truyền thống là:",
        options: [
            "Thế giới, quốc gia, con người.", 
            "Dân tộc, khu vực, quốc gia.", 
            "Thế giới, con người, tôn giáo.", 
            "Tôn giáo, quốc gia, dân tộc."
        ],
        correctAnswer: 0
    },

    {
        question: "Đối với nước ta, việc phối hợp quốc tế để giải quyết một số vấn đề về an ninh phi truyền thống đã được Đảng, Nhà nước:",
        options: [
            "Hết sức lo lắng, và quan tâm thực hiện.", 
            "Đang rất quan tâm và triển khai thực hiện.", 
            "Hết sức quan tâm và thực hiện có hiệu quả.", 
            "Ra sức quan tâm và quyết tâm thực hiện."
        ],
        correctAnswer: 2
    },

    {
        question: "Chủ động tích cực phòng ngừa ứng phó với các mối đe dọa an ninh phi truyền thống là một trong những:",
        options: [
            "Nhiệm vụ phòng ngừa, ứng phó đe dọa từ an ninh phi truyền thống.", 
            "Quan điểm phòng ngừa, ứng phó đe dọa từ an ninh phi truyền thống.", 
            "Nội dung phòng ngừa, ứng phó đe dọa từ an ninh phi truyền thống.", 
            "Giải pháp phòng ngừa, ứng phó đe dọa từ an ninh phi truyền thống."
        ],
        correctAnswer: 3
    },
];
