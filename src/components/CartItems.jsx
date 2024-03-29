import { FaTrash } from "react-icons/fa";
import { HEADPHONES } from "../data";

export default function CartItems() {
  return (
    <>
      <h2 className="items-title">Корзина</h2>
      <div className="cart-layout">
        <div className="cart-all">
          {HEADPHONES.map((item) =>
            item.items.map((item) => (
              <div className="cart-item">
                <div>
                  <img src={item.img} alt="" />
                  <div></div>
                </div>
                <div>
                  <p></p>
                  <p></p>
                </div>
                <div>
                  <FaTrash />
                  <p></p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">
          <div>Hello</div>
        </div>
      </div>
    </>
  );
}
