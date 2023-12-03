const word0 = 'Wassup';
const word1 = 'Bue';
const word2 = 'Programmer';

const word0Translation = 'Здарова';
const word1Translation = 'Покеда';
const word2Translation = 'Программист';
const wordsCount = 3;

const finishSuccessMessage = 'Молодец! Good resul';
const finishUnsuccessMessage = 'Молодец! Но постарайся лучше!'

const correctAnswersMinPercent = 50;
let correctAnswerCount = 0;

let userAnswer0 = prompt(word0);
alert(userAnswer0 === word0Translation);
if (userAnswer0 === word0Translation) {
    ++correctAnswerCount;
}

let userAnswer1 = prompt(word1);
alert(userAnswer1 === word1Translation);
if (userAnswer1 === word1Translation) {
    ++correctAnswerCount;
}
let userAnswer2 = prompt(word2);
alert(userAnswer2 === word2Translation);
if (userAnswer2 === word2Translation) {
    ++correctAnswerCount;
}
const userCorrectAnswersProccent = correctAnswerCount / wordsCount;

if (userCorrectAnswersProccent * 100 > correctAnswersMinPercent) {
    alert(finishSuccessMessage);
} else {
    alert(finishUnsuccessMessage);
}
