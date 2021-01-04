
// Assignment code here

// Add event listener to generate button


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLengthPrompt = window.prompt(
    "Please Enter the length of the Password"
  );

  if (
    passwordLengthPrompt === null ||
    passwordLengthPrompt < 8 ||
    passwordLengthPrompt > 128
  ) {
    window.alert(
      "Password must be at least minimum of 8 characters long and no more than 128 characters long."
    );
    //less than 8 not allowed
    //more than 128 not allowed
    //can not be left blank
  } else {


    let upperCaseCheck = window.confirm("Do you want upper case letters in your password?")
    let lowerCaseCheck = window.confirm("Do you want lower case letters in your password?")
    let numericCaseCheck = window.confirm("Do you want numerical case characters in your password?")
    let specialCharactersCheck = window.confirm("Do you want special characters in your password?")
  

      let password = generatePassword(passwordLengthPrompt,  upperCaseCheck, lowerCaseCheck, numericCaseCheck, specialCharactersCheck);
      let passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
}

function generatePassword(passwordLength, upperCheck, lowerCheck, numericalCheck, specialCheck) {

  // RANDOM PASSWORD GENERATOR
  var uppercasePassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // uppercase
  var lowercasePassword = "abcdefghijklmnopqrstuvwxyz"; // lowercase
  var numericPassword = "0123456789"; // numer
  var specialCharactersPassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$!@!$^&"; //special
  let password = "";

for (let i = 0; i < passwordLength; i++)
{
 
  let randomNumber = Math.floor(Math.random() * 4 + 1)
  if (randomNumber === 1 && upperCheck)
  {
    password += uppercasePassword[Math.floor(Math.random() * uppercasePassword.length)]
  }
  if (randomNumber === 2 && lowerCheck)
  {
    password += lowercasePassword[Math.floor(Math.random() * lowercasePassword.length)]
  }
  if (randomNumber === 3 && numericalCheck)
  {
    password += numericPassword[Math.floor(Math.random() * numericPassword.length)]
  }
  if (randomNumber === 4 && specialCheck)
  {
    password += specialCharactersPassword[Math.floor(Math.random() * specialCharactersPassword.length)]
  }
  console.log(password)
}



  window.alert("Your password is " + password);
  return password;
}

generateBtn.addEventListener("click", writePassword); 
// CTA = Call to Action - GENERATE PASSWORD