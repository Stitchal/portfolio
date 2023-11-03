import AccueilPage from "./pages/AccueilPage";
import ProjetsPage from "./pages/ProjetsPage";
import AProposPage from "./pages/AProposPage";
import ContactPage from "./pages/ContactPage";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div name="app">
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
