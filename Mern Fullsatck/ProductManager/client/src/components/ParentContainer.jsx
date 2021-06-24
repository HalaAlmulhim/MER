import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Router } from "@reach/router";
import CreateProduct from './CreateProduct';
import ProductsList from './ProductsList';
import DisplayOneProduct from './DisplayOneProduct';
import EditProduct from './EditProduct';

const ParentContainer = () => {

    const [products, setProducts] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {setProducts(res.data); setChange(false)})
            .catch(err=>console.log(err));
    }, [change]);

    return (
        <div>
            <Router>
                <CreateProduct path={"/"} setChange={setChange} />
                <EditProduct path={"/:id/edit"} setChange={setChange} />
            </Router>
            <Router>
                <ProductsList products={products} path={"/"} setChange={setChange} />
                <DisplayOneProduct path={"/:id"} setChange={setChange} />
            </Router>
        </div>
    );
};

export default ParentContainer;