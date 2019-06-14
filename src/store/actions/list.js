export const Types = {
    ADD_PRODUCT: "ADD_PRODUCT",
    DELETE_PRODUCT: "DELETE_PRODUCT",
    TOGGLE_PRODUCT: "TOGGLE_PRODUCT",
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
    })
}