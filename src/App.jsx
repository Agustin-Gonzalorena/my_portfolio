import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Stack />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />
    </>
  );
}

export default App;
