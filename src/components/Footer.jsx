import { useState } from "react";
import { FaGlobe, FaTelegram, FaVk, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-el">
          <h1>QPICK</h1>
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
          <div>
            <FaGlobe />
            <p className="orange">РУС</p>
            <p>ENG</p>
          </div>
        </div>
        <div className="footer-el">
          <div className="contacts">
            <FaVk />
            <FaTelegram />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </footer>
  );
}
