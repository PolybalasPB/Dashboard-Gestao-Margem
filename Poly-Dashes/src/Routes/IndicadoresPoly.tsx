import '../estilos/indicadoresPoly.css';
import { Link } from 'react-router-dom';

const IndicadoresPoly = () => {
  return (
    <section className='center-div-menu-poly'>
        <div className='adapt'>
            <Link to='/indicadorescompras' className='menu-opt'>
              <div className='menu-options compras'></div>
              <p>Compras</p>
            </Link>
            <div className='menu-opt'>
              <div className='menu-options financeiro'></div>
              <p>Financeiro</p>
            </div>
        </div>
          
        <div className='adapt'>
            <div className='menu-opt'>
              <div className='menu-options comercial'></div>
              <p>Comercial</p>
            </div>
            <div className='menu-opt'>
              <div className='menu-options logistica'></div>
              <p>Logistica</p>
            </div>
        </div>
    </section>
  )
}

export default IndicadoresPoly