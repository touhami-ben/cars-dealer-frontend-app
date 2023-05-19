// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New"

 

function App(){
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Index />} />
          <Route path="cars/:id" element = {<Show />} />
          <Route path="cars/new" element = {<New />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
