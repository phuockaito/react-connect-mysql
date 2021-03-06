import React, { Component } from "react";
import Header from "./Component/Header/Header";
import axios from "axios";
import Swal from "sweetalert2";
const TokenAdmin = localStorage.getItem("TokenAdmin");
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success"
    },
    buttonsStyling: false
});
export default class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TenPhim: "",
            NgayRaRap: "",
            TenDaoDien: "",
            NoiDungPhim: "",
            ThoiGian: "",
            poster: "",
            TraiLer: "",
            NamSX: "",
            DienVien: "",
            DiemMDB: "",
            IDQuocGia: "",
            IDLinkPhim: "",
            IDNgonNgu: "",
            IDTheLoai: "",
            NgonNgu: [],
            TheLoai: [],
            QuocGia: [],
            IDPhim: "",
            Movies: [],
            LinkMoveis: [],
            Editphim: false
        };
    }
    onhaipChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    OnSubmit = event => {
        event.preventDefault();
        axios({
            method: "put",
            url: `/phim/${this.state.IDPhim}`,
            data: {
                TenPhim: this.state.TenPhim,
                NgayRaRap: this.state.NgayRaRap,
                TenDaoDien: this.state.TenDaoDien,
                NoiDungPhim: this.state.NoiDungPhim,
                ThoiGian: this.state.ThoiGian,
                poster: this.state.poster,
                TraiLer: this.state.TraiLer,
                NamSX: this.state.NamSX,
                DienVien: this.state.DienVien,
                DiemMDB: this.state.DiemMDB,
                IDQuocGia: Number(this.state.IDQuocGia),
                IDLinkPhim: Number(this.state.IDLinkPhim),
                IDNgonNgu: Number(this.state.IDNgonNgu),
                IDTheLoai: Number(this.state.IDTheLoai),
                IDPhim: Number(this.state.IDPhim)
            }
        }).then(res => {
            swalWithBootstrapButtons
                .fire({
                    title: "Update Success",
                    icon: "warning",
                    confirmButtonText: "OK",
                    reverseButtons: true
                })
                .then(result => {
                    if (result.value) {
                        setTimeout("location.reload(true)", 1);
                    }
                });
        });
    };
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var IDPhim = match.params.IDPhim;
            this.state.IDPhim = IDPhim;
            axios({
                method: "get",
                url: `/movies/${IDPhim}`
            }).then(res => {
                this.setState({
                    TenPhim: res.data[0].TenPhim,
                    NgayRaRap: res.data[0].NgayRaRap,
                    TenDaoDien: res.data[0].TenDaoDien,
                    NoiDungPhim: res.data[0].NoiDungPhim,
                    ThoiGian: res.data[0].ThoiGian,
                    poster: res.data[0].poster,
                    TraiLer: res.data[0].TraiLer,
                    NamSX: res.data[0].NamSX,
                    DienVien: res.data[0].DienVien,
                    DiemMDB: res.data[0].DiemMDB,
                    IDQuocGia: res.data[0].IDQuocGia,
                    IDLinkPhim: res.data[0].IDLinkPhim,
                    IDNgonNgu: res.data[0].IDNgonNgu,
                    IDTheLoai: res.data[0].IDTheLoai
                });
            });
        }
        axios({
            method: "get",
            url: "/ngonngu"
        }).then(res => {
            this.setState({
                NgonNgu: res.data
            });
        });
        // the loai
        axios({
            method: "get",
            url: "/theloai"
        }).then(res => {
            this.setState({
                TheLoai: res.data
            });
        });
        // Link Phim
        axios({
            method: "get",
            url: "/linkphim"
        }).then(res => {
            this.setState({
                LinkMoveis: res.data
            });
        });
        // quoc gia
        axios({
            method: "get",
            url: "/quocgia"
        }).then(res => {
            this.setState({
                QuocGia: res.data
            });
        });
        // moveis

        axios({
            method: "get",
            url: "/movies"
        }).then(res => {
            this.setState({
                Movies: res.data
            });
        });
    }
    render() {
        if (TokenAdmin) {
            return (
                <div className="main">
                    <div className="KhungWebSite">
                        <Header></Header>
                    </div>
                    <div className="container">
                        <div className="container">
                            <form onSubmit={this.OnSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">T??n Phim</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="T??n Phim"
                                            name="TenPhim"
                                            value={this.state.TenPhim}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Ng??y Ra R???p</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Ng??y Ra R???p"
                                            name="NgayRaRap"
                                            value={this.state.NgayRaRap}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword5">T??n ?????o Di???n</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword5"
                                            placeholder="Ng??y Ra R???p"
                                            name="TenDaoDien"
                                            value={this.state.TenDaoDien}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword6">N???i Dung Phim</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword6"
                                            placeholder="N???i Dung Phim"
                                            name="NoiDungPhim"
                                            value={this.state.NoiDungPhim}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword7">Th???i Gian Phim</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="inputPassword7"
                                            placeholder="Th???i Gian Phim"
                                            name="ThoiGian"
                                            value={this.state.ThoiGian}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword8">Poster</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword8"
                                            placeholder="Poster Phim"
                                            name="poster"
                                            value={this.state.poster}
                                            onChange={this.onhaipChange}
                                        />
                                        <div className="AnhAdmin">
                                            <img src={this.state.poster} alt="" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword9">Trailer</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword9"
                                            placeholder="Trailer"
                                            name="TraiLer"
                                            value={this.state.TraiLer}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword9">N??m S???n Xu???t</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="inputPassword9"
                                            placeholder=" N??m S???n Xu???t"
                                            name="NamSX"
                                            value={this.state.NamSX}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Di???n Vi??n</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Di???n Vi??n"
                                            name="DienVien"
                                            value={this.state.DienVien}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>??i???m MDB</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Di???n Vi??n"
                                            name="DiemMDB"
                                            value={this.state.DiemMDB}
                                            onChange={this.onhaipChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Ng??n Ng???</label>
                                        <select
                                            className="form-control"
                                            name="IDNgonNgu"
                                            onChange={this.onhaipChange}
                                        >
                                            {this.state.NgonNgu.map((ngonngu, index) => {
                                                return (
                                                    <>
                                                        <option
                                                            selected={
                                                                this.state.IDNgonNgu === ngonngu.IDNgonNgu
                                                            }
                                                            value={ngonngu.IDNgonNgu}
                                                        >
                                                            {ngonngu.NgonNgu}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Th??? Lo???i</label>
                                        <select
                                            className="form-control"
                                            name="IDTheLoai"
                                            onChange={this.onhaipChange}
                                        >
                                            {this.state.TheLoai.map((theloai, index) => {
                                                return (
                                                    <>
                                                        <option
                                                            selected={
                                                                this.state.IDTheLoai === theloai.IDTheLoai
                                                            }
                                                            value={theloai.IDTheLoai}
                                                        >
                                                            {theloai.TenTheLoai}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>T??n Qu???c Gia</label>
                                        <select
                                            className="form-control"
                                            name="IDQuocGia"
                                            onChange={this.onhaipChange}
                                        >
                                            {this.state.QuocGia.map((quocgia, index) => {
                                                return (
                                                    <>
                                                        <option
                                                            selected={
                                                                this.state.IDQuocGia === quocgia.IDQuocGia
                                                            }
                                                            value={quocgia.IDQuocGia}
                                                        >
                                                            {quocgia.TenQuocGia}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Link Phim</label>
                                        <select
                                            className="form-control"
                                            name="IDLinkPhim"
                                            onChange={this.onhaipChange}
                                        >
                                            {this.state.LinkMoveis.map((linkphim, index) => {
                                                return (
                                                    <>
                                                        <option
                                                            selected={
                                                                this.state.IDLinkPhim === linkphim.IDLinkPhim
                                                            }
                                                            value={linkphim.IDLinkPhim}
                                                        >
                                                            {linkphim.TenLink}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
