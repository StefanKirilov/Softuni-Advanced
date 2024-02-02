function storeCatalogue(arr){

    let sortedInput = arr.sort((a,b) => a.localeCompare(b));

    let result = {};

    for (let i = 0; i < sortedInput.length; i++) {
        let el = sortedInput[i].split(' : ').join(': ');
        let firstLetter = el[0];

        if (result[firstLetter] === undefined){
            result[firstLetter] = [];
        }
        result[firstLetter].push(`   ${el}`);
        
    }
    let output = [];

    for (const key in result) {
           let el = result[key];
           output = [...output, key , ...el];
        }
        return output.join('\n');
    }
    


storeCatalogue(['Appricot : 20.4','Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);