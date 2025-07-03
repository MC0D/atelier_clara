import cardPhoto from "../assets/img/product_card.svg";

const CardProduct = ({ name, prix, description }) => {
  return (
    <div className="product-card">
      <img className="card-photo" src={cardPhoto} alt="Carnets" />
      <h4>{name}</h4>
      <p className="card-description">{description}</p>
      <p className="card-price">{prix}</p>
      <button className="card-button">Buy</button>
    </div>
  );
};

export default CardProduct;
