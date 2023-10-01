import Nav from "./components/Nav/Nav";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Reach from "./components/Reach/Reach";
import Contact from "./components/Contact/Contact";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Reach />
      <Contact />
    </div>
  );
}

export default App;
