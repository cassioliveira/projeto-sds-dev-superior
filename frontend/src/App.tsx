import Datatable from "components/Datatable";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import React from "react";

function App() {
  return (
    //O retorno da função só pode ter um elemento, então todo o código entre <> E </> (FRAGMENT) é considerado um único elemento.
    <>
      <NavBar />
      <div className="container">
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
