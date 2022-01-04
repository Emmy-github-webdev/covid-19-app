import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import VaccineScreen from './screens/VaccineScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <h1>Main App</h1>
          <Routes>
            <Route path="/vaccines" exact component={VaccineScreen} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
