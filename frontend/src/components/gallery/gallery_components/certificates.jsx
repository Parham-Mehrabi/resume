import {useEffect, useState} from "react";
import '../../../styles/gallery/certificates.css'

export default function (props) {

    useEffect(() => {
        getCertificatePics()
    }, [])
    const baseURl = props.children
    const [certificates, setCertificates] = useState()
    return (
        <>
            <h2 className='text text-primary-emphasis text-center p-2 m-2
             fw-bolder text-capitalize d-flex'>these are my
                certificates</h2>
            {certificates ? (
                certificates.map(certificate => {
                    return (
                        <div className='border border-info-subtle container-fluid d-flex text text-center'
                             key={certificate['id']}>
                            <div className="row w-100">
                                <div className='col-lg-10 col-12'>
                                    <img className='certificate-image p-2 m-2' src={certificate['image']}
                                         alt="" onClick={()=>{window.location = certificate['image']}}/>
                                </div>
                                <div className='col-lg-2 col-12'>
                                    <div className='certificate-details p-2 m-2'>
                                    <h4 className='text text-primary-emphasis fw-bolder'>{certificate['name']}</h4>
                                    <p className='text text-primary'>{certificate['certificate_source']}</p>
                                    <p className='text text-info'> master: {certificate['course_main_master']}</p>
                                    <p className='text text-small text-secondary'>Grade: {certificate['score']}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : (
                <>
                </>
            )}
        </>
    )

    async function getCertificatePics() {
        const response = await fetch(baseURl + 'resume/certificates/')
        const data = await response.json()
        setCertificates(data)
    }
}