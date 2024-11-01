
import '../estilos/indicadoresCompras.css';
import { Link } from'react-router-dom';


const IndicadoresCompras = () => {
  return (
    <div className='center-div-menu-compras'>
      <h1>Indicadores Compras</h1>
      <div className='adapt'>
        <Link to='/estoque' className='menu-opt'>
          <div className='menu-options estoque'></div>
          <p>Estoque</p>
        </Link> 
        <div className='menu-opt'>
          <div className='menu-options margem'></div>
          <p>Margem</p>
        </div>
        <div className='menu-opt'>
          <div className='menu-options cc'></div>
          <p>C/C por Fornecedor</p>
        </div>
      </div>
    </div>
  )
}

export default IndicadoresCompras