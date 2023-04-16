import { Fragment } from "react";

const C_navbar = () => {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-nav">
            <div className="container">
                <a className="navbar-brand" href="https://managersistemas.com/">
                    <img src="./logo.png" alt="Manager" className="d-inline-block align-text-top logo"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link"href="#">Articulos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"href="#">Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"href="#">Pedidos</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Usuario</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Salir</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </Fragment>
    )
}

export default C_navbar;

