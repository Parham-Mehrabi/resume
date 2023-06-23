import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import base_url from "../../contexts/base_url.jsx";
import Pictures from './project_images.jsx'
import '../../styles/project_details.css'

export default function () {
    useEffect(() => getProjectDetails, [])
    const navigate = useNavigate()
    const baseUrl = useContext(base_url)
    const {id} = useParams()
    const [project, setProject] = useState()
    return (
        project ? (<>
            <div className="container">
                <h2 className='text text-center fw-bolder p-3 text-primary'>{project['name']}</h2>
                <div className='m-3 p-3'>
                    <h3 className='text-info'>
                        {project['description']}
                    </h3>
                </div>
                <div className='row mw-100'>
                    <div className='col'>
                        <div className='border border-info m-3 p-3'>
                            <p className='fw-bolder text text-info text-capitalize'> i used following technologies in
                                this project : </p>
                            <ul className='list-group overflow-auto parham-scroll rounded-0'>
                                {project['tags'].map(skill => {
                                    return <li className='list-group-item list-group-item-info'>{skill}</li>

                                })}
                                <li className='list-group-item list-group-item-info'>skill</li>
                                <li className='list-group-item list-group-item-info'>skill</li>
                                <li className='list-group-item list-group-item-info'>skill</li>
                                <li className='list-group-item list-group-item-info'>skill</li>
                                <li className='list-group-item list-group-item-info'>skill</li>
                                <li className='list-group-item list-group-item-info'>skill</li>
                                <li className='list-group-item list-group-item-info'>skill</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='m-3 p-3 border border-info-subtle'>
                            <div className=''>
                                GitHub:<a href={project['github_link']}> {project['github_link']}</a>
                                <hr/>
                                Project:<a href={project['project_link']}> {project['project_link']}</a>
                            </div>
                        </div>
                        <div className='m-3 p-3 border'>
                            <h3 className='text d-flex justify-content-between text text-capitalize'>
                                <strong>STATUS</strong><strong
                                className={project['status'] === 'finished' ? ('text-success') : (project['status'] === 'developing' ? 'text-danger' : 'text-warning')}>{project['status']}</strong>
                            </h3>
                        </div>
                    </div>
                </div>
                <Pictures>{id}</Pictures>
            </div>
        </>) : null
    )


    async function getProjectDetails() {
        const response = await fetch(baseUrl + 'project/' + id)
        if (response.status === 200){
        const data = await response.json()
        setProject(data)
        }else if(response.status === 404){
            navigate('/projects')
        }

    }
}