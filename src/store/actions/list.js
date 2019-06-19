export const Types = {
    ADD_PRODUCT: "LIST/ADD_PRODUCT",
    DELETE_PRODUCT: "LIST/DELETE_PRODUCT",
    TOGGLE_PRODUCT: "LIST/TOGGLE_PRODUCT",
    UPDATE_PRODUCT: "LIST/UPDATE_PRODUCT",
    NEW_LIST: "LIST/NEW_LIST",
    GET_IMAGE_SUCCESS: "LIST/GET_IMAGE_SUCCESS",
    GET_IMAGE_FAILURE: "LIST/GET_IMAGE_FAILURE",
}

export const Creators = {
    addProduct: (product, list) => ({
        type: Types.ADD_PRODUCT,
        product,
        list,
    }),

    deleteProduct: productId => ({
        type: Types.DELETE_PRODUCT,
        productId,
    }),

    toggleProduct: productId => ({
        type: Types.TOGGLE_PRODUCT,
        productId,
    }),

    updateProduct: (product, list) => ({
        type: Types.UPDATE_PRODUCT,
        product,
        list,
    }),

    newList: () => ({
        type: Types.NEW_LIST,
    }),

    getImageSuccess: (product, image) => ({
        type: Types.GET_IMAGE_SUCCESS,
        product,
        image,
    }),

    getImageFailure: (product, image) => ({
        type: Types.GET_IMAGE_FAILURE,
        product,
        image,
    })
}