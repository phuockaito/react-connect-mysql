import React, { Component } from 'react'
import ServerURL from '../../ServerURL';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export default class PhimHotPhai extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        ServerURL('movies','get').then(res=>{
            this.setState({
                Movies: res.data
            })
        })
    }
    render() {
        return (
            <div className="PhimHotPhai">
                <h1><i className="fas fa-star" />phim lẻ hot trong tuần</h1>
                <div className="NoiDungPhimHotPhai">
                    {
                        this.state.Movies.map((movie, index) => {
                            if (movie.IDTheLoai === 1) {
                                return (
                                    <div className="AllPhimHot" key={index}>
                                        <div className="AnhPhimHotTrai">
                                            <img src={movie.poster} alt="" className="anhdemo" />
                                        </div>
                                        <div className="ThongTinPhimHotTrai">
                                            <h4>{movie.TenPhim}</h4>
                                            <div className="ThongTinPhimHot">
                                                <p><span>Đạo diễn:</span>{movie.TenDaoDien}</p>
                                                <p><span>Quốc gia: </span>{movie.TenQuocGia}</p>
                                                <p><span>Năm: </span>{movie.NamSX}</p>
                                                <p><span>Ngày ra rạp: </span>{movie.NgayRaRap}</p>
                                                <p><span>Thời lượng: </span>{movie.ThoiGian} phút</p>
                                                <p><span>Thể loại: </span>{movie.TenTheLoai}</p>
                                            </div>
                                            <div className="XemPhimFull ClickPhimHotTrai">
                                            <a  className="trailer TrailerPhimHotTrai XemPhimFull"    onClick={()=>{this.Trailer(movie.IDPhim)}}>trailer</a>
                                                <Link to={`/ChiTiet/${movie.IDPhim}`} className="XemPhim XemPhimPhimHotTrai">Chi Tiết</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}
