function RollSixSidedDice() {
    //Returns the references of die1, die2 and status
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");

    //Randomizes the numbers when dices are rolled and adds them up
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;

    die1.innerHTML = d1;
    die2.innerHTML = d2;
    //Displays total 
    status.innerHTML = "You rolled " + diceTotal;
}