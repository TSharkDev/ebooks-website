import Navigation from "../Components/Navigation";
import pic from "../assets/images/book.jpg";
import instagram from "../assets/icons/thatguywithabook.png";
import tweets from "../assets/icons/quakes.png";
import tumblr from "../assets/icons/tumblrblog.png";
import goodreads from "../assets/icons/social.png";

export default function Aboutme() {
  return (
    <div>
      <Navigation />
      <h2 className="author--book--title">SEPROMI</h2>
      <div className="nagraj--intro--card--container">
        <div className="nagraj--intro--card">
          <div>
            <img className="nagraj-image" src={pic} alt="Nagraj Tadingi" />
            <div className="author-info">
              <p className="nagraj-para">
              Olá! Sejam bem vindos a Livraria da SEPROMI 'Secretaria da Promoção de Igualdade Racial', por trás deste
                aplicativo web de livros , você ira encontra consolo, inspiração e possibilidades infinitas
                dentro das páginas dos livros.
                <br />
                <br />
                Temos uma admiração por autores , cujo
                thrillers científicos nos levam a viagens emocionantes pelo espaço
                e além. Em encontro imerso nos mundos intrincados
                e criado por, cujos romances épicos de fantasia são
                conhecido por seus personagens ricos e sistemas mágicos intrincados. E
                quando se trata do enigmático e instigante
                As obras surreais e introspectivas de que nunca deixam de
                cativar as pessoas.
                <br />
                <br />
                Esta é uma plataforma onde compartilharemos o amor por
                livros. A missão da SEPROMI é despertar a alegria da leitura, fomentar
                conversas significativas e celebrar o incrível poder de
                contar histórias.
              </p>
              <div className="nagraj--links">
                <a
                  href="https://www.goodreads.com/user/show/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={goodreads}
                    alt="Goodreads"
                    className="nagraj--social"
                  />
                </a>
                <a
                  href="https://www.instagram.com/tEST"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="nagraj--social"
                  />
                </a>
                <a
                  href="https://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tumblr} alt="Tumblr" className="nagraj--social" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tweets} alt="Twitter" className="nagraj--social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
