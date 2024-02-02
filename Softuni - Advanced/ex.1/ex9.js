function wordUpper(text){
    let pattern = /\w+/g;


    let output = text.match(pattern).join(', ').toUpperCase();

    console.log(output);

}
wordUpper('Hi, how are you?');