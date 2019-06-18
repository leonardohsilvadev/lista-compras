import React, { Component } from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { Creators as ListActions } from "../store/actions/list";

import Form from "./Form";
import ListItem from "./ListItem";
import NewItem from "./NewItem";

import "./List.css";

class CreateList extends Component {
    render() {
        return (
            <div className="page-container">
                <Form
                    addProduct={this.props.addProduct}
                    updateProduct={this.props.updateProduct}
                    url={this.props.match.params.action}
                />

                <div className="list-items-container">
                    {this.props.list.items.map(item =>
                        <ListItem
                            list={this.props.list.list}
                            item={item}
                            key={item.id}
                            deleteProduct={this.props.deleteProduct}
                            toggleProduct={this.props.toggleProduct}
                        />
                    )}

                    {this.props.match.params.action === "editar" && (
                        <NewItem list={this.props.list.list} />
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