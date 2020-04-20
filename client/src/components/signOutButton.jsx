import React from "react";
import Button from "@material-ui/core/Button";
import { auth } from "../firebase/firebase.utils";

const SignOutButton = () => {
  const handleSignOut = () => {
    try {
      auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ margin: 20 }}
      onClick={handleSignOut}
    >
      Sign out
    </Button>
  );
};

export default SignOutButton;
