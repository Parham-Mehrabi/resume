import {useParams} from "react-router-dom";

export default function (){
    const {id} = useParams()
    return <h1>project details : {id}</h1>
}