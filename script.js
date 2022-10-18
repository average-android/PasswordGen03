// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var specials = "!@#$%^&*()-_=+[{]};:,<.>/?";
  var numbers = "0123456789";
  var passwordStart= "";

  var uppercaseConfirm = confirm("Press ok if you want Uppercase characters in your password.");

  if (uppercaseConfirm) {passwordStart += uppercase}

  var lowercaseConfirm = confirm("Press ok if you want Lowercase characters in your password.");

  if (lowercaseConfirm) {passwordStart += lowercase}

  var specialsConfirm = confirm("Press ok if you want special characters in your password.");

  if (specialsConfirm) {passwordStart += specials}

  var numbersConfirm = confirm("Press ok if you want numbers in your password.")

  if (numbersConfirm) {passwordStart += numbers}
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
