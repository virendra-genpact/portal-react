const reducer = (state, action) => {
    switch(action.type) {
        case "SET_LOADING":
            return {
                ... state,
                isLoading: true,
            }
        case "GET_QUOTES":
            return{
                ...state,
                quotes: action.payload.quotes,
                isLoading: false
            }
    }
    return state;
}

export default reducer;