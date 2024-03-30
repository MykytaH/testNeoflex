import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
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
          <p className="icon"> 0</p>
        </div>
      </nav>
    </header>
  );
}
