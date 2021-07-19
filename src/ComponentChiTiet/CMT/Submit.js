import React, { Component } from "react";
import { Link } from "react-router-dom";
var TokenUser = localStorage.getItem("TokenUser");
export default class Submit extends Component {
    render() {
          if (TokenUser) {
            return (
                <>
                  <button type="submit" className="FromCMT">
                    Gửi
                  </button>
                </>
              );
          }else{
            return (
                <>
                  <Link to="/login" className="FromCMT">
                  Gửi
                  </Link>
                </>
              );
          }

    }
}
