import {useContext, useEffect, useState} from "react";
import base_url from "../../contexts/base_url.jsx";
import {useNavigate} from "react-router-dom";
import Train from "../../elements/train.jsx";
export default function () {
    const baseUrl = useContext(base_url)
    useEffect(() => getProject, [])
    const [projects, setProjects] = useState()
    const navigate = useNavigate()
    return (
        <>
            <div className='container'>
                <div className='text-center text text-info m-2 p-2 text-capitalize border-info rounded-1'
                     onClick={()=>scrollTOTable()}
                     style={{border: 'dashed 1px'}}
                >
                <small>click on each project name to go to details</small>
                </div>
                <div className="alert alert-info small d-flex justify-content-between align-middle" id='hint-1'>
                    <p>
                        the statuses show whether i finished the project or not.
                    </p>
                    <h4 onClick={() => fadeByID('hint-1')}>
                        &times;
                    </h4>
                </div>
                <div className="alert alert-info small d-flex justify-content-between align-middle" id='hint-2'>
                    <p>
                        tags declare which technologies i used in each project.
                    </p>
                    <h4 onClick={() => fadeByID('hint-2')}>
                        &times;
                    </h4>
                </div>
                <hr/>
                <Train>Click on Project names for more Details.</Train>
                <hr className='m-0 p-0'/>
                <div className="table-responsive">
                    <table className='table table-dark table-striped text-center align-middle table-hover' id='da_table'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tags</th>
                            <th>status</th>
                            <th>links</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            projects && projects[0] ? (
                                projects.map(p => {
                                    return (
                                        <tr className='text-center' onClick={() => goToProject(p['id'])} key={p['id']}>
                                            <th>{p['name']}</th>

                                            <td className='border border-info'>
                                                <div className='row'>
                                                    {p['tags'].map(s => {
                                                        return <p className='col-12 col-xs-8 col-sm-5 col-md-3 col-lg-2' key={s}>{s}</p>
                                                    })}
                                                </div>
                                            </td>

                                            <td className={
                                                p['status'] === 'finished' ? ('text-success') : (p['status'] === 'developing' ? 'text-danger' : 'text-warning')
                                            }>{p['status']}</td>

                                            <td>
                                                github: <a className='link-info' href={p['project_link']}>Project
                                                Link</a>
                                                <hr/>
                                                project link: <a className='link-info' href={p['project_link']}>Github
                                                Link</a>
                                            </td>

                                        </tr>
                                    )
                                })

                            ) : null
                        //     TODO: add loader
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

    async function getProject() {
        const response = await fetch(baseUrl + 'project')
        const data = await response.json()
        setProjects(data)
    }

    function goToProject(id) {
        navigate('/Projects/' + id, )
    }

    function fadeByID(id) {
        let element = document.getElementById(id);
        element.style.transition = 'opacity 3s';
        element.style.opacity = '0';
        setTimeout(function () {
            element.classList.add('d-none');
        }, 1500);
    }
    function scrollTOTable(){
        let table = document.getElementById('da_table')
        table.scrollIntoView()
    }
}