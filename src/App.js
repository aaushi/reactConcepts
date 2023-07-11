import logo from "./logo.svg";
import "./App.css";



import {Link} from "react-router-dom"



function App() {
  return (
    <ol>
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
      <li>
        <Link to="UserDirectory">User Directory</Link>
      </li>
      <li>
        <Link to="ExampleUseRef">Example UseRef</Link>
        <ul>
          <li>
            <Link to="PurposeMutantVariable">Purpose MutantVariable</Link>
          </li>
          <li>
            <Link to="PurposeAccessDom">Purpose AccessDom</Link>
          </li>
        </ul>
      </li>
    </ol>
  );
}




export default App;

