//Movement Animation to happen
const card3 = document.querySelector(".card3");
const container4 = document.querySelector(".container4");

//Items
const title3 = document.querySelector(".title3");
const product3 = document.querySelector(".product3 img");
const purchase3 = document.querySelector(".purchase3");
const description3 = document.querySelector(".info3 h3");
const price3 = document.querySelector(".price3");

//Moving Animation Event
container4.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / -170;
  card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container4.addEventListener("mouseenter", (e) => {
  card3.style.transition = "none";

  //Popout
  title3.style.transform = "translateZ(150px)";
  product3.style.transform = "translateZ(200px) rotateZ(45deg)";
  description3.style.transform = "translateZ(125px)";
  price3.style.transform = "translateZ(100px)";
  purchase3.style.transform = "translateZ(75px)";
});

//Animate Out
container4.addEventListener("mouseleave", (e) => {
  card3.style.transition = "all 0.5s ease";
  card3.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title3.style.transform = "translateZ(0px)";
  product3.style.transform = "translateZ(0px) rotateZ(0deg)";
  description3.style.transform = "translateZ(0px)";
  price3.style.transform = "translateZ(0px)";
  purchase3.style.transform = "translateZ(0px)";
});