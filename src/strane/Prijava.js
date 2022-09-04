import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavMenu from '../komponente/NavMenu';

function Prijava() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();


    function prijava(e) {

        e.preventDefault();

        axios.post('http://localhost:8000/api/prijava', user).then(res => {
            if (res.data.poruka === 'Uspesno ste se prijavili!') {

                localStorage.setItem('admin', res.data.admin);

                alert(res.data.poruka)
                navigate('/')
                return;
            } else {
                alert(res.data.poruka)
            }
        });


    }


    return (
        <div>

            <NavMenu />

            <div className='div-f'>

                <form onSubmit={prijava}>

                    <div className='el-frm'>
                        <label>Email</label>
                        <input type="text" className="form-control" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
                    </div>

                    <div className='el-frm'>
                        <label>Password</label>
                        <input type="password" className="form-control" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
                    </div>

                    <button type="submit" id="s-bn" className="btn btn-primary mt-3">Prijava</button>
                </form>

            </div>

        </div>
    )
}

export default Prijava;