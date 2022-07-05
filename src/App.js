import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Banner from "./components/Banner/Banner";
import Posters from "./components/RowPost/Posters";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>

      <Posters/>
    </div>
    

  );
}

export default App;
