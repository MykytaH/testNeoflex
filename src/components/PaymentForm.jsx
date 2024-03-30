import { useState } from "react";

export default function PaymentForm() {
  const [orderState, setOrderState] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <form>
      <h2>Checkout</h2>
      <p>Total Amount: $</p>
      <p className="control">
        <label htmlFor="name">Name</label>
        <input required id="name" type="text" name="name" />
      </p>
      <p className="control">
        <label htmlFor="email">Email</label>
        <input required id="email" type="email" name="email" />
      </p>
      <p className="control">
        <label htmlFor="address">Address</label>
        <input required id="address" type="text" name="address" />
      </p>
      {orderState && (
        <>
          <div className="error">
            <h2></h2>
            <p>Something went wrong!</p>
            <p>Please try again! Or press button if backend is dead ))</p>
            <button className="button">CLICK !!!</button>
          </div>
        </>
      )}

      <p className="modal-actions">
        {isLoading ? (
          <span>Processing the order...</span>
        ) : (
          <>
            <button className="text-button">Close</button>
            <button className="button">Order</button>
          </>
        )}
      </p>
    </form>
  );
}
