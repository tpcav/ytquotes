 // List of card data
 const cardData = [
  {
    text: '"I like calling other YouTubers while I take walks."',
    author: "MrBeast",
    link: "https://youtube.com/video1"
  },
  {
    text: '',
    author: "Ryan Trahan",
    link: "https://youtube.com/video2"
  },
  {
    text: '',
    author: "Colin and Samir",
    link: "https://youtube.com/video2"
  },
  {
    text: '',
    author: "Airrack",
    link: "https://youtube.com/video2"
  },
  {
    text: '',
    author: "MKBHD",
    link: "https://youtube.com/video2"
  },
  {
    text: '"Our job as creators is to further define any medium. Our job is to create the new cliches. Not adhear to those that were defined by generations past."',
    author: "Casey Neistat",
    link: "https://youtube.com/clip/UgkxPZDfoAokR1Alz9jlg0cklsjmaVxyPJG1"
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

// Add event listener to the button
randomButton.addEventListener("click", function () {
  // Generate a random index to select a random slide
  var randomIndex = Math.floor(Math.random() * cardData.length);

  // Use Swiper's slideTo method to animate to the random slide
  swiper.slideTo(randomIndex);

  // Update swiper instance to reflect the changes
  swiper.update();
});