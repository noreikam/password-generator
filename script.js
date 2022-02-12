// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
var writePassword = function() {
  // elicit password criteria and store in password object
  var password = {
    length: window.prompt("Input paassword length."),
    lowerCase: window.confirm("Include lowercase letters?  OK for yes or cancel for no"),
    upperCase: window.confirm("Include uppercase letters?  OK for yes or cancel for no"),
    specialChar: window.confirm("Include special characters?  OK for yes or cancel for no"),
    text: []  
  }
  console.log(JSON.stringify(password));


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
