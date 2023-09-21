import {createContext, useContext, useState, ReactNode, Dispatch, SetStateAction}from "react";
interface ContextType{
    opened: boolean;
    setOpened: (prev: boolean) => void;
    searchState: string | null;
    setSearchState: Dispatch<SetStateAction<any>>;
}
export const Context = createContext<ContextType | undefined>(undefined)
const useSideBarContext = () => {
    const context = useContext(Context)
    return context
}
function SideBarProvider({children}: {children: ReactNode}){
    const [opened, setOpened] = useState<boolean>(false)
    const [searchState, setSearchState] = useState<string>("")
    return(
        <Context.Provider value={{opened, setOpened, searchState, setSearchState}}>
            {children}
        </Context.Provider>
    )
}
export {SideBarProvider, useSideBarContext}