import {useContext, useEffect, useState} from "react";
import base_url from "../contexts/base_url.jsx";

export default function (){
    const baseUrl = useContext(base_url)
    useEffect(()=>getProject, [])
    const [projects, setProjects] = useState()

    return <h1 className='text text-center'>{projects}</h1>
    async function getProject(){
        const response = await fetch(baseUrl + 'project')
        const data = await response.json()
        setProjects(data)
    }
}