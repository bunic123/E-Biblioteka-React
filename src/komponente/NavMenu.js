import { Link, Navigate, useNavigate } from 'react-router-dom'

function NavMenu() {

    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('admin');
        navigate(0);
    }

    return (
        <div className="nav-div">
            <nav>
                <Link to="/pocetna"><li id="pocetna-nm">Pocetna</li></Link>
                <Link to="/registracija"><li id="register-nm">Register</li></Link>
                <Link to="/prijava"><li id="login-nm">Login</li></Link>
                <Link to="/pretraga"><li id="search-nm">Search</li></Link>
                {localStorage.getItem('admin') ?
                    <button onClick={logout} className='btn btn-danger' id='lgt'>Log out</button>
                    : ''}


            </nav>
        </div>
    )
}

export default NavMenu;