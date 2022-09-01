import './styles.css';
import {BsChevronCompactLeft} from 'react-icons/bs';
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



// SidebarToggler Component
const SidebarToggler = () => {
  return(
    <>
       <div onClick={sidebarToggleExecute} className="Sidebar-toggle-btn-2"> 
          <BsChevronCompactLeft  />
       </div>
    </>
  );
}

export default SidebarToggler;