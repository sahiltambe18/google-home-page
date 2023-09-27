import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Images from './components/Images';
import Videos from './components/Videos';
import Shopping from './components/Shopping';
import Search from './components/Search';

const App = () => {
 // const loc = useLocation().pathname !== '/'; // false if path === / true oyherwise

  return (
    <>
      {/* {loc && <Navbar />}  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<><Navbar/> <Search/></>} />
        <Route path="/videos/:query" element={<><Navbar/> <Videos/></>} />
        <Route path="/shopping/:query" element={<><Navbar/><Shopping/> </>} />
        <Route path="/images/:query" element={<><Navbar/><Images/></>} />

      </Routes>
    </>
  );
};

export default App;

{/* <script async src="https://cse.google.com/cse.js?cx=90a9b70bcc35a4a92">
</script>
<div class="gcse-search"></div> */}


// AIzaSyATQbxkAhiZ0GPisHhGgcsFKkfROUgP2eo

// https://www.googleapis.com/customsearch/v1?key=AIzaSyATQbxkAhiZ0GPisHhGgcsFKkfROUgP2eo&cx=90a9b70bcc35a4a92&q=chatgpt#