import React from "react";

// Pages
import Home  from "../../pages/Home.jsx"
import Products from "../Products/Products.jsx";
import AboutPage from "../../pages/AboutPage.jsx";
import Login from "../../pages/Login.jsx";
import ContactPage from "../../pages/ContactPage.jsx";
import Register from "../../pages/Register.jsx";
import Product from "../../pages/Product.jsx";
import Cart from "../../pages/Cart.jsx";
import Checkout from "../../pages/Checkout.jsx";

const Main = (props) => {
  const selected = props.selectedPage;
  
  let componentToDisplay;

  switch(selected){
      case "Home" :
        componentToDisplay = <Home />
      break;
      case "Products":
        componentToDisplay = <Products />
      break;
      case "Product":
        componentToDisplay = <Product />
      break;
      case "About":
        componentToDisplay = <AboutPage />
      break;
      case "Login":
        componentToDisplay = <Login />
      break;
      case "Cart":
        componentToDisplay = <Cart />
      break;
      case "Checkout":
        componentToDisplay = <Checkout />
      break;
      case "Contact":
        componentToDisplay = <ContactPage />
      break;
      case "Register":
        componentToDisplay = <Register />
      break;
    
      default:
        componentToDisplay = null;
  }
  return (
    <div className="main_content">{componentToDisplay}</div>
  );
};
export default Main;