import React, { Component } from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { Creators as FormActions } from "../store/actions/form";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const units = ["Kilos", "Litros", "Unidade"];

class Form extends Component {

    state = {
        list: "",
        product: "",
        quantity: "",
        unit: "",
        price: "",
        showErrors: false,
    }

    componentDidUpdate(prevProps) {
        if (this.props.form.action === "update" && prevProps.form.productToUpdate !== this.props.form.productToUpdate) {
            const { product, quantity, unit, price } = this.props.form.productToUpdate;

            this.setState({
                product,
                quantity,
                unit,
                price,
            })
        }
    }

    render() {
        return (
            <form className="form-container">
                <div className="form-row">
                    <TextField
                        label="Lista"
                        name="list"
                        value={this.state.list}
                        onChange={this.handleChange}
                        required
                        error={!this.state.list && this.state.showErrors}
                    />

                    <Button variant="outlined" color="secondary" onClick={this.handleSubmit}>Salvar</Button>
                </div>
                <div className="form-row">
                    <TextField
                        label="Produto"
                        name="product"
                        value={this.state.product}
                        onChange={this.handleChange}
                        required
                        error={!this.state.product && this.state.showErrors}
                    />

                    <TextField
                        label="Quantidade"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        required
                        error={!this.state.quantity && this.state.showErrors}
                    />

                    <TextField
                        label="Unidade"
                        name="unit"
                        value={this.state.unit}
                        onChange={this.handleChange}
                        required
                        error={!this.state.unit && this.state.showErrors}
                        select
                    >
                        {units.map(option => (
                            <MenuItem
                                key={option}
                                value={option}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Preço"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>
                        }}
                    />
                </div>
            </form>
        )
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        const { list, product, quantity, unit, price } = this.state;

        if (!list || !product || !quantity || !unit) {
            this.setState({ showErrors: true });  
        } else {
            this.props.form.action === "new" ?
            this.addItem(list, product, quantity, unit, price) :
            this.updateItem(list, product, quantity, unit, price)
        }
    }

    addItem = (list, product, quantity, unit, price) => {
        this.props.addProduct({ product, quantity, unit, price }, list);
        this.clearState();
    }

    updateItem = (list, product, quantity, unit, price) => {
        const { id, checked } = this.props.form.productToUpdate;
        this.props.updateProduct({ product, quantity, unit, price, id, checked }, list);
        this.clearState();
        this.props.finishUpdate();
    }


    clearState = () => {
        this.setState({ product: "", quantity: "", unit: "", price: "" });
    }

}

const mapStateToProps = state => ({
    form: state.form,
})

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);