import React from 'react';
import Sidebar from './Sidebar.js';
/* hideSidebar & showSidebar are function
imported from Sidebar components to hide and show
sidebar */
import {hideSidebar, showSidebar} from './Sidebar.js';
import Content from "./Content.js";
import SidebarToggler from './SidebarToggler.js';






/* this is function for changing the width 
of sidebar and main content  */
const contentBoxToggle = () => {
  var contentBox = document.getElementById('content-box');
  var sidebarBox = document.getElementById('sidebar-box');
  if(sidebarBox.style.display === "none"){
      contentBox.style.width = "calc(100vw - 208px)";
      sidebarBox.style.display = "block";
      showSidebar();
  }
  else{
      contentBox.style.width = "100vw";
      sidebarBox.style.display = "none";
      hideSidebar();
  }
}



// Body Component

const Body = () => {
  return (
    <>
          <div className="Body" >
          {/* sidebar-section */}
              <section className="sidebar-box p-0" id="sidebar-box" >
                  {/* sidebar component */}
                  <Sidebar/>
              </section>
              {/* content section */}
              <section className="content-box" id="content-box" >
                  {/* content component  */}
                  <Content/>
                  {/* Sidebar toggler icon component */}
                  <SidebarToggler/>
              </section>
          </div> 
    </>
  );
}

// Body component --end


/* exporting contentBoxToggle function to use it in 
another component*/
export {contentBoxToggle}

export default Body;