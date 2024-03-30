import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { Link } from "react-router-dom";

export default function CartItems() {
  let totalPrice = 0;
  const cartCtx = useContext(CartContext);
  return (
    <>
      <h2 className="items-title">Корзина</h2>
      <div className="cart-layout">
        <div className="cart-all">
          {cartCtx.userCart.items.map((item) => {
            totalPrice += +item.price * +item.quantity;
            return (
              <div key={item.title} className="cart-item">
                <div className="group">
                  <div>
                    <img src={item.img} alt="" />
                    <div className="quantity">
                      <p
                        className="operation"
                        onClick={() => cartCtx.updateQuantity(item.title, -1)}
                      >
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        className="operation"
                        onClick={() => cartCtx.updateQuantity(item.title, +1)}
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="bold">{item.title}</p>
                    <p className="gray">{+item.price + " ₽"}</p>
                  </div>
                </div>

                <div className="group-col">
                  <FaTrash onClick={() => cartCtx.deletFromCart(item.title)} />
                  <p className="bold">{+item.price * +item.quantity + " ₽"}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-total">
          <div className="total">
            <p className="bold">Итого:</p>
            <p className="bold"> {totalPrice + " ₽"}</p>
          </div>
          {cartCtx.userCart.items.length > 0 ? (
            <Link to="/payment" relative="route">
              <button>
                <p>Перейти к оформлению</p>
              </button>
            </Link>
          ) : (
            <button>
              <p>Ваша корзина пуста (</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
