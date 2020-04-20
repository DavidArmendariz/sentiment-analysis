import React from "react";
import "./App.css";
import { UserContext } from "./providers/userProvider";
import SignIn from "./pages/signIn";
import Home from "./pages/home";

const App = () => {
  const user = React.useContext(UserContext);
  return user ? <Home /> : <SignIn />;
};

export default App;
