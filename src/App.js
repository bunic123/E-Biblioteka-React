import './App.css';
import Pocetna from './strane/Pocetna';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Izmena from './strane/Izmena';
import Dodaj from './strane/Dodaj';
import Registracija from './strane/Registracija';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="izmeni/:id" element={<Izmena />} />
          <Route path="dodaj" element={<Dodaj />} />
          <Route path="registracija" element={<Registracija />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
