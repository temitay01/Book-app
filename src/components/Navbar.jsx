import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SecondContext } from "./App";

function Navbar() {
  const { savedBooks } = useContext(SecondContext);
  return (
    <nav className="nav-bar">
      <div className="logo">BOOK-LIST</div>
      <div className="seperator">|</div>
      <NavLink to={"./"}>
        <div>Home</div>
      </NavLink>
      <NavLink to={"/shelve"}>
        <div>Shelves({savedBooks.length})</div>
      </NavLink>
    </nav>
  );
}
export default Navbar;
