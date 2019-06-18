import { Types } from "../actions/form";

const INITIAL_STATE = {
    action: null,
    productToUpdate: {},
    listToUpdate: null,
}

export default function form(state=INITIAL_STATE, action) {
    switch (action.type) {
        case Types.START_UPDATE:
            return {
                action: "update",
                productToUpdate: action.product,
                listToUpdate: action.list,
            };

        case Types.FINISH_UPDATE:
            return {
                action: null,
                productToUpdate: {},
                listToUpdate: null,
            }

        case Types.START_ADD:
            return {
                ...state,
                action: "new",
                listToUpdate: action.list,

            }

        case Types.FINISH_ADD:
            return {
                action: null,
                listToUpdate: null,
                productToUpdate: {},
            }

        default:
            return state;
    }
}