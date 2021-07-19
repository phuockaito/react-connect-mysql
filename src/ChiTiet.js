import React, { Component } from "react";
import Header from "./Component/Header/Header";
import MenuBackgroudCuoi from "./Component/BackgroudCuoi/MenuBackgroudCuoi";
import Menu from "./Component/Menu/Menu";
import ServerURL from './ServerURL';
import YouTube from "react-youtube";
import PhimNoiBat from "./ComponentChiTiet/PhimNoiBat/PhimNoiBat";
import PhimUpdate from "./ComponentChiTiet/PhimNoiBat/PhimUpdate";
import PhimProposed from "./ComponentChiTiet/PhimNoiBat/PhimProposed";
import Submit from "./ComponentChiTiet/CMT/Submit";
import StarRatings from "react-star-ratings";
var TokenUser = localStorage.getItem("TokenUser");
export default class ChiTiet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IDThanhVien: "",
      IDPhim: "",
      Movies: [],
      Comment: [],
      NoiDung: "",
      PlayMove: false,
      TrailerChiTiet: false,
      onEditCmtUser: false,
      rating: 0,
      QuangCao: [],
      Stusus: true,
      ListStusus: true
    };
  }
  ListStusus=()=>{
    this.setState({
      ListStusus: !this.state.ListStusus
    })
  }
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating
    });
  };
  EditCmtUser = () => {
    this.setState({
      onEditCmtUser: !this.state.onEditCmtUser
    });
  };
  PlayMove = () => {
    this.setState({
      PlayMove: true
    });
  };
  QuangCao = () => {
    this.setState({
      Stusus: false
    });
  };
  TrailerChiTiet = () => {
    this.setState({
      TrailerChiTiet: true
    });
  };
  pauseVideo = () => {
    this.setState({
      PlayMove: false,
      TrailerChiTiet: false
    });
  };
  DeleteCmt = (cmt, user) => {
    const x = Number(user);
    ServerURL(`comment/${cmt}/${x}`,"delete",{
      IDcomment: cmt,
      IDThanhVien: user
    }).then(res=>{
      ServerURL(`comment/${this.state.IDPhim}`,"get").then(res => {
        this.setState({
          Comment: res.data
        });
      });
    })
  };
  onhaipChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  showlike = () => {
    alert("msg");
  };
  OnSubmit = event => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let a = <br />;
    let NgayThangNam =
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      "   " +
      date +
      "-" +
      month +
      "-" +
      year;
    event.preventDefault();
    var { match } = this.props;
    if (match) {
      var IDPhim = Number(match.params.IDPhim);
    }

    ServerURL("comment","post",{
      IDPhim: IDPhim,
      NoiDung: this.state.NoiDung,
      NgayThangNam: NgayThangNam,
      IDThanhVien: this.state.IDThanhVien,
      Star: this.state.rating
    }).then(res=>{
      if (res.status === 200) {
        this.setState({
          rating: 0
        });
      }
      ServerURL(`comment/${this.state.IDPhim}`, "get").then(res=>{
        this.setState({
          Comment: res.data
        });
      })
      if (res.status === 200) {
        document.getElementById("FromCMT").value = "";
      }
    })
  };
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var IDPhim = match.params.IDPhim;
      this.state.IDPhim = IDPhim;

      // moveis
      ServerURL(`movies/${IDPhim}`, "get").then(res=>{
        this.setState({
          Movies: res.data[0]
        });
        // quang cao
        ServerURL(`advertisement/${IDPhim}`,"get").then(res=>{
          this.setState({
            QuangCao: res.data
          });
        })
        // cmt
        ServerURL( `comment/${IDPhim}`, "get").then(res=>{
          this.setState({
            Comment: res.data
          });
          if(TokenUser){
            ServerURL("informations-user","get",TokenUser).then(res => {
              this.setState({
                IDThanhVien: res.data[0].IDThanhVien
              });
            });
          }
        })
      })
    }
  }
  render() {
    const opts = {
      height: "540",
      width: "900"
    };

    return (
      <div className="main">
        {/*---------------------------- list QuangCao----------------------------*/}
        <div className="ListQC">
          {this.state.QuangCao.map((quangcao, index) => {
            if (quangcao.Stusus=== 'True') {
              if (this.state.ListStusus === true) {
                return (
                  <div className="KhungListQC" key={index}>
                    <span onClick={this.ListStusus} className="CloseListQC" title="Close All">
                        <i className="fas fa-window-close"></i>
                      </span>
                    <div className="ImageListQC">
                    <a href={quangcao.linkQC}>  <img src={quangcao.image} alt="" /></a>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
        {/*----------------------------  QuangCao----------------------------*/}
        {this.state.QuangCao.map((quangcao, index) => {
          console.log(quangcao)
          if (quangcao.Stusus=== 'True') {
            if (this.state.Stusus === true) {
              return (
                <div className="KhungQuangCao" key={index}>
                  <div className="QuangCao">
                    <span onClick={this.QuangCao}>
                      <i className="fas fa-window-close close-quangcao"></i>
                    </span>
                    <div className="KhungContentQuangCao">
                      <div className="imageQuangCao">
                        <a href={quangcao.linkQC} target="sssssss">
                          <img
                            src={quangcao.image}
                            className="AnhQuangCao"
                            alt=""
                            className="linkQC"
                          />
                        </a>
                      </div>
                      <div className="ContentQuangCao"></div>
                    </div>
                  </div>
                </div>
              );
            }
          }
        })}
        {/*---------------------------- MOVIES----------------------------*/}
        {this.state.PlayMove && (
          <div className="KhungYoutube">
            <div className="PlayYoutube">
              <span onClick={this.pauseVideo}>
                <i className="fas fa-window-close"></i>
              </span>
              <YouTube
                videoId={this.state.Movies.DuongLink}
                opts={opts}
              ></YouTube>
            </div>
          </div>
        )}
        {this.state.TrailerChiTiet && (
          <div className="KhungYoutube">
            <div className="PlayYoutube">
              <span onClick={this.pauseVideo}>
                <i class="fas fa-window-close"></i>
              </span>
              <YouTube
                videoId={this.state.Movies.TraiLer}
                opts={opts}
              ></YouTube>
            </div>
          </div>
        )}
        <div className="KhungWebSite">
          <Header></Header>
        </div>
        <div className="menu">
          <header>
            <Menu></Menu>
          </header>
        </div>
        <div className="KhungNoiDung">
          <div className="NoiDungReact">
            <div className="KhungPhimReact">
              <div className="ChiTietPhim">
                <div className="AnhChiTet">
                  <div className="PostChiTiet">
                    <img src={this.state.Movies.poster} alt="" />
                    <div className="ClickPhimChiTiet">
                      <a className="XemPhimChiTiet" onClick={this.PlayMove}>
                        Xem phim
                      </a>
                      <a
                        className="TrailerChiTiet"
                        onClick={this.TrailerChiTiet}
                      >
                        Xem trailer
                      </a>
                    </div>
                  </div>
                </div>
                <div className="NoiDungChiTiet">
                  <div className="TenPhimChiTiet">
                    <h2>{this.state.Movies.TenPhim}</h2>
                  </div>
                  <div className="ALLChiTiet">
                    <p>
                      Điểm IMDB: <span>{this.state.Movies.DiemMDB}</span>
                    </p>
                    <p>
                      Đạo diễn: <span>{this.state.Movies.TenDaoDien}</span>
                    </p>
                    <p>
                      Quốc gia: <span>{this.state.Movies.TenQuocGia}</span>
                    </p>
                    <p>
                      Năm: <span>{this.state.Movies.NamSX}</span>
                    </p>
                    <p>
                      Ngày ra rạp: <span>{this.state.Movies.NgayRaRap}</span>
                    </p>
                    <p>
                      Thời lượng: <span>{this.state.Movies.ThoiGian} Phút</span>
                    </p>
                    <p>
                      Chất lượng:<span>Bản đẹp</span>
                    </p>
                    <p>
                      Độ phân giải:<span>Full HD</span>
                    </p>
                    <p>
                      Ngôn ngữ:<span>{this.state.Movies.NgonNgu}</span>
                    </p>
                    <p>
                      Thể loại:<span>{this.state.Movies.TenTheLoai}</span>
                    </p>
                    <p>
                      Diễn viên: <span>{this.state.Movies.DienVien}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="NoiDungPhimReact">
                <h2>
                  <i className="fas fa-star" />
                  nội dung phim
                </h2>
                <div className="NoiDungPhimChiTiet">
                  <p>{this.state.Movies.NoiDungPhim}</p>
                </div>
              </div>
              <h2>
                <i className="fas fa-star" />
                Bình luận về phim
              </h2>
              <div className="KhungVietCMT">
                <div>
                  {TokenUser && (
                    <StarRatings
                      rating={this.state.rating}
                      starRatedColor="yellow"
                      changeRating={this.changeRating}
                      numberOfStars={5}
                      name="rating"
                      starDimension="28px"
                    />
                  )}
                </div>
                <div className="VietCMT">
                  <div className="AnhVietCMT"></div>

                  <div className="NoiDungCMT">
                    <form onSubmit={this.OnSubmit}>
                      <input
                        name="NoiDung"
                        type="text"
                        id="FromCMT"
                        placeholder="Thêm Bình Luận...."
                        onChange={this.onhaipChange}
                      />
                      <Submit></Submit>
                    </form>
                  </div>
                </div>
              </div>
              <div className="SocLoadcmt">
                <div className="BinhLuan">
                  <div className="TaiKhoanCMT">
                    {this.state.Comment.map((cmt, index) => {
                      return (
                        <div className="cmtReact" key={index}>
                          <div className="Avartar">
                            <div className="Tenuser">
                              <p>{cmt.HoTen}</p>
                            </div>
                          </div>
                          <div className="NoiDungBinhLuan">
                            <p>{cmt.NoiDung}</p>
                          </div>
                          <div>
                            <StarRatings
                              numberOfStars={cmt.Star}
                              starDimension="22px"
                              starEmptyColor="#fed330"
                            />
                          </div>
                          <div className="NgayCMT">
                            <p> {cmt.NgayThangNam}</p>
                          </div>

                          {cmt.IDThanhVien === this.state.IDThanhVien && (
                            <div className="KhungEdit" id={this.props.id}>
                              <div className="maucmt"></div>
                              <p
                                className="EditCmt"
                                onClick={() => {
                                  this.DeleteCmt(
                                    cmt.IDcomment,
                                    this.state.IDThanhVien
                                  );
                                }}
                              >
                                Delete
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="KhungPhimCMT">
                <h2>
                  <i className="fas fa-star" />
                  Phim De Xuat
                </h2>
                <PhimProposed></PhimProposed>
                <h2>
                  <i className="fas fa-star" />
                  PHIM BỘ MỚI CẬP NHẬT
                </h2>
                <PhimUpdate></PhimUpdate>
              </div>
            </div>

            <div className="PhimNoiBat">
              <PhimNoiBat></PhimNoiBat>
            </div>
          </div>
        </div>
        <MenuBackgroudCuoi></MenuBackgroudCuoi>
      </div>
    );
  }
}
