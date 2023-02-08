import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonTop from "./components/ButtonTop";
import Home from "./pages/Home";
import PageOffreAuteurs from "./pages/PageOffreAuteurs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Offreauteurs" element={<PageOffreAuteurs />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Router>
      <ButtonTop />
      <Footer />
    </div>
  );
}

export default App;
