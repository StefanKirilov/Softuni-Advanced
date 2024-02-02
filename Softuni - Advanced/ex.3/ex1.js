function object(arr){

    let result = {};
    for (let i = 0; i < arr.length; i+=2) {
        result[arr[i]] = Number(arr[i+1]);
    }
    return result;
}
object(['Yoghurt', '48', 'Rise', '138',
'Apple', '52']);