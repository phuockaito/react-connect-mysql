import React, { Component } from "react";
import { Link } from "react-router-dom";
import ServerURL from '../../ServerURL';
import LinkQC from '../../ComponentChiTiet/QuangCao/LinkQC';
export default class Menu extends Component {
    constructor(posrt) {
        super(posrt);
        this.state = {
            TheLoai: [],
            QuocGia: []
        };
    }
    componentDidMount() {

        ServerURL("quocgia","get").then(res => {
            this.setState({
                QuocGia: res.data
            });
        });
        ServerURL("theloai", "get",).then(res => {
            this.setState({
                TheLoai: res.data
            });
        });
    }
    playMenu = () => {
        setTimeout("location.reload(true)", 1);
    };
    render() {
        return (
            <>
            <LinkQC></LinkQC>
                <ul className="MenuCha">
                    <li className="ChinhMau hoverChuot">
                        <a href="">phim mới</a>
                    </li>
                    <li className="ChinhMau hoverChuot">
                        <a href="">thể loại</a>
                        <ul className="MenuCon">
                            {this.state.TheLoai.map((theloai, index) => {
                                return (
                                    <>
                                        <li key={index}>
                                            <Link
                                                to={`/AllMovies/${theloai.TenTheLoai}`}
                                                onClick={this.playMenu}
                                            >
                                                {" "}
                                                {theloai.TenTheLoai}
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
                    </li>
                    <li className="ChinhMau hoverChuot">
                        <a href="">quốc gia</a>
                        <ul className="MenuCon" id="quocgia">
                            {this.state.QuocGia.map((quocgia, index) => {
                                return (
                                    <>
                                        <li key={index}>
                                            <Link
                                                to={`/AllMovies/${quocgia.TenQuocGia}`}
                                                onClick={this.playMenu}
                                            >
                                                {" "}
                                                {quocgia.TenQuocGia}
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
                    </li>
                    <li className="ChinhMau hoverChuot">
                        <a href="">phim lẻ</a>
                        <ul className="MenuCon" id="phimle">
                            <li>
                                <a href="">Phim lẻ 2019</a>
                            </li>
                            <li>
                                <a href="">Phim lẻ 2018</a>
                            </li>
                            <li>
                                <a href="">Phim lẻ 2017</a>
                            </li>
                            <li>
                                <a href="">Phim lẻ 2016</a>
                            </li>
                            <li>
                                <a href="">Phim lẻ 2015</a>
                            </li>
                            <li>
                                <a href="">Phim lẻ 2014</a>
                            </li>
                            <li>
                                <a href="">Phim lẻ 2013</a>
                            </li>
                            <li>
                                <a href="">Phim lẻ trước 2013</a>
                            </li>
                        </ul>
                    </li>
                    <li className="ChinhMau hoverChuot">
                        <a href="">phim bộ</a>
                        <ul className="MenuCon" id="phimbo">
                        {this.state.QuocGia.map((quocgia, index) => {
                                return (
                                    <>
                                        <li key={index}>
                                            <Link
                                                to={`/AllMovies/${quocgia.TenQuocGia}`}
                                                onClick={this.playMenu}
                                            >
                                                {" "}
                                               Phim {quocgia.TenQuocGia}
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
                    </li>
                    <li className="ChinhMau hoverChuot">
                        <a href="">phim chiếu rạp</a>
                    </li>
                    <li className="ChinhMau hoverChuot">
                        <a href="">phim thuyết minh</a>
                    </li>
                    <li id="loaddingtrang" className="ChinhMau hoverChuot">
                        <a href="">trailer</a>
                    </li>
                </ul>
            </>
        );
    }
}
