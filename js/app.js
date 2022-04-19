alert("Hello! I am an alert box!");

let name = prompt("Inter Your Name");
console.log(name);

var gender = prompt("Inter Your Gender (male or female)").toLowerCase();
console.log(gender);

switch (gender) {
  case "male":
    gender = "Mr";
    break;

  case "female":
    gender = "Miss";
    break;

  case "":
    gender = "";
    break;
}

let age = prompt("Age");
console.log(age);
if (age <= 0) {
  alert("Wrong Input ...! ");
  alert("The Age Can Not Be " + "'" + age + "'");
  age;
}

let welcomeAlert = confirm("Do You Wants To Continue The Welcoming Message..?");
console.log(welcomeAlert);
switch (welcomeAlert) {
  case true:
    alert("Welcome " + gender + " " + name);
    break;

  case false:
    break;

  default:
    break;
}

let dailyArray = [];

let coffee = prompt("Do you want some Coffee?").toLowerCase();
console.log(coffee);
if (coffee === "") {
  alert("invalid");
} else if (coffee.toLocaleLowerCase === "yes") {
  alert("Your Coffee In The Way " + gender + " " + name + "🎼");
}
dailyArray.push(coffee);

let happy = prompt("Are you happy today?").toLowerCase();
console.log(happy);
if (happy === "") {
  alert("invalid");
} else if (happy === "yes") {
  alert("It's Wonderful Day 🌻 ");
}
dailyArray.push(happy);

let meeting = prompt("Receiving interviews and meetings?").toLowerCase();
console.log(meeting);
if (meeting === "") {
  alert("invalid");
} else if (meeting === "yes") {
  alert("A beautiful day with a beautiful start ✌ ");
}
dailyArray.push(meeting);

alert(dailyArray);
