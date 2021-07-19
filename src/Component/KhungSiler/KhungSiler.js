import React, { Component } from "react";
import ServerURL from '../../ServerURL';
import { Link } from "react-router-dom";
export default class KhungSiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: []
    };
  }
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
        <h1>
          <i className="fas fa-star" />
          Phim đề cử
        </h1>
        <div className="swiper-wrapper">
          {
            this.state.Movies.map((movie, index) => {
              if (movie.IDTheLoai === 3) {
                return (
                  <div className="swiper-slide" key={index}>
                    <div className="imbg">
                      <Link to={`/ChiTiet/${movie.IDPhim}`}>
                        <img src={movie.poster} alt="" id="anhhover" id={movie.IDPhim} title={movie.TenPhim} />
                      </Link>
                    </div>
                    <div className="TenTinSiler">
                      <p>{movie.TenPhim}</p>
                      <span>{movie.NgonNgu}</span>
                    </div>
                  </div>
                )
              }
            })
          }

        </div>
        <div className="swiper-pagination" />
      </>
    );
  }
}
