import './App.css';
import Pocetna from './strane/Pocetna';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Izmena from './strane/Izmena';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="izmeni/:id" element={<Izmena />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
