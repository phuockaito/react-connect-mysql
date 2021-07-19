import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Menu from "../Component/Menu/Menu";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import ServerURL from '../ServerURL';
export default class AllMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenphim: "",
      Movies: []
    };
  }
  Trailer=(idphim)=>{
    ServerURL(`movies/${idphim}`,'get').then(res=>{
      Swal.fire({
        html: '<div class="TrallerSwal">'+'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+res.data[0].TraiLer+'"></iframe>'+'</div>'
      })
    })

  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var ten = match.params.all;
      this.setState({
        tenphim: ten
      });
      ServerURL('movies','get').then(res=>{
        this.setState({
          Movies: res.data
        });
      })
    }
  }
  render() {
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
        <div className="KhungPhim">
          <div className="BackgoudTrenDing">
            <div className="TrenDing">
              <h1>
                <i class="fas fa-star"></i>
                {this.state.tenphim}
              </h1>
              <div className="NoiDung" id="NoiDungreactss">
                {this.state.Movies.map((movie, index) => {
                  if (
                    movie.TenTheLoai === this.state.tenphim ||
                    movie.TenQuocGia === this.state.tenphim
                  ) {
                    return (
                      <div className="NoiDungPhim" key={index}>
                        <div className="AnhPhim">
                          <img src={movie.poster} alt="" />
                        </div>
                        <div className="ThongTinPhim">
                          <div className="TheLoai">
                            <p>{movie.NgonNgu}</p>
                          </div>
                          <div className="AllThongTin">
                            <h4>BÃO TRẮNG 2: {movie.TenPhim}</h4>
                            <p><span>Đạo diễn: </span>{movie.TenDaoDien}</p>
                            <p><span>Quốc gia: </span>{movie.TenQuocGia}</p>
                            <p><span>Năm: </span>{movie.NamSX}</p>
                            <p><span>Ngày ra rạp: </span>{movie.NgayRaRap}</p>
                            <p><span>Thời lượng: </span>{movie.ThoiGian} phút</p>
                            <p><span>Thể loại: </span>{movie.TenTheLoai}</p>
                          </div>
                          <div className="XemPhimFull">
                            <a
                              onClick={()=>{this.Trailer(movie.IDPhim)}}
                              className="trailer"
                            >
                              trailer
                            </a>
                            <Link
                              to={`/ChiTiet/${movie.IDPhim}`}
                              className="XemPhim"
                            >
                              Xem Phim
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
