import CardProduct from "./CardProduct";

const Shop = () => {
  return (
    <section className="shop">
      <h3>Découvrez la collection du moment</h3>
      <div className="item-selection">
        <CardProduct
          name="Produit A"
          description="Informations produit"
          prix="25€"
        />
        <CardProduct
          name="Produit B"
          description="Informations produitc"
          prix="25€"
        />
        <CardProduct
          name="Produit C"
          description="Informations produit"
          prix="25€"
        />
        <CardProduct
          name="Produit D"
          description="Informations produit"
          prix="25€"
        />
        <CardProduct
          name="Produit E"
          description="Informations produit"
          prix="25€"
        />
        <CardProduct
          name="Produit F"
          description="Informations produit"
          prix="25€"
        />
      </div>
    </section>
  );
};

export default Shop;
