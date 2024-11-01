import "../estilos/estoque.css";
import { VscTriangleRight } from "react-icons/vsc";
import { useState } from "react";

const Estoque = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="Dashboard-estoque">
      <nav className="left-menu">
        <div className="pastas-box">
          <div className="pastas-title">
            <h3>Selecione a pasta </h3>
            <VscTriangleRight
              className={`arrow ${isRotated ? "rotate" : ""}`}
              onClick={handleRotate}
            />
          </div>
          <div className={`pastas ${isRotated ? "visible" : ""}`}>
            <div className="menu-pasta">
              <input type="radio" /> A
            </div>
            <div className="menu-pasta">
              <input type="radio" /> B
            </div>
            <div className="menu-pasta">
              <input type="radio" /> C
            </div>
            <div className="menu-pasta">
              <input type="radio" /> D
            </div>
            <div className="menu-pasta">
              <input type="radio" /> E
            </div>
            <div className="menu-pasta">
              <input type="radio" /> F
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Estoque;
