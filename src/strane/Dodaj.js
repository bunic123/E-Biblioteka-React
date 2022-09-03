import { useState } from 'react'
import axios from 'axios'

function Dodaj() {

    const [knjiga, setKnjiga] = useState({
        naziv: '',
        opis: '',
        pisac: '',
        cena: '',
        kategorija: '',
    });

    function sacuvajKnjigu(e) {

        e.preventDefault();

        console.log(knjiga.naziv + " " + knjiga.opis + " " + knjiga.pisac + " " + knjiga.cena + " " + knjiga.kategorija + " ")

        axios.post(`http://localhost:8000/api/sacuvaj`, knjiga).then(res => {
            alert(res.data.poruka)
        });
    }

    return (
        <div>

            <div className='div-f'>

                <form onSubmit={sacuvajKnjigu}>

                    <div className='el-frm'>
                        <label>Naziv knjige</label>
                        <input type="text" className="form-control" value={knjiga.naziv} onChange={e => setKnjiga({ ...knjiga, naziv: e.target.value })} />
                    </div>

                    <div className='el-frm'>
                        <label>Opis</label>
                        <input type="text" className="form-control" value={knjiga.opis} onChange={e => setKnjiga({ ...knjiga, opis: e.target.value })} />
                    </div>

                    <div className='el-frm'>
                        <label>Pisac</label>
                        <input type="text" className="form-control" value={knjiga.pisac} onChange={e => setKnjiga({ ...knjiga, pisac: e.target.value })} />
                    </div>

                    <div className='el-frm'>
                        <label>Cena</label>
                        <input type="number" className="form-control" value={knjiga.cena} onChange={e => setKnjiga({ ...knjiga, cena: e.target.value })} />
                    </div>

                    <div className='el-frm'>
                        <label>Kategorija</label>
                        <input type="text" className="form-control" value={knjiga.kategorija} onChange={e => setKnjiga({ ...knjiga, kategorija: e.target.value })} />
                    </div>

                    <button type="submit" id="s-bn" className="btn btn-primary mt-3">Sacuvaj knjigu</button>
                </form>

            </div>

        </div>
    )
}

export default Dodaj;