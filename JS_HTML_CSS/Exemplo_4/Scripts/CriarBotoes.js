    function criarBotoes(){
        const valores=[
        "0","1","2","3","4","5","6","7","8","9","+","-","/","*","=","C"        
        ];
        const divinterna=document.getElementById("buttons");
        for (let i=0;i<valores.length;i++){
            let btn= document.createElement("button");
            btn.textContent=valores[i];
            btn.onclick= function(){
                let display = document.getElementById("display");
                if (valores[i]==="C"){
                    display.value=""
                }
                else if (valores[i]==="="){
                    display.value= eval(display.value);
                }
                else{
                    display.value+=valores[i];
                }
            }
            divinterna.appendChild(btn);
        }
    }
    criarBotoes();