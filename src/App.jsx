import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonTop from "./components/ButtonTop";
import Home from "./pages/Home";
import PageOffreAuteurs from "./pages/PageOffreAuteurs";
import PageAbout from "./pages/PageAbout";
import PageOffreMaquette from "./pages/PageOffreMaquette";
import PageOffreSite from "./pages/PageOffreSite";
import PageOffreGlide from "./pages/PageOffreGlide";
import PageOffreFirebase from "./pages/PageOffreFirebase";
import PageOffrePortfolio from "./pages/PageOffrePortfolio";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";
import Legals from "./pages/Legals";
import Cgv from "./pages/Cgv";
import PageOffreChat from "./pages/PageOffreChat";
import Entreprise from "./pages/Entreprise";
import Formation from "./pages/Formation";
import PageFonctionnement from "./pages/PageFonctionnement";
import Partenaires from './pages/Partenaires';


function App() {
  return (
    <div className="App bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<PageAbout/>} />
          
          <Route path="/OffreSite" element={<PageOffreSite />} />
          <Route path="/OffreMaquette" element={<PageOffreMaquette />} />
          <Route path="/Offreauteurs" element={<PageOffreAuteurs />} />
          <Route path="/OffreGlide" element={<PageOffreGlide />} />
          <Route path="/OffreFirebase" element={<PageOffreFirebase />} />
          <Route path="/OffrePortfolio" element={<PageOffrePortfolio />} />
          <Route path="/OffreChat" element={<PageOffreChat />} />
          <Route path="/Fonctionnement" element={<PageFonctionnement />} />
          <Route path="/Entreprise" element={<Entreprise />} />
          <Route path="/Formation" element={<Formation />} />
          <Route path="/Partenaires" element={<Partenaires />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Legals" element={<Legals />} />
          <Route path="/Cgv" element={<Cgv />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      <ButtonTop />
      <Footer />
    </div>
  );
}

export default App;
