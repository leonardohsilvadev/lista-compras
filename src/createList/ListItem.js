import React from "react";

import CustomCard from "../common/CustomCard";
import ListItemFooter from "./ListItemFooter";

import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const ListItem = ({item, deleteProduct, toggleProduct}) => (

        <CustomCard
            containerClass="list-item"
            image="https://img.itdg.com.br/tdg/images/blog/uploads/2017/12/xicara-de-cafe-e-graos.jpg"
            link="#"
            footer={<ListItemFooter item={item} deleteProduct={deleteProduct} />}
        >
        <div>
            <div className="list-item-header">
                <Typography variant="subtitle1" component="h2">{item.product}</Typography>
                <Checkbox onClick={() => toggleProduct(item.id)} checked={item.checked} />
            </div>
                <Typography component="p">{item.quantity} {item.unit}</Typography>
                <Typography component="p">{item.price}</Typography>
        </div>
        </CustomCard>
)

export default ListItem;