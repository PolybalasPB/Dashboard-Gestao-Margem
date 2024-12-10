
import React from "react";

interface Fornecedor {
  id: number;
  name: string;
}

interface FornecedorTitleProps {
  fornecedor: Fornecedor | null;
}

const FornecedorTitle: React.FC<FornecedorTitleProps> = ({ fornecedor }) => {
  return (
    <div className="fornecedor-estoque-selected">
      <h3>{fornecedor ? fornecedor.name : ""}</h3>
    </div>
  );
};

export default FornecedorTitle;
