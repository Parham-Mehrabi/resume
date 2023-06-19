import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import {Outlet} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import HomeLoading from "./components/home_loading.jsx";
import Navbar from "./components/navbar.jsx";
import user_theme from "./contexts/theme.jsx";

function App() {
    const theme = useContext(user_theme)
    const [loading, setLoading] = useState(false)
    const [themeState, setThemeState] = useState(theme)
    useEffect(()=>handleInit, [])
    return loading ? (
        <HomeLoading/>
    ) : (
        <div className='text-white' style={{backgroundColor: themeState === 'dark'? 'rgb(4,10,24)': 'rgba(178,177,177,0.86)', height: '100vh'}} data-bs-theme={themeState}>
            <Navbar/>
            <Outlet/>
        </div>
    )

    function handleInit(){
        if (theme === 'dark'){
        setThemeState('dark')
        }else {
        setThemeState('light')
        }
    }
}

export default App
