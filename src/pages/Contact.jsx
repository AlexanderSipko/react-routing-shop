import { useNavigate } from "react-router-dom"


function Contact () {

    const navigate = useNavigate()
    return (
        <div className="container">
            <button className="btn blue goBack" onClick={() => navigate(-1)}>go back</button>
            <h1>Hello, from Contact</h1>
        </div>
        
    )
}

export default Contact