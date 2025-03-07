import './App.css'
import { Facturas } from './facturas/Facturas'
import { Header } from './Header/Header'
import { Interfaz } from './interfaz/Interfaz'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const App = () => {

  return (
      <div className='App'>
        <BrowserRouter>
        <Header/>
        <Routes>

        <Route path='/' element={<Interfaz/>} />
        <Route path='/Facturas' element={<Facturas/>} />

        </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
