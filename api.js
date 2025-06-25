function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke-text").innerText =
        `${data.setup} — ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("joke-text").innerText = "Couldn't load joke.";
    });
}
