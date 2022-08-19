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
