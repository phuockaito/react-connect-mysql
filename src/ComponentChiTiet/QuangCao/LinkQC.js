import React, { Component } from "react";
import { Link } from "react-router-dom";
const TokenUser = localStorage.getItem("TokenUser");
export default class QuangCao extends Component {
  render() {
    return (
      <div className="LienHeQC">
        <Link
          to={TokenUser ? `/QuangCao` : `/login`}
          className="LinkToQC"
        >
          {
              TokenUser ?'List advertisement':'liên hệ quảng cáo'
          }
        </Link>
      </div>
    );
  }
}
