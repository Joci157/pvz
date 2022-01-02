const renderImage = (imgSrc) => {
  let img = document.createElement("img");
  img.src = imgSrc;
  img.className = "nuotrauka";
  let imgWrapper = document.createElement("div");
  imgWrapper.className = "nuotraukosRemas";
  imgWrapper.appendChild(img);
  document.querySelector(".nuotraukos").appendChild(imgWrapper);
};

export default renderImage;
