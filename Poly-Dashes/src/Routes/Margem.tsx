import "../estilos/margem.css";
import LeftMenu from "../componentes/LeftMenu";
import { useState } from "react";
import FornecedorTitle from "../componentes/FornecedorTitle";
import Chart from "react-apexcharts";

interface Fornecedor {
  id: number;
  name: string;
}

const optionsChartLine = {
  chart: {
    id: "basic-line-chart",
  },
  xaxis: {
    categories: [1, 4],
    dataColor: '#fff'
  },
};

const seriesChartLine = [
  {
    name: "meta",
    data: [5, 6],
    color: '#DF2030'
  },
];

const Margem = () => {
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState<Fornecedor | null>(null);

  return (
    <div className="content">
      <LeftMenu onSelectFornecedor={(fornecedor) => setFornecedorSelecionado(fornecedor)} />
      <div className="dash-margem">
        <div className="fornecedor-name-m">
          <FornecedorTitle fornecedor={fornecedorSelecionado} />
        </div>
        <div className="margem-section">
          <Chart options={optionsChartLine} series={seriesChartLine} type="bar" height='500' width='1000' className='grafico'/>
        </div>
      </div>
    </div>
  );
};

export default Margem;
