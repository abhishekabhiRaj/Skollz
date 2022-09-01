import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Navbar.js";
import Body from "./Body.js";



// App component

export default function App() {
  return (
    <div className="App">
       <Header/>
        <Body/>
    </div>
  );
}
