import {useContext, useEffect, useState} from "react";
import base_url from "../../contexts/base_url.jsx";

export default function (props) {

    useEffect(() => {
        getPictures(props.children)
    }, [])
    const [projectImages, setProjectImages] = useState()
    const baseUrl = useContext(base_url)
    return (
        <>
            <div className={'m-3 p-3 border border-warning-subtle'}>
                <h3>project code images: </h3>
                {projectImages ? (
                        <>
                            {projectImages.map(pic => {
                                return (<>
                                        <img width='100%' className='img-responsive border border-info'
                                             src={pic['picture']}
                                             alt="img not loaded" key={pic['id']}
                                            onClick={()=>{window.location = pic['picture']}}
                                        />
                                        <hr/>
                                    </>
                                )
                            })
                            }
                        </>
                    )
                    :
                    (
                        <div className='d-flex justify-content-center'>
                            <div className="spinner-border text-info" role="status"></div>
                        </div>
                    )
                }
            </div>
        </>
    )

    async function getPictures(id) {
        const response = await fetch((baseUrl + 'project/image/' + id))
        const data = await response.json()
        setProjectImages(data)
    }
}

