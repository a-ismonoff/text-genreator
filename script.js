const greetings = ["Hello", "Hi", "Hey", "Greetings", "Yo"];
const subjects = ["world", "friend", "everyone", "stranger", "buddy"];
const verbs = ["is", "will be", "was", "should be", "can be"];
const endings = ["awesome!", "cool!", "amazing!", "fantastic!", "wonderful!"];

function generateRandomMessage() {
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomEnding = endings[Math.floor(Math.random() * endings.length)];

  return `${randomGreeting} ${randomSubject} ${randomVerb} ${randomEnding}`;
}
const randomMessage = generateRandomMessage();
console.log(randomMessage);
