console.log("Getting ready");
// home buttons
const home1 = document.getElementById("home-1");
const home2 = document.getElementById("home-2");
const home3 = document.getElementById("home-3");
const homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

// Guest buttons
const guest1 = document.getElementById("guest-1");
const guest2 = document.getElementById("guest-2");
const guest3 = document.getElementById("guest-3");
const guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

// reset button
const reset = document.getElementById("reset");
const addOneHome = () => {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

home2.addEventListener("click", function() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
})

home3.addEventListener("click", function() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
})

guest1.addEventListener("click", function() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
})
guest2.addEventListener("click", function() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
})
guest3.addEventListener("click", function() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
})

reset.addEventListener("click", function() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
})
