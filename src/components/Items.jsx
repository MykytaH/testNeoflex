import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Items() {
  const cartCtx = useContext(CartContext);

  return (
    <>
      {cartCtx.items.map((type) => (
        <div key={type.title}>
          <h2 className="items-title">{type.title}</h2>
          <ul id="items">
            {type.items.map((item) => (
              <li className="item" key={item.title}>
                <article>
                  <div className="item-content">
                    <img src={item.img} alt="" />

                    <div className="title-price">
                      <h3>{item.title}</h3>
                      <div>
                        <p className="item-price">{item.price + " ₽"}</p>
                        {item.oldPrice && (
                          <p className="old-price">{item.oldPrice + " ₽"}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="rate-action">
                    <div className="price-flex">
                      <FaStar className="item-description" color="orange" />
                      <p className="item-description">{item.stars}</p>
                    </div>
                    <div className="item-actions">
                      <p
                        className="button"
                        onClick={() =>
                          cartCtx.addToCart({
                            title: item.title,
                            img: item.img,
                            price: item.price,
                          })
                        }
                      >
                        Купить
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
