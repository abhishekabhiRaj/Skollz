import { BsPersonCircle,BsColumns, BsCurrencyDollar, BsPersonSquare, BsWallet2, BsBell, BsFillPersonLinesFill, BsChevronCompactLeft } from "react-icons/bs";
import './styles.css';
import {Button, Dropdown } from 'react-bootstrap';


// function for hiding sidebar
const hideSidebar = () => {
  document.getElementById('Sidebar').style.display = 'none';
}

// function for showing sidebar
const showSidebar = () => {
  document.getElementById('Sidebar').style.display = 'block';
}


// Sidebar Component
const Sidebar = () => {
  return(
    <>
      <div className="Sidebar" id="Sidebar">
         <section className="user-profile"> 
              <BsPersonCircle id="user-icon" color="#fff" />
              <span> Edit Profile </span>
         </section>
         <section className="Sidebar-tabs">
            <div className="tab">
                <BsColumns color="#fff" />
                <span> Dashboard </span>
            </div>
             <div className="tab">
                <BsCurrencyDollar color="#fff" />
                <span> Fee Details </span>
            </div>
            <div className="tab-dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <div className="tab-dropdown-title"> 
                          <BsFillPersonLinesFill/>
                          <span> Staff Deatils </span>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">View Details</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Pay History</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Add Staff</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
            </div>
            <div className="tab">
                <BsPersonSquare color="#fff" />
                <span> Students Details </span>
            </div>
             <div className="tab">
                <BsWallet2 color="#fff" />
                <span> Pay Salary </span>
            </div>
            <div className="tab">
                <BsBell color="#fff" />
                <span> Notices </span>
            </div>
             <div className="tab">
                <BsPersonCircle color="#fff" />
                <span> School Profiles </span>
            </div>
         </section>
         <section>
               <Button variant="light" id="sidebar-logout-btn">Logout</Button>
          </section>
          {/* <section  className="Sidebar-toggle-btn" id="Sidebar-toggle-btn">
              <BsChevronCompactLeft/>
          </section> */}
      </div>
    </>
  );
}

export {hideSidebar, showSidebar};
export default Sidebar;