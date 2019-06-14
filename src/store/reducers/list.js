import { Types } from "../actions/list";

const INITIAL_STATE = {
    list: null,
    items: [],
}

export default function list(state=INITIAL_STATE, action) {
    switch(action.type) {
        case Types.ADD_PRODUCT:
            return {
                list: action.list,
                items: [ ...state.items,
                    { ...action.product,
                        total: getItemTotal(action.product),
                    }
                ]
            };

        default:
            return state;
    }
}

function getItemTotal(product) {
    return product.price * product.quantity;
}