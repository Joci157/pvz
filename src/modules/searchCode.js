import ajaxService from "./ajaxService";
import renderError from "./renderError";
import renderImage from "./renderResult";

const searchCode = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    document.querySelector(".nuotraukos").innerHTML = "";
    e.preventDefault();
    const searchTerm = document.querySelector(".term").value;
    let apiFetchResult;
    ajaxService(searchTerm)
      .then((result) => (apiFetchResult = result))
      .then(() => console.log("Rezultatas", apiFetchResult))
      .then(() => {
        if (apiFetchResult.status === "success") {
          for (let i = 0; i < apiFetchResult.message.length; i++) {
            renderImage(apiFetchResult.message[i]);
          }
        } else {
          renderError();
        }
      })
      .catch((error) => console.log(error));
  });
};
export default searchCode;
