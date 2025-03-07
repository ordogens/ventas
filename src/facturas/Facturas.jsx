import { Header } from "../Header/Header"
import './Facturas.css'


export const Facturas = () => {

    return (
        <div className="Facturas">
        <div className="inputs">

        <label className="labelP">Numero factura:</label>
        <input type="text" className="inputL" />

        <label className="labelP">Nombre cliente:</label>
        <input type="text" className="inputL" />

        <label className="labelP">Valor factura:</label>
        <input type="text" className="inputL" />

        <button className="bbb">Enviar</button>
        </div>

        <div className="vistas">

            <div className="pantalla">
            <h1>Facturas pagadas:</h1>
            </div>
            <div className="pantallaValor">
                <h2>Valor facturas:</h2>
            </div>
        </div>
    </div>
  )
}
