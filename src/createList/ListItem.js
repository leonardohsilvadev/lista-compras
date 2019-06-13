import React from "react";

import CustomCard from "../common/CustomCard";
import ListItemFooter from "./ListItemFooter";

import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const ListItem = () => (

        <CustomCard
            containerClass="list-item"
            image="https://img.itdg.com.br/tdg/images/blog/uploads/2017/12/xicara-de-cafe-e-graos.jpg"
            link="#"
            footer={<ListItemFooter/>}
        >
        <div>
            <div className="list-item-header">
                <Typography variant="subtitle1" component="h2">Café</Typography>
                <Checkbox />
            </div>
                <Typography component="p">1 Unidade</Typography>
                <Typography component="p">R$ 10,00</Typography>
        </div>
        </CustomCard>
)

export default ListItem;