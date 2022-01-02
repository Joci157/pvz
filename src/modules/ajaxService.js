const ajaxService = (breedName) => {
  const url = "https://dog.ceo/api/breed/";

  return fetch(`${url}${breedName}/images`).then((response) => response.json());
};

export default ajaxService;
