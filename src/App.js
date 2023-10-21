import "./App.css";
import Navbar from "./components/navbar";
import HomeBody from "./components/homeBody";
import UniversityListBody from "./components/universityListBody";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UniversityListBody />
    </div>
  );
}

export default App;
