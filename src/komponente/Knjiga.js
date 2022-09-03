
function Knjiga(props) {

    const knjiga = props.knjiga;
    const slika = props.slika;

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

        </div>
    )

}

export default Knjiga;