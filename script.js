// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var specials = "!@#$%^&*()-_=+[{]};:,<.>/?";
  var numbers = "0123456789";
  var passwordStart= "";
  var password = "";

  var uppercaseConfirm = confirm("Press ok if you want Uppercase characters in your password.");

  if (uppercaseConfirm) {passwordStart += uppercase}

  var lowercaseConfirm = confirm("Press ok if you want Lowercase characters in your password.");

  if (lowercaseConfirm) {passwordStart += lowercase}

  var specialsConfirm = confirm("Press ok if you want special characters in your password.");

  if (specialsConfirm) {passwordStart += specials}

  var numbersConfirm = confirm("Press ok if you want numbers in your password.");

  if (numbersConfirm) {passwordStart += numbers}

  if (!uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && !specialsConfirm) {return}

  var passwordLength = prompt("How long would you like your password to be?");

  if (passwordLength < 8 || passwordLength > 128) {alert("Please choose a number between 8 and 128.");return}

  for (let i = 0; i < passwordLength; i++ ) {
    password +=
      passwordStart[Math.floor(Math.random() * passwordStart.length)];
    }
   return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
