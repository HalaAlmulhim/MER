import React from 'react';
import axios from 'axios'
import {navigate} from '@reach/router'

const DeleteButton =({id})=>{
    const click=(e)=>{
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
        .then(res => {
            console.log(res);
            navigate(`/pirates/`);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <button onClick={click}>Walk the Plank </button>
    )
}
export default DeleteButton;