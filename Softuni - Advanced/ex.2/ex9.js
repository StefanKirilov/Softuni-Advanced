function magicMatrices(arr){
    let checkSum = arr[0].reduce((acc, curr) => acc + curr, 0);

    for (let i = 0; i < arr.length; i++) {
        let sumRow = 0;
        let sumCol = 0;
        for (let j = 0; j < arr.length; j++) {
            sumRow += arr[i][j];
            sumCol += arr[j][i];
        }
        if (checkSum != sumCol || checkSum != sumRow){
            return false;
        }
    }

    return true;

}
magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);