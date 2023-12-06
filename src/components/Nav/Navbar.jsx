import { NavLink } from "react-router-dom";

import { CgLogIn } from "react-icons/cg";
import { IoMdPersonAdd } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

import { useSelector } from "react-redux";

const Navbar = () => {
    const data = useSelector((state) => state.cart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        <div className="container">
            <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
            <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" className="navbar-collapse collapse show" >
                <ul className="navbar-nav m-auto my-2 text-center">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="buttons text-center">
                    <NavLink to="/login" className="btn btn-outline-dark m-2 link-center"><CgLogIn /> Login</NavLink>
                    <NavLink to="/register" className="btn btn-outline-dark m-2"><IoMdPersonAdd /> Register</NavLink>
                    <NavLink to="/cart" className="btn btn-outline-dark m-2"><FaCartPlus /> Cart ({data.length})</NavLink>
                </div>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;