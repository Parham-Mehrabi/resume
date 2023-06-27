import CodeSnippets from "./gallery_components/code_snippets.jsx";
import Certificates from "./gallery_components/certificates.jsx";
import {useContext} from "react";
import base_url from "../../contexts/base_url.jsx";

export default function () {
        const baseUrl = useContext(base_url)
    return (
        <>
            <Certificates>{baseUrl}</Certificates>
            <hr/>
            <CodeSnippets>{baseUrl}</CodeSnippets>
        </>
    )

}