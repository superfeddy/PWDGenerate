# password_generator

password generator created in javascript.

View it at: https://jacobzavita.github.io/password_generator/

# Contents of Project
This project contains an index.html file, script.js file, and style.css file.

# Goals for Project
Here is the story I was prompted with to build this:
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# How It Works

Use is brought to a page with a text area and a button reading "Generate Password"

When the button is clicked, the user is asked to select the character sets they'd like included in the password. Options are uppercase, lowercase, numbers, and special characters. Once they have selected the character sets, the javascript combines the chosen character sets into a large array.

User is then prompted to choose who long they'd like the password to be. It must be between 8 and 128 characters. If they provide a number outside of that range, they are asked to provide a number in that range.

Once the range is set, characters of each type are randomly selected from the large array.

The randomly generated password is then presented to the user in the text area so they can access it.
