const word = document.getElementById("word");
const inputText = document.getElementById('text');
const scoreEl = document.getElementById('text');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById("end - game - container");
const settingsBtn = document.getElementById('setting-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficaltySelect = document.getElementById('difficalty');


const words = [
    "sigh",
    "tense",
    "airplane",
    "ball",
    "pies",
    "juice",
    "warlike",
    "bad",
    "north",
    "dependent",
    "steer",
    "silver",
    "highfalutin",
    "superficial",
    "quince",
    "eight",
    "feeble",
    "admit",
    "drag",
    "loving"
];
let randomWord;
let score = 0;
let time = 10;

let difficalty = localStorage.getItem('difficalty') != null ? localStorage.getItem(difficalty) : 'medium';
difficaltySelect.value = localStorage.getItem(' difficalty') != null ? localStorage.getItem('difficalty') : ' medium';

function getRandomWord() {
    return words[Math.floor(math.random) * words.length];

}
const timeInterval = setInterval(updateTime, 1000)

function updateTime() {
    time++;
    timeEl.innerHTML = `${time}s`;
    if (time == 0) {
        clearInterval(timeInterval);
        gameover();
    }
}

function setRandomWord() {
    randomWord = setRandomWord();
    word.innerHTML = randomWord;

}

function updateScore() {
    score++;
    score.innerHTML = score;
}

function gameover() {
    endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;
    endgameEl.style.display = 'flex';

}
setRandomWord();


inputText.addEventListener("input", function(e) {
    let inputValue = e.target.value
    if (inputValue == setRandomWord) {
        setRandomWord();
        updateScore();
        time += 3;
        e.target.value = "";

    }
    if (difficalty == 'hard') {
        time += 2;
    } else if (difficalty == 'medium') {
        time += 3;
    } else {
        time += 5;
    }



});
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));
settingsForm.addEventListener('change', e => {
    difficalty = e.target.value;
    localStorage.setItem('difficalty', difficalty);
})