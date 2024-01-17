
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/WatchHistory' element={<WatchHistory/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
