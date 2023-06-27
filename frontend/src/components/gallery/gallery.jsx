import CodeSnippets from "./gallery_components/code_snippets.jsx";
import Certificates from "./gallery_components/certificates.jsx";
import {useContext} from "react";
import base_url from "../../contexts/base_url.jsx";

export default function () {
        const baseUrl = useContext(base_url)
    return (
        <>
            <CodeSnippets>{baseUrl}</CodeSnippets>
            <hr/>
            <Certificates>{baseUrl}</Certificates>
            <hr/>
            <div className='text text-center small text-info m-2 p-2 border-bottom border-info'>
            <small id='end_of_certificates'>click on photos to get them fullscreen</small>
            </div>
        </>
    )
}