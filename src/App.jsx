import "./App.css";
import Home from "../src/Pages/Home/Home";
import Payment from "./Pages/Payment/Payment";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element ={<Payment/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
