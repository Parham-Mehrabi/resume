import '../styles/home_loading.css'

export default function HomeLoading() {
    const styles = {
        height: '100vh',
        display: 'flex',
        alignContent: 'center',
        backgroundColor: 'rgb(4,10,24)',
        justifyContent: "center",
        color: 'white',
        alignItems: 'center'
    }
    return (
        <div style={styles}>
            <div className='overflow-hidden'>
            <h1 className='invoker text text-center'>I'm a beacon of knowledge blazing out across the black sea of ignorance</h1>
            <small className='text text-secondary'>the site is loading data please wait . . .</small>
            </div>
        </div>
    )

}