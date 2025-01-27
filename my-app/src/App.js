
import './App.css';
import Fao from './components/Fao/Fao';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SectionOne from './components/sectionOne/SectionOne';
import Sectionsix from './components/Sectionsix/sectionsix';
import Sectiontwo from './components/sectionTwo/Sectiontwo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <Sectiontwo />
      <Fao />
      <Sectionsix />
      <Footer />
    </div>
  );
}

export default App;
