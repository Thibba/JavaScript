function InputError(message){
    this.message = message;
    this.stack = (new Error()).stack;
}

InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";


function entradaNumerica(question){    
    var numero = prompt();
    var intNumero = parseInt(numero)    
    if(Number.isInteger(intNumero)){
        return intNumero;
    }
    throw new InputError(alert("Digite um número inteiro válido"))
}



for(;;){
    try{
        var entrada = entradaNumerica("Entrou com o número");        
        console.log("Você digitou " + entrada);
        alert("Voce digitou " + entrada);
        break;
    }catch(e){
        if(e instanceof InputError)
            console.log("Digite um número válido");
        else
            throw e;    
    }
}
