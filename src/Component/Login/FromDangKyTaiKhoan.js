import React, { Component } from "react";
import ServerURL from '../../ServerURL';
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
const TokenUser = localStorage.getItem("TokenUser");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success"
  },
  buttonsStyling: false
});

const TokenAdmin = localStorage.getItem("TokenAdmin");
const initialState = {
  HoTenError: "",
  GioiTinhError: "",
  SDTError: "",
  DiaChiError: "",
  MKError: "",
  NgaySinhError: "",
  EmailError: ""
};
export default class FromDangKyTaiKhoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HoTen: "",
      GioiTinh: "",
      SDT: "",
      DiaChi: "",
      MK: "",
      NgaySinh: "",
      Email: "",
      GetEmail: "",
      NoiDung: ""
    };
  }
  validate = () => {
    let HoTenError = "";
    let GioiTinhError = "";
    let SDTError = "";
    let DiaChiError = "";
    let MKError = "";
    let NgaySinhError = "";
    let EmailError = "";
    if (!this.state.HoTen) {
      HoTenError = "vui lòng nhập đầy đủ họ tên";
    }
    if (!this.state.GioiTinh) {
      GioiTinhError = "chọn giới tính của bạn";
    }
    if (!this.state.SDT) {
      SDTError = "vui lòng nhập số điện thoại";
    }
    if (!this.state.DiaChi) {
      DiaChiError = "vui lòng nhập địa chỉ";
    }
    if (!this.state.NgaySinh) {
      NgaySinhError = "vui lòng nhập ngày sinh";
    }
    if (!this.state.Email) {
      EmailError = "Vui Lòng Nhập Email Của Bạn";
    }
    if (!this.state.MK) {
      MKError = "Vui Lòng Nhập Mật Khẩu Của Bạn";
    }
    if (
      HoTenError ||
      GioiTinhError ||
      SDTError ||
      DiaChiError ||
      MKError ||
      NgaySinhError ||
      EmailError
    ) {
      this.setState({
        HoTenError,
        GioiTinhError,
        SDTError,
        DiaChiError,
        MKError,
        NgaySinhError,
        EmailError
      });
      return false;
    }
    return true;
  };
  componentDidMount() {
    ServerURL('user','get').then(res=>{
      this.setState({
        GetEmail: res.data
      });
    })
  }
  onhaipChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  OnSubmit = event => {
    event.preventDefault();

    const hashcoutries = {};
    var email = this.state.Email;
    const cout = this.state.GetEmail;
    cout.forEach(c => {
      hashcoutries[c.Email] = c.Email;
    });
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
      if (hashcoutries[email]) {
        swalWithBootstrapButtons.fire({
          title: "Tài Khoản Tồn Tại",
          icon: "error",
          confirmButtonText: "Close",
          reverseButtons: true
        });
      } else {

        ServerURL('registration-user','post',{
          HoTen: this.state.HoTen,
          GioiTinh: this.state.GioiTinh,
          SDT: this.state.SDT,
          DiaChi: this.state.DiaChi,
          MK: this.state.MK,
          NgaySinh: this.state.NgaySinh,
          Email: this.state.Email
        }).then(res => {
          swalWithBootstrapButtons
            .fire({
              title: "Đăng Ký Tài Khoản Thành Công",
              icon: "success",
              confirmButtonText: "OK",
              reverseButtons: true
            })
            .then(result => {
              if (result.value) {
                setTimeout("location.reload(true)", 1);
              }
            });
        });
      }
    }
  };

  close_dang_ky = () => {
    this.props.history.push("/");
    setTimeout("location.reload(true)", 5);
  };
  onpenLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    if (TokenUser) {
      return <Redirect to={"/"} />;
    }
    if (TokenAdmin) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="FromDangKyTaiKhoan">
        <div className="DangKyTaiKhoan">
          <form name="FromDangKy" id="HienDangKy" onSubmit={this.OnSubmit}>
            <label htmlFor="HoTenDangKy">Họ Và Tên</label>
            <br />
            <input
              type="text"
              id="HoTenDangKy"
              name="HoTen"
              placeholder=" Full Username"
              onChange={this.onhaipChange}
            />
            <p
              style={{
                fontSize: 12,
                color: "rgb(252, 244, 0)",
                textAlign: "center"
              }}
            >
              {this.state.HoTenError}
            </p>
            <label htmlFor="EmailDangKy">Email</label>
            <br />
            <input
              type="text"
              id="EmailDangKy"
              name="Email"
              placeholder="Email"
              onChange={this.onhaipChange}
            />
            <p
              style={{
                fontSize: 12,
                color: "rgb(252, 244, 0)",
                textAlign: "center"
              }}
            >
              {this.state.EmailError}
            </p>
            <label htmlFor="mk_dang_ky">Mật Khẩu</label>
            <br />
            <input
              type="password"
              id="mk_dang_ky"
              name="MK"
              placeholder="Password"
              onChange={this.onhaipChange}
            />
            <p
              style={{
                fontSize: 12,
                color: "rgb(252, 244, 0)",
                textAlign: "center"
              }}
            >
              {this.state.MKError}
            </p>
            {/* <label htmlFor="xn_dang_ky">Nhập Lại Mật Khẩu</label>
            <br />{" "}
            <input
              type="password"
              id="xn_dang_ky"
              placeholder="Password"
              onChange={this.onhaipChange}
            />
            <br /> */}
            <label>Ngày Sinh</label>
            <br />
            <input
              type="Date"
              id="xn_dang_ky"
              name="NgaySinh"
              onChange={this.onhaipChange}
            />
            <p
              style={{
                fontSize: 12,
                color: "rgb(252, 244, 0)",
                textAlign: "center"
              }}
            >
              {this.state.NgaySinhError}
            </p>
            <label htmlFor="DiaChiDangKy">Địa Chỉ</label>
            <br />
            <input
              type="text"
              id="DiaChiDangKy"
              name="DiaChi"
              placeholder="Address"
              onChange={this.onhaipChange}
            />
            <p
              style={{
                fontSize: 12,
                color: "rgb(252, 244, 0)",
                textAlign: "center"
              }}
            >
              {this.state.DiaChiError}
            </p>
            <label htmlFor="SoDienThoaiDangKy">Số Điện Thoại</label>
            <br />
            <input
              type="text"
              placeholder="Phone Number"
              id="SoDienThoaiDangKy"
              name="SDT"
              onChange={this.onhaipChange}
            />
            <p
              style={{
                fontSize: 12,
                color: "rgb(252, 244, 0)",
                textAlign: "center"
              }}
            >
              {this.state.SDTError}
            </p>
            <div className="GioiTinh">
              <label htmlFor="Nam" className="gioitinh">
                Nam
              </label>{" "}
              <input
                type="radio"
                name="GioiTinh"
                defaultValue="Nam"
                id="Nam"
                onChange={this.onhaipChange}
              />
              <label htmlFor="Nu" className="gioitinh">
                Nữ
              </label>
              <input
                type="radio"
                name="GioiTinh"
                defaultValue="Nữ"
                id="Nu"
                onChange={this.onhaipChange}
              />
              <p
                style={{
                  fontSize: 12,
                  color: "rgb(252, 244, 0)",
                  textAlign: "center"
                }}
              >
                {this.state.GioiTinhError}
              </p>
            </div>
            <input
              type="submit"
              name="submit_dang_ky"
              defaultValue="Đăng Ký"
              className="dang_nhap_from"
              id="submit_dang_ky"
            />{" "}
            <span className="close_dang_ky" onClick={this.close_dang_ky}>
              Đóng
            </span>
            <span className="close_dang_ky dangky" onClick={this.onpenLogin}>
              Đăng Nhập
            </span>
          </form>
        </div>
      </div>
    );
  }
}
