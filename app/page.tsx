import ScrollProgressBar from '../components/ScrollProgressBar';
import Navbar from '../components/Navbar';
import AccueilSection from '../sections/AccueilSection';
import ProjetsSection from '../sections/ProjetsSection';
import AProposSection from '../sections/AProposSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer';

export default function Home(): JSX.Element {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <AccueilSection />
        <ProjetsSection />
        <AProposSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
