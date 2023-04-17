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
                total_pages: action.payload.total_pages,
                total_entries: action.payload.total_entries,
                per_page: action.payload.per_page,
                isLoading: false
            }
    }
    return state;
}

export default reducer;