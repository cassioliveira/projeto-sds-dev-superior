import Barchart from "components/Barchart";
import Datatable from "components/Datatable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import React from "react";

function App() {
  return (
    //O retorno da função só pode ter um elemento, então todo o código entre <> E </> (FRAGMENT) é considerado um único elemento.
    <>
      <NavBar />
      <div className="container">
        {/* px-3 e py-3 dá espaçamento de 3 unidades na horizontal e vertical, respectivamente */}
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
            <Barchart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
