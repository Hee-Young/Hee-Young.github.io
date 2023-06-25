const Imgs = ["PC.jpg", "PC1.jpg", "PC2.jpg", "PC3.jpg", "PC4.jpg"];

const choseImage = Imgs[Math.floor(Math.random() * Imgs.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/background-img/${choseImage}`;

const body = document.querySelector("body");
body.style.backgroundImage = `url("img/${choseImage}")`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center center";
body.style.backgroundRepeat = "no-repeat";
