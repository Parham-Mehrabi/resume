import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import React from "react";
import App from "../App.jsx";
import Resume from "../components/resume.jsx";
import user_theme from "../contexts/theme.jsx";
import Contact from "../components/contact.jsx";
import Projects from "../components/projects/projects.jsx";
import ProjectDetails from "../components/projects/project_details.jsx";
import base_url from "../contexts/base_url.jsx";
import IndexPage from '../components/index.jsx'
import Gallery from "../components/gallery/gallery.jsx";
const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={
                //TODO: replace light instead of dark when query doesn't match
                <base_url.Provider value={'http://192.168.106.219:8000/back/'}>
                    <user_theme.Provider
                        value={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark'}>
                        <App/>
                    </user_theme.Provider>
                </base_url.Provider>
            }>
                <Route index element={<IndexPage/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/projects/:id' element={<ProjectDetails/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/Gallery' element={<Gallery/>}/>
            </Route>
        )
    )
;

export default router
