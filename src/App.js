import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonTop from "./components/ButtonTop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Router>
      <ButtonTop />
      <Footer />
    </div>
  );
}

export default App;
