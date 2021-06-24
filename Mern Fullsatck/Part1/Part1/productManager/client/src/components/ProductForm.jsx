import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")

    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            title,
            price,
            description
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }
    
    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={formHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={e => setTitle(e.target.value)} />
                </div>

                <div>
                    <label>Price: </label>
                    <input type="number" onChange={e => setPrice(e.target.value)} />
                </div>

                <div>
                    <label>Description: </label>
                    <input type="text" onChange={e => setDescription(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default ProductForm;
