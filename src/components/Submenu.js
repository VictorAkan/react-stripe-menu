import React from 'react'
import { useState,useRef,useEffect } from "react"
import { useGlobalContext } from './context'

const Submenu = () => {
    const { isSubmenuOpen, page:{page, links}, location} = useGlobalContext()
    const container = useRef(null)
    const [columns, setColumns] = useState("col-3")
    useEffect(() => {
        setColumns("col-3")
        const submenu = container.current
        const { center,bottom } = location
        submenu.style.left = `${center}px` 
        submenu.style.top = `${bottom}px`
        if (links.length === 3) {
            setColumns("col-3")
        }
        if (links.length > 3) {
            setColumns("col-4")
        }
    }, [page, location, links])
    return (
        <aside
        className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
        ref={container}
        >
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>
                    {links.map((link, index) => {
                        const {url, icon, label} = link
                        return (
                            <a key={index} href={url}>
                                {icon}
                                {label}
                            </a>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Submenu