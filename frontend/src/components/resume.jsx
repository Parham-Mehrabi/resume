import {useContext, useEffect, useState} from "react";
import base_url from "../contexts/base_url.jsx";
import Train from "../elements/train.jsx";
import {useNavigate} from "react-router-dom";
import Contact from "./contact.jsx";

export default function Resume() {
    useEffect(() => {
        getResume()
    }, [])
    const navigate = useNavigate()
    const [resume, setResume] = useState()
    const baseUrl = useContext(base_url)
    return (
        <>
            <div className='text-white m-0 p-0'>
                {resume && resume['body'] ? (
                    <div className='container-fluid'>
                        <h2 className='text-capitalize'>
                            hi im parham the web developer
                        </h2>
                        <p className='text-justify'>{resume['body']}</p>
                        <hr className='m-0 p-0'/>
                        <Train>i have some certificates for some of these and their pictures are available in gallery
                            :D</Train>
                        <hr className='m-0 p-0'/>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className='resume_skills h-100'>
                                    <h3 className='text text-center'>Django</h3>
                                    <ul className='row'>
                                        {resume['django'].map(skill => {
                                            return <li
                                                onClick={() => {
                                                    navigate(skill[0])
                                                }}
                                                className={'col-xs-12 col-md-4 text text-center skill_tier_' + skill[1]}
                                                key={'skill' + skill[2]}>{skill[0]}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 '>
                                <div className='resume_skills h-100'>
                                    <h3 className='text text-center'>FrontEnd</h3>
                                    <ul className='row'>
                                        {resume['frontend'].map(skill => {
                                            return <li
                                                onClick={() => {
                                                    navigate(skill[0])
                                                }}
                                                className={'col-xs-12 col-md-4 text text-center skill_tier_' + skill[1]}
                                                key={'skill' + skill[2]}>{skill[0]}</li>
                                        })}

                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='resume_skills h-100'>
                                    <h3 className='text text-center'>Node</h3>
                                    <ul className='row'>
                                        {resume['node'].map(skill => {
                                            return <li
                                                onClick={() => {
                                                    navigate(skill[0])
                                                }}
                                                className={'col-xs-12 col-md-4 text text-center skill_tier_' + skill[1]}
                                                key={'skill' + skill[2]}>{skill[0]}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='resume_skills h-100'>
                                    <h3 className='text text-center'>Linux</h3>
                                    <ul className='row'>
                                        {resume['linux'].map(skill => {
                                            return <li
                                                onClick={() => {
                                                    navigate(skill[0])
                                                }}
                                                className={'col-xs-12 col-md-4 text text-center skill_tier_' + skill[1]}
                                                key={'skill' + skill[2]}>{skill[0]}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='resume_skills'>
                                    <h3 className='text text-center'>other skills</h3>
                                    <ul className='row '>
                                        {resume['others'].map(skill => {
                                            return <li
                                                onClick={() => {
                                                    navigate(skill[0])
                                                }}
                                                className={'col-xs-12 col-sm-5 col-md-2 text text-center skill_tier_' + skill[1]}
                                                key={'skill' + skill[2]}>{skill[0]}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='container-fluid'>
                        <div className='border-info-subtle border p-2 m-2'>
                            <div className='d-flex justify-content-center p-3 m-3'>
                                <div className="spinner-border text-info" role="status"></div>
                            </div>
                            <h3 className='text text-center text-info'>
                                LOADING RESUME . . .
                            </h3>
                        </div>
                    </div>
                )
                }

            </div>
            <Contact/>
        </>
    )

    async function getResume() {
        const response = await fetch(baseUrl + 'resume')
        const data = await response.json()
        setResume(data)
    }
}
//TODO: fetch each skill details on Click on show on the very same page
//TODO: modify backend to send skill tier and use it here as well
