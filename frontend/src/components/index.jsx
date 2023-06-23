import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function () {
    useEffect(()=>goToProjects, [])
    const navigate = useNavigate()
    const styles = {
        display: 'flex',
        alignContent: 'center',
        backgroundColor: 'rgb(4,10,24)',
        justifyContent: "center",
        color: 'white',
        alignItems: 'center'
    }
    return (
        <>
            <h1 className='text text-center text-info text-capitalize p-3 m-3'>well come to master piece</h1>
            <h4 className='text text-primary-emphasis p-3 m-3 text-capitalize text-center'>this is a SPA choose a tab
                from NavBar or ill redirect you to Projects</h4>
            <div style={styles}>
                <div className='overflow-hidden'>
                    <h1 className='invoker text text-center'>I'm a beacon of knowledge blazing out across the black sea
                        of ignorance</h1>
                </div>
            </div>
        </>
    )
    function goToProjects(){
        setTimeout(
            ()=>{navigate('Projects')}, 10000
        )
    }
}