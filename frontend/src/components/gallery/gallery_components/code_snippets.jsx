import {useEffect, useState} from "react";

export default function (props) {
    const [codeSnippets, setCodeSnippets] = useState()
    const baseURl = props.children
    useEffect(() => {
        getCodePics();
    }, [])
    return (
        <div className='container'>
            <h2 className='text text-primary-emphasis text-center p-2 m-2
             fw-bolder text-capitalize d-flex'>some screen shots from my work space</h2>
            {codeSnippets ? (
                <div className='row'>
                    {codeSnippets.map(codeSnippets => {
                            return (
                                <div className='border border-info-subtle container-fluid col-xs-12 col-md-6 p-1'
                                     key={codeSnippets['id']}>
                                    <img className='' src={codeSnippets['picture']}
                                         alt="" onClick={() => {
                                        window.location = codeSnippets['picture']
                                    }}
                                    width={'100%'}/>
                                </div>
                            )
                        }
                    )}
                </div>
            ) : null}
        </div>
    )

    async function getCodePics() {
        const response = await fetch(baseURl + 'project/image/')
        const data = await response.json()
        setCodeSnippets(data)
    }
}