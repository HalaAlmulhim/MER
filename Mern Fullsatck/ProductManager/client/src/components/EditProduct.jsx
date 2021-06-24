import React, { useState, useEffect } from 'react'
import {navigate} from '@reach/router';
import axios from 'axios';

const EditProduct = ({id}) => {

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ id )
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);  
            })                                      
            .catch(err=>console.log(err));        
    }, [id]);
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+id, {title, price, description})
            .then(res=> navigate('/')) ///////--> AFTER UPDATING THE PRODUCT NAVIGATE TO THE ROOT
            .catch(err=>console.log(err))    
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title: </label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            
            <button>Update</button>
            
        </form>
    );
};

export default EditProduct;