import "./Interfaz.css";

export const Interfaz = () => {
  return (
    <div className="Interfaz">
      <div className="Interfas">
        <div className="valores">
          <h2>Total sales today:</h2>
        </div>
        <div className="valores">
          <h2>Total sales this month:</h2>
        </div>
      </div>
        <div className="Input">
        <label>Ingrese un valor:</label>
        <input type="number" />
        </div>
    </div>
  );
};
