import React from 'react';
import './Filecss/swipermin.css';
import './Filecss/index.css';
import './Filecss/bootstrap.css';
import FromDangNhapTaiKhoan from './Component/Login/FromDangNhapTaiKhoan';
import FromDangKyTaiKhoan from './Component/Login/FromDangKyTaiKhoan';
import Update from './Update';
import ChiTiet from './ChiTiet';
import ReactDOM from 'react-dom';
import AllMovies from './AllMovis/AllMovies';
import QuangCao from './ComponentChiTiet/QuangCao/QuangCao';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" render={props => <Home {...props} />} />
            <Route exact={true} path="/login" render={props => <FromDangNhapTaiKhoan {...props} />} />
            <Route exact={true} path="/QuangCao" render={props => <QuangCao {...props} />} />
            <Route exact={true} path="/registration" render={props => <FromDangKyTaiKhoan {...props} />} />
            <Route exact={true} path="/ChiTiet/:IDPhim" render={props => <ChiTiet {...props} />} />
            <Route exact={true} path="/Update/:IDPhim" render={props => <Update {...props} />} />
            <Route exact={true} path="/AllMovies/:all" render={props => <AllMovies {...props} />} />
            
            <Redirect to="/" from="/" />
        </Switch>
    </BrowserRouter>

    , document.getElementById('connter')
);
