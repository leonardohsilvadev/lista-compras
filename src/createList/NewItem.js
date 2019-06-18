import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import CustomCard from "../common/CustomCard";

import { Creators as FormActions } from "../store/actions/form";

const NewItem = (props) => (

    <CustomCard link="#" action={() => props.startAdd(props.list)} containerClass="list-item">
        <div className="new-item">
            <p className="title">Novo Produto</p>
            <FontAwesomeIcon icon={faPlusCircle} color="#E4E4E4" size="8x" />
        </div>
    </CustomCard>

)

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(NewItem);