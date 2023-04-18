import logo from './logo.svg';
import Dhondt from "./Victor_D'hondt.jpg"
import './App.css';
import Calculator from './pages/Calculator';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';

import NavBar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <Homepage />
  );
}
export default App;