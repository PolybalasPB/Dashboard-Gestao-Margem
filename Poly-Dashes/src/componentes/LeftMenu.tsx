import { useState } from "react";
import "../estilos/leftMenu.css";
import { GoTriangleRight } from "react-icons/go";

const LeftMenu = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [selectedPasta, setSelectedPasta] = useState<string | null>(null);

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  

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

  const handleSelectPasta = (pasta: string) => {
    setSelectedPasta(pasta);
    handleRotate();
  };

  const fornecedoresData = {
    A: [
      { id: 16673, name: 'Havaianas' },
      { id: 663, name: 'Bettanin'},
      { id: 17594, name: 'Rayovac' },
      { id: 19143, name: 'Baston'}
    ],
    B: [
      { id: 16671, name: 'RB Veja' },
      { id: 16677, name: 'Condor'},
      { id: 17567, name: 'Tramontina'}
    ],
    C: [
      { id: 12580, name: 'Mondelez'}
    ],
    D: [
      { id: 16669, name: 'Loreal'},
      { id: 18038, name: 'Santher'},
      { id: 16680, name: 'LILLO/NUK' },
      { id: 16681, name: 'Baruel'}
    ],
    E: [
      { id: 16973, name: 'Gallo'},
      { id: 17659, name: 'Giovanna Baby'},
      { id: 17890, name: 'Skala'},
      { id: 159, name: 'Hypera'},
      { id: 17983, name: 'Embelleze'},
      { id: 13838, name: 'Flora'},
      { id: 16742, name: 'Henkel'}
    ],
    F: [
      { id: 13960, name: 'Nivea'},
      { id: 18953, name: 'Baly'},
      { id: 17624, name: 'Kian'},
      { id: 18112, name: 'Kraft Heinz'},
      { id: 17526, name: 'Start'},
      { id: 16991, name: 'SMG Sardinhas'}
    ]
  };

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
            <GoTriangleRight
              className={`arrow ${isRotated ? "rotate" : ""}`}
            />
          </div>

          <div className={`pastas ${isRotated ? "visible" : ""}`}>
            {["A", "B", "C", "D", "E", "F"].map((pasta) => (
              <div
                key={pasta}
                className="menu-pasta"
                onClick={() => handleSelectPasta(pasta)}
              >
                <input
                  type="radio"
                  name="pasta"
                  value={pasta}
                  checked={selectedPasta === pasta}
                  onChange={() => handleSelectPasta(pasta)} // Necessário para tornar o input controlado
                />
                {pasta}
              </div>
            ))}
          </div>
        </div>

        <div className={`fornec-nav ${isRotated ? "moved" : ""}`}>
          <div className="fornec-select-button">
            <p>Selecione o fornecedor</p>
            <GoTriangleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
