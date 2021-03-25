//Movement Animation to happen
const card2 = document.querySelector(".card2");
const container3 = document.querySelector(".container3");

//Items
const title1 = document.querySelector(".title2");
const product2 = document.querySelector(".product2 img");
const purchase2 = document.querySelector(".purchase2");
const description2 = document.querySelector(".info2 h3");
const price2 = document.querySelector(".price2");

//Moving Animation Event
container3.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 140;
  card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container3.addEventListener("mouseenter", (e) => {
  card2.style.transition = "none";

  //Popout
  title2.style.transform = "translateZ(150px)";
  product2.style.transform = "translateZ(200px) rotateZ(0deg)";
  description2.style.transform = "translateZ(125px)";
  price2.style.transform = "translateZ(100px)";
  purchase2.style.transform = "translateZ(75px)";
});

//Animate Out
container3.addEventListener("mouseleave", (e) => {
  card2.style.transition = "all 0.5s ease";
  card2.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title2.style.transform = "translateZ(0px)";
  product2.style.transform = "translateZ(0px) rotateZ(0deg)";
  description2.style.transform = "translateZ(0px)";
  price2.style.transform = "translateZ(0px)";
  purchase2.style.transform = "translateZ(0px)";
});