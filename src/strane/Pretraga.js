import NavMenu from "../komponente/NavMenu";
import { useState } from 'react'
import Knjiga from "../komponente/Knjiga";
import KnjigaSearch from "../komponente/KnjigaSearch";


function Pretraga() {

    const [knjige, setKnjige] = useState([]);
    const [pretraga, setPretraga] = useState('');

    function handleInput(e) {
        setPretraga(e.target.value)
    }


    function pretragaKnjigaAPI() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43',
                'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
            }
        };

        fetch(`https://hapi-books.p.rapidapi.com/search/${pretraga}`, options)
            .then(response => response.json())
            .then(response => setKnjige(response))
            .catch(err => console.error(err));


    }

    console.log(knjige)


    return (
        <div>

            <NavMenu />

            <div className="sr-div">
                <input type="text" className="form-control" id="s-f-m" onChange={handleInput} value={pretraga} placeholder="Unesite naziv knjige" />
                <button onClick={pretragaKnjigaAPI} className="btn btn-danger" id="b-p">Pretraga</button>
            </div>

            <div className="pret-div">

                {knjige.map(knjiga => {
                    return (
                        <div className='prikaz-knjiga'>
                            <KnjigaSearch key={knjiga.book_id} knjiga={knjiga} slika={knjiga.cover} />
                        </div>
                    );
                })}



            </div>

        </div>
    )
}

export default Pretraga;