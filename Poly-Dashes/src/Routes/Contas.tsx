import '../estilos/contas.css';
import { useState, useEffect } from 'react';
import LeftMenu from "../componentes/LeftMenu";
import FornecedorTitle from '../componentes/FornecedorTitle';
import axios from 'axios';

interface Fornecedor {
  id: number;
  name: string;
}

interface FornecedorData {
  id: number;
  nomeFornec: number;
  saldoReceber: number;
  saldoPagar: number; 
}

const Contas = () => {

  const [fornecedorSelecionado, setFornecedorSelecionado] = useState<Fornecedor | null>(null);
  const [dadosFornecedor, setDadosFornecedor] = useState<FornecedorData | null>(null);

  useEffect(() => {
    const buscarDadosFornecedor = async () => {
      if (!fornecedorSelecionado) return;

      try {
        const response = await axios.get("https://9fc9-177-73-85-210.ngrok-free.app/verba1809", {
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
            nomeFornec: dados[1],
            saldoReceber: dados[2],
            saldoPagar: dados[3],
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
    <div className='content'>
        <LeftMenu onSelectFornecedor={(fornecedor) => setFornecedorSelecionado(fornecedor)} />
      <div className='contas'>
        <FornecedorTitle fornecedor={fornecedorSelecionado}/>
        {dadosFornecedor ? (
          <div className="fornec-conta">
            <div className="pagar"> <p>Saldo a receber: </p> {dadosFornecedor.saldoReceber}</div>
            <div className='receber'> <p>Saldo a pagar: </p> {dadosFornecedor.saldoPagar}</div>
          </div>
        ) :  (
          <p></p>
        )}
        
      </div>
    </div>
  )
}

export default Contas;

//<p>Nome do Fornecedor: {fornecedorSelecionado?.name}</p>
//<p>Código do Fornecedor: {fornecedorSelecionado?.id}</p>