import { createContext, useContext } from "react";


export const AppContext = createContext()


export const AppProvider = ( { children } ) => {

    return <AppContext.Provider value={{

    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobal = () => {
    return useContext( AppContext )
}