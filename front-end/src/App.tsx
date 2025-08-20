import Menu from './components/Menu'
import Rodape from './components/Rodape'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Menu></Menu>
      <Outlet></Outlet>
      <Rodape></Rodape>
    </>
  )
}

export default App
