function listOfNames(arr){
    let sortedArr = arr.sort((a, b) =>
        a.localeCompare(b))

        sortedArr.forEach((el, i) => {
            console.log(`${i + 1}.${el}`);
        });


}
listOfNames(["John","Bob","Christina","Ema"]);