import "./styles/App.css";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Work from "../src/components/Work";
import About from "../src/components/About";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work />
      <About />
    </div>
  );
};

export default App;
