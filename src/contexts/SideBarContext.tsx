import {createContext, useContext, useState, ReactNode}from "react";
interface ContextType{
    opened: boolean;
    setOpened: (prev: boolean) => void;
}
const Context = createContext<ContextType | undefined>(undefined)
const useSideBarContext = () => {
    const context = useContext(Context)
    return context
}
function SideBarProvider({children}: {children: ReactNode}){
    const [opened, setOpened] = useState<boolean>(false)
    return(
        <Context.Provider value={{opened, setOpened}}>
            {children}
        </Context.Provider>
    )
}
export {SideBarProvider, useSideBarContext}