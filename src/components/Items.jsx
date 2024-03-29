import { FaStar } from "react-icons/fa";
import { HEADPHONES } from "../data";

export default function Items() {
  return (
    <>
      {HEADPHONES.map((type) => (
        <div key={type.title}>
          <h2 className="items-title">{type.title}</h2>
          <ul id="items">
            {type.items.map((item) => (
              <li className="item" key={item.title}>
                <article>
                  <img src={item.img} alt="" />
                  <div className="title-price">
                    <h3>{item.title}</h3>
                    <p className="item-price">{item.price + " ₽"}</p>
                  </div>
                  <div className="rate-action">
                    <div className="price-flex">
                      <FaStar className="item-description" color="orange" />
                      <p className="item-description">{item.stars}</p>
                    </div>
                    <div className="item-actions">
                      <p className="button">Купить</p>
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
