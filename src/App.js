import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill/>
      <Work/>
      <Contact/>
    </div>
  );
}
export default App;
