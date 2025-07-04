const Contact = () => {
  return (
    <section className="contact">
      <div className="container-contact">
        <h5>Contactez moi</h5>
        <p>
          Si vous avez une question sur une commande passée, n'hésitez pas à
          indiquer votre numéro de commande.
        </p>
      </div>
      <form id="contact-form" method="POST">
        <div class="form-group">
          <input type="text" placeholder="Prénom" name="firstname" required />
          <input type="text" placeholder="Nom" name="lastname" required />
        </div>

        <div class="form-group">
          <input type="email" placeholder="Email" name="email" required />
        </div>

        <div class="form-group">
          <input type="text" placeholder="Numéro de commande" name="order" />
        </div>

        <div class="form-group">
          <textarea
            name="message"
            placeholder="Indiquez votre demande ici"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
