import React from 'react'
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from './context'
import logo from "../images/logo.svg"

const Navbar = () => {
    const { openSideBar,openSubmenu,closeSubmenu } = useGlobalContext()
    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 2
        openSubmenu(page, { center,bottom })    
    }   
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains("link--btn")) {
            closeSubmenu()
        }
    }
    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center mb-4 d-flex container">
                <div className="nav-header">
                    <img className="nav-logo" src={logo} alt="logo" />
                </div>
                <ul className="nav--links m-auto">
                    <li>
                        <button className="link--btn me-5" onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className="link--btn me-5" onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className="link--btn" onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className="register--btn btn ms-auto btn-dark">Sign in</button>
                <button className="btn toggle-btn d-md-none ms-auto" onClick={openSideBar}>
                        <FaBars />
                </button>
            </div>
        </nav>
    )
}

export default Navbar