import ajaxService from "./ajaxService";
import renderImage from "./renderResult";

const searchCode = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector(".term").value;
    let apiFetchResult;
    ajaxService(searchTerm)
      .then((result) => (apiFetchResult = result))
      .then(() => console.log("Rezultatas", apiFetchResult))
      .then(() => {
        for (let i = 0; i < apiFetchResult.message.length; i++) {
          renderImage(apiFetchResult.message[i]);
        }
      });
  });
};
export default searchCode;
