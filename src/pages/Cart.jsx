import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";


import { removeItemCart, addItemCart} from "../components/Products/ProductsSlice";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Cart = () => {
      const dispatch = useDispatch(); 
      const data = useSelector((state) => state.cart);
      const sum = useSelector((state) => state.sum);

// Decrement count
const removeItem = (id) => {
      dispatch(removeItemCart(id));
}
// Increment count
const addItem = (id) => {
      dispatch(addItemCart(id));
}
const EmptyCart = () => {
return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
        <h4 className="p-3 display-5">Your Cart is Empty</h4>
        <Link to="/" className="btn  btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
        </Link>
        </div>
    </div>
    </div>
);
};
  const ShowCart = () => {
    const shipping = 30;
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {data.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  // className="w-100"
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                              {/* <p>Color: blue</p>
                              <p>Size: M</p> */}
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(item.id);
                                  }}
                                >
                                  <FaMinus/>
                                </button>
                                <p className="mx-5">{item.counter}</p>
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(item.id);
                                  }}
                                >
                                  <FaPlus />
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.counter}</span>{" "}
                                  x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products <span>$ {Math.round(sum)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>$ 30</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(sum + shipping)}</strong>
                        </span>
                      </li>
                    </ul>
                    <NavLink className="btn btn-dark btn-lg btn-block" to="/checkout">Go to checkout</NavLink>
                    {/* <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Go to checkout
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};
    return(
        <>
        <div className="container my-3 py-3">
            <h1 className="text-center">Cart</h1>
            <hr />
            {data.length > 0 ? <ShowCart /> : <EmptyCart />}
        </div>
        <Footer />
        </>
    )
}
export default Cart;