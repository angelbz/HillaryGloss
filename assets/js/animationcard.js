//Movement Animation to happen
const card = document.querySelector(".card");
const container2 = document.querySelector(".container2");

//Items
const title = document.querySelector(".title");
const product1 = document.querySelector(".product1 img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const price = document.querySelector(".price");

//Moving Animation Event
container2.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / -140;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container2.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  //Popout
  title.style.transform = "translateZ(150px)";
  product1.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  price.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

//Animate Out
container2.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title.style.transform = "translateZ(0px)";
  product1.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  price.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});