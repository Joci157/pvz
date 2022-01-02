const renderError = () => {
  let errorDiv = document.createElement("div");
  errorDiv.className = "klaida";
  errorDiv.innerHTML = "Suniuko veisle nebuvo rasta";
  document.querySelector("main").appendChild(errorDiv);
};

export default renderError;
