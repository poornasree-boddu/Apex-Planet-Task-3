const slides = [
  "Slide 1: Welcome to the Carousel!",
  "Slide 2: This is a text-based slider.",
  "Slide 3: You can customize this easily.",
  "Slide 4: Great for content previews!",
];

let index = 0;

function updateText() {
  document.getElementById("carousel-text").innerText = slides[index];
}

function nextText() {
  index = (index + 1) % slides.length;
  updateText();
}

function prevText() {
  index = (index - 1 + slides.length) % slides.length;
  updateText();
}
