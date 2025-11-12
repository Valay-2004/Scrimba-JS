// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const renderEL = document.getElementById("container");

function imgRender() {
  let imgDom = "";
  for (let i = 0; i < imgs.length; i++) {
    imgDom += `<img class="team-img" src=${imgs[i]}></img>`;
  }
  renderEL.innerHTML = imgDom;
}

const imgs = [
  "images/arch-peace.png",
  "images/interstellar_wallpaper.png",
  "images/neosamurai.webp",
];

imgRender();
