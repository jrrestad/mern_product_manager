import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Details = (props) => {

    const { id } = props;

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response => {
                console.log(response.data)
                setProduct(response.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [id]);

    return(
        <div className="container">
            {
                loading ?
                <p>loading data...</p>
                :
            <>
                <h3>{product.title}</h3>
                <h4>Price: ${product.price}</h4>
                <p>{product.description}</p>
            </>
            }
        </div>
    )
}

export default Details;