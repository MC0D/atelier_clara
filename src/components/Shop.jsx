import CardProduct from "./CardProduct";

let names = [
  "Produit A",
  "Produit B",
  "Produit C",
  "Produit D",
  "Produit E",
  "Produit F",
];
const Shop = () => {
  return (
    <section className="shop">
      <h3>Découvrez la collection du moment</h3>
      <div className="item-selection">
        {names.map((name) => {
          return (
            <CardProduct
              key={name}
              name={name}
              description="Informations produit"
              prix="25€"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
