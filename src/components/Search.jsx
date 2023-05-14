import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {

    const [value, setValue] = useState('');

    // eslint-disable-next-line no-unused-vars
    let [searchParams, setSearchParams] = useSearchParams();

    const handlerKey = (e) => {
        if (e.key === 'Enter') {
            handlerSubmit()
        }
    }

    const handlerSubmit = () => {
        setSearchParams({search:value})
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    style={{
                        marginLeft:100,
                        maxWidth:'70%',
                        // height:100,
                        marginBottom:0
                    }}
                    type="search"
                    id="search-field"
                    placeholder="search category"
                    onKeyDown={handlerKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            <button
                className="btn blue"
                style={{
                    position:"absolute",
                    top:0,
                    left:0
                }}
                onClick={handlerSubmit}
            >Search</button>
            </div>
        </div>
    )
}

export default Search