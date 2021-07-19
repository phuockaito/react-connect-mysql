import React, { Component } from "react";
import Header from "../../Component/Header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServerURL from "../../ServerURL";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const TokenUser = localStorage.getItem("TokenUser");
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
export default class QuangCao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MangUser: [],
      Movies: [],
      Stusus: "True",
      image: "",
      LinkQC: "",
      IDThanhVien: "1",
      IDPhim: "61",
      DichVu: "200000",
      QuangCao: [],
      TenWeb: ""
    };
  }
  // Chạy Quảng Cáo
  ActiveChayQuangCao = (IDThanhVien, IDadvertisement) => {
    swalWithBootstrapButtons
      .fire({
        title: "Bạn Có Muốn Chạy Quảng Cáo Này Không ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Tôi Có",
        cancelButtonText: "No, Tôi Không !",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          ServerURL(`advertisement/${IDadvertisement}/${IDThanhVien}`, "put", {
            Stusus: "True",
            IDThanhVien: IDThanhVien,
            IDadvertisement: IDadvertisement
          }).then(res => {
            ServerURL(
              `advertisement-user/${this.state.MangUser.IDThanhVien}`,
              "get"
            ).then(res => {
              this.setState({
                QuangCao: res.data
              });
            });
          });
        }
      });
  };
  // Ngừng Chạy Quảng Cao
  ActiveQuangCao = (IDThanhVien, IDadvertisement) => {
    swalWithBootstrapButtons
      .fire({
        title: "Bạn Có Muốn Tạm Ngừng Quảng Cáo Này Không ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Tôi Có",
        cancelButtonText: "No, Tôi Không !",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          ServerURL(`advertisement/${IDadvertisement}/${IDThanhVien}`, "put", {
            Stusus: "False",
            IDThanhVien: IDThanhVien,
            IDadvertisement: IDadvertisement
          }).then(res => {
            ServerURL(
              `advertisement-user/${this.state.MangUser.IDThanhVien}`,
              "get"
            ).then(res => {
              this.setState({
                QuangCao: res.data
              });
            });
          });
        }
      });
  };
  UploadQuangCao = event => {
    event.preventDefault();

    ServerURL("advertisement", "post", {
      Stusus: this.state.Stusus,
      image: this.state.image,
      LinkQC: this.state.LinkQC,
      TenWeb: this.state.TenWeb,
      DichVu: Number(this.state.DichVu),
      IDThanhVien: Number(this.state.MangUser.IDThanhVien),
      IDPhim: Number(this.state.IDPhim)
    }).then(res => {
      swalWithBootstrapButtons
        .fire({
          title: "Upload success",
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
  };
  onhaipChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  componentDidMount() {

    ServerURL("movies",'get').then(res=>{
      this.setState({
        Movies: res.data
      });
      ServerURL("informations-user",'get',null,TokenUser).then(res=>{
        this.setState({
          MangUser: res.data[0]
        });
        ServerURL( `advertisement-user/${this.state.MangUser.IDThanhVien}`,"get").then(res => {
          this.setState({
            QuangCao: res.data
          });
        });
      })
    })
  }
  render() {
    var tong = 0;
    return (
      <div className="main">
        <div className="KhungWebSite">
          <Header></Header>
        </div>
        <Tabs>
          <TabList>
            <Tab>Đăng Quảng Cáo</Tab>
            <Tab>Danh Sách Quảng Cáo</Tab>
          </TabList>
          <TabPanel>
            <div className="container">
              <span className="LePhiQC">Lệ Phí 200.000 VNĐ</span>
              <form onSubmit={this.UploadQuangCao}>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Hình Ảnh</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="image"
                      name="image"
                      onChange={this.onhaipChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmai25">Ten Website Của Bạn</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmai25"
                      placeholder="Ten Website Của Bạn"
                      name="TenWeb"
                      onChange={this.onhaipChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail5">Link Website Của Bạn</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail5"
                      placeholder="Link Web Của Bạn"
                      name="LinkQC"
                      onChange={this.onhaipChange}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>Phim Bạn Bạn Muốn Quảng Cáo</label>
                    <select
                      className="form-control"
                      name="IDPhim"
                      onChange={this.onhaipChange}
                    >
                      {this.state.Movies.map((movie, index) => {
                        return (
                          <>
                            <option value={movie.IDPhim}>
                              {movie.TenPhim}
                            </option>
                          </>
                        );
                      })}
                      {/* <option value=""></option> */}
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Tải Lên
                </button>
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <table className="align-items-center table-flush table">
              <thead className="thead-light">
                <tr>
                  <th className="colorAdmin" scope="col">
                    Wibsite
                  </th>
                  <th className="colorAdmin" scope="col">
                    Hình Ảnh
                  </th>

                  <th className="colorAdmin" scope="col">
                    Phim
                  </th>
                  <th className="colorAdmin" scope="col">
                    Stusus
                  </th>
                  <th className="colorAdmin" scope="col">
                    Dich Vụ
                  </th>
                </tr>
              </thead>
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
                            <img src={quangcao.poster} alt="" />
                          </Link>
                        </div>
                      </th>
                      <th className="AlignAdmin" scope="row">
                        <span className="mb-0 text-sm">
                          {quangcao.Stusus === "True" && (
                            <p
                              className="DangChayQC"
                              onClick={() =>
                                this.ActiveQuangCao(
                                  this.state.MangUser.IDThanhVien,
                                  quangcao.IDadvertisement
                                )
                              }
                            >
                              Đang Chạy
                            </p>
                          )}
                          {quangcao.Stusus === "False" && (
                            <p
                              className="NgungChayQC"
                              onClick={() =>
                                this.ActiveChayQuangCao(
                                  this.state.MangUser.IDThanhVien,
                                  quangcao.IDadvertisement
                                )
                              }
                            >
                              Ngừng Chạy
                            </p>
                          )}

                          {/* <p
                            className={
                              quangcao.Stusus === "True"
                                ? "DangChayQC"
                                : "NgungChayQC"
                            }
                            onClick={() =>
                              this.ActiveQuangCao(
                                this.state.MangUser.IDThanhVien,quangcao.IDadvertisement
                              )
                            }
                          >
                            {quangcao.Stusus === "True"
                              ? "Đang Chạy"
                              : "Ngừng Chạy"}
                          </p> */}
                        </span>
                      </th>
                      <th className="AlignAdmin" scope="row">
                        <span className="mb-0 text-sm">
                          {" "}
                          {new Intl.NumberFormat().format(quangcao.DichVu)} VNĐ
                        </span>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="TongTienQC">
              <span className="NamTong">Tổng Cộng:</span>{" "}
              {new Intl.NumberFormat().format(tong)} VNĐ
            </p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
