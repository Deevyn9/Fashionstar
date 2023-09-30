import Nav from "./components/Nav/Nav";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Reach from "./components/Reach/Reach";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Reach />
    </div>
  );
}

export default App;
