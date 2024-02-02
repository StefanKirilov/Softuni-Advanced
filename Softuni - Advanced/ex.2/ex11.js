function diagonalAttack(arr){
    let matrix = arr.map((row) => row.split(' ').map((e) => Number(e)));
    let firstDiagonal = 0;
    let secondDiagonal = 0;



    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - i - 1];
};

    if(firstDiagonal === secondDiagonal){
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if( i !== j && i !== matrix.length - j - 1){
                    matrix[i][j] = firstDiagonal;
                }
            }   
        }
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i].join(' '));
    }
    console.log(result.join('\n'));
    return;
    
}
diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);