import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addmission from './pages/Addmission/Addmission';
import Campus from './pages/Campus/Campus';
import Faculty from './pages/Faculty/Faculty';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/faculty' element={<Faculty />}></Route>
        <Route path='/campus' element={<Campus />}></Route>
        <Route path='/addmission' element={<Addmission />}></Route>
        <Route path='/gallery' element={<Addmission />}></Route>
        <Route path='/research' element={<Addmission />}></Route>
        <Route path='/about' element={<Addmission />}></Route>


        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
