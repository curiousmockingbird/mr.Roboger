Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number."
let input = 5;
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test "It should replace with "Beep" all digits for numbers that contain a 1."
let input = 10;
Code: beepBoop(10);
Expected Output: ["Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]

Test "It should replace with "Boop" all digits for numbers that contain a 2."
let input = 12;
Code: beepBoop(12);
Expected Output: ["Beep!", "Boop", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]

Test "It should replace with "Won't you be my neighbor?" all digits for numbers that contain a 3."
let input = 13;
Code: beepBoop(13);
Expected Output: ["Beep!", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

### Application name:
Mr. Roboger's Neighborhood.

### Names of contributors
Harold Mesa. 

### Description:
A robotic output after user's input.

### Link to site on GitHub Pages:
Please [click here](https://curiousmockingbird.github.io/mr.Roboger/)

### Technologies used:
HTML, CSS, Bootstrap and JavaScript.

### Application setup instructions:
1. Clone this repository to your desktop.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.
4. Input a number and see what happens.
   

### Known bugs
The branching for the program works well.
### License
(MIT) https://en.wikipedia.org/wiki/MIT_License 

Copyright (c) _Aug 25, 2022_ _Harold Mesa_
