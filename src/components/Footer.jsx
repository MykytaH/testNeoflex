import { FaGlobe, FaTelegram, FaVk, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-el">
          <a href="#content-wrap">
            <h1 className="title">QPICK</h1>
          </a>
        </div>
        <div className="footer-el">
          <p>Избранное </p>
          <Link to="cart">
            <p>Корзина</p>
          </Link>
          <p>Контакты</p>
        </div>
        <div className="footer-el">
          <p>Условия сервиса</p>
          <div className="lang-select">
            <FaGlobe />
            <p className="orange">РУС</p>
            <p>ENG</p>
          </div>
        </div>
        <div className="footer-el">
          <div className="contacts">
            <a href="https://vk.com" target="_blank">
              <FaVk />
            </a>
            <a href="https://web.telegram.org/a/" target="_blank">
              <FaTelegram />
            </a>

            <a href="https://www.whatsapp.com" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
