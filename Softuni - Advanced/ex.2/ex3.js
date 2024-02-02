function addAndRemove(arr){

    let num = 0;
    let newArr = [];

    for (let i = 0; i <= arr.length - 1 ; i++) {
        let command = arr[i];
        if (command === 'add'){
            num += 1;
            newArr.push(num);
        }
        else if (command === 'remove'){
            num += 1;
            newArr.pop();
        }
    }
    if (newArr.length < 1){
        console.log('Empty')
    }
    else{
    for (const element of newArr) {
        console.log(element);
    }
}

}
addAndRemove(['add',
'add',
'remove',
'add',
'add']
)