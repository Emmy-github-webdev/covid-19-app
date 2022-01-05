import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import VaccineDetailScreen from './screens/VaccineDetailScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route exac path="/detail/:countryId" element={<VaccineDetailScreen />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
