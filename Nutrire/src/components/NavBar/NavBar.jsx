import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

function NavBar({ title }) {
    return (
    <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
    >
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            {title}
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink
                className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/granola"
                >
                Granolas
            </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                }
                to="/category/mixs"
                >
                Mixs
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                }
                to="category/harinas"
                >
                Harinas
            </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                }
                to="category/pastademani"
                >
                Pastas de Mani
            </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                }
                to="/contacto"
                >
                Contacto
            </NavLink>
            </li>
            
        </ul>
        <form className="d-flex" role="search">
            <CardWidget />
        </form>
        </div>
    </div>
    </nav>
);
}

export default NavBar;

