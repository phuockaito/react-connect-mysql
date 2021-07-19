import React, { Component } from "react";
import ServerURL from '../../ServerURL';
import { Link } from "react-router-dom";
export default class PhimUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: []
    };
  }
  componentDidMount() {
    ServerURL("movies","get").then(res => {
      this.setState({
        Movies: res.data
      });
    });

  }
  playMovis = () => {
    setTimeout("location.reload(true)", 1);
  };
  render() {
    return (
      <div className="PhimCMT">
        {this.state.Movies.map((movies, index) => {
          if (movies.IDQuocGia === 7) {
            return (
              <div className="AllPhimCMT" key={index}>
                <div className="AnhPhimCMT">
                  <img src={movies.poster} alt="" />
                </div>
                <div className="PhimCMTALL">
                  <div className="TenPhimCMT">
                    <h5>
                    {movies.TenPhim}
                    </h5>
                  </div>
                  <div className="NoiDungPhimCMT">
                    <p><span>Đạo diễn:</span>{movies.TenDaoDien}</p>
                    <p><span>Quốc gia:</span>{movies.TenQuocGia}</p>
                    <p><span>Năm: </span> {movies.NamSX}</p>
                    <p><span>Ngày ra rạp:</span>{movies.NgayRaRap}</p>
                    <p><span>Thời lượng: </span>{movies.ThoiGian} phút</p>
                    <p><span>Thể loại: </span>{movies.TenTheLoai}</p>
                  </div>
                  <div className="ClickPhimCMT">
                   
                    <Link to={`/ChiTiet/${movies.IDPhim}`} onClick={this.playMovis}>xem phim</Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
