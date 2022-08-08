function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    console.log(sum);
}

// add(45, 15);


function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}
var total = add(70, 30);
// console.log('total', total);



function bringShingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 100;
var singaras = bringShingara(myTaka);
console.log('Eating singaras: ', singaras);

