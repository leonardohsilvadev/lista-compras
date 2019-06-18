export const Types = {
    START_UPDATE: "FORM/START_UPDATE",
    FINISH_UPDATE: "FORM/FINISH_UPDATE",
    START_ADD: "FORM/START_ADD",
    FINISH_ADD: "FORM/FINISH_ADD"
}

export const Creators = {
    startUpdate: (product, list) => ({
        type: Types.START_UPDATE,
        product,
        list,
    }),

    finishUpdate: () => ({
        type: Types.FINISH_UPDATE,
    }),

    startAdd: list => ({
        type: Types.START_ADD,
        list,
    }),

    finishAdd: () => ({
        type: Types.FINISH_ADD,
    })
}