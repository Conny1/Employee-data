import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Nav from './components/navbar/Nav'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={ <Home/> } />
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
