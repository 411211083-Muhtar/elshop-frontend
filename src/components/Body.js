import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <main className="main-background">
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Our Shop</h1>
          <p className="lead">Find the best electronics here!</p>
          <hr className="my-4" />
          <p>Explore our wide range of products.</p>
          <a className="btn btn-primary btn-lg" href="#products" role="button">Shop Now</a>
        </div>
      </div>
    </main>
  );
};

export default Body;
