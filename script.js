// Global variables for password characteristics
var length;
var lowerCase;
var upperCase;
var numeric;
var specialChar;
var password;
// charSet will be an array of string arrays representing the different character types
var charSet = [];

// Define character type arrays
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialArray = [" ", 	"!", 	"\"", 	"#", 	"$", 	"%", 	"&", 	"’", 	"(", 	")", 	"*", 	"+", 	",", 	"-", 	".", 	"/", 	":", 	";", 	"<", 	"=", 	">", 	"?", 	"@", 	"[", 	"\\", 	"]", 	"^", 	"_", 	"`", 	"{", 	"|", 	"}", 	"~"]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Elicit password criteria
function definePassword() {

  // reset previously created password and charSet array (if any)
  password = "";
  var oldLength = charSet.length;
  for(var i = 0; i < oldLength; i++) {
    charSet.pop();
  }

  // elicit password length 
  length = parseInt(window.prompt("Input password length."));

  // validate password length
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(window.prompt("Length must be a number between 8 and 128.  Please select a valid length."));
  }
  
  // elicit character set
  function defineCharSet() {  
    lowerCase = window.confirm("Include lowercase letters?  OK for yes or cancel for no");
    upperCase = window.confirm("Include uppercase letters?  OK for yes or cancel for no");
    numeric = window.confirm("Include numbers?  OK for yes or cancel for no");
    specialChar = window.confirm("Include special characters?  OK for yes or cancel for no");
  }
  defineCharSet();

  // validate character set
  while (!lowerCase && !upperCase && !numeric && !specialChar) {
    window.alert("At least one character type must be selected.  Please select at least one of lowercase letters, uppercase letters, numbers, or special characters.");
    defineCharSet();
  }

  // build character set
  if (lowerCase) {charSet.push(lowerArray);}
  if (upperCase) {charSet.push(upperArray);}
  if (numeric) {charSet.push(numericArray);}
  if (specialChar) {charSet.push(specialArray);}

  generatePassword();
}
 
// Generate password
function generatePassword() {

  // loop through charSet arrays to add selected character types for desired password length
  for (var i = 0; i < length; i++) {
    // use mod to loop through charSet arrays
    var charSetIndex = i % charSet.length;

    // generate a random index from selected array
    var randomIndex = Math.floor(Math.random() * charSet[charSetIndex].length);

    // select a random character from chosen array
    var character = charSet[charSetIndex][randomIndex];

    // append random character to password
    password = password + character;
  }

  writePassword();
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
  
// Add event listener to generate button
generateBtn.addEventListener("click", definePassword);
