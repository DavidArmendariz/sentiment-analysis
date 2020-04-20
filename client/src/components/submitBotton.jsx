import React from "react";
import Button from "@material-ui/core/Button";

const SubmitBotton = ({ error }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) {
      alert("Please enter a valid URL first.");
    } else {
      console.log("Analyzing...");
    }
  };
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ margin: 20 }}
        onClick={handleSubmit}
      >
        Analyze now
      </Button>
    </div>
  );
};

export default SubmitBotton;
