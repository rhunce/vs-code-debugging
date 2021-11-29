function welcomeUser(firstName, lastName, timeOfDay, otherStuff = { stuff1: "firstStuffs", stuff2: "secondStuffs" }) {
  // const firstName = '.....'
  // const lastName = '.....'
  // const timeOfDay = '.....'
  const a = "A";
  const b = "B";
  const c = "C";

  return function getGreeting() {
    const d = "D";
    const e = "E";
    const whatever = randomFunction1();

    return `
    *****\n
    Good ${timeOfDay}, ${firstName} ${lastName}, how are you?\n
    The following were available through closure: ${a}, ${b}, and ${c}.\n
    The following were available through local scope: ${d}, ${e}, and ${whatever}.\n
    *****`;
  };
}

const greeter1 = welcomeUser('Raymond', 'Hunce', 'day');
const greeting1 = greeter1();
console.log(greeting1);

const greeter2 = welcomeUser('Vinny', 'Gabagool', 'riddance');
const greeting2 = greeter2();
console.log(greeting2);

// RANDOM FUNCTIONS
function randomFunction1() {
  return randomFunction2();
}
function randomFunction2() {
  return randomFunction3();
}
function randomFunction3() {
  return 'THINGS';
}

// (1) Run through debugging from beginning to end
  // (a) Talk about lexical scoping and closure
  // (b) Look at variables in the left panel
  // (c) Log stuff in DEBUG CONSOLE
// (2) Demonstrate conditional breakpoints (e.g. at const a when firstName === Vinny)