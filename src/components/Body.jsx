import logo from "../assets/img/logo_atelier_clara_finale.svg";

const Body = () => {
  return (
    <>
      <header>
        <a className="logo" href="../../index.html">
          <img className="logo-img" src={logo} alt="Logo de l'entreprise" />
        </a>
        <button aria-label="Open navigation" className="burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  );
};

export default Body;
