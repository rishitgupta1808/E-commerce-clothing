

const INITIAL_STATE = {
    shopCollection : null,
    isFetching : true,
    errorMessage : ''
}

const shopReducer = (state = INITIAL_STATE,actions)=>{

    switch (actions.type) {

        case 'START_FETCHING_COLLECTION':
            return{
            ...state,
            isFetching : true
        }
        case 'SUCCESS_FETCHING_COLLECTION':
            return{
                ...state,
                shopCollection : actions.payload,
                isFetching : false
            }
        
        case 'SHOW_ERROR':
            return{
                ...state,
                errorMessage : actions.payload
            }
    
        default:return state;
    }
}

export default shopReducer;