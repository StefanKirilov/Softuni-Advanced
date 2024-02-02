function orbit(arr){
    let matrix = new Array(arr[0]).fill().map(() => new Array(arr[1]).fill(0));
    let x = arr[2];
    let y = arr[3];
    for (let row = 0; row < arr[0]; row++) {
        for (let col = 0; col < arr[1]; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }   
    }
    let output = matrix.map((row) => row.join(' ')).join('\n');
    console.log(output);
}
orbit([4, 4, 0, 0]);