const isUrlValid = (userInput) => {
  const result = userInput.match(/(^http[s]?:\/{2})|(^www)|(^\/{1,2})/gim);
  if (result) {
    return true;
  } else {
    return false;
  }
};

export default isUrlValid;
