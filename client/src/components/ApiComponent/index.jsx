import { React, useState, useEffect } from 'react'
import API from '../../utils/API'


function ApiComponent() {

    const [movie, setMovie] = useState([])

    useEffect( async() => {
       const response = await API.getResponse.response;
       console.log(response);
    }, [])
   
    return (
        <div>
            
        </div>
    )
}

export default ApiComponent
