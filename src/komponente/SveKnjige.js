import { useEffect, useState } from 'react'
import axios from 'axios'
import Knjiga from './Knjiga';

function SveKnjige() {

    const [sveKnjige, setSveKnjige] = useState([]);
    const [nazivKnjige, setNazivKnjige] = useState('');
    const [filterSort, setFilterSort] = useState('DESC');
    const [selectValue, setSelectValue] = useState('');

    function handleNazivKnjige(e) {
        setNazivKnjige(e.target.value)
    }

    function handleSelect(e) {
        setSelectValue(e.target.value)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/vrati-sve-knjige/").then(res => {
            setSveKnjige(res.data.sveKnjige)
        });

    }, []);


    function pretragaKnjiga() {
        axios.get(`http://localhost:8000/api/pretraga/${nazivKnjige}`).then(res => {
            setSveKnjige(res.data.knjige)
        });

    }

    function filter() {
        axios.get(`http://localhost:8000/api/filter/${selectValue}/${filterSort}`).then(res => {
            setSveKnjige(res.data.knjige)
            setFilterSort(res.data.filterSort)
        });
    }


    const slika = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7af54b9-3a91-433b-99e7-5274c8355a63/de5mmbu-2471ba83-d537-4754-bd90-acfd4d861b15.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3YWY1NGI5LTNhOTEtNDMzYi05OWU3LTUyNzRjODM1NWE2M1wvZGU1bW1idS0yNDcxYmE4My1kNTM3LTQ3NTQtYmQ5MC1hY2ZkNGQ4NjFiMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cKYJtbZdffgjGyjrAC1eUfqk4iRBMJDKBmLIgTeZ8Xw'

    return (
        <div>

            <div className='top-div'>
                <div>
                    <input type="text" id="src" className="form-control" value={nazivKnjige} onChange={handleNazivKnjige} placeholder="Unesite naziv knjige" />
                    <button onClick={pretragaKnjiga} className='btn btn-danger' id='btn-s'>Pretraga</button>
                </div>
                <div className='filt'>
                    <select className='form-select' id='filter-select' onChange={handleSelect} value={selectValue}>
                        <option>Filter by</option>
                        <option value="naziv">Naziv</option>
                        <option value="pisac">Pisac</option>
                        <option value="cena">Cena</option>
                    </select>
                    <button onClick={filter} className='btn btn-danger' id='btn-fil'>Filter</button>
                </div>
            </div>


            <div className='knjige-div'>


                {sveKnjige.map(knjiga => {
                    return (
                        <div className='prikaz-knjiga'>
                            <Knjiga key={knjiga.id} knjiga={knjiga} slika={slika} />
                        </div>
                    );
                })}
            </div>

        </div>
    )

}

export default SveKnjige;