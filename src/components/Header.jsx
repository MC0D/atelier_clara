import { useEffect, useRef } from "react";
import logoBusiness from "../assets/img/logo_atelier_clara_finale.svg";
import logoBasket from "../assets/img/logo_panier_navbar.svg";

const Header = () => {
  const headerRef = useRef(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(${
          currentScroll > lastScrollRef.current ? -10 : 0
        }rem)`;
      }
      lastScrollRef.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header ref={headerRef}>
      <div className="container-button-shop">
        <button className="shop-button">Boutique</button>
      </div>
      <div className="container-button-home">
        <a href="/">
          <img
            className="logo-business"
            src={logoBusiness}
            alt="Logo de l'entreprise"
          />
        </a>
      </div>
      <nav className="navbar">
        <a href="#">Contact</a>
        <a href="#">Compte</a>
        <a href="#">FAQ</a>
        <a href="#" className="basket-link">
          <img className="logo-basket" src={logoBasket} alt="Logo du panier" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
