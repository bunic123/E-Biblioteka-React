import { Link } from 'react-router-dom'

function NavMenu() {
    return (
        <div className="nav-div">
            <nav>
                <Link to="/registracija"><li id="register-nm">Register</li></Link>
                <Link to="/prijava"><li id="login-nm">Login</li></Link>
            </nav>
        </div>
    )
}

export default NavMenu;