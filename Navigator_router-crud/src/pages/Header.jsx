import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark py-3">
            <div className="container">
                <a className="navbar-brand text-light fs-4" href="#">Book Catalog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/add" className="text-light btn btn-success me-3">Add Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="text-light btn btn-primary">View Book</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header