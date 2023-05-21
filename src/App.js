// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About"

 

function App(){
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Index />} />
          <Route path="/cars/:id" element = {<Show />} />
          <Route path="/cars/new" element = {<New />} />
          <Route path="/cars/:id/edit" element = {<Edit />} />
          <Route patch="*" element = {<FourOFour />} />
          <Route path ="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
