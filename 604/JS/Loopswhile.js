// while
const input= require('prompt-sync')();

let i=0

while ( i<= 5 ){
    console.log(i);
    i++;
}

let flag=true;
let opc="";

//loop maior
do{
flag=true;
console.log("1 - dis bom dia")
console.log("2 - dis boa noite")
console.log("3 sair")
opc=input("escolha opçao")

switch (opc){
    case "1":
        console.log("bom dia");
        break;
    case "2":
        console.log("boa noite");
        break;
    case "3":
        console.log("Adeus");
        flag=false;
        break;
}
}while(flag)
// fim do loop maior