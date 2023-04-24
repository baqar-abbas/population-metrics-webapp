import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './route/Home';
import Details from './route/Details';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
