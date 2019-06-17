export const Types = {
    START_UPDATE: "FORM/START_UPDATE",
    FINISH_UPDATE: "FORM/FINISH_UPDATE",
}

export const Creators = {
    startUpdate: product => ({
        type: Types.START_UPDATE,
        product,
    }),

    finishUpdate: product => ({
        type: Types.FINISH_UPDATE,
    })
}