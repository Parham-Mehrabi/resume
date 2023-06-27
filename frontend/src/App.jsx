import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.js'
import {Outlet} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Navbar from "./components/navbar.jsx";
import user_theme from "./contexts/theme.jsx";

function App() {
    const theme = useContext(user_theme)
    const [themeState, setThemeState] = useState(theme)
    useEffect(() => {
        handleInit()
    }, [])
    return (
        <div className='text-white m-0 p-0' style={{
            backgroundColor: themeState === 'dark' ? 'rgb(4,10,24)' : 'rgba(178,177,177,0.86)',
            height: '100%'
        }} data-bs-theme={themeState}>
            <Navbar/>
            <Outlet/>
        </div>
    )

    function handleInit() {
        if (theme === 'dark') {
            setThemeState('dark')
            document.documentElement.style.backgroundColor = 'rgb(4,10,24)';
            document.documentElement.className = 'parham-scroll';
        } else {
            setThemeState('light')
            document.documentElement.style.backgroundColor = 'rgba(178,177,177,0.86)';
        }
    }
}

export default App
