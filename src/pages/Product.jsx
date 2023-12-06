import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../components/Products/ProductsSlice";
import Marquee from "react-fast-marquee";

import { addCart } from "../components/Products/ProductsSlice";

// Components and Pages
import Footer from "../components/Footer/Footer";
import PageNotFound from "./PageNotFound";
import LoadingShowProduct from "../components/Sceleton/SceletonShowProduct";
import LoadingSimilar from "../components/Sceleton/SceletonSimilar";

const Product = () => {
      const { id } = useParams()
      const dispatch = useDispatch();
      const status = useSelector((state) => state.status);
      const products = useSelector((state) => state.products);

useEffect(() => {
    dispatch(fetchProducts()) 
},[dispatch])

const addProductToCart = (item) => {
      dispatch(addCart(item))
}

// Show Product
const ShowProduct = () => {
    const productCurrent = products.find((product) => product.id === +id);
    
    return (
        <>
        {!productCurrent ? <PageNotFound /> : (
                <div className="container my-5 py-2">
                <div className="row">
                  <div className="col-md-6 col-sm-12 py-3">
                    <img
                      className="img-fluid"
                      src={productCurrent.image}
                      alt={productCurrent.title}
                      width="400px"
                      height="400px"
                    />
                  </div>
                  <div className="col-md-6 col-md-6 py-5">
                    <h4 className="text-uppercase text-muted">{productCurrent.category}</h4>
                    <h1 className="display-5">{productCurrent.title}</h1>
                    <p className="lead">
                      {productCurrent.rating && productCurrent.rating.rate}{" "}
                      <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6  my-4">${productCurrent.price}</h3>
                    <p className="lead">{productCurrent.description}</p>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => addProductToCart(productCurrent)}
                    >
                      Add to Cart
                    </button>
                    <Link to="/cart" className="btn btn-dark mx-3">
                      Go to Cart
                    </Link>
                  </div>
                </div>
                </div>
        )} 
        </>
      );
  };
//   Slider
  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {products.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProductToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
    return (
        <>
        <div className="container">
            <div className="row">{status === 'loading' ? <LoadingShowProduct /> : <ShowProduct />}</div>
            <div className="row my-5 py-5">
            <div className="d-none d-md-block">
            <h2  className="">You may also Like</h2>
                <Marquee
                pauseOnHover={true}
                pauseOnClick={true}
                speed={50}
                >
                {status === 'loading' ? <LoadingSimilar /> : <ShowSimilarProduct />}
                </Marquee>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Product;