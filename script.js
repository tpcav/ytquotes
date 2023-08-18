 // List of card data
 const cardData = [
  {
    text: '"Our job is to create the new cliches. Not adhear to those that were defined by generations past."',
    author: "Casey Neistat",
    link: "https://youtube.com/clip/UgkxPZDfoAokR1Alz9jlg0cklsjmaVxyPJG1"
  },
  {
    text: '"I want to wake up and I want to figure out how I make thee best videos possible. That is it, and it\'s like... so clear. I don\'t have to wonder should I be doing this, or should I be doing that."',
    author: "MrBeast",
    link: "https://youtube.com/clip/Ugkxt4PUeXHPKfJidhW7Rdzszb1fcIbklYgJ"
  },
  {
    text: '"The best videos come from doing things that are accessible to me. And like even walking 100 miles and metal detecting the beach, that\'s something I literally always wanted to do as a kid."',
    author: "Ryan Trahan",
    link: "https://youtube.com/clip/UgkxTOo-36LhkyfIyz38IaFxBJOUBy1BA2TP"
  },
  {
    text: '"My top game isn\'t as good as my bottom game" (Talking about clothes).',
    author: "Colin",
    link: "https://youtube.com/clip/Ugkx5iEwJA9711KUK3fjItYjqwkfEZKzY8kz"
  },
  {
    text: '"Studying outside of YouTube is what really changes you."',
    author: "Samir",
    link: "https://youtube.com/clip/UgkxKHlfLYuVOvnzlHEpdrkGqk4C1G9Utkcd"
  },
  {
    text: '',
    author: "MKBHD",
    link: "https://youtube.com/video2"
  },
  // Add more quotes here
];

// Get references to the button and slide elements
var randomButton = document.getElementById("randomButton");
var swiperWrapper = document.getElementById("swiperWrapper");

// Generate slide elements from card data
cardData.forEach(function (card) {
var slide = document.createElement("div");
slide.className = "swiper-slide"; // Use correct class name

var cardContent = `
<p class="quote-text">${card.text}</p>
<p class="quote-author">- ${card.author}</p>
<div id="quoteLink"><a class="quote-link" href="${card.link}" target="_blank">Watch Source</a></div>
`;

slide.innerHTML = cardContent;
swiperWrapper.appendChild(slide);
});

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  allowTouchMove: true,
  loop: true,
  mousewheel: true,
  keyboard: true,
});

document.addEventListener("DOMContentLoaded", function () {
  // Rest of your JavaScript code

  var previousRandomIndex = -1; // Initialize with an invalid index

  // Add event listener to the button
  randomButton.addEventListener("click", function () {
    var randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * cardData.length);
    } while (randomIndex === previousRandomIndex);

    // Update the previous index to the current index
    previousRandomIndex = randomIndex;

    // Use Swiper's slideTo method to animate to the random slide
    swiper.slideTo(randomIndex);

    // Update swiper instance to reflect the changes
    swiper.update();
  });

  // Automatically navigate to a random slide when the page loads
  var initialRandomIndex = Math.floor(Math.random() * cardData.length);
  previousRandomIndex = initialRandomIndex; // Set the initial index
  swiper.slideTo(initialRandomIndex);
});
