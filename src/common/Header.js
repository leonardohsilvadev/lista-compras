import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Link to="/">
                <AppBar position="static" color="primary">
                <div className="header">
                  <p className="text-left">Lista de Compras</p>
                </div>
              </AppBar>
            </Link>
        )
    }
}

export default Header;