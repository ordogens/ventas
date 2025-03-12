import { useState } from "react";
import "./Facturas.css";

export const Facturas = () => {
  // Estado para manejar los inputs
  const [factura, setFactura] = useState({
    numero: "",
    nombre: "",
    valor: "",
  });

  // Estado para almacenar la lista de facturas enviadas
  const [facturasEnviadas, setFacturasEnviadas] = useState([]);

  // Estado para almacenar la sumatoria de valores
  const [suma, setSuma] = useState(0);

  // Función para manejar el cambio en los inputs
  const handleChange = (e) => {
    setFactura({
      ...factura,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío
  const handleSubmit = () => {
    if (!factura.numero || !factura.nombre || !factura.valor) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Convertir el valor a número
    const valorNuevo = parseFloat(factura.valor);

    // Agregar la nueva factura a la lista de facturas enviadas
    setFacturasEnviadas([...facturasEnviadas, factura]);

    // Actualizar la sumatoria de valores
    setSuma((prevSuma) => prevSuma + valorNuevo);

    // Reiniciar los inputs
    setFactura({
      numero: "",
      nombre: "",
      valor: "",
    });
  };

  return (
    <div className="Facturas">
      <div className="inputs">
        <label className="labelP">Número factura:</label>
        <input
          type="number"
          className="inputL"
          name="numero"
          value={factura.numero}
          onChange={handleChange}
          placeholder="Numero factura"
        />

        <label className="labelP">Nombre cliente:</label>
        <input
          type="text"
          className="inputL"
          name="nombre"
          value={factura.nombre}
          onChange={handleChange}
          placeholder="Nombre cliente"
        />

        <label className="labelP">Valor factura:</label>
        <input
          type="number"
          className="inputL"
          name="valor"
          value={factura.valor}
          onChange={handleChange}
          placeholder="Valor factura"
        />

        <button className="bbb" onClick={handleSubmit}>
          Enviar
        </button>
      </div>

      <div className="vistas">
        <div className="pantalla">
          <h1>Facturas pagadas:</h1>
          <div className="fctrs">
            {facturasEnviadas.length > 0 ? (
              facturasEnviadas.map((factura, index) => (
                <div key={index} className="factura-item">
                  <p>
                    <strong>Número:</strong> {factura.numero}
                  </p>
                  <p>
                    <strong>Cliente:</strong> {factura.nombre}
                  </p>
                  <p>
                    <strong>Valor:</strong> ${factura.valor}
                  </p>
                  <hr />
                </div>
              ))
            ) : (
              <p>No hay facturas enviadas.</p>
            )}
          </div>
        </div>

        {/* Aquí se muestra la sumatoria de las facturas enviadas */}
        <div className="pantallaValor">
          <h2>Valor total de facturas:</h2>
          <p><strong>${suma.toFixed(2)}</strong></p>
        </div>
      </div>
    </div>
  );
};
