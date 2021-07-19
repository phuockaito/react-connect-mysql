import React, { Component } from "react";
import ServerURL from '../../ServerURL';
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
const TokenUser = localStorage.getItem("TokenUser");
const TokenAdmin = localStorage.getItem("TokenAdmin");
const initialState = {
  EmailError: "",
  MKError: "",
};
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
  },
  buttonsStyling: false
})
export default class FromDangNhapTaiKhoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      MK: "",
      redirect: false,
      GetEmailAdmin: ""
    };
  }
  validate = () => {
    let EmailError = "";
    let MKError = "";
    if (!this.state.Email.includes("@")) {
      EmailError = "Vui Lòng Nhập Email Của Bạn";
    }
    if (!this.state.MK) {
      MKError = "Vui Lòng Nhập Mật Khẩu Của Bạn";
    }
    if (EmailError || MKError) {
      this.setState({
        EmailError,
        MKError,
      })
      return false;
    }
    return true;
  }
  componentDidMount() {

    ServerURL('informations-admin','get').then(res=>{
      this.setState({
        GetEmailAdmin: res.data
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
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
    const hashcoutries = {};
    var email = this.state.Email;
    const cout = this.state.GetEmailAdmin;
    cout.forEach(c => {
      hashcoutries[c.Email] = c.Email;
    });
    if (hashcoutries[email]) {
      if (this.state.Email && this.state.MK) {

        ServerURL('login-admin','post',{
          Email: this.state.Email,
          MK: this.state.MK
        }).then(res => {
          console.log("Admin");
          let TokenAdmin = res.data.Token;
          console.log("TokenAdmin", TokenAdmin);
          if (TokenAdmin) {
            localStorage.setItem('TokenAdmin', TokenAdmin);
            this.setState({
              redirect: true
            });
          }
          else {
            swalWithBootstrapButtons.fire({
              title: 'Tài Khoản Hoặc Mật Khẩu Sai',
              icon: 'warning',
              confirmButtonText: 'OK',
              reverseButtons: true
            })
          }
        });
      }
    } else {
      console.log("Thành Viên");
      if (this.state.Email && this.state.MK) {
        ServerURL('login-user','post',{
          Email: this.state.Email,
          MK: this.state.MK
        }).then(res => {
          let TokenUser = res.data.Token;
          console.log("TokenUser", TokenUser);
          if (TokenUser) {
            localStorage.setItem("TokenUser", TokenUser);
            this.setState({
              redirect: true
            });
          } else {
            swalWithBootstrapButtons.fire({
              title: 'Tài Khoản Hoặc Mật Khẩu Sai',
              icon: 'warning',
              confirmButtonText: 'OK',
              reverseButtons: true
            })
          }
        });
      }
    }
  };
  close_dang_nhap = () => {
    this.props.history.push("/");
    setTimeout("location.reload(true)", 1);
  };
  onpenRegistration = () => {
    this.props.history.push("/registration");
  };
  render() {
    // admin 
    if (this.state.redirect) {
      window.location.reload();
      return <Redirect to={"/"} />;
    }
    if (TokenAdmin) {
      return <Redirect to={"/"} />;
    }
    // user
    if (this.state.redirect) {
      window.location.reload();
      return <Redirect to={"/"} />;
    }
    if (TokenUser) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="FromDangNhapTaiKhoan">
        <div className="DangNhapMatKhau">
          <form id="HienDangNhap" onSubmit={this.OnSubmit}>
            <label htmlFor="tk_dang_nhap">Tài Khoản</label>
            <br />{" "}
            <input
              type="Email"
              placeholder="Email"
              id="tk_dang_nhap"
              name="Email"
              onChange={this.onhaipChange}
            />
            <p style={{ fontSize: 12, color: "rgb(252, 244, 0)", textAlign: "center" }}>
              {this.state.EmailError}
            </p>
            <label htmlFor="mk_dang_nhap">Mật Khẩu</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              id="mk_dang_nhap"
              name="MK"
              onChange={this.onhaipChange}
            />
            <p style={{ fontSize: 12, color: "rgb(252, 244, 0)", textAlign: "center" }}>
              {this.state.MKError}
            </p>
            <input
              type="submit"
              name="submit_dang_nhap"
              defaultValue="Đăng Nhập"
              className="dang_nhap_from"
            />{" "}
            <br />
            <a href="!#" className="forget">
              Quên Mật Khẩu
            </a>{" "}
            <br />
            <span className="close_dang_nhap" onClick={this.close_dang_nhap}>
              Đóng
            </span>
            <span className="close_dang_nhap" onClick={this.onpenRegistration}>
              Đăng Ký
            </span>
          </form>
        </div>
      </div>
    );
  }
}
