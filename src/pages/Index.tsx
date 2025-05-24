
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuemSomos from '../components/QuemSomos';
import ComQuemCaminhamos from '../components/ComQuemCaminhamos';
import Galeria from '../components/Galeria';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuemSomos />
      <ComQuemCaminhamos />
      <Galeria />
      <Footer />
    </div>
  );
};

export default Index;
