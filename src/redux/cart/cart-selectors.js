
import { createSelector } from "reselect";

const selectCart = state =>state.cart;

export const selectCartCollection = createSelector(
    [selectCart],
    cart=>cart.collection
)

export const selecthidden = createSelector(
   [selectCart],
   cart=>cart.hidden
)

export const selectCartItemCount = createSelector(
    [selectCartCollection],
    collection => collection.reduce((accumlator,currElem)=>accumlator+currElem.quantity,0)
)

export const selectTotalPrice = createSelector(
    [selectCartCollection],
    collection => collection.reduce((accumlator,currElem)=>accumlator+currElem.quantity*currElem.price,0)
)


