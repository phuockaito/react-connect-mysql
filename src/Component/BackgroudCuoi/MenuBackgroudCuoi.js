import React, { Component } from 'react'

export default class MenuBackgroudCuoi extends Component {
    render() {
        return (
           <div className="MenuBackgroudCuoi">
        <a href="!#"> <img src="Icon/logo.png" alt="" /></a>
        <div className="ThongTinCuoi">
          <div className="MenuCuoi">
            <h2>phim mới</h2>
            <div className="TheMenu">
              <a href="!#">Phim lẻ mới</a>
              <a href="!#">Phim bộ mới</a>
              <a href="!#">Phim chiếu rạp</a>
              <a href="!#">Phim kinh điển</a>
              <a href="!#">Phim sắp chiếu</a>
            </div>
          </div>
          <div className="MenuCuoi">
            <h2>phim lẻ</h2>
            <div className="TheMenu">
              <a href="!#">Phim hành động</a>
              <a href="!#">Phim kiếm hiệp</a>
              <a href="!#">Phim kinh dị</a>
              <a href="!#">Phim viễn tưởng</a>
              <a href="!#">Phim hoạt hình</a>
            </div>
          </div>
          <div className="MenuCuoi">
            <h2>phim mới</h2>
            <div className="TheMenu">
              <a href="!#">Phim lẻ mới</a>
              <a href="!#">Phim hành động</a>
              <a href="!#">Phim kiếm hiệp</a>
              <a href="!#">Phim kinh dị</a>
              <a href="!#">Phim viễn tưởng</a>
              <a href="!#">Phim hoạt hình</a>
            </div>
          </div>
          <div className="MenuCuoi">
            <h2>Liên hệ quảng cáo:</h2>
            <div className="TheMenu ThoiThieu">
              <a href="https://mail.google.com/mail/"><i className="fas fa-envelope" />Email: huuphuocit1999@gmail.com</a>
              <a href="https://www.facebook.com/Phuockaito1410"><i className="fab fa-facebook-square" />Facebook https://www.facebook.com/Phuockaito1410</a>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
