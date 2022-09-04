import { useState } from 'react'
import axios from 'axios'

function Registracija() {

    const [user, setUser] = useState({
        ime_prezime: '',
        email: '',
        broj_telefona: '',
        password: '',
    });


    function registracija(e) {

        e.preventDefault();

        console.log(user.ime_prezime + " " + user.email + " " + user.broj_telefona + " " + user.password + " ")

        axios.post('http://localhost:8000/api/registracija', user).then(res => {
            alert(res.data.poruka)
        });


    }


    return (
        <div>

            <div className='div-f'>


                <form onSubmit={registracija}>

                    <div className='el-frm'>
                        <label>Ime i prezime</label>
                        <input type="text" className="form-control" value={user.ime_prezime} onChange={e => setUser({ ...user, ime_prezime: e.target.value })} />
                    </div>

                    <div className='el-frm'>
                        <label>Email</label>
                        <input type="text" className="form-control" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                    </div>

                    <div className='el-frm'>
                        <label>Broj telefona</label>
                        <input type="text" className="form-control" value={user.broj_telefona} onChange={e => setUser({ ...user, broj_telefona: e.target.value })} />
                    </div>

                    <div className='el-frm'>
                        <label>Password</label>
                        <input type="password" className="form-control" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                    </div>

                    <button type="submit" id="s-bn" className="btn btn-primary mt-3">Registracija</button>
                </form>

            </div>





        </div>
    )
}

export default Registracija;