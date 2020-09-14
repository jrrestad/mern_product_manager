import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductForm = () => {

    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    })

    const [errors, setErrors] = useState({
        title: '',
        price: '',
        description: ''
    })
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', product)
        .then(res => {
            if (res.data.errors) {
                setErrors(res.data.errors)
            } else {
                navigate("/all")
        }})
        .catch(err => console.log(err))
    }

    const changeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div className="container">
            <form onSubmit={ submitHandler }>
                {
                    errors.title ?
                    <p className="text-danger">{ errors.title.message }</p>
                    : ""
                }
                <input className="form-control" placeholder="Title..." type="text" name="title" onChange={ changeHandler }/>
                <br/>
                {
                    errors.price ?
                    <p className="text-danger">{ errors.price.message }</p>
                    : ""
                }
                <input className="form-control" placeholder="Price..." type="number" name="price" onChange={ changeHandler }/>
                <br/>
                {
                    errors.description ?
                    <p className="text-danger">{ errors.description.message }</p>
                    : ""
                }
                <textarea className="form-control" placeholder="Description..."name="description" id="" cols="30" rows="10" onChange={ changeHandler }></textarea>
                <br/>
                <input className="btn btn-primary form-control" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ProductForm;