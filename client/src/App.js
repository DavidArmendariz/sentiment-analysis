import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserContext } from "./providers/userProvider";
import SignIn from "./pages/signIn";

const App = () => {
  const user = React.useContext(UserContext);
  return user ? (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ) : (
    <SignIn />
  );
};

export default App;
