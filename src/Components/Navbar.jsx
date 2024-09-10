import Navigation from "./Navigation";
import Lottie from "lottie-react";
import books from "../assets/books.json";

export default function Navbar() {
  return (
    <div className="hero">
      <Navigation />
      <div className="homepage--texts">
      <h1 className="nav--text">UM MUNDO EM PÁGINAS</h1>
      <p className="nav--para">
      Embarque numa viagem literária onde cada clique revela um novo capítulo,
        e toda história aguarda seu leitor ávido. Bem-vindo ao mundo dos e-books,
        onde os sonhos ganham vida em cada página.
      </p>
      <p className="nav--subpara">Codificado com ódio, amor e pani por Abel Sannts </p>
      </div>
      <div className="lottie--container">
        <Lottie animationData={books} />
      </div>
    </div>
  );
}
