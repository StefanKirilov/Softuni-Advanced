function sortAnArrayByCriteria(arr){
    let sortedArr = arr.sort((a , b) => {
    let firstCriteria = a.length - b.length;
    let secondCriteria = a.localeCompare(b);
    return firstCriteria || secondCriteria;
    });
    console.log(sortedArr.join('\n'));

}
sortAnArrayByCriteria(['alpha','beta','gamma']);