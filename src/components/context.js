import React, { useState,useContext } from "react";
import subLinks from "../helpers/data";
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [page, setPage] = useState({ page:"",links:[] })
    const [location, setLocation] = useState({})
    
    const openSideBar = () => {
        setIsSidebarOpen(true)
    }
    const closeSideBar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        const page = subLinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    
    return (
        <AppContext.Provider
        value = {{
            isSidebarOpen,
            openSideBar,
            closeSideBar,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            page,
            location
        }}
        >
            { children }
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext,AppProvider }