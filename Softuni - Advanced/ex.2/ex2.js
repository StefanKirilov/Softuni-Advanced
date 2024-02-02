function print(arr , num){
    let newArr = [];
    for (let i = 0; i < arr.length; i +=num ) {
        let el = arr[i];
        newArr.push(el);
        
    }
   return newArr;

}
print(['5',
'20',
'31',
'4',
'20'],
2)

print(['1',
'2',
'3',
'4',
'5'],
6)