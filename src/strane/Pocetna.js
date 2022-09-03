import SveKnjige from "../komponente/SveKnjige";
import { Link } from 'react-router-dom'

function Pocetna() {

    return (
        <div>

            <Link to="/dodaj"><button className="btn btn-danger" id="d-knjigu">Dodaj knjigu</button></Link>

            <SveKnjige />
        </div>
    )

}

export default Pocetna;