import APropos from "./components/APropos";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";

function App() {
  return (
    <div name="app">
      <Navbar />
      <Accueil />
      <Projets />
      <APropos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
