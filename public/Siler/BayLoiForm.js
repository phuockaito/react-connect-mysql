/* ----------bảy lỗi đăng nhập------------ */
function click_from_dang_nhap() {
	var kiem_tra = true, msg = "Bạn chưa nhập", luu = "";
	if (document.getElementById("tk_dang_nhap").value.length == 0) {
		luu = " tài khoản";
		kiem_tra = false;
		document.getElementById("tk_dang_nhap").focus();
	}
	if (document.getElementById("mk_dang_nhap").value.length == 0) {
		luu += " Mật khẩu";
		kiem_tra = false;
		document.getElementById("mk_dang_nhap").focus();
	}
	if (kiem_tra == false) {
		alert(msg + luu);
		return false;
	}
	return true;
}
/* ----------bẩy lỗi đăng ky------------ */
function click_from_dang_ky() {
	var kiem_tra = true, msg = " Bạn nhập", luu = "";
	var HoTen = document.getElementById("HoTenDangKy").value;
	var KiemTraHoTen = isNaN(HoTen);
	if (KiemTraHoTen == false) {
		luu += " Họ Và Tên" + "\n";
		kiem_tra = false;
		document.getElementById("HoTenDangKy").focus();
	}
	if (document.getElementById("tk_dang_ky").value.length == 0) {
		luu += " tài khoản" + "\n";
		kiem_tra = false;
		document.getElementById("tk_dang_ky").focus();
	}
	if (document.getElementById("mk_dang_ky").value.length < 6) {
		luu += " Mật khẩu ít nhất 6 ký tự" + "\n";
		kiem_tra = false;
		document.getElementById("mk_dang_ky").focus();
	}
	if (document.getElementById("mk_dang_ky").value != document.getElementById("xn_dang_ky").value) {
		luu += " mật khẩu xác nhận chưa đúng" + "\n";
		kiem_tra = false;
		document.getElementById("xn_dang_ky").focus();
	}
	var SoDienThoai = document.forms["FromDangKy"]["SoDienThoaiDangKy"].value;
	var KiemTraSDT = isNaN(SoDienThoai);
	if (KiemTraSDT == true) {
		luu += " Số Điện Thoại phải la` số và không có chữ số" + "\n";
		kiem_tra = false;
		document.getElementById("SoDienThoaiDangKy").focus();
	}
	var frm = document.forms["FromDangKy"];
	var gioi_tinh = frm.elements["GioiTinh"];
	var i;
	for (i = 0; i < gioi_tinh.length; i++) {
		if (gioi_tinh[i].checked) {
			break;
		}
	}
	var ngaysinh = frm.elements["ngay_sinh"];
	var index = ngaysinh.selectedIndex;
	if (index == 0) {
		luu += " Ngày sinh" + "\n";
		kiem_tra = false;
	}
	var thangsinh = frm.elements["thang_sinh"];
	var index = thangsinh.selectedIndex;
	if (index == 0) {
		luu += " Tháng sinh" + "\n";
		kiem_tra = false;
	}
	var namsinh = frm.elements["nam_sinh"];
	var index = namsinh.selectedIndex;
	if (index == 0) {
		luu += " Năm sinh" + "\n";
		kiem_tra = false;
	}
	if (i == gioi_tinh.length) {
		luu += " Giới tính" + "\n";
		kiem_tra = false;
	}
	if (document.getElementById("DiaChiDangKy").value.length == 0) {
		luu += " Địa Chỉ" + "\n";
		kiem_tra = false;
		document.getElementById("DiaChiDangKy").focus();
	}
	var reg_email = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
	var Email = document.getElementById("EmailDangKy");
	if (Email.value.length == "" || reg_email.test(Email.value) == false) {
		luu += " Email không hợp lệ" + "\n";
		kiem_tra = false;
	}
	if (kiem_tra == false) {
		alert(msg + luu);
		return false;
	}
	return true;
}