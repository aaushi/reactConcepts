import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";



import {Link} from "react-router-dom"



function App() {
   const { loginWithRedirect } = useAuth0();
  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
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
        </li>
        <li>
          <Link to="ExampleUseEffect">Example useEffect</Link>
        </li>
        <li>
          <Link to="LiftingStateUp">Example Lifting StateUp</Link>
        </li>
        <li>
          <Link to="ExampleUseCallback2">Example Usecallback2</Link>
        </li>
        <li>
          <Link to="HigherOrderComponent">Example HigherOrderComponent</Link>
        </li>
        <li>
          <Link to="CustomHookExample">Example Custom Hook</Link>
        </li>
        <li>
          <Link to="Debouncing">Example Debouncing</Link>
        </li>
        <li>
          <Link to="SearchRestaurantAndMenu">Search Restaurant And Menu</Link>
        </li>
        <li>
          <Link to="CustomHookExample2">Using CustomHook check user status</Link>
        </li>
      </ol>
    </>
  );
}




export default App;

