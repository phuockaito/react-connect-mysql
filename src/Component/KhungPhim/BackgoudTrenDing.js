import React, { Component } from "react";
import { Link } from "react-router-dom";
import ServerURL from '../../ServerURL';
import Swal from 'sweetalert2';
export default class BackgoudTrenDing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: []
    };
  }
  Trailer = idphim => {
    ServerURL(`movies/${idphim}`,'get').then(res=>{
      Swal.fire({
        html:
          '<div class="TrallerSwal">' +
          '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' +
          res.data[0].TraiLer +
          '"></iframe>' +
          "</div>"
      });
    })
  };
  componentDidMount() {
    ServerURL('movies','get').then(res=>{
      this.setState({
        Movies: Array.from(res.data)
      });
    })
  }
  render() {
    return (
      <>
        <div className="TrenDing">
          <h1>
            <i className="fas fa-star" />
            trending
          </h1>
          <div className="NoiDung" id="NoiDungreactss">
            {this.state.Movies.map((movie, index) => {
              if (movie.IDQuocGia === 7) {
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
                        <p>
                          <span>Đạo diễn: </span>
                          {movie.TenDaoDien}
                        </p>
                        <p>
                          <span>Quốc gia: </span>
                          {movie.TenQuocGia}
                        </p>
                        <p>
                          <span>Năm: </span>
                          {movie.NamSX}
                        </p>
                        <p>
                          <span>Ngày ra rạp:</span>
                          {movie.NgayRaRap}
                        </p>
                        <p>
                          <span>Thời lượng:</span>
                          {movie.ThoiGian} phút
                        </p>
                        <p>
                          <span>Thể loại:</span>
                          {movie.TenTheLoai}
                        </p>
                      </div>
                      <div className="XemPhimFull">
                        <a
                          className="XemPhimFull"
                          onClick={() => {
                            this.Trailer(movie.IDPhim);
                          }}
                        >
                          trailer
                        </a>
                        <Link
                          to={`/ChiTiet/${movie.IDPhim}`}
                          className="XemPhim"
                        >
                          Chi Tiết
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
}
