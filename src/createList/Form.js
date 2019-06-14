import React, { Component } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const units = ["kg", "lt", "un"];

class Form extends Component {

    state = {
        list: "",
        product: "",
        quantity: "",
        unit: "",
        price: "",
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
                    />

                    <Button variant="outlined" color="secondary" onClick={this.handleSubmit}>Adicionar</Button>
                </div>
                <div className="form-row">
                    <TextField
                        label="Produto"
                        name="product"
                        value={this.state.product}
                        onChange={this.handleChange}
                        required
                    />

                    <TextField
                        label="Quantidade"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                        required
                    />

                    <TextField
                        label="Unidade"
                        name="unit"
                        value={this.state.unit}
                        onChange={this.handleChange}
                        required
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
        this.props.addProduct({ product, quantity, unit, price }, list);
    }
}

export default Form;