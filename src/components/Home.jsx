import imageWelcome from "../assets/img/test_fond_resize.png";

const Home = () => {
  return (
    <section className="home">
      <img
        className="home-background"
        src={imageWelcome}
        alt="Représentation de carnets"
      />
      <h1>Ma passion pour la reliure</h1>
    </section>
  );
};

export default Home;
