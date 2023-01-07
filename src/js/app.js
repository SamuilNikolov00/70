import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
 const div = document.createElement("div");
 div.classList.add("image");
 const img = document.createElement("img");
 img.setAttribute("image","");
 img.setAttribute("src",'../images/MichaelScott.png');
 div.appendChild(img);

  document.querySelector(".main").appendChild(div);

  const toDouble = document.querySelector(".image");

  toDouble.addEventListener("click",double);

  

});

function double(event){
  event.target.style.transform = "scale(2, 2)";

}
