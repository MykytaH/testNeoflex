import { FaTrash } from "react-icons/fa";
import { HEADPHONES } from "../data";

export default function CartItems() {
  let totalPrice = 0;
  return (
    <>
      <h2 className="items-title">Корзина</h2>
      <div className="cart-layout">
        <div className="cart-all">
          {HEADPHONES.map((item) =>
            item.items.map((item) => {
              totalPrice += +item.price;
              return (
                <div key={item.title} className="cart-item">
                  <div className="group">
                    <div>
                      <img src={item.img} alt="" />
                      <div className="quantity">
                        <p className="operation">-</p>
                        <p>кол-во</p>
                        <p className="operation">+</p>
                      </div>
                    </div>
                    <div>
                      <p className="bold">{item.title}</p>
                      <p className="gray">{item.price + " ₽"}</p>
                    </div>
                  </div>

                  <div className="group-col">
                    <FaTrash />
                    <p className="bold">{item.price + " ₽"}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="cart-total">
          <div className="total">
            <p className="bold">Итого</p>
            <p className="bold"> {totalPrice + " ₽"}</p>
          </div>
          <button>
            <p>Перейти к оформлению</p>
          </button>
        </div>
      </div>
    </>
  );
}
