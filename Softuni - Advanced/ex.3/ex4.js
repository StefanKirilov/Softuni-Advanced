function heroic (arr){
    let result = [];

    arr.forEach(line => {
        let [name , level , item] = line.split(' / ');
        let items = item ? item.split(', ') : [];
        let obj = {
            name,
            level: Number(level),
            items
        };
       
        result.push(obj);
    });

    let resultToJson = JSON.stringify(result)
    
    return resultToJson;

}
heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);