import Nav from "./components/Nav/Nav";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Reach from "./components/Reach/Reach";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Reach />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
