var botao = document.querySelector("#calcula");

botao.addEventListener("click", function(event){
    event.preventDefault();

    var horas = document.querySelector("#horas").value;
    var valorHora = document.querySelector("#valorHora").value;    
    var totalReceber = 0;
    var horasExtras = 0;
    if(horas > 40){
        horasExtras = horas - 40;
        totalReceber = (valorHora * 40) + ((valorHora * 1.5)*horasExtras);
    }else{
        totalReceber = horas * valorHora;
    }  
    console.log(totalReceber);
    alert("Total a receber " + totalReceber);
    
    
});