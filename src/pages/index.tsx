import Footer from '@components/footer';
import Fases from '@components/sections/fases';
import SectionForm from '@components/sections/forms';
import Header from '@components/sections/Header';
import LogosSection from '@components/sections/logos';
import Mapa from '@components/sections/mapa';
import SectionVideo from '@components/sections/sectionVideo';
import ValuesSection from '@components/sections/values';
import Whatsapp from '@components/whatsapp';

const Home = () => {
  return (
    <>
      <Header />
      <Whatsapp />
      <ValuesSection />
{/*       <SectionVideo /> */}
      <Fases />
      <Mapa />
      <SectionForm />
      <LogosSection />
      <Footer />
    </>
  );
};

export default Home;
