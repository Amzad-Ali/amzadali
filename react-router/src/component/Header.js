// import { Link, NavLink } from "react-router-dom";
// // import MyComponent from "./MyComponent";
// // import Logo from "../assets/logo.png";

// export const Header = () => {
//   return (
//     <header>
//       <Link to="/" className="logo">
//         <img src="https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" alt="Routemate Logo" />
//         <span>Routemate</span>
//       </Link>
//       <nav className="navigation">
//         <NavLink to="/" className="link" end>Home</NavLink>
//         <NavLink to="/products" className="link">Products</NavLink>
//         <NavLink to="/Contact" className="link">Contact</NavLink>
//         <NavLink to="/MyComponent" className="link">MyComponent</NavLink>
//       </nav>
//     </header>
//   )
// }

import { Link , NavLink} from "react-router-dom";
// import {MyComponent} from './MyComponent';
 function Header(){

  return(
    <header>
      <Link to="/" className="logo">
      <img src="https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" alt="Routemate Logo" />
      <span>Roiter</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/productlist" className="link">Products</NavLink>
        <NavLink to="/contact" className="link">contact</NavLink>
        <NavLink to="/mycomponent" className="link">mycomponent</NavLink>
      </nav>
    </header>
  )
 }
 export default Header;
