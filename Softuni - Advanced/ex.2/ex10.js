function tictactoe(arr){

    function printMatrix() {
        for (let row = 0; row < board.length; row++) {
            console.log(board[row].join('\t'));        
        }
    }

    let board = new Array(3).fill().map(() => new Array(3).fill(false));
    let player ='X';

    for (const line of arr) {
        let [row , col] = line.split(' ').map(x => Number(x));
        
        if(board[row][col] !== false){
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        board[row][col] = player;
        for (let i = 0; i < 3; i++) {
            if(
                (board[i][0] === player &&
                board[i][1] === player &&
                board[i][2] === player) ||
                (board[0][i] === player &&
                    board[1][i] === player &&
                    board[2][i] === player)
            ){
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
            else if(
                (board[0][0] === player &&
                    board[1][1] === player &&
                    board[2][2] === player) ||
                    (board[0][2] === player &&
                        board[1][1] === player &&
                        board[2][0] === player)
            ){
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
            let includesFlase = false;
            for (let row = 0; row < board.length; row++) {
                if(board[row].includes(false)){
                    includesFlase = true;
                }
            }
            if(includesFlase === false){
                console.log("The game ended! Nobody wins :(");
                printMatrix();
                return;
            }
            player = player === 'X' ? 'O' : 'X';
        }
    }


}
tictactoe(["0 1","0 0","0 2","2 0","1 0","1 1","1 2","2 2","2 1","0 0"]);
