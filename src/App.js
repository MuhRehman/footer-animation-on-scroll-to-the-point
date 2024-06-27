import logo from './logo.svg';
import './App.css';
import SectionOne from './comp/SectionOne';
import SectionTwo from './comp/SectionTwo';
import SectionThree from './comp/SectionThree';
import Footer from './comp/Footer';

function App() {
  return (
    <div className="App">
       <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
       <Footer />
    </div>
  );
}

export default App;
