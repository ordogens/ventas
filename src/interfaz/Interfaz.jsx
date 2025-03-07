import "./Interfaz.css";
import { Header } from "../Header/Header";
import { useState } from "react";

export const Interfaz = () => {
  const [imput, setImput] = useState("");
  const [boton, setBoton] = useState(0);
  const [ventaMensual, setVentaMensual] = useState(0);
  const [clientes, setClientes] = useState(0)

  const suma = () => {
    const nuevoValor = imput;
    setBoton(boton + nuevoValor);
    setVentaMensual(ventaMensual + nuevoValor);
    setClientes(clientes + 1)
  };

  return (
    <div className="Interfaz">
      <div className="Interfas">
        <div className="valores">
          <h2>Total sales today:</h2>
          <h2>${boton}</h2>
        </div>
        <div className="valores">
          <h2>Total sales this month:</h2>
          <h2>${ventaMensual}</h2>
          <h2>seus ganhos:</h2>
          <h2>${ventaMensual * 0.06}</h2>
        </div>
      </div>
      <div className="Input">
        <label>Enter a value:</label>
        <input
          type="text"
          value={imput}
          onChange={(e) => setImput(Number(e.target.value) || 0)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              suma();
              setImput(0)
            }
          }}
        />
        <button onClick={suma}>Enviar</button>
        <h2 style={{color: '#ccc', marginTop: '1rem'}}>Visited:</h2>
        <div>
          <h3 style={{color: '#ccc'}}>{clientes}</h3>
        </div>
      </div>
    </div>
  );
};
