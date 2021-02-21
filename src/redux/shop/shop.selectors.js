import { createSelector } from "reselect";
import memoize from 'lodash.memoize';



const selectdata = state =>state.shopdata;

export const selectallCollection = createSelector(

    [selectdata],
    shopdata=>shopdata.shopCollection

) 

export const selecteachCollection = createSelector(
    [selectallCollection],
    shopCollection=>shopCollection ?
    Object.keys(shopCollection).map(key=>shopCollection[key]) : []
)

export const selectCollection = memoize((CollectionId)=>(
    createSelector(
        [selectallCollection],
        shopCollection =>shopCollection?shopCollection[CollectionId] : null
        )
)
);

export const selectFetchingStatus = createSelector(
    [selectdata],
    selectdata =>selectdata.isFetching
)