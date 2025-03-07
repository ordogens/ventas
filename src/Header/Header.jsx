import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <h1>Sales Tracker</h1>
      <nav>
        <ul>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/Facturas'>Facturas</NavLink>
         <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};
