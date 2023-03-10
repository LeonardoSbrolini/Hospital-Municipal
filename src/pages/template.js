import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import './template.css'

const Template = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to='/' class="nav-link">Estoque</Link>
      </li>
      <li class="nav-item">
        <Link to='/chamados' class="nav-link">Chamados</Link>
      </li>
    </ul>
  </div>
</nav>
        <Outlet></Outlet>
        </>
    )
}

export default Template