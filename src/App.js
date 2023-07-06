import logo from "./logo.svg";
import "./App.css";



import {Link} from "react-router-dom"



function App() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="ExampleUseContext">ExampleUseContext</Link>
      </li>
      <li>
        <Link to="ExampleUseCallback">ExampleUseCallback</Link>
      </li>
      <li>
        <Link to="ExampleUseMemo">ExampleUseMemo</Link>
      </li>
    </>
  );
}




export default App;

