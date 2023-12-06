import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductsSlice";
import { productsList } from "./ProductsSlice";
import { Link } from "react-router-dom";
import Loading from "../Sceleton/Sceleton";

import { addCart } from "./ProductsSlice";

import "./products.scss"

const Products = () => {
      const dispatch = useDispatch();
      const data = useSelector(productsList);
      const status = useSelector((state) => state.status);
      const [filter, setFilter] = useState(data);
      const [loading, setLoading] = useState(false);

useEffect(() => {
        const getProducts = () => {
         setLoading(true);
              dispatch(fetchProducts());
         setLoading(false);
        };

         getProducts();
}, [dispatch]);

useEffect(() => {
    setFilter(data);
}, [data]);

// Add Product To Cart
const addProductToCart = (product) => {
      dispatch(addCart(product))
}

// Filter Category product
const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
}

const ShowProducts = () => {
    if (status === 'loading' || loading) {
        return <Loading />;
    }
        return (
            <>
              <div className="buttons text-center py-5">
                <button className="btn btn-outline-dark btn-sm m-2" 
                        onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark btn-sm m-2" 
                        onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark btn-sm m-2" 
                        onClick={() => filterProduct("women's clothing")}>
                  Women's Clothing
                </button>
                <button className="btn btn-outline-dark btn-sm m-2" 
                        onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark btn-sm m-2" 
                        onClick={() => filterProduct("electronics")}>Electronics</button>
              </div>
              {filter.map((product) => {
                return (
                  <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <div className="card text-center h-100" key={product.id}>
                      <img
                        className="card-img-top p-3"
                        src={product.image}
                        alt="Card"
                        height={300}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {product.title.substring(0, 12)}...
                        </h5>
                        <p className="card-text">
                          {product.description.substring(0, 90)}...
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item lead">$ {product.price}</li>
                      </ul>
                      <div className="card-body">
                        <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                          Buy Now
                        </Link>
                        <button className="btn btn-dark m-1"
                                onClick={() => addProductToCart(product)} >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
      
                );
              })}
            </>
          );
        };
    
   
    return (
        <>
        <div className="container my-3 py-3">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 text-center">Latest Products</h2>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </>
    )
}
export default Products;