import React from "react";

import CustomCard from "../common/CustomCard";

const NewList = (props) => {
    return (
        <CustomCard
            containerClass="new-list-container"
            link="/lista"
        >
            <div>
                <p className="title">Adicionar Nova Lista!</p>
            </div>
        </CustomCard>
    )
}

export default NewList;