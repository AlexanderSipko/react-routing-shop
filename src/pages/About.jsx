import {useNavigate} from 'react-router-dom'

function About () {

    const navigate = useNavigate()
    return (
        <div className='container'>
            <button className="btn blue" onClick={() => navigate(-1)}>go back</button>
            <h1>Hello, from About Page</h1>
        </div>
        
    )
}

export default About