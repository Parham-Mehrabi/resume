import {useEffect, useState} from "react";


export default function Resume() {
    useEffect(() => getResume, [])
    const [resume, setResume] = useState()
    return (
        <div className='text-white'>
            {resume && resume['body'] ? (
                <h2 className='text-center'>{resume['body']}</h2>
            ) : null
                //TODO: create a loading something for here
            }
        </div>
    )

    async function getResume() {
        const response = await fetch('http://127.0.0.1:8000/back/resume')
        // TODO: use base_url instead of hand coded url
        const data = await response.json()
        setResume(data)
    }
}