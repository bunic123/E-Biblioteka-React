import { Link } from 'react-router-dom'

function NavMenu() {
    return (
        <div className="nav-div">
            <nav>
                <Link to="/registracija"><li id="register-nm">Register</li></Link>
                <li id="login-nm">Login</li>
            </nav>
        </div>
    )
}

export default NavMenu;