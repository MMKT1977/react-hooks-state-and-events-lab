import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import '/root/moringa/react-hooks-state-and-events-lab/src/index.css';

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [darkMode, setdarkMode] = useState(false);

  const toggleDarkMode = () => { setdarkMode(!darkMode);  };

  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
