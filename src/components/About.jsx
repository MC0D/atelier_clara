import claraPhoto from "../assets/img/photo_clara.svg";
import notebooksPhoto from "../assets/img/photo_carnet_presentation.svg";

const About = () => {
  return (
    <section className="about">
      <h2>Bienvenue chez Atelier Clara</h2>
      <div className="container-about">
        <div className="about-me">
          <p>
            Je m’appelle Clara et je suis installée dans le Sud-Ouest de la
            France.
          </p>
          <p>
            Passionnée par les activités créatives, je me suis spécialisée dans
            la
            <strong> reliure artisanale.</strong>
          </p>
          <p>
            À travers ce site, je vous invite à découvrir mon univers et mon
            savoir-faire : la fabrication de <strong>carnets uniques</strong> et
            <strong> faits main.</strong>
          </p>
        </div>
        <img className="clara-photo" src={claraPhoto} alt="La créatrice" />
      </div>
      <div className="container-about">
        <img
          className="notebooks-photo"
          src={notebooksPhoto}
          alt="Carnets d'aquarelles"
        />
        <div className="about-me">
          <p>
            Vous trouverez ici des<strong> carnets de dessins</strong>,
            d’aquarelle et de recettes, reliés selon la
            <strong> technique copte</strong> apparente, pour un rendu
            authentique et original.
          </p>
          <p>
            Rejoignez-moi sur mes réseaux sociaux pour explorer mes autres
            <strong> passions</strong> et découvrir mes nouvelles
            <strong> créations.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
