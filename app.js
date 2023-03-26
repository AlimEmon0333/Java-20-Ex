// ------ Chap 1 "Alerts" ----------//

// alert("Thanks for your input!")

// ----- Chap 2 "Variables" -------//

// var names = "ali";
// alert(names);

// -------- Chap 3 "Var for num" -------//

// var quan = 150;
// alert (quan)

//  --------- Chap 5 "Math expressions:Familiar operators" ----------- //

// var popularNum=4+4;
// alert(popularNum);

// var popularNum=50-4;
// alert(popularNum);

// var popularNum=50%4;
// alert(popularNum);

// var popularNum=50*4;
// alert(popularNum);

// var popularNum=50/4;
// alert(popularNum);

// ---------- Chap 6 Math expressions:Unfamiliar operators -----------//

// var num = 1;
// var newNum = ++num;
// alert(newNum)

// var num = 21;
// var newNum = num++;
// alert(num)

// var num = 21;
// var newNum = num--;
// alert(newNum)

// var num = 20;
// var newNum= num + 1;
// alert(num)

// -------- Chap 7 Math expressions:Eliminating ambiguity --------- //

// var totalCost = 7 * (3 + 4);
// alert(totalCost);

// var totalCost =  (1 + 3) * 4;
// alert(totalCost);

// var totalCost = (2 * 4) * 4 + 2;
// alert(totalCost);

// var totalCost =   4 + 2-(2 * 4);
// alert(totalCost);

// var totalCost =   4 * 2-(2 * 4);
// alert(totalCost);

// var totalCost =    ((2 * 4) * 4) + 2;
// alert(totalCost);

// -------- Chap 8  Concatenating text strings --------- //

//  var message = "Thanks, ";
//  var banger = "!";
//  var userName = "Ahad";
//  alert(message + userName + banger);

// var message = "Thanks, ";
// var userName = "Ahad";
// var banger = "!";
// var customMess = message + userName + banger;
// alert(customMess);

// -------- Chap 9 Prompts --------- //

// var question = "Your species?";
// var defaultAnswer = "Ahad";
// var spec = prompt(question, defaultAnswer);

// var numberOfCats = prompt("How many cats?")
// alert(numberOfCats)

// -------- Chap 10 IF Statment --------- //

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
// alert("Correct!");
// }
// else{
//     alert("InValid")
// }

// --------------------- Chap 12 Comparison operators --------------------- //

// var yourTicketNumber=+prompt("Enter your ticket number")
// if (yourTicketNumber !== 487208) {
//      alert("Better luck next time.");
//      }
//      else{
//         alert("Founded")
//      }

// ----------------- Chap 13 if...else and else if statements ----------------//

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
//   alert("Correct!");
// }
// if (x !== "Vatican") {
//   alert("Wrong answer");
// }

// var x = prompt("Where does the Pope live?");
// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//   alert("Correct!");
// } else {
//     alert("Incorrect");
// }

// var x = prompt("Where does the Pope live?");
//  var correctAnswer = "Vatican";
//  if (x === correctAnswer) {

//  alert("Correct!");
//  }
//  else if (x === "Rome") {
//  alert("Incorrect but close");
//  }
//  else {
//  alert("Incorrect");
// }

// ------------- Chap 14 Testing sets of conditions ---------- //

// var per = +prompt("Enter percentage and see your grade");
// if (per < 100 && per >= 80) {
//   document.write("your grade is A+");
// } else if (per < 80 && per >= 70) {
//   document.write("your grade is A");
// } else if (per < 70 && per >= 60) {
//   document.write("your grade is b");
// } else if (per < 60 && per >= 50) {
//   document.write("your grade is c");
// } else if (per < 50 && per >= 40) {
//   document.write("your grade is d");
// } else if (per < 40 && per >= 0) {
//   document.write("Fail");
// } else {
//   alert("you have entered wrong percentage");
// }

// -------------------- Chap 15 Arrays -------------------- //

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// alert (cities[3]);

// -------------------- Chap 16 Arrays:Adding and removing elements ---------------//

// var pets=[""]
// pets[0] = "Dog"
// pets[1] = "Cat"
// pets[2] = "Cow"
// pets[3] = "Bull"

// --- This method removes one from the last --- //
// pets.pop();


// --- This method adds one in the last --- //
// pets.push('elephant')


// console.log(pets)



// ---------------- Chap 17 Arrays:Removing, inserting,and extracting elements ------------------ //

// var pets=["Dog","Cat","Cow",'Bull',"Goat","Sheep"]

// --- This method Removes the first element from an array --- //
// pets.shift();

// --- This Method Inserts new elements at the start of an array --- //
// pets.unshift("Rabbit")

// --- This method Removes elements from an array and, if necessary, inserts new elements in their place ---// 
// pets.splice(2,3,"Snake")

// console.log(pets)

// ----------------- Chap 18 & 19 for loops & Flags, Booleans ------------ //


// var inputcities = prompt("enter your city name")
// var cities = ["karachi","lahore","Islamabad","peshawar"];
// var statement = true;
// for (var i = 0; i < cities.length; i++){
//     if (cities[i]== inputcities)
//     {
//         statement=false;
//         alert("founded")
//     }
// }
// if (statement){
//     alert("not founded")
// }

// ---------------- Chap 20 For loops Nested ---------------------- //

//  var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];

//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

//  for (var i = 0; i < firstNames.length; i++) {

//  for (var j = 0; j < lastNames.length; j++) {

//     console.log(firstNames[i] + lastNames[j]);

//  }
//  }












































