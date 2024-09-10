import { Link as Link } from "react-router-dom";
export default function Navigation() {
  
  return (
    <div>
    <header className='header'>
      <div className="logo">
       <h2 className="website--title">
       📚 Livraria SEPROMI
       </h2>
      </div>
      <div className="navigation">
        <input type="checkbox" className="toggle-menu"  />
        <div className="hamburger"></div>
        <ul className="menu">
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/overview">MAP</Link>
          </li>
          <li>
            <Link to="/books">LIVROS</Link>
          </li>
          <li>
            <Link to="/authors">AUTORES</Link>
          </li>
          <li>
            <Link to="/quotes">CITAÇÕES</Link>
          </li>
          <li>
            <Link to="/aboutme">SOBRE</Link>
          </li>
          <li>
            <Link to="/contact">CONTATO</Link>
          </li>
          </ul>
      </div>
    </header>
  </div>
  );
}
