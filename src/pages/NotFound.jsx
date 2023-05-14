import { useNavigate } from "react-router-dom"


function My404Component () {

    const navigate = useNavigate()
    return (
      <div className="container">
        <button className="btn blue" onClick={() => navigate(-1)}>Go Back</button>
        <h5>This Page Not Found</h5>
      </div>
      
    )
}

export default My404Component