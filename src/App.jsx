import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Portfolio Agustin Gonzalorena" />
        <meta property="og:description" content="Web creada con Vite + React" />
        <meta property="og:image" content="../public/AgustinGonzalorena.jpg" />
      </Helmet>
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
