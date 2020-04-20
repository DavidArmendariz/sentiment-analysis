import React from "react";
import Button from "@material-ui/core/Button";
import analyzeArticle from "../utils/analyzeArticle";

const SubmitBotton = ({ error, url }) => {
  const [isProcessing, setIsProcessing] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error) {
      alert("Please enter a valid URL first.");
    } else {
      setIsProcessing(true);
      try {
        const requestAnalyzeArticle = await analyzeArticle(url);
        const data = await requestAnalyzeArticle.data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsProcessing(false);
      }
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
