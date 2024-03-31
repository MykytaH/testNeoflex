import { FaRegEye, FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../store/cart-context";
import Modal from "./Modal";
import ItemShow from "./ItemShow";

export default function Items() {
  const [open, setOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const cartCtx = useContext(CartContext);

  function handleCloseModal() {
    setOpen((prev) => !prev);
  }

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
                    <FaRegEye
                      className="eye"
                      onClick={() => {
                        setOpen((prev) => !prev);
                        setModalItem({
                          title: item.title,
                          img: item.img,
                          description: item.description,
                        });
                      }}
                    />

                    <div
                      className="item-actions"
                      onClick={() =>
                        cartCtx.addToCart({
                          title: item.title,
                          img: item.img,
                          price: item.price,
                        })
                      }
                    >
                      <p className="button">Купить</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Modal open={open} onModalClose={handleCloseModal}>
        <ItemShow item={modalItem} />
      </Modal>
    </>
  );
}
