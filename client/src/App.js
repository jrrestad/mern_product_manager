import React from 'react';
import { Router, Link } from '@reach/router';
import DisplayAll from './components/DisplayAll'
import ProductForm from './components/ProductForm'
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to Product Manager</h1>
      <div className="links my-3 text-center">
        <Link to="/all">All Products</Link> 
        <span> | </span>
        <Link to="/new">Add new Product</Link>
      </div>
      <Router>
        <DisplayAll path="/all"/>
        <ProductForm path="/new"/>
      </Router>
    </div>
  );
}

export default App;
