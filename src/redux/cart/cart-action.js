

export const toggleCart = () =>({
    type : 'TOGGLE_LIST'
})

export const addItem = (item) => ({
    type : "ADD_ITEM",
    payload : item
})

export const clearItem = (item) =>({
    type: "CLEAR_ITEM",
    payload : item
})

export const removeItem = (item) =>({
    type : "REMOVE_ITEM",
    payload : item
})

export const signOutClearCart = () =>({
    type : 'SIGN_OUT_CLEAR_CART'
})