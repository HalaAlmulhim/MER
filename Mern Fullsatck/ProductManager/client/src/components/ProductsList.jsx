import React from 'react';
import { Link, navigate } from "@reach/router";
import axios from "axios";

const ProductsList = ({products, setChange}) => {

    const deleteHandler = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {setChange(true); navigate("/")})
            .catch(err => console.log(err));
    }

    return (
        <div>
            {
                products.map((product, idx) => {
                    return(
                        <div key={idx} >
                            <hr />
                            <p><strong>Title: </strong> {product.title} </p>
                            <p><Link to={`/${product._id}`} >Details</Link></p>
                            <button onClick={() => deleteHandler(product._id)} >Delete</button>
                            <button onClick={() => navigate(`/${product._id}/edit`)} >Edit</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProductsList;