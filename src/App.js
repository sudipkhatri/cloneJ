import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Anchor/About/About';
import Flow from './Components/Anchor/Flow/FLow';
import Contact from './Components/Anchor/Contact/Contact';
import Service from './Components/Anchor/Service/Service';
// import first from '../src/Images/pic.jpg';
import Home from './Components/Home/Home';


function App() {

  return (
    <div className="App">
      <div className="navbar" >
        <Navbar />
      </div>
      {/* react fragment */}
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flow" element={<Flow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
