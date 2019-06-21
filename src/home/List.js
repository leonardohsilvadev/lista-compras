import React from "react";

import CustomCard from "../common/CustomCard";
import ListFooter from "./ListFooter";
import ListItem from "./ListItem";

import "./List.css";

import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
    return (
        <CustomCard containerClass="list-container"
            link="/lista/editar"
            cardClass={props.openedItems < 1 ? "closed-list" : "opened-list"}
            footer={
                <ListFooter total={props.total} />
            }
        >
            <div>
                <p className="title">{props.list}</p>
                <div className="list-card-body">
                    <ListItem
                        icon={faShoppingBasket}
                        text= {`${props.openedItems} Item(s) Restante(s)`}
                    >
                    </ListItem>

                    <ListItem
                        icon={faCheck}
                        text={`${props.closedItems} Item(s) Comprado(s)`}
                    >
                    </ListItem>
                </div>

            </div>
        </CustomCard>
    )
}

export default List;