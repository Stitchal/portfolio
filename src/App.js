import AccueilPage from "./pages/AccueilPage";
import ProjetsPage from "./pages/ProjetsPage";
import AProposPage from "./pages/AProposPage";
import ContactPage from "./pages/ContactPage";
import ScrollProgressBar from "react-scroll-progress-bar"; // Ajoutez cette ligne

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div name="app">
      <ScrollProgressBar height="3px" bgcolor="#3B82F6" duration="1" />
      <Navbar />
      <AccueilPage />
      <ProjetsPage />
      <AProposPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
