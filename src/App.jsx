import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
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
      <Footer />
      {/*
       *proyects
       *contact
       *footer */}
    </>
  );
}

export default App;
