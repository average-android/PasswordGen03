// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var specials = "!@#$%^&*()-_=+[{]};:,<.>/?";
  var numbers = "0123456789";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
