# Rock, Paper, Scissors, Lizard, Spock (console version)

## 🎯 Exercise description

The goal of this project is to create a JavaScript program that simulates the classic game of **Rock, Paper, Scissors, Lizard, Spock**. The game runs in the console and does not require DOM manipulation.

The program must:
- Allow the user to choose an option: `rock`, `paper`, `scissors`, `lizard` or `spock`.
- Generate a random option for the computer.
- Compare both choices according to the rules of the game.
- Display the result in the console using `console.log`.

---

## 📌 Game rules

- **Rock** crushes **Scissors** and **Lizard**.  
- **Paper** covers **Rock** and disproves **Spock**.  
- **Scissors** cut **Paper** and decapitate **Lizard**.  
- **Lizard** eats **Paper** and poisons **Spock**.  
- **Spock** smashes **Scissors** and vaporizes **Rock**.  

If both choices are the same, it’s a draw.

---

## ✨ Example output

- User chose: rock  
- Computer chose: lizard  
- You win! 🎉  

- User chose: paper  
- Computer chose: scissors  
- You lose 😢  

- User chose: spock  
- Computer chose: spock  
- It's a draw!

---

## 🛠 How to run the program

The project is already set up to work in Codespaces.  
To run the code and see the console output:

```bash
node src/app.js
```

Or you can run 
npm install 
then 
 npm run start