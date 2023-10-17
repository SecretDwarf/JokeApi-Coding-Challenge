const jokeText = document.querySelector('.joke-text');
const newJokeBtn = document.querySelector('.new-joke-btn');
newJokeBtn.addEventListener('click', getJoke);
getJoke();

const divElem = document.getElementById("joke-container");

function getJoke() {
    fetch('r', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const joke = data.joke;
        jokeText.innerText = joke;
        random_color()
    });

}

function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }
random_color();