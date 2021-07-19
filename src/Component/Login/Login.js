import React, { Component } from "react";
import { Link } from "react-router-dom";
import ServerURL from '../../ServerURL';
import Swal from 'sweetalert2';
const TokenAdmin = localStorage.getItem('TokenAdmin');
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
  },
  buttonsStyling: false
})

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      MangUser: [],
      MangAdmin: []
    };
  }
  ThongTinUser = () => {
    swalWithBootstrapButtons.fire({
      title: 'Thông Tin',
      confirmButtonText: 'Close',
      html: '<div class="showthongtin">' +
        '<span class="thongtinout">Họ Tên:</span>' + '<span class="outthong">' + this.state.MangUser.HoTen + '</span>' + '</br>' +
        '<span class="thongtinout">Giới Tính:</span>' + '<span class="outthong">' + this.state.MangUser.GioiTinh + '</span>' + '</br>' +
        '<span class="thongtinout">SĐT:</span>' + '<span class="outthong">' + this.state.MangUser.SDT + '</span>' + '</br>' +
        '<span class="thongtinout">Địa Chi:</span>' + '<span class="outthong">' + this.state.MangUser.DiaChi + '</span>' + '</br>' +
        '<span class="thongtinout">Ngày Sinh:</span>' + '<span class="outthong">' + this.state.MangUser.NgaySinh + '</span>' + '</br>' +
        '<span class="thongtinout">Email:</span>' + '<span class="outthong">' + this.state.MangUser.Email + '</span>' + '</br>'
        + '</div>',
      reverseButtons: true
    })
  }
  componentDidMount() {
    let TokenUser = localStorage.getItem('TokenUser');
    if (TokenUser) {
      ServerURL('informations-user','get',null,TokenUser).then(res => {
        this.setState({
          MangUser: res.data[0]
        })
      })
    }
    else if (TokenAdmin) {
      ServerURL('admin', 'get',null,TokenAdmin).then(res => {
        this.setState({
          MangUser: res.data[0]
        })
      })
    }
  }
  logout() {
    localStorage.setItem("TokenUser", "");
    localStorage.removeItem("TokenUser");

    localStorage.setItem("TokenAdmin", "");
    localStorage.removeItem("TokenAdmin");
    window.location.reload();
  }
  render() {
    if (TokenAdmin) {
      return (
        <>
          <div className="KhungUserName">
            <div className="Username">
              <p className="userlogin">
                xin chào:<span>{this.state.MangUser.HoTen}</span>
              </p>
            </div>
            <div className="logout">
              <p onClick={this.logout} className="logoutuser">
                đăng xuất
              </p>
            </div>
            <div className="Khungthongtin">
              <p className="thongtin">Thông Tin</p>
            </div>
          </div>
        </>
      );
    }
    else if (localStorage.getItem("TokenUser")) {
      return (
        <>
          <div className="KhungUserName">
            <div className="Username">
              <p className="userlogin">
                <i class="fas fa-user"></i><span>{this.state.MangUser.HoTen}</span>
              </p>
            </div>
            <div className="logout">
              <p onClick={this.logout} className="logoutuser">
                <i class="fas fa-sign-in-alt" title="Đăng Xuất"></i>
              </p>
            </div>
            <div className="Khungthongtin">
              <p className="thongtin" title="Thông Tin" onClick={this.ThongTinUser}><i class="far fa-address-card"></i></p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link to="/registration">
            <button className="DangKy">đăng ký</button>
          </Link>
          <Link to="/login">
            {" "}
            <button className="DangNhap">đăng nhập</button>
          </Link>
        </>
      );
    }
  }
}
