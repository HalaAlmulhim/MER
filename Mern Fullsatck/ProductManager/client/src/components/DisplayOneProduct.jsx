import React, {useEffect, useState} from 'react';
import { navigate } from "@reach/router";
import axios from 'axios';

const DisplayOneProduct = ({id, setChange}) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ id )
            .then(res => setProduct(res.data))
            .catch(err=>console.log(err));        
    }, [id]);

    const deleteHandler = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => { setChange(true); navigate("/")})
            .catch(err => console.log(err));
    }

    return (
        <div>
            <hr />
            <h1>Title: {product.title}</h1>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
            <button onClick={() => deleteHandler(product._id)} >Delete</button>
            <button onClick={() => navigate(`/${product._id}/edit`)} >Edit</button>
            <hr />
        </div>
    );
};

export default DisplayOneProduct;