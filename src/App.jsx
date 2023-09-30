import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Images from './components/Images';
import Videos from './components/Videos';
import Search from './components/Search';

const App = () => {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<><Navbar/> <Search/></>} />
        <Route path="/videos/:query" element={<><Navbar/> <Videos/></>} />
        <Route path="/images/:query" element={<><Navbar/><Images/></>} />

      </Routes>
    </>
  );
};

export default App;

