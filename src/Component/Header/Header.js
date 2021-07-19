import React, { Component } from "react";
import Login from "../Login/Login";
import logoanh from '../Anh/logo.png';
import { Link } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <div className="Khung">
                <div className="icon">
                    <Link to="/"> <img src={logoanh} alt="" /></Link>
                    </div>
                <div className="timkiem">
                    <input type="text" placeholder="Tìm: tên phim, đạo diễn, diễn viên" />
                    <i className="fas fa-search"></i>
                </div>
                <div className="login">
                    <Login></Login>
                </div>
            </div>
        );
    }
}
