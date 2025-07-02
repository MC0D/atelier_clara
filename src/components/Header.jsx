import logoBusiness from "../assets/img/logo_atelier_clara_finale.svg";
import logoBasket from "../assets/img/logo_panier_navbar.svg";

const Header = () => {
  return (
    <header>
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
