console.log("Getting ready");
// home buttons
const home1 = document.getElementById("home-1");
const home2 = document.getElementById("home-2");
const home3 = document.getElementById("home-3");
const homeScore = document.getElementById("home-score");

// Guest buttons
const guest1 = document.getElementById("guest-1");
const guest2 = document.getElementById("guest-2");
const guest3 = document.getElementById("guest-3");

const addOneHome = () => {
    homeScore.textContent = 1;
}
