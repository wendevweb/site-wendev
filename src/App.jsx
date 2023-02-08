import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonTop from "./components/ButtonTop";
import Home from "./pages/Home";
import PageOffreAuteurs from "./pages/PageOffreAuteurs";
import PageAbout from "./pages/PageAbout";
import PageProjets from "./pages/PageProjets";
import PageOffreMaquette from "./pages/PageOffreMaquette";
import Contact from "./pages/Contact";
import PageOffreSite from "./pages/PageOffreSite";
import PageOffreGlide from "./pages/PageOffreGlide";
import PageOffreFirebase from "./pages/PageOffreFirebase";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<PageAbout/>} />
          <Route path="/Projets" element={<PageProjets/>} />
          <Route path="/OffreSite" element={<PageOffreSite />} />
          <Route path="/OffreMaquette" element={<PageOffreMaquette />} />
          <Route path="/Offreauteurs" element={<PageOffreAuteurs />} />
          <Route path="/OffreGlide" element={<PageOffreGlide />} />
          <Route path="/OffreFirebase" element={<PageOffreFirebase />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      <ButtonTop />
      <Footer />
    </div>
  );
}

export default App;
