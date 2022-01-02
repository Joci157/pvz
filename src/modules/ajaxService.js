const ajaxService = (term) => {
  const url = "https://dog.ceo/api/breeds/image/random";
  return fetch(url).then((response) => response.json());
};

export default ajaxService;
