
var botao = document.querySelector("#calcula");

botao.addEventListener("click", function(event){
    event.preventDefault();
    
    var quantidade = document.querySelector("#quantidade").value;

    if(quantidade <= 12 ){
        var custo = 1.30;
    }else{
        custo = 1.00;                
    }
    
    var valorTotal = custo * quantidade;
        
    console.log(valorTotal);
    alert("O valor total é " + valorTotal);                
});