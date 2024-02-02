function extract(arr){
    let newArr = [];
    let firstNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let secondNum = arr[i];
        if(secondNum >= firstNum){
            newArr.push(arr[i])
            firstNum = secondNum;
        }
        
    }

   return newArr;

}
extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
    )