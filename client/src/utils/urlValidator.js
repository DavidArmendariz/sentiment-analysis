const urlValidator = (userInput) => {
  const result = userInput.match(/(^http[s]?:\/{2})|(^www)|(^\/{1,2})/gim);
  return !!result;
};

export default urlValidator;
