
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <div className='main-content'>
      <div className='poly-logo'></div>
      <Outlet/>
    </div>
  )
}

export default App
