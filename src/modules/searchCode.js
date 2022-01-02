import ajaxService from "./ajaxService";

const searchCode = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector(".term").value;
    let apiFetchResult;
    ajaxService(searchTerm).then((result) => (apiFetchResult = result));
    //   .then(() => console.log(searchResponse.data[0].post_code))
    //   .then(
    //     () =>
    //       (document.querySelector(".result").value =
    //         searchResponse.data[0].post_code)
    //   );

    // console.log(searchResponse);
  });
};
export default searchCode;
