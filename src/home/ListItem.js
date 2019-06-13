import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = (props) => {
    return (
        <div className="list-card-item">
            <FontAwesomeIcon icon={props.icon} size="sm" />
            <p>{props.text}</p>
        </div>
    )
}

export default ListItem;