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
  // elicit and validate password length 
  var length = parseInt(window.prompt("Input password length."));
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(window.prompt("Length must be a number between 8 and 128.  Please select a valid length."));
  }
  
  // elicit and validate character set
  var lowerCase = window.confirm("Include lowercase letters?  OK for yes or cancel for no");
  var upperCase = window.confirm("Include uppercase letters?  OK for yes or cancel for no");
  var numeric = window.confirm("Include numbers?  OK for yes or cancel for no");
  var specialChar = window.confirm("Include special characters?  OK for yes or cancel for no");
  while (!lowerCase && !upperCase && !numeric && !specialChar) {
    window.alert("At least one character type must be selected.  Please select at least one of lowercase letters, uppercase letters, or special characters.");
    lowerCase = window.confirm("Include lowercase letters?  OK for yes or cancel for no");
    upperCase = window.confirm("Include uppercase letters?  OK for yes or cancel for no");
    var numeric = window.confirm("Include numbers?  OK for yes or cancel for no");
    specialChar = window.confirm("Include special characters?  OK for yes or cancel for no");
  }

  console.log(numeric);
}
  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);