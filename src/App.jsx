import { Route, Routes, Outlet , useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Images from './components/Images';
import Videos from './components/Videos';
import Shopping from './components/Shopping';

const App = () => {
  const loc = useLocation().pathname!=='/'; // false if path === / true oyherwise
  
  return (
    <>
      {loc && <Navbar /> } {/*renders only when path!= root*/}
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/images" element={<Images />} />
       
      </Routes>
    </>
  );
};

export default App;
