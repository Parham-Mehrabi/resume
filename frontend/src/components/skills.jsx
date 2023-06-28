import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import base_url from "../contexts/base_url.jsx";

export default function () {
    const {name} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        RetrieveSkill(name)
    }, [])

    const [skill, setSkill] = useState()
    const baseURL = useContext(base_url)
    return (
        skill ? (
            <div className='container'>
                <h1 className='text text-center p-3 m-3 fw-bolder text-info'>{skill['name']}</h1>
                <div className='d-flex justify-content-center'>
                    {skill['tier'] === 0 ? (
                        <div className='d-flex justify-content-between border-info-subtle border p-2 m-2'>
                            <h2 className='m-4'>LEVEL</h2> <h2 className='text text-warning-emphasis my-auto mx-4'>familiar with</h2>
                        </div>
                    ) : (
                        skill['tier'] === 1 ? (
                            <div className='d-flex justify-content-between border-info-subtle border p-2 m-2'>
                                <h2 className='m-4'>LEVEL</h2>
                                <h2 className='mx-4 my-auto text border-bottom border-success border-2 text-success fw-bolder'>medium</h2>
                            </div>
                        ) : (
                            <div className='d-flex justify-content-between border-info-subtle border p-2 m-2'>
                                <h2 className='m-4'>LEVEL</h2>
                                <h2 className='text mx-4 text-danger fw-bolder my-auto font-monospace shadow shadow-lg border-bottom border-info'>GOD
                                    tier </h2>
                            </div>
                        )
                    )}
                </div>
                    <div>
                        <p className='text text-info font-monospace text-center border-info border m-5 px-3 py-5 fw-bolder bg-secondary-subtle'>{skill['details']}</p>
                    </div>
                <div className='d-flex justify-content-center'>
                <button
                    onClick={()=>{
                        navigate(-1)
                    }}
                    className='btn btn-lg btn-outline-info'>Back</button>
                </div>
            </div>
        ) : null
    )

    async function RetrieveSkill(name) {
        const response = await fetch(baseURL + 'resume/skill/' + name)
        if (response.status === 200) {
            const data = await response.json()
            setSkill(data)
        } else if(response.status === 404) {
            navigate(-1)
        }else{
            alert(response.status)
            navigate(-1)
        }
    }

}