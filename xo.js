let x = 1,playerNow,currentPlayer;
let text = document.getElementById('h2')
let playerOne = document.getElementById("player1");
let playerTwo = document.getElementById("player2");
var winVar=0;
const buttons = [b1,b2,b3,b4,b5,b6,b7,b8,b9]
var grid = [
    [b1,b2,b3],
    [b4,b5,b6],
    [b7,b8,b9]
]
for(let nums = 1;nums<=9;nums++){
    let c = 'b' + nums
    c = document.getElementById(c);
}
console.log(b1)
function reset(){
    x = 1
    winVar = 0
    for(let i=0;i<9;i++){
        buttons[i].value=""
        buttons[i].disabled = false
    }
}
function win(element){
    x++
    if(x%2==0){
        element.value="X"
        currentPlayer="X"
        element.disabled = true
        playerNow = playerOne.value;
    }
    else{
        element.value="O"
        currentPlayer="O"
        element.disabled = true
        playerNow = playerTwo.value;
    }
    //
    text.innerHTML = "Current Player : " + playerNow
    //checking if all inputs are X or O in the same row
    for(let i=0;i<3;i++){
        let row =0
        while(row<3 && grid[i][row].value==currentPlayer){
            row++
            if(row==3){
                winVar += 1;
                setTimeout(()=>{alert(playerNow + " won!")},300)
            }
        }
    }
    //checking if all inputs are X or O in the same column
    for(let j=0;j<3;j++){
        let column = 0 
            while(column<3 && grid[column][j].value==currentPlayer){
               column++
               if(column==3){
                   winVar += 1;
                   setTimeout(()=>{alert(playerNow + " won!")},300);
               }  
           }
    }
    //checking if all inputs are X or O in the same DESCENDING diagonal 
    let diagonal=0
    while(diagonal<3 && grid[diagonal][diagonal].value==currentPlayer){
        diagonal++
        if(diagonal==3){
            winVar += 1;
            setTimeout(()=>{alert(playerNow + " won!")},300);
        }
    }
    //checking if all inputs are X or O in the same ASCENDING diagonal
    let diagonalTwo = 3
    while(diagonalTwo<9 && document.getElementById('b'+diagonalTwo).value==currentPlayer){
        diagonalTwo+=2
        if(diagonalTwo==9){
            winVar += 1;
            setTimeout(()=>{alert(playerNow + " won!")},300);
        }
    }
    //checking if all the buttons are pressed (draw condition)
    for(let draw = 1; draw<=9 &&document.getElementById('b'+draw).disabled ; draw++){
        if(draw==9){
            setTimeout(()=>{alert("Draw between " + playerOne.value + " and " + playerTwo.value)},300)
        }
    }
}