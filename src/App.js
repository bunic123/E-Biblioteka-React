import './App.css';
import Pocetna from './strane/Pocetna';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Izmena from './strane/Izmena';
import Dodaj from './strane/Dodaj';
import Registracija from './strane/Registracija';
import Prijava from './strane/Prijava';
import Pretraga from './strane/Pretraga';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="izmeni/:id" element={<Izmena />} />
          <Route path="dodaj" element={<Dodaj />} />
          <Route path="registracija" element={<Registracija />} />
          <Route path="prijava" element={<Prijava />} />
          <Route path="pretraga" element={<Pretraga />} />
          <Route path="pocetna" element={<Pocetna />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
