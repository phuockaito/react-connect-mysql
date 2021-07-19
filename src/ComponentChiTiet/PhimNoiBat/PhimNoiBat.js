import React, { Component } from 'react';
import ServerURL from '../../ServerURL';
import { Link } from "react-router-dom";

export default class PhimNoiBat extends Component {
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
  };
  playMovis=()=>{
    setTimeout("location.reload(true)", 1);
  }
    render() {
        return (
            <>
        <h2><i className="fas fa-star" />PHIM LẺ HOT TRONG TUẦN</h2>
        <div className="Scrollbar">
          <div className="NoiBat">
            {
              this.state.Movies.map((movies,index)=>{
                if(movies.IDNgonNgu===3)
                {
                  return(
                    <div className="NoiDungNoiBat">
                    <div className="AnhNoiBat">
                      <img src={movies.poster} alt="" />
                    </div>
                    <div className="ClickNoiBat">
                    <Link to={`/ChiTiet/${movies.IDPhim}`} className="XemPhimChiTiet" onClick={this.playMovis}>Chi Tiết</Link>
                    </div>
                  </div>
                  )
                }
              })
            }
          </div>
        </div>
        <h2><i className="fas fa-star" />TRAILER PHIM MỚI</h2>
        <div className="Scrollbar">
          <div className="NoiBat">
          {
              this.state.Movies.map((movies,index)=>{
                if(movies.IDNgonNgu===2)
                {
                  return(
                    <div className="NoiDungNoiBat" key={index}>
                    <div className="AnhNoiBat">
                      <img src={movies.poster} alt="" title={movies.TenPhim} />
                    </div>
                    <div className="ClickNoiBat">
                      <Link to={`/ChiTiet/${movies.IDPhim}`} className="XemPhimChiTiet" onClick={this.playMovis}>Chi Tiết</Link>
                    </div>
                  </div>
                  )
                }
              })
            }
          </div>
        </div>
      </>
        )
    }
}
