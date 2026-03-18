//IF 
let valor1=1
let valor2=2
// sequecias de avaliçao sem restriçoes, avaliam sempre qualquer if
if(valor1==valor2){
console.log("os valores sao iguais");
}
if(valor1>=valor2){
console.log("o valor1 maior que valor2 ");
}else{
console.log("o valor1 menor que valor2");
}




// sequecias de avaliçao , avaliam so if anterior for false
if(valor1>valor2){
console.log("o valor1 maior que valor2 ");
}
else if(valor1< valor2){
console.log("o valor1 menor que valor2 ");
}else{
console.log("os valores sao iguais");
}

// switch 

let op=3

switch(op){
    case 1:
        console.log("press 1");
        break;
    case 2:
        console.log("press 2");
        break;
    case 3:
        console.log("press 3");
        break;
    default:
        console.log("press 3");
        break;        
}