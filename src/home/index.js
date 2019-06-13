import React, { Component } from "react";

import CustomCard from "../common/CustomCard";
import NewList from "./NewList";
import List from "./List";

import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="page-container">
                <NewList />
                <List />
            </div>

        )
    }
}

export default Home;