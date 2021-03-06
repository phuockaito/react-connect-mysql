import React, { Component } from "react";
import Header from "./Component/Header/Header";
import ServerURL from "./ServerURL";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import QuangCao from "./ComponentChiTiet/QuangCao/QuangCao";
import PhimHotTrai from "./Component/KhungPhimHot/PhimHotTrai";
import PhimHotPhai from "./Component/KhungPhimHot/PhimHotPhai";
import MenuBackgroudCuoi from "./Component/BackgroudCuoi/MenuBackgroudCuoi";
import Menu from "./Component/Menu/Menu";
import KhungSiler from "./Component/KhungSiler/KhungSiler";
import BackgoudTrenDing from "./Component/KhungPhim/BackgoudTrenDing";
import BackgoudPhimMoi from "./Component/KhungPhim/BackgoudPhimMoi";
import "./Filecss/index.css";
const TokenUser = localStorage.getItem("TokenUser");
const TokenAdmin = localStorage.getItem("TokenAdmin");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuangCao: [],
      NgonNgu: [],
      TheLoai: [],
      QuocGia: [],
      Movies: [],
      LinkMoveis: [],
      DuongLink: "",
      TenLink: "",
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
      IDQuocGia: 1,
      IDLinkPhim: 1,
      IDNgonNgu: 1,
      IDTheLoai: 1
    };
  }

  DeleteCmt = idphim => {
    swalWithBootstrapButtons
      .fire({
        title: "Delete All Comment In Movie ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it !",
        cancelButtonText: "No, cancel !",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          ServerURL(`comment/${idphim}`,"delete",{
            IDPhim: idphim
          }).then(res => {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "The comment has been deleted.",
              "success"
            );
          });
        }
      });
  };
  DeletePhim = id => {
    swalWithBootstrapButtons
      .fire({
        title: "Delete Movie ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it !",
        cancelButtonText: "No, cancel !",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          ServerURL(`movies/${id}`,"delete", {
            IDPhim: id
          }).then(res=>{
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "The movie has been deleted.",
              "success"
            );
            ServerURL("movies",'get').then(res=>{
              this.setState({
                Movies: res.data
              });
            })
          })
        }
      });
  };
  componentDidMount() {
    // Quang Cao
    ServerURL("advertisement",'get').then(res => {
      this.setState({
        QuangCao: res.data
      });
    });

    // Quoc Gia
    ServerURL("ngonngu","get").then(res => {
      this.setState({
        NgonNgu: res.data
      });
    });
   
    // the loai
    ServerURL('theloai',"get").then(res => {
      this.setState({
        TheLoai: res.data
      });
    });

    // Link Phim
    ServerURL('linkphim','get').then(res => {
      this.setState({
        LinkMoveis: res.data
      });
    });

    // quoc gia
    ServerURL("quocgia",'get').then(res => {
      this.setState({
        QuocGia: res.data
      });
    });

    // moveis
    ServerURL('movies','get').then(res => {
      this.setState({
        Movies: res.data
      });
    });
  }
  onhaipChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  OnSubmitAdd = event => {
    event.preventDefault();
    ServerURL("registration-movies","post",{
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
      IDTheLoai: Number(this.state.IDTheLoai)
    }).then(result=>{
      swalWithBootstrapButtons
        .fire({
          title: "Add Movie Success",
          icon: "success",
          confirmButtonText: "OK",
          reverseButtons: true
        })
        ServerURL("movies",'get').then(res => {
          this.setState({
            Movies: res.data
          });
        });
        if (result.value) {
          setTimeout("location.reload(true)", 1);
        }
    })
  };
  // LINK PHIM
  onChangeLinkPhim = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  OnSubmitLinkPhim = event => {
    event.preventDefault();
    ServerURL("linkphim","post", {
      TenLink: this.state.TenLink,
      DuongLink: this.state.DuongLink
    }).then(res=>{
      ServerURL("linkphim","get").then(res => {
        this.setState({
          LinkMoveis: res.data
        });
      });
    })
  };

  render() {
    var tong=0;
    if (TokenAdmin) {
      return (
        <div className="main">
          <div className="KhungWebSite">
            <Header></Header>
          </div>
          <div>
            <Tabs>
              <TabList>
                <Tab>All Movie</Tab>
                <Tab>List Qu???ng C??o</Tab>
                <Tab>Add Moive</Tab>
              </TabList>
              <TabPanel>
                <table className="align-items-center table-flush table">
                  <thead className="thead-light">
                    <tr>
                      <th className="colorAdmin" scope="col">
                        ID
                      </th>
                      <th className="colorAdmin" scope="col">
                        T??n Phim
                      </th>
                      <th className="colorAdmin" scope="col">
                        Ng??y Ra R???p
                      </th>
                      <th className="colorAdmin" scope="col">
                        Th???i Gian
                      </th>
                      <th className="colorAdmin" scope="col">
                        Poster
                      </th>
                      <th className="colorAdmin" scope="col">
                        N??m s???n xu???t
                      </th>
                      <th className="colorAdmin" scope="col">
                        ??i???m MDB
                      </th>
                      <th className="colorAdmin" scope="col">
                        Qu???c Gia
                      </th>
                      <th className="colorAdmin" scope="col">
                        Ng??n Ng???
                      </th>
                      <th className="colorAdmin" scope="col">
                        Th??? Lo???i
                      </th>
                      <th className="colorAdmin" scope="col">
                        CMT
                      </th>
                      <th className="colorAdmin" scope="col">
                        Xo??
                      </th>
                      <th className="colorAdmin" scope="col">
                        S???a
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.Movies.map((movie, index) => {
                      return (
                        <tr key={index}>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">{movie.IDPhim}</span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              {movie.TenPhim}
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              {movie.NgayRaRap}
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              {movie.ThoiGian} Ph??t
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <div className="AnhAdmin">
                              <img src={movie.poster} alt="" />
                            </div>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">{movie.NamSX}</span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              {movie.DiemMDB}
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              {movie.TenQuocGia}
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              {movie.NgonNgu}
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              {movie.TenTheLoai}
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              <button
                                type="button"
                                className="btn btn-large btn-block btn-info"
                                onClick={() => {
                                  this.DeleteCmt(movie.IDPhim);
                                }}
                              >
                                Delete Comment
                              </button>
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              <button
                                type="button"
                                className="btn btn-large btn-block btn-info"
                                onClick={() => {
                                  this.DeletePhim(movie.IDPhim);
                                }}
                              >
                                Delete Movie
                              </button>
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              <Link
                                to={`/Update/${movie.IDPhim}`}
                                className="btn btn-large btn-block btn-info"
                              >
                                Edit Movie
                              </Link>
                            </span>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <table className="align-items-center table-flush table">
                  <thead className="thead-light"></thead>
                  <tr>
                    <th className="colorAdmin" scope="col">
                      Wibsite
                    </th>
                    <th className="colorAdmin" scope="col">
                      H??nh ???nh
                    </th>
                    <th className="colorAdmin" scope="col">
                      Phim
                    </th>
                    <th className="colorAdmin" scope="col">
                      H??? T??n
                    </th>
                    <th className="colorAdmin" scope="col">
                      Email
                    </th>
                    <th className="colorAdmin" scope="col">
                      Status
                    </th>
                    <th className="colorAdmin" scope="col">
                      D???ch V???
                    </th>
                  </tr>
                  <tbody>
                    {this.state.QuangCao.map((quangcao, index) => {
                      tong += quangcao.DichVu;
                      return (
                        <tr key={index}>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              <a href={quangcao.linkQC} target="ss">
                                {quangcao.TenWeb}
                              </a>
                            </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <div className="AnhAdmin">
                              <img src={quangcao.image} alt="" />
                            </div>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <div className="AnhAdmin">
                              <Link
                                to={`/ChiTiet/${quangcao.IDPhim}`}
                                target="IDPhim"
                              >
                                <img src={quangcao.poster} title={quangcao.TenPhim} />
                              </Link>
                            </div>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm"> {quangcao.HoTen} </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm"> {quangcao.Email} </span>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            {/* <span className="mb-0 text-sm"> {quangcao.Stusus} </span> */}
                            <p
                            className={
                              quangcao.Stusus === "True"
                                ? "DangChayQC"
                                : "NgungChayQC"
                            }
                          >
                            {quangcao.Stusus === "True"
                              ? "??ang Ch???y"
                              : "Ng???ng Ch???y"}
                          </p>
                          </th>
                          <th className="AlignAdmin" scope="row">
                            <span className="mb-0 text-sm">
                              {" "}
                              {new Intl.NumberFormat().format(
                                quangcao.DichVu
                              )}{" "}
                              VN??
                            </span>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p className="TongTienQC TongTienAdmin"><span className="NamTong">Danh Thu:</span> {  new Intl.NumberFormat().format(tong)} VN??</p>
              </TabPanel>
              <TabPanel>
                <div className="container">
                  <form onSubmit={this.OnSubmitLinkPhim}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>T??n Link Phim</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ten Link"
                          name="TenLink"
                          onChange={this.onChangeLinkPhim}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>???????ng Link</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="DuongLink"
                          name="DuongLink"
                          onChange={this.onChangeLinkPhim}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      SAVE
                    </button>
                  </form>
                  <form onSubmit={this.OnSubmitAdd}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">T??n Phim</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="T??n Phim"
                          name="TenPhim"
                          onChange={this.onhaipChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Ng??y Ra R???p</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="dd/mm/yyyy"
                          name="NgayRaRap"
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
                                <option value={ngonngu.IDNgonNgu}>
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
                                <option key={index} value={theloai.IDTheLoai}>
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
                                <option value={quocgia.IDQuocGia}>
                                  {quocgia.TenQuocGia}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>

                      <div className="form-group col-md-4">
                        <label>T??n Link Phim</label>
                        <select
                          className="form-control"
                          name="IDLinkPhim"
                          onChange={this.onhaipChange}
                        >
                          {this.state.LinkMoveis.map((linkphim, index) => {
                            return (
                              <>
                                <option value={linkphim.IDLinkPhim}>
                                  {linkphim.TenLink}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      ADD
                    </button>
                  </form>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div className="BackgroudCuoi">
            <MenuBackgroudCuoi></MenuBackgroudCuoi>
          </div>
        </div>
      );
    } else if (TokenUser) {
      return (
        <div className="main">
          <div className="KhungWebSite">
            <Header></Header>
          </div>
          <div className="menu">
            <header>
              <Menu></Menu>
            </header>
          </div>
          <div className="KhungSiler">
            <KhungSiler></KhungSiler>
          </div>
          <div className="KhungPhim">
            <div className="BackgoudTrenDing">
              <BackgoudTrenDing></BackgoudTrenDing>
            </div>
            <div className="BackgoudPhimMoi">
              <BackgoudPhimMoi></BackgoudPhimMoi>
            </div>
            <div className="KhungPhimHot">
              <div className="PhimHot">
                <PhimHotTrai></PhimHotTrai>
                <PhimHotPhai></PhimHotPhai>
              </div>
            </div>
          </div>
          <div className="BackgroudCuoi">
            <MenuBackgroudCuoi></MenuBackgroudCuoi>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main">
          <div className="KhungWebSite">
            <Header></Header>
          </div>
          <div className="menu">
            <header>
              <Menu></Menu>
            </header>
          </div>
          <div className="KhungSiler">
            <KhungSiler></KhungSiler>
          </div>
          <div className="KhungPhim">
            <div className="BackgoudTrenDing">
              <BackgoudTrenDing></BackgoudTrenDing>
            </div>
            <div className="BackgoudPhimMoi">
              <BackgoudPhimMoi></BackgoudPhimMoi>
            </div>
            <div className="KhungPhimHot">
              <div className="PhimHot">
                <PhimHotTrai></PhimHotTrai>
                <PhimHotPhai></PhimHotPhai>
              </div>
            </div>
          </div>
          <div className="BackgroudCuoi">
            <MenuBackgroudCuoi></MenuBackgroudCuoi>
          </div>
        </div>
      );
    }
  }
}

export default Home;
