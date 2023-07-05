import logo from "./logo.svg";
import "./App.css";
import { createContext } from "react";
import CompA from "./CompA";
const FirstName = createContext();
const LastName = createContext();

function App() {
 
  return (
    <div>
      <FirstName.Provider value={"Aaushi"}>
        <LastName.Provider value={"Gupta"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };
