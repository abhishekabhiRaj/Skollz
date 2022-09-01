import {Navbar, Container} from 'react-bootstrap';
import './styles.css';
import { BsPersonCircle } from "react-icons/bs";
/* importing contentBoxToggle from Body 
Component for executing it from  here by 
clicking the logo */
import {contentBoxToggle} from "./Body.js";



/* Directly calling contentBoxToggle function
was giving error so I have created another funtion
to call , you can also call it directly without creating 
another function */
const sidebarToggleExecute = () => {
     contentBoxToggle();
}



// Header Component
function Header() {
  return (
    <Navbar bg="" expand="lg">
      <Container >
        <Navbar.Brand href="#home" id="Logo" onClick={sidebarToggleExecute} title="click to toggle sidebar">Skollz</Navbar.Brand>
         <BsPersonCircle id="user-icon" color="red" />
      </Container>
    </Navbar>
  );
}

export default Header;