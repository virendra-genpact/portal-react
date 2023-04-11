import React, { useContext, useEffect, useReducer } from "react";
import reducer  from "./reducer";

const initialState = {
    isLoading: true,
    quotes: []
}

// context creation 
const AppContext = React.createContext();

// provider
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    let isLoading = true;
    let API = 'http://localhost:3000/api/quotes';

    const fetchApiData = async(url) => {

        dispatch({ type: "SET_LOADING" });

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log('Inside contexrt.js')
            console.log(data)
            dispatch(
                {
                    type: "GET_QUOTES",
                    payload: {
                        quotes: data.quotes,
                        total_pages: data.total_pages,
                        total_entries: data.total_entries,
                        per_page: data.per_page
                    }
                }
            )
            // isLoading = false;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
}

// custome hook creation
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };
// consumer - length so removed
// useContext hook rather than consumer

