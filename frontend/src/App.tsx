import BarChat from "components/BarChat";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DonutChart from './components/DonutChart/index';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard de vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-secundary text-center">Taxa de sucesso (%)</h5>
            <BarChat />
          </div>
          <div className="col-sm-6">
            <h5 className="text-secundary text-center">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
