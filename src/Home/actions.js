export const type = {
    CHANGE_NAME: "HOME_CHANGE_NAME",
    ADD_LIST: "HOME_ADD_LIST",
    DELETE_LIST: "HOME_DELETE_LIST",
}

export const change_name = (value) => ({
    type: type.CHANGE_NAME,
    value
})

export const add_list = () => ({
    type: type.ADD_LIST,
})

export const delete_list = (value) => ({
    type: type.DELETE_LIST,
    value
})


export default type