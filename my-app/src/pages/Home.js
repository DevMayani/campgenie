
import Fao from '../components/Fao/Fao';
import Sectionfour from '../components/sectionFour/Sectionfour';
import SectionOne from '../components/sectionOne/SectionOne';
import Sectionsix from '../components/Sectionsix/sectionsix';
import Sectionthree from '../components/sectionThree/Sectionthree';
import Sectiontwo from '../components/sectionTwo/Sectiontwo';
import Slidersection from '../components/sliderSection/Slidersection';

function Home() {
  return (
    <div className="App">
      <SectionOne />
      <Sectiontwo  />
      <Slidersection />
     <Sectionthree />
      <Sectionfour />
      <Fao />
      <Sectionsix />
    </div>
  );
}

export default Home;
