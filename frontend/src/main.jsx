import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import router from './routers/main_router.jsx'
import './styles/project_details.css'
import './styles/navbar.css'
import './styles/elements_train.css'
import './styles/resume.css'
import './styles/home_loading.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)