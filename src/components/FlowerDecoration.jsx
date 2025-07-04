import flowerCentral from "../assets/img/fleur_centrale.svg";

const FlowerDecoration = () => {
  return (
    <div className="container-flower-central">
      <img
        className="flower-central"
        src={flowerCentral}
        alt="Fleur décorative"
      />
    </div>
  );
};

export default FlowerDecoration;
