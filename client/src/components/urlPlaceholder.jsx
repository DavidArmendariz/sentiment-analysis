import React from "react";
import TextField from "@material-ui/core/TextField";
import isUrlValid from "../utils/urlValidator";

const UrlPlaceholder = ({ url, setUrl, error, setError }) => {
  const handleChange = (event) => {
    const text = event.target.value;
    const isValid = isUrlValid(text);
    setError(!isValid);
    setUrl(event.target.value);
  };
  return (
    <TextField
      error={error}
      id="filled-full-width"
      label="URL"
      style={{ marginLeft: 200, marginRight: 200 }}
      placeholder={url}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
      onChange={handleChange}
      helperText={error ? "Enter a valid URL": ""}
    />
  );
};

export default UrlPlaceholder;
