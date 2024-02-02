function townsToJson (arr){

    let matrix = arr
    .map((row) => 
    row
    .trim()
    .split('|')
    .map((cell) => cell.trim()))
    .map((row) => row.filter((cell) => cell !==""));

    let headers = matrix[0];
    let data = matrix.slice(1);

   let result = data.map(row => {
        let obj = {}

        headers.forEach((header, i) => {
            let tryParseToNum = Number(row[i]);
            obj[header] = isNaN(tryParseToNum) ? row[i] : Number(tryParseToNum.toFixed(2));
        });
        return obj
    });
    console.log(JSON.stringify(result));
}
townsToJson (['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);