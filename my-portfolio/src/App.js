import "./styles/App.css";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Work from "../src/components/Work";
import Skill from "../src/components/Skill";
import About from "../src/components/About";
import Contact from "../src/components/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work />
      <Skill />
      <About />
      <Contact />
    </div>
  );
};

export default App;
