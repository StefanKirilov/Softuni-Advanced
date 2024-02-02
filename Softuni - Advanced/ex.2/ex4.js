function rotateArr(arr , num){
    let newArr = [...arr];

    for (let i = 0; i < num; i++) {
        let lastNum = newArr.pop();
        newArr.unshift(lastNum);   
    }
    console.log(...newArr);

}
rotateArr(['1',
'2',
'3',
'4'],
2)