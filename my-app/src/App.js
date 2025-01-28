
import './App.css';
import Fao from './components/Fao/Fao';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sectionfour from './components/sectionFour/Sectionfour';
import SectionOne from './components/sectionOne/SectionOne';
import Sectionsix from './components/Sectionsix/sectionsix';
import Sectionthree from './components/sectionThree/Sectionthree';
import Sectiontwo from './components/sectionTwo/Sectiontwo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <Sectiontwo />
     <Sectionthree />
      <Sectionfour />
      <Fao />
      <Sectionsix />
      <Footer />
    </div>
  );
}

export default App;
