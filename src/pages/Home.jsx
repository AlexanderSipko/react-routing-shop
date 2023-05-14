import { useState, useEffect } from 'react'
import { getAllCategories } from '../api'
import Preloads from '../components/Preloads'
import CategoryList from '../components/CategoryList'
import Search from '../components/Search'
import { useLocation } from "react-router-dom";

function Home () {
    let location = useLocation();

    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    function filterCategory(catalog) {
        
        const searchParam = location.search
            .replace('?search', '')
            .replace('=', '').toLowerCase()
        setFilteredCatalog(catalog.filter(
            item => item.strCategory.toLowerCase().includes(
                searchParam
            )
        ))
    }


    // const handleSearch = () => {
    //     filterCategory(catalog)
    // }

    useEffect(() => {
        getAllCategories().then(res =>
            {setCatalog(res.categories);
            if (location.search) {
                filterCategory(res.categories)
            } else {
                setFilteredCatalog(res.categories)
            }
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search])

    return (
        <>
            <div className="container App">
            {/* <Search cb={handleSearch}/> */}
            <Search />
                {!catalog.length?  <Preloads/>: <CategoryList catalog={filteredCatalog}/>}
            </div>
        </>
    )
}

export default Home