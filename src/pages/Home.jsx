import { useState, useEffect } from 'react'
import { getAllCategories } from '../api'
import Preloads from '../components/Preloads'
import CategoryList from '../components/CategoryList'
function Home () {

    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        getAllCategories().then(res => setCatalog(res.categories))
    }, [])

    return (
        <div className="container App">
            {!catalog.length?  <Preloads/>: <CategoryList catalog={catalog}/>}
        </div>
    )
}

export default Home