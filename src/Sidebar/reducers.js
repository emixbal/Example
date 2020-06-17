export const type = {
    TOOGLE_OPEN: "SIDEBAR_TOOGLE_OPEN",
}

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.TOOGLE_OPEN:
            return {
                ...state,
                open: !state.open
            }
        default:
            return state
    }
}

const defaultState = () => ({
    open: true,
})

export default main