import fleurFooterLeft from "../assets/img/fleur_gauche.svg";
import fleurFooterRight from "../assets/img/fleur_droite.svg";
import logoTiktok from "../assets/img/logo_tiktok.svg";
import logoInstagram from "../assets/img/logo_instagram.svg";
import logoPinterest from "../assets/img/logo_pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <img src={fleurFooterLeft} alt="Décoration florale" />
      <div>
        <span>Atelier Clara 2025</span>
        <span>Reproduction et revente interdite</span>
        <span>CGV</span>
        <div>
          <a href="#">
            <img src={logoTiktok} alt="Lien vers Tiktok" />
          </a>
          <a href="#">
            <img src={logoInstagram} alt="Lien vers Instagram" />
          </a>
          <a href="#">
            <img src={logoPinterest} alt="Lien vers Pinterest" />
          </a>
        </div>
      </div>
      <img src={fleurFooterRight} alt="Décoration florale" />
    </footer>
  );
};

export default Footer;
