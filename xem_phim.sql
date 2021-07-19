-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 28, 2019 lúc 03:58 AM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `xem_phim`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `IDAdmin` int(11) NOT NULL,
  `HoTen` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MK` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `GioiTinh` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `SDT` int(20) NOT NULL,
  `DiaChi` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`IDAdmin`, `HoTen`, `MK`, `GioiTinh`, `SDT`, `DiaChi`, `NgaySinh`, `Email`) VALUES
(1, 'Admin', 'admin', 'nam', 125555588, 'cần thơ', '1999-01-08', 'admin@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `advertisement`
--

CREATE TABLE `advertisement` (
  `TenWeb` text COLLATE utf8_unicode_ci NOT NULL,
  `IDadvertisement` int(11) NOT NULL,
  `Stusus` text COLLATE utf8_unicode_ci NOT NULL,
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  `DichVu` int(11) NOT NULL,
  `linkQC` text COLLATE utf8_unicode_ci NOT NULL,
  `IDThanhVien` int(11) NOT NULL,
  `IDPhim` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `advertisement`
--

INSERT INTO `advertisement` (`TenWeb`, `IDadvertisement`, `Stusus`, `image`, `DichVu`, `linkQC`, `IDThanhVien`, `IDPhim`) VALUES
('www.marketer.vn', 4, 'True', 'https://marketer.vn/wp-content/uploads/2016/09/cac-loai-poster-marketing-hieu-qua-ve-mat-hinh-anh-cho-su-kien.jpg', 200000, 'https://marketer.vn/quang-cao-tiep-thi/cac-loai-poster-marketing-hieu-qua-ve-mat-hinh-anh-cho-su-kien.html', 2, 50),
('www.hutech.edu.vn', 5, 'True', 'http://www.hutech.edu.vn/cuusinhvien/images/image/images/13813654_304990819834078_8105873883271237359_n.jpg', 200000, 'http://www.hutech.edu.vn/cuusinhvien/index.php/tintuc/chitiet/1822111599/15/Bo-anh-ky-yeu-dep-nhu-poster-phim-Thai-cua-lop-12DQT16', 11, 29),
('www.advertisingvietnam.com/', 7, 'True', 'https://advertisingvietnam.com/wp-content/uploads/2019/11/thiet-ke-poster.jpg', 200000, 'https://advertisingvietnam.com/2019/11/nghe-thuat-thiet-ke-poster-muc-tieu-loai-hinh-va-huong-di/', 2, 43),
('www.hutech.edu.vn', 15, 'True', 'http://www.hutech.edu.vn/cuusinhvien/images/image/images/13813654_304990819834078_8105873883271237359_n.jpg', 200000, 'http://www.hutech.edu.vn/cuusinhvien/index.php/tintuc/chitiet/1822111599/15/Bo-anh-ky-yeu-dep-nhu-poster-phim-Thai-cua-lop-12DQT16', 2, 7),
('www.hutech.edu.vn', 16, 'True', 'http://www.hutech.edu.vn/cuusinhvien/images/image/images/13813654_304990819834078_8105873883271237359_n.jpg', 200000, 'http://www.hutech.edu.vn/cuusinhvien/index.php/tintuc/chitiet/1822111599/15/Bo-anh-ky-yeu-dep-nhu-poster-phim-Thai-cua-lop-12DQT16', 3, 42);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `IDcomment` int(11) NOT NULL,
  `NoiDung` text COLLATE utf8_unicode_ci NOT NULL,
  `Star` int(11) NOT NULL,
  `NgayThangNam` text COLLATE utf8_unicode_ci NOT NULL,
  `IDThanhVien` int(11) NOT NULL,
  `IDPhim` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`IDcomment`, `NoiDung`, `Star`, `NgayThangNam`, `IDThanhVien`, `IDPhim`) VALUES
(7, 'phim rất hay', 0, '20:43:10   21-11-2019', 3, 57),
(20, 'phim hay', 0, '22:17:17   21-11-2019', 3, 8),
(26, 'good', 0, '7:38:9   22-11-2019', 1, 25),
(29, 'phim hay', 0, '9:13:21   22-11-2019', 3, 23),
(42, 'good', 4, '22:39:9   22-11-2019', 1, 30),
(43, 'hay', 4, '22:41:43   22-11-2019', 1, 30),
(44, 'phim hay', 2, '22:53:27   22-11-2019', 3, 25),
(45, 'phim hay', 4, '22:54:12   22-11-2019', 3, 29),
(46, 'phim hay', 3, '21:9:37   25-11-2019', 3, 11),
(47, 'phim hay', 3, '8:3:27   26-11-2019', 3, 30),
(48, 'good', 3, '22:40:3   26-11-2019', 3, 29),
(50, 'phim hay', 5, '9:50:13   28-11-2019', 2, 50);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `linkphim`
--

CREATE TABLE `linkphim` (
  `IDLinkPhim` int(11) NOT NULL,
  `TenLink` text COLLATE utf8_unicode_ci NOT NULL,
  `DuongLink` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `linkphim`
--

INSERT INTO `linkphim` (`IDLinkPhim`, `TenLink`, `DuongLink`) VALUES
(1, 'Dora Và Thành Phố Vàng Mất Tích ', 'idvd'),
(2, 'Điệp Vụ Kép: Truy Nã Tới Cùng\r\n', 'IWgA_9Ce1xA'),
(6, 'Đặc Vụ Áo Đen: Sứ Mệnh Toàn Cầu', 'WkDeu_EBXVk'),
(7, 'Quái Vật Venom\r\n', '9gETvmStklw'),
(8, 'Alita: Thiên Thần Chiến Binh\r\n', 'KVBf9eLgzFU'),
(9, 'Đảo Săn Mồi\r\n', 'yoi2DZDPbXs'),
(10, 'Cuộc Chiến Dưới Chân Tháp Cổ 2', 'RppfMMXzmEY'),
(11, 'Thế Giới Livestream Điên Cuồng\r\n', 'zj1o-tU6xwc'),
(12, 'Tội Nhân Vô Định\r\n', 'L0eWKIOu9Dc'),
(13, 'Hương Vị Yêu Thương\r\n', 'oJUMYC1yYgs'),
(14, 'Thòng Lọng Ma\r\n', 'dZMf8DxDSuA'),
(15, 'Cặp Đôi Lệch\r\n', 'sxsr2T0gR-o'),
(16, 'Chúng Tôi Không Thể Làm Bạn\r\n', 'opwpB0WykX8'),
(17, 'Nụ Cười Của Faust\r\n', 'swH0xg8Fncw'),
(18, 'Ngàn Lời Chúc Ngủ Ngon', 'dXz4RtR7sgg'),
(19, 'Gia Đình Của Frankenstein\r\n', 'EY_4E1WiOvE'),
(20, 'Tuổi Nổi Loạn\r\n', 'JxcoFxuDmdA'),
(21, 'Bão Tố Gây Mê Phần 2 ', 'kYvn_mcYHGE'),
(22, 'Nhiệm Vụ Kashmir\r\n', '4P2rNsViNAo'),
(23, 'Phi Vụ Tốc Độ\r\n', '4DXd0vOaNiA'),
(24, 'Cân Não\r\n', 'XXIYs4Swn6w'),
(25, 'Người Vĩ Đại\r\n', '9QdD_NSpRUo'),
(26, 'Hãy Là Chính Mình\r\n', 'md81G1lj518'),
(27, 'Kẻ Liều Mạng\r\n', 'EijzV-O-MY0'),
(28, 'Thống Đốc Trẻ Tuổi\r\n', 'FAxxp5xkCF4'),
(29, 'Vợ Ma\r\n', 'eNu3FCbZ0Oo'),
(30, 'Giữa Chín Tầng Mây\r\n', '4bGtH2vfz8Q'),
(31, 'Ai Cũng Dối Lừa\r\n', '7lQjhDRXSL0'),
(32, 'Giai Điệu Tình Yêu\r\n', '7lQjhDRXSL0'),
(33, 'Quê Hương Ta: Thời Đại Mới\r\n', 'IwL7VdEBHLQ'),
(34, 'Biển Sương Mù\r\n', 'K_hyPq-Fs2c'),
(35, 'Lật Tẩy (Phần 2)\r\n', 'usE6wkDlxVA'),
(36, 'Quý Cô Họ Lee\r\n', '_c5fE8lFj7c'),
(37, 'Khi Đóa Trà Trổ Bông​\r\n', 'ErrY-X9qv0U'),
(38, 'Cậu Thật Phi Thường\r\n', 'gI20Z1x42is'),
(39, 'Khắc Tinh Ma Cà Rồng (Phần 4)\r\n', 'SeaLGwhf_os'),
(40, 'Thấy (Phần 1)\r\n', 'keTK0nS3NuU'),
(41, 'Cuộc Chiến Không Gian (Phần 1)\r\n', 'Iad0bEqUdis'),
(42, 'Danh Sách Đen (Phần 7)\r\n', 'HAVcHs8Ek9o'),
(43, 'Tuổi Thơ Bá Đạo Của Sheldon ', '6B17eYqFrLs'),
(44, 'Dora Và Thành Phố Vàng Mất Tích', '0yDKTvpQeAc'),
(45, 'Xác Sống 10\r\n', 'qmnV3MHllnM'),
(46, 'Truyện Kinh Dị Mỹ 9: 1984\r\n', 'MYFibFPYJGg'),
(47, 'Hãy Để Tuyết Rơi\r\n', 'PdOiNahmxgg'),
(48, 'Nữ Siêu Nhân (Phần 5)\r\n', '5NCL0RuEt3g'),
(49, '\"Lăn\" Đến Bên Em\r\n', 'gxb1zEiBKRg'),
(50, 'Người Không Trọng Lực\r\n', 'PwbFSr4MkME'),
(51, 'Băng Đảng Đường Phố\r\n', 'FoJv4sQ7ML0'),
(52, 'Ảnh Hưởng\r\n', 'k4QQ8ZqnSnU'),
(53, 'LÁCH LUẬT (PHẦN 6)', 'krRhU2JixJg'),
(55, 'TRẠNG SƯ XẢO QUYỆT', 'wN3QLcICvHs'),
(56, 'Nobita Và Mặt Trăng Phiêu Lưu Ký', 'Tqgw7cDYlWk'),
(57, 'Nobita Và Nước Nhật Thời Nguyên', 'VbwEcr9WPsM'),
(58, 'Quan Xẩm Lốc Cốc', 'bJpDd9SUdAk');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ngonngu`
--

CREATE TABLE `ngonngu` (
  `IDNgonNgu` int(11) NOT NULL,
  `NgonNgu` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ngonngu`
--

INSERT INTO `ngonngu` (`IDNgonNgu`, `NgonNgu`) VALUES
(1, 'Lồng Tiếng'),
(2, 'Thuyết Minh'),
(3, 'Vietsub ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phim`
--

CREATE TABLE `phim` (
  `IDPhim` int(11) NOT NULL,
  `TenPhim` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayRaRap` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `TenDaoDien` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `NoiDungPhim` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ThoiGian` int(11) NOT NULL,
  `poster` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `TraiLer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `NamSX` int(11) NOT NULL,
  `DienVien` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `DiemMDB` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `IDQuocGia` int(11) NOT NULL,
  `IDLinkPhim` int(11) NOT NULL,
  `IDNgonNgu` int(11) NOT NULL,
  `IDTheLoai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phim`
--

INSERT INTO `phim` (`IDPhim`, `TenPhim`, `NgayRaRap`, `TenDaoDien`, `NoiDungPhim`, `ThoiGian`, `poster`, `TraiLer`, `NamSX`, `DienVien`, `DiemMDB`, `IDQuocGia`, `IDLinkPhim`, `IDNgonNgu`, `IDTheLoai`) VALUES
(7, 'Điệp Vụ Kép: Truy Nã Tới Cùng\r\n', '2019-11-13', 'M.J. Bassett', 'Truy Nã Tới Cùng kể về một nhà đàm phán con tin NYPD hợp tác với một đặc vụ liên bang để giải cứu hàng chục khách du lịch bị bắt làm con tin trong thời gian chiếm giữ 10 giờ tại Cục Dự trữ Liên bang Hoa Kỳ.\r\n\r\n', 100, 'https://bilutv.org/upload/images/2019/10/truy-na-toi-cung-2019_1570101800.jpg', 'FHjJRsauio0', 2019, 'N/A', '7.9', 1, 2, 3, 1),
(8, 'Đặc Vụ Áo Đen: Sứ Mệnh Toàn Cầu', '2019-11-20', ' F. Gary Gray', 'Bấy lâu nay, Đặc vụ Áo Đen luôn là những người hùng thầm lặng “ngầu” nhất, bảo vệ Trái Đất khỏi những hiểm họa xấu xa ngoài hành tinh. Trong cuộc phiêu lưu mới này, họ phải đối mặt với mối đe dọa mang tính toàn cầu lớn nhất từ trước đến giờ: truy tìm điệp viên hai mang ẩn mình trong tổ chức Men In Black.\r\n\r\n', 122, 'https://bilutv.org/upload/images/2019/03/dac-vu-ao-den-su-menh-toan-cau-2019_1551701522.jpg', 'ANj-koewa5s', 2019, 'N/A', '7', 1, 6, 2, 1),
(9, 'Quái Vật Venom\r\n', '12-12-2019', 'Ruben Fleischer', 'Quái Vật Venom là một kẻ thù nguy hiểm và nặng ký của Người nhện trong loạt series của Marvel. Chàng phóng viên Eddie Brock (do Tom Hardy thủ vai) bí mật theo dõi âm mưu xấu xa của một tổ chức và đã không may mắn khi nhiễm phải loại cộng sinh trùng ngoài hành tinh (Symbiote) và từ đó đã không còn làm chủ bản thân về thể chất lẫn tinh thần. Điều này đã dần biến anh thành quái vật đen tối và nguy hiểm nhất chống lại người Nhện - Venom.\r\n\r\n', 121, 'https://bilutv.org/upload/images/2019/01/quai-vat-venom-2018_1546516489.jpg', 'u9Mv98Gr5pY', 2018, 'Reid Scott,Scott Haze,Riz Ahmed', '5.7', 7, 7, 1, 3),
(11, 'Đảo Săn Mồi\r\n', '2019-11-19', 'Franck Khalfoun', 'Để vượt qua sang chấn tâm lý, Toby đã đăng ký một khóa học sinh tồn. Chương trình yêu cầu cậu phải tập cắm trại một mình nơi đảo hoang trong 3 ngày. Xui xẻo thay, hòn đảo mà cậu chọn lại bị ám bởi một thế lực chết chóc kinh hoàng.\r\n\r\n', 85, 'https://bilutv.org/upload/images/2019/11/dao-san-moi-2019_1573015824.jpg', 'vcx-sPDKx20', 0, 'Jerrica Lai, Jolene Anderson, Logan Miller', '5.5', 12, 9, 2, 3),
(13, 'Thế Giới Livestream Điên Cuồng\r\n', '2019-11-20', 'Trác Dục Đồng', 'Lâm An An - một cô gái bình thường, mỗi ngày cố định đi làm và tan ca, chỉ muốn sống một cuộc sống thực tế ổn định. Chưa bao giờ An An nghĩ tới, vì một cuộc cá cược bất ngờ, An An quen được \"dream maker\" Du Nguyên Lạc, còn bước vào thế giới livestream hoàn toàn khác. Vũ trụ nhỏ trong lòng cô cũng vì vậy mà từng chút từng chút một bừng cháy. Mỗi người trên thế giới này đều có đặc điểm riêng thuộc về chính mình, chỉ cần bạn dám nghĩ, dám ước mơ, cuộc đời có thể vì chính mình mà điên cuồng một lần!\r\n\r\n', 121, 'https://bilutv.org/upload/images/2019/09/the-gioi-livestream-dien-cuong-2019_1569812377.jpg', 'ycznrIskXb0', 20019, 'Ngô Tư Hiền, Hạng Tiệp Như', '8.1', 12, 11, 3, 8),
(14, 'Tội Nhân Vô Định\r\n', '2019-11-28', 'Mavis Fan', 'Một thành viên tổ chức tội phạm dính vào hai âm mưu bất chính diễn ra cách nhau 10 năm. Anh sẽ phải thoát khỏi nhà tù để giải cứu người thân.\r\n\r\n', 112, 'https://bilutv.org/upload/images/2019/11/toi-nhan-vo-dinh-2019_1572693175.jpg', 'TQFMtqFwnuk', 2019, 'Hsiao-Chuan Chang, Alyssa Chia', '8.3', 12, 12, 3, 9),
(15, 'Hương Vị Yêu Thương\r\n', '2019-11-27', 'Trần Minh Chương', 'Bộ phim xoay quanh hành trình đưa ẩm thực Trung Hoa vươn tầm quốc tế của hai bạn trẻ là An Văn Vũ, người thừa kế ẩm thực họ An, từng vì biến cố gia đình mà tự tử dẫn đến mất vị giác và Cận Tân Tân một cô gái trẻ đấy nhiệt huyết quyết tâm trở thành đầu bếp tài ba.\r\n\r\n', 45, 'https://bilutv.org/upload/images/2019/09/huong-vi-yeu-thuong-_1568262257.jpg', 'BiJqN35S7kA', 2019, 'Lục Nghị, Quách Thái Khiết, Viêm Á Luân', '7.7', 12, 13, 3, 8),
(16, 'Thòng Lọng Ma\r\n', '2019-12-20', '\r\nTrang Nguyen', 'Truyền thuyết về những ai treo cổ tự vẫn, thì hồn ma sẽ khó siêu thoát, âm hồn vất vưởng. Để xoa dịu linh hồn người chết, vùng ven biển Đài Loan tổ chức một buổi lễ gọi là “Gửi Đờm”.\r\n\r\n', 106, 'https://bilutv.org/upload/images/2019/09/thong-long-ma-2018_1569069007.jpg', 'nFwxsAMrZTU', 2018, 'Trang Hà, \r\nQuyết Kevin', '6.8', 12, 14, 3, 7),
(17, 'Cặp Đôi Lệch\r\n', '2019-11-27', 'Tăng Khải Huyền', 'Bộ phim kể về Nguyên Hoài Chân, một cô gái có sở thích khác người: hay nhặt lại đồ của người khác bỏ đi và Doanh Khai Thái, một con người lạnh lùng, thích viết tiểu thuyết hơn là đi làm. Giữa họ chẳng có lấy nổi một điểm chung. Hai thỏi nam châm cùng dấu ấy bỗng có cơ hội hút về phía nhau, nhưng chuyện gì sẽ xảy ra khi có người thứ ba xuất hiện?\r\n\r\n', 45, 'https://bilutv.org/upload/images/2019/09/cap-doi-lech-2011_1568984832.jpg', 'emr3ey-ds3E', 2011, 'Cao Dĩ Tường,Tăng Khải Huyền', '10', 12, 15, 3, 2),
(18, 'Chúng Tôi Không Thể Làm Bạn\r\n', '2019-11-25', 'Phùng Khải', 'Vào thời điểm Châu Duy Duy chuẩn bị bước vào lễ đường cùng người bạn trai qua lại đã lâu, thì cô gặp được Chử Khắc Hoàn. Trí não cô chứa đầy hình ảnh của người đàn ông ngang ngược này, không thể xoá nhoà. Nhưng cả hai đều đã có đối tượng kết hôn, họ không thể làm tình nhân, cũng chẳng thể là bạn bè. Vậy thì mối quan hệ giữa họ là gì đây ?\r\n\r\n', 45, 'https://bilutv.org/upload/images/2019/07/chung-toi-khong-the-lam-ban-2019_1563590568.jpg', 'rLvg0zTtb2k', 2019, 'Lôi Sắt Lâm, Tôn Kỳ Quân, Trần Mộ', '6.4', 10, 16, 3, 12),
(19, 'Nụ Cười Của Faust\r\n', '2019-11-14', 'Xuan Lương', 'Nụ Cười Của Faust - Behind Your Smile: Nam chính Triệu Dĩ Đình chịu lời nguyền không được đầu thai chuyển kiếp, đành phải lưu lạc nhân gian. Trong một dịp tình cờ, anh gặp được thiên kim tiểu thư Lôi Tâm Ngữ cũng rơi vào cảnh hoạn nạn, rồi giúp cô xuyên qua thời không tìm kiếm hạnh phúc...\r\n\r\n', 45, 'https://bilutv.org/upload/images/2018/01/nu-cuoi-cua-faust-2016.jpg', 'KM64w9LpTTg', 2007, 'Huỳnh Thùy Linh, \r\nHuệ Phi, Diem Vy', '7.1', 12, 17, 2, 9),
(21, 'Gia Đình Của Frankenstein\r\n', '2019-11-20', 'Saori Hayami', 'Anh chị em gia đình bị ba mẹ là nhà khoa học điên đem làm vật thí nghiệm. Chỉ có em út là không bị thí nghiệm. Giờ ba mẹ bị bắt, nên mọi người muốn sống một cuộc sống bình thường.\r\n\r\n', 90, 'https://bilutv.org/upload/images/2019/07/gia-dinh-cua-frankenstein-2018_1563598795.jpg', '7pxZxY_Siyc', 2018, 'Saori Hayami', '2.5', 12, 19, 3, 13),
(22, 'Tuổi Nổi Loạn\r\n', '2019-11-20', 'Jeanine Ching Yang', 'Age of Rebellion - Tuổi Nổi Loạn (Tên khác Ký Ức Vượt Tường / Năm ấy chúng ta tuổi 17) là một phim thanh xuân vườn trường của Hà Nhuận Đông. Phim có sự tham gia của một số khách mời : Quách Phẩm Siêu, Ngô Khắc Quần, Trương Quân Ninh, Tu Kiệt Khải, Lục Nguyệt, Trần Dịch, Thẩm Kiến Hoành, Anh Thừa Hi (A-Team), Vũ Trụ (A\'N\'D).... Thanh xuân, là một chuyến đi xa khi ta chưa kịp trưởng thành. Sa ngã, nhưng lại bắt đầu thức tỉnh.\r\n\r\n', 90, 'https://bilutv.org/upload/images/2019/07/tuoi-noi-loan-2018_1563590493.jpg', 'RBz7nxCJVWA', 2018, 'Hà Nhuận Đông, Jason Tsou, Chieh-Kai Shiou', '7.2', 12, 20, 3, 4),
(23, 'Bão Tố Gây Mê Phần 2 ', '2019-11-27', 'Tiêu Lực Tu, Hồng Bá Hào', 'Tiêu Chính Huân đảm nhiệm bác sĩ chiến trường ở Jordan, trở về Đài Loan với chấn thương trên người, bất ngờ gặp phải vụ nổ ở ga tàu điện ngầm. Tiêu Chính Huân tình cờ gặp lại người bạn gái mà anh đã chia tay - Dương Duy Du . Tiếp nhận nhiệm vụ thành lập tổ trung tâm chấn thương của bệnh viện Khang Liên, không ngờ đằng sau vụ nổ liên quan đến những lợi ích khổng lồ. Cả một hệ thống y tế đều kẹt sâu bên trong … Hùng Tể - Bác sĩ thế hệ mới của bệnh viện Khang Liên, ban ngày anh là bác sĩ khoa ngoại có tay nghề cao siêu, ban đêm trở thành một rapper. Tiêu Chính Huân - bác sĩ lâu năm trong nghề không chỉ đối mặt với sự nghi ngờ và thách thức của Hùng Tể, mặt khác còn phải đối mặt với Zoe - phóng viên y tế không ngừng tìm hiểu về vụ nổ ga tàu điện và vụ án không cứu bệnh nhân hồi trước. Va chạm, tìm hiểu, hợp tác trong sự chuyển giao thế hệ, cuối cùng họ lại phải đối mặt với những vấn đề khó giải quyết. Sẽ trở thành đồng phạm của thể chế hay là dũng cảm chống lại cả thế giới cho đến cùng?\r\n\r\n', 50, 'https://bilutv.org/upload/images/2018/01/bao-to-gay-me-phan-2-khong-bo-cuoc-2017.jpg', 'KjJKTbQ_Kqs', 2017, 'Lý Quốc Nghị, Ngô Khảng Nhân, Mạnh Cảnh Như, Hứa Vỹ Ninh', '6.8', 12, 21, 3, 6),
(24, 'Nhiệm Vụ Kashmir\r\n', '2019-11-27', ' Vidhu Vinod Chopra', 'Bộ phim kể về cuộc đời và bi kịch của một cậu bé tên Altaaf Khan (Hrithik Roshan) sau khi cả gia đình anh vô tình bị cảnh sát giết chết. Anh ta được cảnh sát trưởng nhận nuôi, và vô tình biết được người giết cả gia đình mình chính là người nhận nuôi mình , anh ta tìm cách trả thù và trở thành một kẻ khủng bố. Bộ phim đề cập đến khủng bố và bi kịch của những đứa trẻ phải chịu cảnh chiến tranh.\r\n\r\n', 154, 'https://bilutv.org/upload/images/2019/11/nhiem-vu-kashmir-2000_1572772164.jpg', 'aRUiZpGMvEo', 2000, 'Sanjay Dutt,Hrithik Roshan, Vineet Sharma', '6.3', 7, 22, 2, 1),
(25, 'Phi Vụ Tốc Độ\r\n', '2019-11-27', 'Tarun Mansukhani', 'Kẻ trộm khét tiếng hợp tác với tay đua đường phố trong phi vụ lớn liên quan đến trò lừa gạt công phu nhắm đến giới quan chức, những kẻ đang che đậy nhiều bí mật bẩn thỉu.\r\n\r\n', 147, 'https://bilutv.org/upload/images/2019/11/phi-vu-toc-do-2019_1572758103.jpg', 'DWfddOveapc', 2018, 'Jacqueline Fernandez, Boman Irani, Boman Irani', '7.3', 7, 23, 2, 1),
(26, 'Cân Não\r\n', '2019-09-17', '\r\nChu Thế Anh', 'Cuộc đấu trí giữa 1 cảnh sát tài ba và 1 tên tội phạm thông minh dưới vỏ bọc của 1 nhà khoa học nổi tiếng...\r\n\r\n', 165, 'https://bilutv.org/upload/images/2019/10/can-nao-2016_1570450871.jpg', 'G7Wp1ACgN0E', 2016, '\r\nPhạm Anh Khoa', '8.3', 7, 24, 2, 3),
(27, 'Người Vĩ Đại\r\n', '2019-11-24', '\r\nNguyễn Hữu Hải', 'Rishi là 1 người rất thông minh, anh đã được mời làm CEO cho công ty hàng đầu thế giới Origin. Sự nghiệp đang thành công thì anh biết được tin là người bạn thân của anh đã vì anh mà nhận hết tội lỗi của mình giúp anh (Rishi bị người khác hãm hại). Khi biết được tin này, anh đã cảm thấy rất đau lòng và muốn bù đắp cho người bạn thân của anh... Khi trở về quê hương của người bạn thân thì cũng là lúc rất nhiều chuyện xảy ra với làng của người bạn thân này...\r\n\r\n', 176, 'https://bilutv.org/upload/images/2019/09/nguoi-vi-dai-2019_1569857420.jpg', 'Tb6nYDAByjk', 2019, 'Ngoc Hue Huynh, Bống Torres, Le Giang', '8.6', 7, 25, 2, 4),
(28, 'Hãy Là Chính Mình\r\n', '2019-11-27', 'Lý Nhất Kỳ', 'Surya (Allu Arjun) là 1 sĩ quan quân đội rất xuất sắc nhưng cũng là 1 con người rất ương bướng luôn làm theo ý mình, vi phạm rất nhiều quy tắc của quân đội. Nhưng anh rất muốn đến biên giới để bảo vệ tổ quốc. Chuyện lớn bắt đầu xảy ra khi Surya tự ý bắn chết 1 tên khủng bố đang bị giam giữ mà không có lệnh của cấp trên. Lệnh trục xuất đã được đưa ra. Diễn biến tiếp theo mọi người hãy xem tiếp nhé...\r\n\r\n', 163, 'https://bilutv.org/upload/images/2019/09/hay-la-chinh-minh-2018_1569820950.jpg', 'pR_srGL2pvk', 2018, '\r\nTrần Ngọc Khánh An, Anh Nguyen, Dang Van Thuan', '9.3', 7, 26, 2, 3),
(29, 'Kẻ Liều Mạng\r\n', '2019-11-26', '\r\nTRùm Núp Lùm', 'Kẻ Báo Thù kể về lực lượng cảnh sát đang cố gắng ngăn chặn một tên tội phạm nguy hiểm đang mang trong cơ thể mình một quả bom. Điều tra phía cảnh sát cho biết hắn từng là một kẻ liều mạng, và đang mất trí nhớ\r\n\r\n', 107, 'https://bilutv.org/upload/images/2019/09/ke-lieu-mang-2019_1568710875.jpg', 'TNnoCdLafXo', 2019, 'TRùm Núp Lùm\r\n', '10', 7, 27, 1, 3),
(30, 'Thống Đốc Trẻ Tuổi\r\n', '2019-11-26', 'Koratala Siva', 'Phim Thống Đốc Trẻ Tuổi: Bharat là con trai của một Thống Đốc Bang, đang du học tại Anh. Nghe tin bố mất nên anh đã từ bên London trở về chịu tang. Khi về đến nơi thì bố đã được chôn cất, trong thời gian này nội bộ của Đảng Cầm Quyền tranh giành chức Thống Đốc chưa có chủ. Vì muốn đảng yên ổn trở lại, Bhrat bất ngờ được làm Thống Đốc. Khi làm Thống Đốc, Bharat đã có 1 cuộc cách mạng khi trừng trị tham nhũng và nâng cao đời sống xã hội. Rồi chuyện gì đến cũng phải đến, những tên quan chức tham nhũng liên thủ tìm cách triệt hạ Bharat.\r\n\r\n', 173, 'https://bilutv.org/upload/images/2018/12/thong-doc-tre-tuoi-2018_1545317030.jpg', 'aoReJrDsq7c', 2018, 'Prakash Raj, Prakash Raj, Sarath Kumar, Devaraj', '9.5', 7, 28, 2, 1),
(31, 'Vợ Ma\r\n', '2019-11-26', 'Amar Kaushik', 'Phim Vợ Ma: Tại một thị trấn nhỏ ở Ấn Độ, những người đàn ông luôn sống trong sợ hãi bởi một hồn ma được gọi là \"Stree\" (Vợ) thường bắt cóc đàn ông vào ban đêm. Dựa trên truyền thuyết đô thị của \"Nale Ba\" đã lan truyền ở Karnataka vào những năm 1990.\r\n\r\n', 128, 'https://bilutv.org/upload/images/2018/12/vo-ma-2018_1545314052.jpg', 'n3phQ0WeQJU', 2018, 'Shraddha Kapoor, Rajkummar Rao, Pankaj Tripathi', '7.0', 7, 29, 3, 12),
(32, 'Giữa Chín Tầng Mây\r\n', '2019-11-19', ' Majid Majidi', 'Phim Giữa Chín Tầng Mây: Lấy bối cảnh ở khu ổ chuột nghèo khó Mumbai. Người thanh niên Aamir buộc chọn nghề giao \"thuốc\" để kiếm cơm. Trong một lần đang làm việc Aamir bị cảnh sát truy đuổi, anh đã chạy vào tiệm giặt ủi nơi làm việc của người em gái Tara. Cô em Tara nhận tội và đi tù thay cho người anh trai của cô khi cảnh sát kiểm tra và phát hiển ra gói \"hàng\" ở đó. Chuỗi ngày dài về tình cảm anh em và nước mắt bắt đầu từ đây...\r\n\r\n', 120, 'https://bilutv.org/upload/images/2018/10/giua-chin-tang-may-2018_1538740335.jpg', 'n3phQ0WeQJU', 2018, 'Malavika Mohanan, Ishaan Khattar, Goutam Ghose', '9.0', 7, 30, 2, 6),
(33, 'Ai Cũng Dối Lừa\r\n', '2019-11-25', 'Kiều Hạnh', 'Lee Yoon Jung là nữ đạo diễn kỳ cựu của điện ảnh Hàn Quốc, bà có nhiều năm làm việc cho tvN và MBC, từng khẳng định được tài năng qua các dự án chất lượng. Năm 2019, bà quyết định đầu quân cho OCN và The Lies Within chính là dự án đầu tay của vị đạo diễn họ Lee. Tuy không phải là thước phim đình đám trong tháng 10 này nhưng phim vẫn nhận được rất nhiều kỳ vọng từ khán giả. Phim dự kiến sẽ được phát sóng từ ngày 12 tháng 10, hứa hẹn sẽ tạo nên nhiều điều đặc biệt.\r\n\r\n', 60, 'https://bilutv.org/upload/images/2019/10/ai-cung-doi-lua-2019_1570946657.jpg', 'X1U6ZSpL_m8', 2019, '\r\nNga Ngô, \r\nTcd Liên Minh, \r\nNinh Thị Linh Chi', '7.8', 2, 31, 3, 4),
(34, 'Giai Điệu Tình Yêu\r\n', '2019-11-12', 'Won Jin Ah', 'Một học sinh và một thiếu niên trầm lặng gặp nhau lần đầu tại một tiệm bánh vào những năm 1990 và cố gắng tìm lại nhau qua nhiều năm, nhưng số phận luôn kéo họ ra xa.Trong ngày đầu tiên ca sĩ Yoo Yeol trở thành DJ cho chương trình phát thanh “Music Album”, cũng là ngày đầu tiên Mi Soo gặp Hyun Woo. Những rung động đầu đời chớm nở giữa hai trái tim đầy nhiệt huyết. Nhưng rồi mối tình của họ không kéo dài được lâu, những biến cố liên tục xảy đến khiến họ phải xa nhau. Sau nhiều năm, họ gặp lại và tình cảm này… vẫn chưa kết thúc.\r\n\r\n', 122, 'https://bilutv.org/upload/images/2019/11/giai-dieu-tinh-yeu-2019_1573357094.jpg', 'q3Wsxtkq0go', 0, 'Yoon Se Ah, Kim Won Hae,Im Won Hee', '7.0', 2, 32, 3, 7),
(35, 'Quê Hương Ta: Thời Đại Mới\r\n', '2019-11-27', 'Văn Hiếu', 'Kim Jin Won là đạo diễn kỳ cựu của đài KBS, ông có nhiều năm cống hiến cho đài và bắt đầu làm việc cho JTBC từ năm 2017. Trải qua 2 năm làm việc tại môi trường mới, ông mới chỉ đứng sau 3 dự án và cũng chưa tạo được nhiều dấu ấn đặc biệt. Và My Country chính là dự án gần đây nhất của Jin Won, phim được đầu tư tương đối công phu và dự kiến được lên sóng từ ngày 4 tháng 10 năm 2019 vào khung giờ vàng của JTBC, hứa hẹn sẽ đem đến nhiều điều thú vị trong thời gian tới.\r\n\r\n', 120, 'https://bilutv.org/upload/images/2019/10/que-huong-ta-thoi-dai-moi-2019_1570244277.jpg', 'rkZmGC6n3hk', 2019, '\r\nSơn Sụt Sịt,Sơn Hoàng, Phong Nguyễn', '7.6', 1, 33, 1, 3),
(36, 'Biển Sương Mù\r\n', '2019-11-18', 'Shim Sung Bo', '“Sea Fog”, có nghĩa là đám sương mù dày đặc nơi biển cả đã che lấp đi những gì trước mắt. Phim là một tác phẩm nghệ thuật về câu chuyện của 6 người công nhân trên một chiếc thuyền cũ, họ đã bị cuốn vào một tai nạn không thể kiểm soát khi đối mặt với việc đi thuyền lậu. Biển sương mù đã được chọn đi tranh tượng vàng Oscar cho Phim nói tiếng nước ngoài hay nhất. Tóm tắt một số hình ảnh của phim Preview phim Biển Sương Mù Từ khóa Biển sương mùSea Fog 2014Biển sương mù 2014\r\n\r\n', 110, 'https://bilutv.org/upload/images/2019/11/bien-suong-mu-2014_1573306091.jpg', 'p-fbEgaSrOE', 2014, 'Kim Yoon Seok, Park Yoo Chun', '9.0', 2, 34, 1, 3),
(37, 'Lật Tẩy (Phần 2)\r\n', '2019-11-27', 'Kwang-Soo Lee', 'Trong khi giải quyết những bí ẩn khác nhau ở mỗi tập của chương trình trò chơi này, bảy thám tử bắt tay vào giải đáp bí ẩn lớn nhất: Chuyện gì xảy ra với dự án D?\r\n\r\n', 45, 'https://bilutv.org/upload/images/2019/11/lat-tay-phan-2-2018_1573279943.jpg', 'J4nTbGeXCN8', 2018, 'Min-Young Park,Jae-Suk Yoo,Nae-Sang Ahn', '7.3', 2, 35, 3, 9),
(38, 'Quý Cô Họ Lee\r\n', '2019-11-25', 'Han Dong Hwa, Park Jung Hwa', 'Hyeri là ca sĩ người hàng đầu của Hàn Quốc, cô luôn là gương mặt đại diện của nhóm nhạc nữ Girl’s Day và từng đứng thứ 3 trong top nghệ sĩ quyền lực nhất xứ kim chi. Không chỉ vậy, cô còn được đánh giá là diễn viên rất triển vọng nhưng Hyeri muốn tập trung sự nghiệp trong lĩnh vực ca hát nên cô không thường xuyên xuất hiện trên màn ảnh nhỏ. Năm 2019, cô sẽ đảm nhận vai nữ chính trong dự án phim mới của đài tvN mang tên Miss Lee, phim dự kiến sẽ được lên sóng từng ngày 25 tháng 9. Quý Cô Họ Lee thuộc thể loại tâm lý tình yêu, do đạo diễn trẻ Han Dong Hwa đảm nhận vai trò chỉ đạo sản xuất với vai trò kịch bản của biên kịch Park Jung Hwa. Ngoài Hyeri, phim còn có sự tham gia của dàn diễn viên tương đối chất lượng với một số cái tên sáng giá như: Kim Sang Kyung, Uhm Hyun Kyung, Cha Seo Won, Kim Eung Soo,…Nội dung phim xoay quanh cuộc sống và công việc của cô nàng chăm chỉ Lee Sun Sim, nhân viên công ty điện tử Cheongil.\r\n\r\n', 90, 'https://bilutv.org/upload/images/2019/09/quy-co-ho-lee-2019_1569509143.jpg', '1HugBmtQaxg', 2018, 'Cha Seo Won, Hyeri, Kim Sang Kyung, Uhm Hyun Kyung', '7.1', 2, 36, 2, 3),
(39, 'Khi Đóa Trà Trổ Bông​\r\n', '2019-11-27', 'Cha Young Hoon', 'Khi Đóa Trà Trổ Bông​ xoay quanh một người phụ nữ tên là Dong Baek (Gong). Phim sẽ cho thấy cuộc sống rắc rối của cô khi bị vướng vào ba người đàn ông cùng một lúc. Một người đàn ông tốt, một người đàn ông tồi và một người đàn ông nhỏ mọn khi cô điều hành quán bar của mình có tên là Camellia.\r\n\r\n', 45, 'https://bilutv.org/upload/images/2019/09/khi-doa-tra-tro-bong-2019_1568820381.jpg', 'oidWB3rDFgM', 2019, 'Kang Ha Neul, Oh Jung Se, Kim Ji Suk, Son Dam Bi', '7.6', 2, 37, 2, 14),
(40, 'Cậu Thật Phi Thường\r\n', '2019-11-21', 'Kim Sang Hyub', 'Được chuyển thể từ webcomic cùng tên của tác giả Moo Ryoo, Extraordinary You đang là thước phim được chú ý nhiều bậc nhất được ra mắt vào đầu tháng 10 này. Phim tuy không có sự tham gia của nhiều ngôi sao hàng đầu của làng điện ảnh xứ kim chi nhưng với nội dung hấp dẫn, lôi cuốn cùng sự chuẩn bị kỹ lưỡng trước khi phát sóng, phim hứa hẹn sẽ khuấy đảo thị trường Hàn Quốc trong thời gian tới. Nếu ai yêu thích dòng phim thanh xuân học đường thì đây rõ ràng là dự án đáng để theo dõi. Phim có tựa đề việt là Cậu Thật Phi Thường, do đạo diễn danh tiếng Kim Sang Hyub đảm nhận vai trò chỉ đạo sản xuất, và được cặp đôi biên kịch In Ji Hye và Song Ha Young cùng nhau soạn thảo kịch bản. Nội dung phim kể về cuộc sống của cô nàng Eun Dan Oh và hành trình thay đổi cuộc đời mình. Được sinh ra trong một gia đình giàu có, được theo học ngôi trường nổi tiếng nhưng Dan Oh không thể nào vui vẻ khi cô bị chuẩn đoán mắc bệnh tim và sẽ không qua khỏi thời trung học.\r\n\r\n', 92, 'https://bilutv.org/upload/images/2019/10/cau-that-phi-thuong-2019_1570030579.jpg', 'm1NjHhEIJUE', 2007, 'Kim Hye Yoon, Ro Woon, Lee Jae Wook', '8.1', 2, 38, 3, 12),
(41, 'Khắc Tinh Ma Cà Rồng (Phần 4)\r\n', '2019-11-27', 'Kelly Overton', 'Vanessa Helsing, người họ hàng xa của thợ săn ma cà rồng nổi tiếng Abraham Van Helsing, được hồi sinh chỉ để chứng kiến ma cà rồng chiếm lĩnh thế giới, Cô là niềm hy vọng cuối cùng của nhân loại dẫn dắt cuộc chiến giành lại những gì đã mất.\r\n\r\n', 121, 'https://bilutv.org/upload/images/2019/10/khac-tinh-ma-ca-rong-phan-4-2019_1571727040.jpg', 'VJ4lebPhWLY', 2019, 'Jonathan Scarfe, Vincent Gale, Aleks Paunovic, Christopher Heyerdahl', '6.3', 1, 39, 2, 1),
(42, 'Thấy (Phần 1)\r\n', '2019-11-12', 'Alfre Woodard', 'Trong một tương lai đen tối, loài người đã mất cảm giác về thị giác và xã hội đã phải tìm ra những cách mới để tương tác, xây dựng, săn bắn và để tồn tại. Tất cả điều đó được thử thách khi một cặp sinh đôi được sinh ra với thị giác.\r\n\r\n', 76, 'https://bilutv.org/upload/images/2019/11/thay-phan-1-2019_1572668020.jpg', 'KbRjegsahXw', 2019, 'Josh Blacker, Christian Camargo, Nesta Cooper', '7.4', 1, 40, 2, 1),
(43, 'Cuộc Chiến Không Gian (Phần 1)\r\n', '2019-11-26', 'Jed Elinoff, Savage Steve Holland, Scott McAboy, Scott Thomas, Thomas Scott', 'For All Mankind là một bộ phim truyền hình có sự tham gia của Jodi Balfour, Michael Dorman và Wrenn Schmidt. Loạt phim khám phá những gì sẽ xảy ra nếu cuộc đua không gian toàn cầu chưa bao giờ kết thúc.\r\n\r\n', 60, 'https://bilutv.org/upload/images/2019/11/cuoc-chien-khong-gian-phan-1-2019_1573209023.jpg', 'icy37dvSjCs', 2019, 'Jeremy Howard, Ricardo Hurtado, Jackie R. Jacobson, Abby Donnelly', '8.0', 1, 41, 3, 3),
(44, 'Danh Sách Đen (Phần 7)\r\n', '2019-11-27', 'Jon Bokenkamp', 'Cựu đặc vụ của chính phủ Raymond \"Red\" Reddington (do James Spader thủ vai) là mục tiêu truy nã hàng đầu của FBI trong cả thập kỷ đột ngột tới FBI tự nguyện đầu thú, đề nghị hỗ trợ bắt tên khủng bố tưởng đã chết từ lâu - Ranko Zamani, với điều kiện chỉ nói chuyện với duy nhất Elizabeth “Liz” Keen - một hồ sơ viên mới của FBI. Chuyện bắt đầu từ đó...\r\n\r\n', 87, 'https://bilutv.org/upload/images/2019/10/danh-sach-den-phan-7-2019_1570637369.jpg', 'Az4jPlcYQ74', 2019, 'Thaivan Ngyuen, Nicola Correia-Damude, Jay Santiago', '10', 1, 42, 2, 3),
(45, 'Tuổi Thơ Bá Đạo Của Sheldon ', '2019-11-20', ' Steven Molaro, Chuck Lorre', 'Young Sheldon phần 3 là phần spinoff tiếp theo của series phim hài đình đám The Big Bang Theory tiết lộ những chi tiết vừa hài hước lại giải thích được rất nhiều điều về nhân vật chính của show là Sheldon Cooper. Trường trung học luôn là một quãng thời gian khó khăn với hầu hết tất cả mọi người và tất nhiên Sheldon cũng vậy, bởi d trí tuệ thông minh hơn người và Sheldon sẽ dễ dàng học xong lớp 9 nhưng về mặt xã hội thì cậu bé hoàn toàn chả biết gì. Với tính cách luôn làm theo những quy tắc, định luật mà mình học được lại tự biết mình thông minh hơn những người khác và luôn nói những gì mình suy nghĩ trong đầu đã khiến cho Sheldon gặp rắc rối ngay từ ngày đầu đi học vì không tôn trọng giáo viên dạy mình. Cậu chàng thậm chí còn dám chất vấn bằng cấp chuyên môn của giáo viên.\r\n\r\n', 45, 'https://bilutv.org/upload/images/2019/10/tuoi-tho-ba-dao-cua-sheldon-phan-3-2019_1570618709.jpg', 'le8ponp_eHs', 2019, 'Danielle Rose Russell, Matthew Davis, Quincy Fouse, Aria Shahghasemi', '7.9', 1, 43, 3, 14),
(46, 'Dora Và Thành Phố Vàng Mất Tích', '2019-11-10', 'Marc Guggenheim, Andrew ', 'Dành phần lớn cuộc đời để khám phá rừng rậm cùng cha mẹ, không gì có thể chuẩn bị Dora cho cuộc phiêu lưu nguy hiểm nhất của cô từ trước đến nay: trường trung học. Là một người thám hiểm, Dora phải cùng với Boots, Diego cùng những sinh vật nơi rừng rậm bí ẩn và một nhóm thanh thiếu niên ragtag trong một cuộc hành trình giải cứu cha mẹ và khám phá những bí ẩn đằng sau nền văn minh Inca đã mất.\r\n\r\n', 106, 'https://bilutv.org/upload/images/2019/11/dora-va-thanh-pho-vang-mat-tich-2019_1573357327.jpg', 'TfTYFVFu-fQ', 2019, 'David Ramsey, Paul Blackthorne, Willa Holland, Katie Cassidy', '6.7', 1, 44, 3, 7),
(47, 'Xác Sống 10\r\n', '2019-11-14', ' Frank Darabont, Angela Kang', 'The Walking Dead phần 10 tập trung vào việc xây dựng Oceanside và Alexandria để giữ vững quan điểm và nền văn minh đã gây dựng. Nhưng khó khăn vẫn luôn tìm đến với nhóm khi mối đe dọa từ Whisperers vẫn luôn rình rập...\r\n\r\n', 45, 'https://bilutv.org/upload/images/2019/10/xac-song-10-2019_1570536749.jpg', '7s_zoXcNnVA', 2018, 'Norman Reedus, Melissa Mcbride, Andrew Lincoln, Danai Gurira', '6.4', 1, 45, 2, 11),
(49, 'Hãy Để Tuyết Rơi\r\n', '2019-11-20', 'Luke Snellin', 'Bão tuyết ập đến thị trấn nhỏ vào Đêm trước Giáng Sinh lạnh giá, gây nên bao thay đổi đối với tình bạn, tình yêu và tương lai của các cô cậu học sinh cuối cấp.\r\n\r\n', 92, 'https://bilutv.org/upload/images/2019/11/hay-de-tuyet-roi-2019_1573279400.jpg', 'kVI8lbC6sos', 2012, 'Isabela Moner, Shameik Moore, Odeya Rush, Liv Hewson', '8.0', 1, 47, 3, 13),
(50, 'Nữ Siêu Nhân (Phần 5)\r\n', '2019-11-12', 'Greg Berlanti, Ali Adler, Andrew Kreisberg', 'Supergirl phần 5 tiếp tục kể về cô gái 24 tuổi Kara Zor - El, cô chị họ của Superman. Cô nàng đã trốn thoát khỏi Krypton sau vụ nổ và trú ngụ tại trái đất dưới lốt một cô gái bình thường tên Kara Devengers. Nhưng sau đó ở tuổi 24, Kara quyết định sử dụng khả năng siêu nhiên của mình để trở thành siêu anh hùng.\r\n\r\n', 120, 'https://bilutv.org/upload/images/2019/10/nu-sieu-nhan-phan-5-2019_1570637596.jpg', 'r9wixo5MOfQ', 2019, 'Alkoya Brunson, Jeremy Howard, Ricardo Hurtado', '10', 1, 48, 2, 1),
(51, 'Lăn Đến Bên Em\r\n', '2019-11-13', ' Glenn Ficarra', 'Jocelyn là một doanh nhân thành đạt, một người đàn ông đào hoa và cũng là một kẻ hay nói dối. Trở nên buồn chán, anh ta giả làm một người tàn tật để quyến rũ cô hàng xóm bốc lửa. Cho đến một ngày cô ấy giới thiệu anh ta với chị gái mình, người thực sự bị tàn tật…\r\n\r\n', 107, 'https://bilutv.org/upload/images/2019/11/lan-den-ben-em-2018_1573356906.jpg', 't3AyFd9HuyE', 2018, 'Will Smith, Margot Robbie, Rodrigo Santoro', '5.5', 4, 49, 2, 4),
(52, 'Người Không Trọng Lực\r\n', '2019-11-04', '\r\nLê Mã Lương', 'Đội Điều Tra Đặc Biệt do đội trưởng Oh Gu-tak thành lập, với tiêu chí không cần quan tâm phương pháp tốt xấu, chỉ cần “bắt sống bọn tội phạm”. Thành viên gạo cội nhất của đội là tay đấm Park Woong-chul, người đã vào tù cũng là đại ca được tôn kính. Hai thành viên mới được chiêu mộ thêm là mỹ nữ chân dài bốc lửa - thiên tài lừa đảo Kwak No-soon và tay cảnh sát lì lợm đang lĩnh án Ko Yoo-sung.\r\n\r\n', 0, 'https://bilutv.org/upload/images/2019/11/nguoi-khong-trong-luc-2019_1573027915.jpg', 'icy37dvSjCs', 2019, ' Gérard Pirès', '7.0', 12, 50, 3, 3),
(53, 'Băng Đảng Đường Phố\r\n', '2019-11-03', 'Kery James, Leïla Sy', 'Băng Đảng Đường Phố kể về 3 anh em - một tay xã hội đen, một học giả và một thiếu niên - học những bài học khó khăn ở vùng ngoại ô nghiệt ngã trong khi tìm kiếm phương tiện để sinh tồn..\r\n\r\n', 96, 'https://bilutv.org/upload/images/2019/10/bang-dang-duong-pho-2019_1571489739.jpg', '8_3oHnGz2YU', 0, 'Slimane Dazi, Mathieu Kassovitz, Walid Afkir', '5.5', 4, 51, 3, 12),
(54, 'Ảnh Hưởng\r\n', '2019-09-18', ' Antoine Blossier', 'Câu chuyện về cậu bé mồ côi Remi. Sau khi buộc phải rời xa người mẹ nuôi tốt bụng, Remi gia nhập gánh xiếc nhỏ của người nghệ sĩ bí ẩn Vitalis. Người thầy mới dạy cho cậu biết đọc, biết viết, biết hát ca, biết yêu thương cuộc sống và những người xung quanh.\r\n\r\n', 120, 'https://bilutv.org/upload/images/2019/10/anh-huong-2019_1570893864.jpg', 'R0rhNUnBVPo', 2018, '\r\nBảo Ngọc, \r\nHai Năm Biệt Tích, Bảo Hân', '7.0 ', 7, 52, 2, 3),
(55, 'LÁCH LUẬT (PHẦN 6)', '2019-11-27', 'Peter Nowalk,', 'Bạn có muốn nhận thông tin khi có tập mới không ?', 120, 'http://image.phimmoi.net/film/9536/poster.medium.jpg', 'buUuev4yu_8', 2018, 'Jack Falahee,Billy Brown,Viola Davis', '9', 7, 53, 3, 6),
(56, 'TRẠNG SƯ XẢO QUYỆT', '2019-11-09', 'Joe Ma,', 'Lawyer Lawyer (Trạng Sư Xảo Quyệt) là bộ phim hài xoay quanh một nhân vật nổi tiếng Trung Quốc, đó là Trạng sư Trần Mộc Cách, người được mệnh danh là \'vua cãi Quảng Đông\', cùng học trò Phan giết thời gian bằng thú \'đâm bị thóc chọc bị gạo\'. Nạn nhân của Mộc Cách còn có chính anh học trò khù khờ Phan. Khi Phan đem lòng yêu mến cô nghệ nhân rối Liên, anh bị sư phụ lừa đến Hồng Kông, chạy theo tiếng gọi của tình yêu. Nào ngờ, Phan dính vào một vụ án mạng. Mộc Cách cùng vợ phải đến Hồng Kông để bảo vệ cho học trò. Chỉ có điều, luật pháp xứ này theo lệ phương Tây, do người Anh quản lý. Liệu miệng lưỡi giảo hoạt của Mộc Cách có giúp anh cứu học trò?', 87, 'http://image.phimmoi.net/film/381/poster.medium.jpg', 'vTnLrUZTBX0', 20181, 'châu tinh trì, mạc văn tuỷ', '9', 12, 55, 3, 12),
(57, 'Nobita Và Mặt Trăng Phiêu Lưu Ký', '2019-11-07', 'Yakuwa Shinnosuke', 'Doraemon: Nobita Và Mặt Trăng Phiêu Lưu Ký là bộ phim hoạt hình chiếu rạp mới nhất của Nhật Bản. Bộ phim có tựa đề tiếng Anh là Doraemon: Nobita’s Chronicle of the Moon Exploration. Bộ phim kể về Nobita và chuyến thám hiểm mặt trăng của cậu. Trên tin tức thông báo rằng tàu thăm dò Mặt Trăng phát hiện có một bóng trắng trên Mặt Trăng. Nobita tuyên bố rằng đó là “Thỏ ngọc” nhưng cậu đã bị mọi người cười chê. Vì vậy mà cậu đã tự tạo ra vương quốc thỏ trên Mặt Trăng nhờ vào bảo bối pcủa Doraemon “Huy hiệu thành viên Câu lạc bộ dị thuyết”. Một ngày nọ, cậu bé bí ẩn Luka đã chuyển đến và cùng Nobita đến vương quốc thỏ…', 110, 'https://cdn3.yeuphimmoi.com/wp-content/uploads/2019/06/poster.medium-24.jpg', 'l1cttTpwpWw', 2019, 'Doraemon, Nobita , ', '8', 3, 1, 1, 10),
(60, 'Nobita Và Nước Nhật Thời Nguyên', '18-11-2017', 'Shibayama Tsutomu', 'Câu chuyện bắt đầu khi nhóm bạn Doraemon giận dỗi cha me và bỏ nhà ra đi, trở về thế giới 70 vạn năm trước tại Nhật Bản. Tại đó, họ đã tạo ra một thế giới thật thoải mái cho riêng mình. Cơn giận dỗi kết thúc, họ trở về và phát hiện ra cậu bé Kukuru - người dân của bộ lạc Hikari (Trung Quốc)[4] - bị lỗ hổng thời gian hút lạc vào thế giới Nhật Bản hiện tại. Nhóm bạn Doraemon biết được bộ lạc của Kukuru đang bị bộ tộc Kuracha truy bắt mà dẫn đầu là tên quỷ Gigazombie - lãnh đạo bộ tộc Kuracha. Nobita và các bạn cùng cưỡi những con vật lai giống kì lạ (do chính cậu tạo ra) đi tìm đoàn người bộ lạc Hikari đang bị tên quỷ Gigazombie bắt đi. Sau nhiều ngày họ đã đối mặt với đoàn nô lệ, một trận chiến đã diễn ra và dĩ nhiên phần thắng thuộc về nhóm bạn Doraemon. Họ đưa đoàn người đến Nhật Bản sinh sống và an tâm rằng bộ lạc Hikari có một cuộc sống an toàn. Thế nhưng khi quay về thế giới hiện tại, Doraemon đã nghiên cứu và biết rằng tên quỷ Gigazombie không phải là người bình thường, hắn có một phép thuật siêu nhiên của thế kỉ 23. Nobita và các bạn quay về thời tiền sử ngay nhưng đã quá muộn, đoàn người Hikari an cư chưa được bao lâu thì đã bị bắt đi một lần nữa. Nhóm bạn quyết định đến tận sào huyệt của Gigazombie để giải cứu bộ lạc.  Họ đi đến một vùng lạnh giá đầy băng tuyết ở phía Bắc theo hướng dẫn của gậy thần dẫn đường. Không may Nobita đã bị rơi lại giữa đường. Những người còn lại tìm ra một hang động và sử dụng \'\'bình cứu nạn\'\' để giải cứu Nobita nhưng lại bị tên linh thần đất sét - tay sai của Gigazombie phá huỷ. Trong khi chờ đợi, nhóm bạn phát hiện ra cái hang mà mình đang trú ẩn chính là căn cứ của bọn Gigazombie, họ xông thẳng vào nhưng lại bị Gigazombie bắt sống.  Trong khi đó Nobita được một con voi Mamút cứu sống và cưỡi các loài vật lai giống của mình tìm Doraemon và các bạn. Cậu đến vừa kịp lúc khi Doraemon, Jaian, Suneo, Shizuka sắp bị ăn thịt bởi loài báo nanh dài hung dữ. Nhóm bạn chạy trốn nhưng bị tên Gigazombie làm bít cửa hang đá, chặn mọi ngã đường. Đang lúc nguy cấp thì Nobita bỗng nhớ ra chiếc hộp con voi Mamút đưa cho cậu, cậu mở hộp ra và ấn nút. Tín hiệu nhanh chóng phát ra cho đội tuần tra thời gian (cải trang trong lốt voi Mamút), ho nhanh chóng đến giải cứu cho nhóm bạn Doraemon và bộ lạc Hikari. Căn cứ của Gigazombie bị phá huỷ.', 120, '//upload.wikimedia.org/wikipedia/vi/thumb/a/a4/Chi%E1%BA%BFn_th%E1%BA%AFng_qu%E1%BB%B7_Kamat.jpg/220px-Chi%E1%BA%BFn_th%E1%BA%AFng_qu%E1%BB%B7_Kamat.jpg', '3Ztdl9QtYEo', 2017, 'Ohara Noriko Nomura Michiko, Kimotsuki ,Kaneta ,Tatekabe Kazuya', '8', 3, 57, 1, 14),
(61, 'Quan Xẩm Lốc Cốc', '10-02-1995', ' Vương Tinh', 'Bộ phim Quan Xẩm Lốc Cốc – Hail The Judge Full HD thuyết minh nói về một vị quan huyện tham lam xấu xa và nhận hối lộ. Nhưng một ngày nọ, ông ta gặp một vị trạng sư tài ba tên Phương Đường Kính hiện là đệ nhất trạng sư Quãng Đông, Phương Đường Kính làm cho vị quan huyện này thân bại danh liệt.Sau này vị quan huyện nhận ra sai lầm và quyết tâm trở thành một vị quan liêm khiết, đánh bại trang sư xấu xa Phương Đường Kính.Một trong những câu chuyện về thám tử Trung Quốc Pao Kong thời xưa, Châu Tinh Trì vào vai một tri huyện xấu tính và không được ai yêu mến. Phải làm như thế nào khi bị thị trấn bị điểu khiển bởi một tên quan xấu xa như thế?', 110, 'https://data.phimvn2.net/temp/thumb/360_480_438417_33.jpg', 'CEnSkAjY5cE', 1994, 'Châu Tinh Trì, Trương Mẫn, Chung Lệ Đề', '7', 11, 58, 1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quocgia`
--

CREATE TABLE `quocgia` (
  `IDQuocGia` int(11) NOT NULL,
  `TenQuocGia` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `quocgia`
--

INSERT INTO `quocgia` (`IDQuocGia`, `TenQuocGia`) VALUES
(1, 'mỹ'),
(2, 'hàn quốc'),
(3, 'nhật'),
(4, 'pháp'),
(5, 'canada'),
(6, 'úc'),
(7, 'ấn độ'),
(8, 'thái lan'),
(9, 'anh'),
(10, 'Nga'),
(11, 'hồng kông'),
(12, 'đài loan');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thanhvien`
--

CREATE TABLE `thanhvien` (
  `IDThanhVien` int(11) NOT NULL,
  `HoTen` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `GioiTinh` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `SDT` int(15) NOT NULL,
  `DiaChi` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MK` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `NgaySinh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `thanhvien`
--

INSERT INTO `thanhvien` (`IDThanhVien`, `HoTen`, `GioiTinh`, `SDT`, `DiaChi`, `MK`, `NgaySinh`, `Email`) VALUES
(1, 'Nguyễn văn a', 'nam', 258840403, 'hậu giang', 'nguyenvana', '1999-12-22', 'nguyenvana@gmail.com'),
(2, 'nguyễn thị hoa', 'nữ', 224749299, 'sóc trăng', '123456', '1998-04-12', 'nguyenthihoa@gmail.com'),
(3, 'trần hữu phước', 'nam', 977269202, 'cần thơ', '123456', '1999-11-11', 'huuphuoc@gmail.com'),
(4, 'nguyễn thành nam', 'Nữ', 123123, 'hậu gian', '123456', '2019-11-15', 'nguyenthanhnam@gmail.com'),
(11, 'trần hoàng na', 'Nam', 123123, 'ct', '123456', '2019-11-15', 'hoangna@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `theloai`
--

CREATE TABLE `theloai` (
  `IDTheLoai` int(11) NOT NULL,
  `TenTheLoai` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `theloai`
--

INSERT INTO `theloai` (`IDTheLoai`, `TenTheLoai`) VALUES
(1, 'Hành Động'),
(2, 'Hài hước'),
(3, 'viễn tưởng'),
(4, 'hài kịch'),
(5, 'kinh dị'),
(6, 'võ thuật'),
(7, 'thần thoại'),
(8, 'tâm lý'),
(9, 'gia đình'),
(10, 'hoạt hình'),
(11, 'tài liệu'),
(12, 'hành sự'),
(13, 'cổ trang'),
(14, 'phiêu lưu');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`IDAdmin`);

--
-- Chỉ mục cho bảng `advertisement`
--
ALTER TABLE `advertisement`
  ADD PRIMARY KEY (`IDadvertisement`),
  ADD KEY `ThanhVien` (`IDThanhVien`),
  ADD KEY `Phim` (`IDPhim`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`IDcomment`),
  ADD KEY `IDThanhVien` (`IDThanhVien`),
  ADD KEY `IDPhim` (`IDPhim`);

--
-- Chỉ mục cho bảng `linkphim`
--
ALTER TABLE `linkphim`
  ADD PRIMARY KEY (`IDLinkPhim`);

--
-- Chỉ mục cho bảng `ngonngu`
--
ALTER TABLE `ngonngu`
  ADD PRIMARY KEY (`IDNgonNgu`);

--
-- Chỉ mục cho bảng `phim`
--
ALTER TABLE `phim`
  ADD PRIMARY KEY (`IDPhim`),
  ADD KEY `IDQuocGia` (`IDQuocGia`),
  ADD KEY `IDLinkPhim` (`IDLinkPhim`),
  ADD KEY `IDNgonNgu` (`IDNgonNgu`),
  ADD KEY `IDTheLoai` (`IDTheLoai`);

--
-- Chỉ mục cho bảng `quocgia`
--
ALTER TABLE `quocgia`
  ADD PRIMARY KEY (`IDQuocGia`);

--
-- Chỉ mục cho bảng `thanhvien`
--
ALTER TABLE `thanhvien`
  ADD PRIMARY KEY (`IDThanhVien`);

--
-- Chỉ mục cho bảng `theloai`
--
ALTER TABLE `theloai`
  ADD PRIMARY KEY (`IDTheLoai`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `IDAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `advertisement`
--
ALTER TABLE `advertisement`
  MODIFY `IDadvertisement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `IDcomment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT cho bảng `linkphim`
--
ALTER TABLE `linkphim`
  MODIFY `IDLinkPhim` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT cho bảng `ngonngu`
--
ALTER TABLE `ngonngu`
  MODIFY `IDNgonNgu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `phim`
--
ALTER TABLE `phim`
  MODIFY `IDPhim` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT cho bảng `quocgia`
--
ALTER TABLE `quocgia`
  MODIFY `IDQuocGia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `thanhvien`
--
ALTER TABLE `thanhvien`
  MODIFY `IDThanhVien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `theloai`
--
ALTER TABLE `theloai`
  MODIFY `IDTheLoai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `advertisement`
--
ALTER TABLE `advertisement`
  ADD CONSTRAINT `Phim` FOREIGN KEY (`IDPhim`) REFERENCES `phim` (`IDPhim`),
  ADD CONSTRAINT `ThanhVien` FOREIGN KEY (`IDThanhVien`) REFERENCES `thanhvien` (`IDThanhVien`);

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `IDPhim` FOREIGN KEY (`IDPhim`) REFERENCES `phim` (`IDPhim`),
  ADD CONSTRAINT `IDThanhVien` FOREIGN KEY (`IDThanhVien`) REFERENCES `thanhvien` (`IDThanhVien`);

--
-- Các ràng buộc cho bảng `phim`
--
ALTER TABLE `phim`
  ADD CONSTRAINT `IDLinkPhim` FOREIGN KEY (`IDLinkPhim`) REFERENCES `linkphim` (`IDLinkPhim`),
  ADD CONSTRAINT `IDNgonNgu` FOREIGN KEY (`IDNgonNgu`) REFERENCES `ngonngu` (`IDNgonNgu`),
  ADD CONSTRAINT `IDQuocGia` FOREIGN KEY (`IDQuocGia`) REFERENCES `quocgia` (`IDQuocGia`),
  ADD CONSTRAINT `IDTheLoai` FOREIGN KEY (`IDTheLoai`) REFERENCES `theloai` (`IDTheLoai`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
