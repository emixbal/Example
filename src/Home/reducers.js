import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_NAME:
            return {
                ...state,
                name: action.value
            }
        case type.ADD_LIST: 
            return { 
                ...state,
                list: [
                    ...state.list,
                    state.name
                ]
            }
        case type.DELETE_LIST: 
            return {
                ...state,
                list: state.list.filter((value, index) => index != action.value)
            }
        default:
            return state
    }
}

const defaultState = () => ({
    name: "test",
    list: ["aa", "bb"]
})

export default main