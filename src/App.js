import { Route, Routes } from 'react-router-dom';
import './App.css';
import Academic from './pages/Academic/Academic';
import Addmission from './pages/Addmission/Addmission';
import Campus from './pages/Campus/Campus';
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
        <Route path='/academic' element={<Academic />}></Route>
        <Route path='/campus' element={<Campus />}></Route>
        <Route path='/addmission' element={<Addmission />}></Route>


        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
