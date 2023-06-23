import {Navbar,  Container , Nav } from "react-bootstrap"
import logo from "../images/Kfc_logo.png"
import target2 from "../images/target2.png"

export const Menu = () =>{
   return(
     <section className="header">
      <Navbar className="nav" expand="lg" >
  
        <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <button id="b1" className="b1 button-active"><i class="fa-solid fa-dumpster-fire"></i> DELIVERY</button><button id="b2" className="b2"><i class="fa-solid fa-user-large"></i> PICKUP</button>
        <button className="location-button"><img className="target" src={target2} alt="target icon" /> Select Location <i class="fa-solid fa-caret-down"></i></button>
        <button className="login-button">Register / Sign in</button>
        </Navbar.Collapse>
        
    </Navbar>
     </section>
    )
}