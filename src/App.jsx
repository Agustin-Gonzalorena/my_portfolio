import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
function App() {
  return (
    <>
      <Header />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Stack />
      {/*
       *about
       *stack
       *proyects
       *contact
       *footer */}
      <div
        style={{ height: "800px", width: "100%", border: "solid 1px red" }}
      ></div>
    </>
  );
}

export default App;
