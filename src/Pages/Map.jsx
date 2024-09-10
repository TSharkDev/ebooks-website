import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import "../App.css";
import bookstack from "../assets/icons/bookstack.png";
import authoricon from "../assets/icons/group.png";
import homeicon from "../assets/icons/house.png";
import abouticon from "../assets/icons/man.png";
import contact from "../assets/icons/contact.png";
import quotation from "../assets/icons/quotation.png"
import { Link as Link } from "react-router-dom";

export default function Map() {
  return (
    <div>
      <Navigation />
      <h1 className="overviewpage--title">Visão geral</h1>
      <div className="overview--container">
        <div className="overview--card">
          <div className="section">
            <img src={homeicon} alt="Home" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/">Inicio</Link>
            </h2>
            <p className="map--para">
            Os livros que você vê na página inicial são gerados aleatoriamente. Toda vez
            você atualiza a página e recebe uma sugestão aleatória.
            </p>
          </div>
          <div className="section">
            <img src={bookstack} alt="Books" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/books">Livros</Link>
            </h2>
            <p className="map--para">
            Obviamente, com os livros. Sinta-se à vontade para fazer o download (sem pressão).
            Gênero e páginas são mencionados.
            </p>
          </div>
          <div className="section">
            <img src={authoricon} alt="Authors" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/authors">Autores</Link>
            </h2>
            <p className="map--para">
            Umm... Informações dos autores e seus trabalhos. Clique para explorar mais
            (nos autores).
            </p>
          </div>
          <div className="section">
            <img src={quotation} alt="Quotes" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/quotes">Citações</Link>
            </h2>
            <p className="map--para">
            Frases famosas de autores acumuladas na Internet.
            </p>
          </div>
          <div className="section">
            <img src={abouticon} alt="About" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/aboutme">Sobre</Link>
            </h2>
            <p className="map--para">Tem informações sobre varios autores....</p>
          </div>
          <div className="section">
            <img src={contact} alt="Contact" className="section--icon" />
            <h2 className="section-heading">
              <Link to="/contact">Contato</Link>
            </h2>
            <p className="map--para">
            Possui formulário de contato e informações de direitos autorais. Se você quiser algum
            livros, use o formulário de contato. Obrigado!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
