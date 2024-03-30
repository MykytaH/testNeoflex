import { useContext } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../store/cart-context";

export default function Header() {
  const quantity = useContext(CartContext).userCart.items.length;
  return (
    <header id="main-header">
      <nav id="nav-bar">
        <div>
          <Link to="">
            <h1 className="title">QPICK</h1>
          </Link>
        </div>
        <div className="icons">
          <a className="button">
            <FaHeart />
          </a>
          <p className="icon"> 0</p>
          <Link to="cart" className="button">
            <FaShoppingCart />
          </Link>
          <p className="icon"> {quantity}</p>
        </div>
      </nav>
    </header>
  );
}
