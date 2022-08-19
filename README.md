Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test "It should replace with "Beep" all digits for numbers that contain a 1"
Code: beepBoop(10);
Expected Output: ["Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]

Test "It should replace with "Boop" all digits for numbers that contain a 2"
Code: beepBoop(12);
Expected Output: ["Beep!", "Boop", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]

Test "It should replace with "Won't you be my neighbor?" all digits for numbers that contain a 3"
Code: beepBoop(13);
Expected Output: ["Beep!", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

### Application name:
Mr. Roboger's Neighborhood.

### Names of contributors
Harold Mesa. 

### Description:
A

### Link to site on GitHub Pages:
Please [click here](https://curiousmockingbird.github.io/programming_language_suggestor/)

### Technologies used:
HTML, CSS, Bootstrap and JavaScript.

### Application setup instructions:
1. Clone this repository to your desktop.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.
4. Complete survey.
5. When submitting:
  a) If the user doesn't type in their name, an error messages will display in the page.
  b) Else if the user doesn't select an option from the dropdown menu, an error message will display in the page. 
  c) Else if the input average is >= 3 and <= 8, the Programming Language Suggester will suggest JavaScript.
  d) Else if the input average is > 8 and < 15, the Programming Language Suggester will suggest C#.
  e) Else if the input average is >= 15 and <= 21, the Programming Language Suggester will suggest Python.
   

### Known bugs
The branching for the program works. 

Copyright (c) _Aug 12, 2022_ _Harold Mesa_
