import "./App.css";
import Navbar from "./components/navbar";
import HomeBody from "./components/homeBody";
import LoginBody from "./components/loginPage";
import GreService from "./components/greService"

import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBody />
      {/* <LoginBody />  */}
      {/* <GreService /> */}
      <Footer/>
    </div>
  );
}

export default App;
