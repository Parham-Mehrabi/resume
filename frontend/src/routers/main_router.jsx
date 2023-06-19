import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import React from "react";
import App from "../App.jsx";
import Resume from "../components/resume.jsx";
import user_theme from "../contexts/theme.jsx";
import Contact from "../components/contact.jsx";
import Projects from "../components/projects.jsx";
const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={
                <user_theme.Provider value={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light'}>
                        <App/>
                </user_theme.Provider>
            }>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>projects
            </Route>
        )
    )
;

export default router
