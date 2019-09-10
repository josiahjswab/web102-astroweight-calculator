
// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];



var select = document.getElementById('planets'); //this line makes the ID planets from index.html into a variable to be used in JS. I'm k

planets.forEach(function(element){ //forEach is used to loop the array above once

  var theMarbles = document.createTextNode(element[0]); //this var turns the array into text. element[0] is used pull only the first index from each array
  var newOption = document.createElement('option'); //this var is used to create an element which will later to generate this element into the html
  newOption.appendChild(theMarbles); //the formula is parent.attach.child we want all the text from the array to be options ergo options is the parent
  select.appendChild(newOption); //we use the var which pulls the ID from index.html and attaches it as the parent to the newly fused options with text.

}); 


  // inside calculate weight function take in user weight into the function argument.
  // grab elements by id planets and user weight by their selected values.
  // declear something that say the gravity will be equal to the planet they choose by the number of that planet.
  // user weight x gravity.
var weight = document.getElementById('user-weight');

function calculateWeight(weight, planetName) {
  // 2. Write the code to return the correct weight

}

function handleClickEvent(e) {
//   // 3. Create a variable called userWeight and assign the value of the user's weight.
// var userWeight = //input from html
//   // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
// var planetName = //planet selected from dropdown
//   // 5. Create a variable called result and assign the value of the new calculated weight.
// var result = //input * planetgravity
//   // 6. Write code to display the message shown in the screenshot.
  console.log('help');
}
// document.getElementById('calculate-button').onclick = functionFoo()




// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)