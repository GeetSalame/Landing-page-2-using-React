import Connect from "./components/Connect";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Projects/>
      <Connect/>
    </div>
  );
}

export default App;
