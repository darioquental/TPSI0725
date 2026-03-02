
// for 
const frutas=["Maça","Pera","uva"];

for (let i = 0; i< frutas.length;i++){
    console.log(frutas[i]);
}

for (let fruta of frutas){
    console.log(fruta);
}

const pessoa={
    nome : "Paulo",
    idade: 30
}

for (let chave in pessoa){
    console.log(chave," : ",pessoa[chave]);
}