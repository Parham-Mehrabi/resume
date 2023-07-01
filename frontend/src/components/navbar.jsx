import {NavLink} from "react-router-dom";
import user_theme from "../contexts/theme.jsx";
import {useContext, useEffect, useState} from "react";

export default function Navbar() {
    const theme = useContext(user_theme)
    const [navbarClasses, setNavbarClasses] = useState('')
    useEffect(() => {
        handleNavbarClasses()
    }, [])

    return (
        <nav className={navbarClasses}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around w-100">
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="/Projects">Projects</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' aria-current="page" to="/Resume">About me</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="/Gallery" tabIndex="-1" aria-disabled="true">Gallery</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

    function handleNavbarClasses() {
        if (theme === 'dark') {
            setNavbarClasses('navbar navbar-expand-lg navbar-dark bg-dark');
        } else {
            setNavbarClasses('navbar navbar-expand-lg navbar-light bg-light')
        }
    }

}