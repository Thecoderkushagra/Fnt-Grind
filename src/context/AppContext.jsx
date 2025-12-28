import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    // Add your state and functions here
    const [exampleState, setExampleState] = useState(null);

    // Define the context value
    const contextValue = {
        exampleState,
        setExampleState,
        // Add other state/functions you want to share
    };
    
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};