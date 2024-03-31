import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/cart-context";

export default function PaymentForm() {
  const cartCtx = useContext(CartContext);

  return (
    <form className="payment-form">
      <div className="form">
        <h2>Оплата</h2>
        <p>Всего: {cartCtx.userCartTotal} ₽</p>
        <p className="control">
          <label htmlFor="name">Имя</label>
          <input required id="name" type="text" name="name" />
        </p>
        <p className="control">
          <label htmlFor="email">Email</label>
          <input required id="email" type="email" name="email" />
        </p>
        <p className="control">
          <label htmlFor="card">Номер банковской карты</label>
          <input required id="card" type="text" name="card" />
        </p>

        <p className="pay-actions">
          <>
            <Link to="/cart" relative="route">
              <button className="text-button">Назад</button>
            </Link>
            <button className="pay-button">Заказать</button>
          </>
        </p>
      </div>
    </form>
  );
}
