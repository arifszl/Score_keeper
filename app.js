const p1But = document.getElementById('p1But')
const p2But = document.getElementById('p2But')
const p1Display = document.getElementById('p1Disp');
const p2Display = document.getElementById('p2Disp');
const Rst = document.getElementById('Rst');

let p1Score = 0;
let p2Score = 0;
let maxScore = document.getElementById('max');




p1But.addEventListener("click", function() {
    if (p1Score < maxScore.value) {
        p1Score += 1;
    }
    if (p1Score == maxScore.value) {
        p1Display.classList.add('winner')
        p2Display.classList.add('loser')
    }
    p1Display.textContent = p1Score;
})
p2But.addEventListener("click", function() {
    if (p2Score < maxScore.value) {
        p2Score += 1;
    }
    if (p2Score == maxScore.value) {
        p2Display.classList.add('winner')
        p1Display.classList.add('loser')
    }
    p2Display.textContent = p2Score;
})

Rst.addEventListener('click', () => {
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove('winner', 'loser')
    p1Display.classList.remove('loser', 'winner')
})