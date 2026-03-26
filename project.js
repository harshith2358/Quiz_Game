// 1. Genrate questionnaires and answers
// 2. Prompt to let user start playing
// 3. Global timer starts as user selects Y
// 4. Randomly select and display the question
// 5. Start local timer. Player has 1min 30s to ans each qns, else minus 10 points.
// 6. If user ans the qns correctly, plus 10 points, remove it from qns and ans bank.
// 7. If user ans qns wrongly or chooses to skip, skip minus 5 points. If user ans wrongly, minus 10 points.
// 8. Repeat until all the qns are answered ot user quits.

const QUESTIONS = [
  "When did Germany invade Russia: ",
  "What code did Alan Turing help to crack in WWII: ",
  "Which is the richest cartel in the world: ",
  "Which country consumes the most amount of drugs in the world: ",
  "What is the richest country in the world: ",
  "Which country has the highest income per person: ",
  "How many billionaires are there in New York City: ",
  "How many millionaires are there in New York City: ",
  "Which city has the most number of slums: ",
  "Which city is the cleanest in the world: ",
  "Which university's computer science undergraduates get paid the most: ",
  "Who is the richest person in the world: ",
  "What is the most popular tourist destination in the world: ",
  "Which athlete has the most number of olympic medals: ",
  "What is the worst civil war to have ever taken place in the world: ",
  "In which country did the bubonic plague first come from: ",
  "Who was the greatest conqueror in medevial period: ",
  "Who invented protein powder: ",
  "Who painted the Mona Lisa: ",
  "Who invented the first camera: ",
];

const ANSWERS = [
  "22 June 1941",
  "Enigma Code",
  "Sinaloa Cartel",
  "USA",
  "Luxembourg",
  "Monaco",
  "123",
  "384500",
  "Mumbai",
  "Singapore",
  "Standford",
  "Elon Musk",
  "France",
  "Michael Phelps",
  "The Taiping Rebellion",
  "Central Asia",
  "Charlemagne",
  "Bob Hoffman",
  "Leonardo Da Vinci",
  "Nicephore Niepce",
];

let points = 0;

const prompt = require("prompt-sync")();

const qns_timer = (seconds) => {
  const countdown = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds == 0) {
      console.log("Timer ended, -10 points");
      points -= 10;
      clearInterval(countdown);
    }
  }, 1000);
};

const total_timer = () => {
  let total_time = 0;
  const tracker = setInterval(() => {
    total_time++;
  }, 1000);
};

const question_displayer = () => {
  index = Math.ceil(Math.random() * QUESTIONS.length);
  question = QUESTIONS[number];

  console.log(`Your question is ${question}`);

  return index;
};

const question_checker = (index, user_guess) => {
  if (user_guess == ANSWERS[index]) {
    points += 10;
    console.log("You got the right answer. Good Job!");
  }

  QUESTIONS.splice(index,1);
  ANSWERS.splice(index,1);
};

qns_timer(90);
total_time();
question_displayer();
