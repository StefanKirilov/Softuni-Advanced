function sameNum(num){
    let numInString = num.toString()
    let firstLetter = numInString[0];
    let isSame = true;
    let sum = Number(firstLetter);
    for (let i = 1; i <= numInString.length - 1; i++){
        let secondLetter = numInString[i];
        if (firstLetter !== secondLetter){
            isSame = false;
        }   
        sum += Number(secondLetter);
    }
    console.log(isSame);
    console.log(sum);

}
sameNum(2222222);