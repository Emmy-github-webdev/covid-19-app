import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
