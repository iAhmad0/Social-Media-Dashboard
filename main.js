// Selecting the cards to iterate over them
const infoCard = document.querySelectorAll(".info .card");
const analyticsCard = document.querySelectorAll(".analytics .card");

// Function called when the button is clicked
document.querySelector(".social .mode").addEventListener("click", function () {

    // Changing the background color of the page
    document.querySelector(".container").classList.toggle("l-container");

    // Changing the styling of the social section
    document.querySelector(".social .head").classList.toggle("l-social-head");
    document.querySelector(".social > p").classList.toggle("l-social-p");
    document.querySelector(".social .mode").classList.toggle("l-social-mode");
    document.querySelector(".social .mode").classList.toggle("l-mode");

    // Changing the styling of the information cards
    for (let i=0; i<infoCard.length; i++) {
        infoCard[i].classList.toggle("l-info-card");
        infoCard[i].querySelector(".profile").classList.toggle("l-card-profile");
        infoCard[i].querySelector(".number").classList.toggle("l-card-number");
        infoCard[i].querySelector(".follow").classList.toggle("l-card-follow");
    }

    // Changing the color of the overview section heading
    document.querySelector(".overview .head").classList.toggle("l-overview-head");

    // Changing the styling of the analytics cards
    for (let i=0; i<analyticsCard.length; i++) {
        analyticsCard[i].classList.toggle("l-analytics-card");
        analyticsCard[i].querySelector(".metric").classList.toggle("l-card-metric");
        analyticsCard[i].querySelector(".number").classList.toggle("l-card-number");
    }

    document.querySelector(".attribution").classList.toggle("l-attr");
});