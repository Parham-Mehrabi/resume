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
import Skills from "../components/skills.jsx";
import Page404 from "../components/page_404.jsx";
const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={
                //TODO: replace light instead of dark when query doesn't match
                <base_url.Provider value={'/back/'}>
                    <user_theme.Provider
                        value={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark'}>
                        <App/>
                    </user_theme.Provider>
                </base_url.Provider>
            }>
                <Route index element={<IndexPage/>}/>
                <Route path='/resume'>
                    <Route index element={<Resume/>}/>
                    <Route path=':name' element={<Skills/>}/>
                </Route>
                <Route path='/projects'>
                    <Route index element={<Projects/>}/>
                    <Route path=':id' element={<ProjectDetails/>}/>
                </Route>
                <Route path='/Gallery' element={<Gallery/>}/>
                <Route path='*' element={<Page404/>}/>
            </Route>
        )
    )
;

export default router
