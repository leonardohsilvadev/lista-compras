import React, { Component } from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { Creators as ListActions } from "../store/actions/list";

import Form from "./Form";
import ListItem from "./ListItem";

import "./List.css";

class CreateList extends Component {
    render() {
        return (
            <div className="page-container">
                <Form addProduct={this.props.addProduct} updateProduct={this.props.updateProduct} />

                <div className="list-items-container">
                    {this.props.list.items.map(item =>
                        <ListItem
                            item={item}
                            key={item.id}
                            deleteProduct={this.props.deleteProduct}
                            toggleProduct={this.props.toggleProduct}
                        />
                    )}
                </div>
            </div>
            )
    }

    addProduct = (product, list) => {
        this.props.addProduct(product, list)
    }
    
}

const mapStateToProps = state => ({
            list: state.list,
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);