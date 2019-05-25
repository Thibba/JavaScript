var botao = document.querySelector("#calcula");

botao.addEventListener("click", function(event){
    event.preventDefault();

    var numero = 0;
    var primo = 0;
    var count = 0;
    
    do{
        numero++;
        for(var i = 1; i <= numero; i++ ){
            if( numero % i == 0){
                primo++
            }
        }
        
        if(primo <= 2){
            count++;
            console.log(numero);
        }
        var primo = 0;
        var paragrafo = document.createElement("div");        
        var valor = document.createTextNode(numero);
        paragrafo.appendChild(valor);
        var elementopai = document.body;
        elementopai.appendChild(paragrafo);

    }while(count < 10);        
});