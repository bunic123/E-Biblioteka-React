import { Link } from 'react-router-dom'
import axios from 'axios'

function Knjiga(props) {

    const knjiga = props.knjiga;
    const slika = props.slika;

    function obrisiKnjigu(id) {

        axios.delete(`http://localhost:8000/api/obrisi-knjigu/${id}`).then(res => {
            alert(res.data.poruka)
        });
    }

    return (
        <div className="card text-center">
            <img src={slika} id='slika-main' className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{knjiga.naziv}</h2>
                <p className="card-text">{knjiga.opis}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><h4>{knjiga.pisac}</h4></li>
                <li className="list-group-item"><h5>{knjiga.cena}.00 RSD</h5></li>
                <li className="list-group-item"><h6>{knjiga.kategorija}</h6></li>
            </ul>
            <div className="card-body">
                <Link to={`izmeni/${knjiga.id}`}><button className='btn btn-danger mx-2'>Edit</button></Link>
                <button className='btn btn-danger' onClick={() => obrisiKnjigu(knjiga.id)}>Delete</button>
            </div>
        </div>
    )

}

export default Knjiga;