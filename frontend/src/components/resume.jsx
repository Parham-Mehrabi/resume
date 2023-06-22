import {useContext, useEffect, useState} from "react";
import '../styles/resume.css'
import base_url from "../contexts/base_url.jsx";

export default function Resume() {
    useEffect(() => getResume, [])
    const [resume, setResume] = useState()
    const baseUrl = useContext(base_url)
    return (
        <div className='text-white m-0 p-0'>
            {resume && resume['body'] ? (
                <div className='container-fluid'>
                    <h2 className='text-capitalize'>
                        hi im parham the web developer
                    </h2>
                    <p className='text-justify'>{resume['body']}</p>
                    <hr/>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='resume_skills h-100'>
                                <h3 className='text text-center'>Django</h3>
                                <ul className='row'>
                                    {resume['django'].map(skill => {
                                        return <li className={'col-4 text text-center skill_tier_'+ skill[1]}>{skill[0]}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 '>
                            <div className='resume_skills h-100'>
                                <h3 className='text text-center'>FrontEnd</h3>
                                <ul className='row'>
                                    {resume['frontend'].map(skill => {
                                        return <li className={'col-4 text text-center skill_tier_'+ skill[1]}>{skill[0]}</li>
                                    })}

                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='resume_skills h-100'>
                                <h3 className='text text-center'>Node</h3>
                                <ul className='row'>
                                    {resume['node'].map(skill => {
                                        return <li className={'col-4 text text-center skill_tier_'+ skill[1]}>{skill[0]}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='resume_skills h-100'>
                                <h3 className='text text-center'>Linux</h3>
                                <ul className='row'>
                                    {resume['linux'].map(skill => {
                                        return <li className={'col-4 text text-center skill_tier_'+ skill[1]}>{skill[0]}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='resume_skills'>
                                <h3 className='text text-center'>other skills</h3>
                                <ul className='row'>
                                    {resume['others'].map(skill => {
                                        return <li className={'col-1 text text-center skill_tier_'+ skill[1]}>{skill[0]}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
                //TODO: create a loading something for here
            }
        </div>
    )

    async function getResume() {
        const response = await fetch(baseUrl + 'resume')
        const data = await response.json()
        setResume(data)
    }
}
//TODO: fetch each skill details on Click on show on the very same page
//TODO: modify backend to send skill tier and use it here as well
