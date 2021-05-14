document.getElementById('generate')

// When button is clicked, generate new password based on users desired character set and length.

generate.addEventListener("click", function () {

  // Receive users desired character sets. Ask them if the want the password to include lower case, upper case, numbers, and special characters.

  let lowerCaseYes = confirm('Do you want to include lowercase characters? Click "Ok" for yes, "cancel" for no.')

  let upperCaseYes = confirm('Do you want to include uppercase characters? Click "Ok" for yes, "cancel" for no.')

  let numsYes = confirm('Do you want to include numbers? Click "Ok" for yes, "cancel" for no.')

  let specialYes = confirm('Do you want to include special characters? Click "Ok" for yes, "cancel" for no.')

  // Create each character set
  let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
  let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numChars = '0123456789'
  let specChars = '!@#$%^&*()_+{}:<>?,./;'

  let chosenArray = []

  if (lowerCaseYes) { chosenArray += lowerChars }
  if (upperCaseYes) { chosenArray += upperChars }
  if (numsYes) { chosenArray += numChars }
  if (specialYes) { chosenArray += specChars }

  let finalArray = chosenArray.split('')

  let passwordGeneration = []

  let length = parseInt(prompt('How long do you want your password? Must be between 8 and 128 characters.'))
  while (length < 8 || length > 128 || length === NaN || length === null) {
    alert('Must be between 8 and 128 characters')
    passwordLength = parseInt(prompt('How long do you want your password? Must be between 8 and 128 characters.'))
    return length
  }


  // Based on the length they chose, create 

  for (i = 0; i < length; i++) {
    passwordGeneration.push(finalArray[Math.floor(Math.random() * finalArray.length)])
  }

  console.log(passwordGeneration.join(''))
  document.getElementById('password').innerHTML = passwordGeneration.join('')

}
)

