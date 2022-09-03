import { useEffect, useState } from 'react'
import axios from 'axios'

function SveKnjige() {

    useEffect(() => {
        axios.get("http://localhost:8000/api/vrati-sve-knjige/").then(res => {
            console.log(res.data)
        });

    }, []);


    return (
        <div>
            
        </div>
    )

}

export default SveKnjige;