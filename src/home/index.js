import React from "react";

import { connect } from "react-redux";

import NewList from "./NewList";
import List from "./List";

import { getListTotal } from "../store/reducers/list";

import "./Home.css";

const Home = (props) => {
        return (
            <div className="page-container">
                <NewList />
                {props.list.items.length > 0 &&
                <List list={props.list.list} total={props.total} />
                }
            </div>

        )
}

const mapStateToProps = (state) => ({
    list: state.list,
    total: getListTotal(state),
})

export default connect(mapStateToProps, null)(Home);