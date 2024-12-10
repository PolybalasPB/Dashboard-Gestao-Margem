import { useState } from "react";
import "../estilos/leftMenu.css";
import { GoTriangleRight } from "react-icons/go";

// interface para o fornecedor
interface Fornecedor {
  id: number;
  name: string;
}

interface LeftMenuProps {
  onSelectFornecedor: (fornecedor: Fornecedor) => void;
}


// tipo para as pastas (A - F)
type FornecedoresData = {
  [key: string]: Fornecedor[];
};


// Componente 
const LeftMenu: React.FC<LeftMenuProps> = ({ onSelectFornecedor }) => {
    // Variaveis para controle de estado
  const [isRotated, setIsRotated] = useState(false);
  const [selectedPasta, setSelectedPasta] = useState<keyof FornecedoresData | null>(null);
  const [isFornecVisible, setIsFornecVisible] = useState(false);

  // Switch para animar menu
  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  // Variaveis para o menu hamburguer 
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Função para atualizar o menu hamburguer  e menu lateral  e rotacionar o menu lateral  caso esteja aberto  e fechado  respectivamente  e fechar o menu hamburguer  caso esteja aberto  e fechar o menu lateral  caso esteja fechado  e rotacionar o menu lateral  caso esteja fechado  e fechar o menu hambur
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  // Função para exibir os fornecedores da estrutura de fornecedoresData
  const handleSelectPasta = (pasta: keyof FornecedoresData) => {
    setSelectedPasta(pasta);
    setIsFornecVisible(true);
    handleRotate();
  };

  //estrutura com informações sobre os fornecedores
  const fornecedoresData: FornecedoresData = {
    A: [
      { id: 16673, name: "Havaianas" },
      { id: 663, name: "Bettanin" },
      { id: 17594, name: "Rayovac" },
      { id: 19143, name: "Baston" },
    ],
    B: [
      { id: 16671, name: "RB Veja" },
      { id: 16677, name: "Condor" },
      { id: 18650, name: "Tramontina" },
    ],
    C: [{ id: 12580, name: "Mondelez" }],
    D: [
      { id: 16669, name: "Loreal" },
      { id: 18038, name: "Santher" },
      { id: 16680, name: "LILLO/NUK" },
      { id: 16681, name: "Baruel" },
    ],
    E: [
      { id: 16973, name: "Gallo" },
      { id: 17659, name: "Giovanna Baby" },
      { id: 17890, name: "Skala" },
      { id: 159, name: "Hypera" },
      { id: 17983, name: "Embelleze" },
      { id: 13838, name: "Flora" },
      { id: 16742, name: "Henkel" },
    ],
    F: [
      { id: 13960, name: "Nivea" },
      { id: 18953, name: "Baly" },
      { id: 17624, name: "Kian" },
      { id: 18112, name: "Kraft Heinz" },
      { id: 17526, name: "Start" },
      { id: 16991, name: "SMG Sardinhas" },
    ],
  };
  
  // Renderiza o menu
  return (
    <div className="menu-content">
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="pastas-nav">
          <div className="pastas-select-button" onClick={handleRotate}>
            <p>Selecione a pasta</p>
            <GoTriangleRight className={`arrow ${isRotated ? "rotate" : ""}`} />
          </div>
          
          <div className={`pastas ${isRotated ? "visible" : ""}`}>
            {["A", "B", "C", "D", "E", "F"].map((pasta) => (
              <div
                key={pasta}
                className="menu-pasta"
                onClick={() => handleSelectPasta(pasta as keyof FornecedoresData)}
              >
                <input
                  type="radio"
                  name="pasta"
                  value={pasta}
                  checked={selectedPasta === pasta}
                  onChange={() => handleSelectPasta(pasta as keyof FornecedoresData)}
                />
                {pasta}
              </div>
            ))}
          </div>
        </div>

        <div className={`fornec-nav ${isRotated ? "moved" : ""}`}>
          <div
            className="fornec-select-button"
            onClick={() => setIsFornecVisible(!isFornecVisible)}
          >
            <p>Selecione o fornecedor</p>
            <GoTriangleRight className={`arrow ${isFornecVisible ? "rotate" : ""}`} />
          </div>

          {isFornecVisible && selectedPasta && (
            <div className="fornecedores">
              {fornecedoresData[selectedPasta].map((fornecedor: Fornecedor) => (
                <div key={fornecedor.id} className="fornecedor-item" onClick={() => onSelectFornecedor(fornecedor)}>
                  {fornecedor.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
