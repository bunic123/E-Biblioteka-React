import { Link } from 'react-router-dom'

function NavMenu() {
    return (
        <div className="nav-div">
            <nav>
                <Link to="/pocetna"><li id="pocetna-nm">Pocetna</li></Link>
                <Link to="/registracija"><li id="register-nm">Register</li></Link>
                <Link to="/prijava"><li id="login-nm">Login</li></Link>
                <Link to="/pretraga"><li id="search-nm">Search</li></Link>
            </nav>
        </div>
    )
}

export default NavMenu;