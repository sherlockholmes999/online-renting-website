import React, { useState } from 'react'
import Axios from 'axios'

const Search = () => {

    const [pid, setPid] = useState(0);

    const getit = () => {
        Axios.get(`http://localhost:3001/enquireproperty/${pid}`).then(response => {
           if(response.data.available) window.alert("property is available")
           else window.alert("property is occupied")
        })
    }

    return (
       <>
       <br/>
       <input type = "number" onChange={e => setPid(e.target.value)} />  <button onClick={getit} > Search</button>
       </>
    )
}

export default Search ;