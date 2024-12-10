import "../estilos/estoque.css";
import LeftMenu from "../componentes/LeftMenu";
import FornecedorTitle from "../componentes/FornecedorTitle";
import { useState, useEffect } from "react";
import axios from "axios";

interface Fornecedor {
  id: number;
  name: string;
}

interface FornecedorData {
  id: number;
  estoqueGerencial: number;
  pedidoTransito: number;
  mediaVendasMensal: number;
  giroEstoque: number;
}

const Estoque = () => {
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState<Fornecedor | null>(null);
  const [dadosFornecedor, setDadosFornecedor] = useState<FornecedorData | null>(null);

  useEffect(() => {
    const buscarDadosFornecedor = async () => {
      if (!fornecedorSelecionado) return;

      try {
        const response = await axios.get("https://9fc9-177-73-85-210.ngrok-free.app/giroestoque", {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        const dados = response.data.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any) => item[0] === fornecedorSelecionado.id
        );

        if (dados) {
          setDadosFornecedor({
            id: dados[0],
            estoqueGerencial: dados[1],
            pedidoTransito: dados[2],
            mediaVendasMensal: dados[3],
            giroEstoque: dados[4],
          });
        } else {
          setDadosFornecedor(null);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do fornecedor:", error);
      }
    };

    buscarDadosFornecedor();
  }, [fornecedorSelecionado]);

  return (
    <div className="content">
      <LeftMenu onSelectFornecedor={(fornecedor) => setFornecedorSelecionado(fornecedor)} />
      <div className="dash-estoque">
        <div className="fornecedor-estoque-box">
          <FornecedorTitle fornecedor={fornecedorSelecionado} />
          {dadosFornecedor ? (
            <div className="dados-fornecedor">
              <p>Código do Fornecedor: {dadosFornecedor.id}</p>
              <p>Total Estoque Gerencial: {dadosFornecedor.estoqueGerencial}</p>
              <p>Total Pedido em Trânsito: {dadosFornecedor.pedidoTransito}</p>
              <p>Média de Vendas Mensal: {dadosFornecedor.mediaVendasMensal}</p>
              <p>Giro de Estoque: {dadosFornecedor.giroEstoque}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Estoque;
