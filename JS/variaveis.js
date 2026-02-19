// Declaração e inicializaçao de variaveis
//string
let nome = "Dario";
console.log(nome);
console.log(typeof nome);

//number
let idade = 40;
let media = 12.4;
console.log(idade);
console.log(typeof idade);
console.log(media);
console.log(typeof media);

const pi=3.14;
console.log(pi);
console.log(typeof pi);

//boolean
let ativo=true;
console.log(ativo);
console.log(typeof ativo);

//undefined
let valor;
console.log(valor);
console.log(typeof valor);


// tipos Objecto

//null
let nulo=null;
console.log(nulo);
console.log(typeof nulo);

//arrays 

// [] <- array ou  lista    , {} <- objecto ou dicionarios ou struct , () <- tupple
let carro=["BMW","FIAT","FORD"];
console.log(carro);
// acesso feito atravez de index 
console.log(carro[1]);
console.log(typeof carro);

//objecto
let obje={"BMW":320,
          "FIAT":"PUNTO",
          "FORD":"RANGER"};

console.log(obje);
// acesso feito atravez de mapping , key : value
console.log(obje["FIAT"]);
console.log(typeof obje);

//objecto
let objec={"nome":"Joao",
          "idade":30,
          "tel":234234234};

console.log(objec);
// acesso feito atravez de mapping , key : value
console.log(objec["nome"]);
console.log(objec.idade);
console.log(typeof objec);

//funçoes tb sao objetos