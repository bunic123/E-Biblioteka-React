import './App.css';
import Pocetna from './strane/Pocetna';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Izmena from './strane/Izmena';
import Dodaj from './strane/Dodaj';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="izmeni/:id" element={<Izmena />} />
          <Route path="dodaj" element={<Dodaj />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
