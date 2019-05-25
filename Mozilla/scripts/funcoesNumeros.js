var botao = document.querySelector("#calcula");

botao.addEventListener("click", function(event){
    event.preventDefault();

    console.log('chamou função');
    var getNumero1 = document.querySelector("#numero1").value;
    var getNumero2 = document.querySelector("#numero2").value;

    numero1 = parseInt(getNumero1, 10);
    numero2 = parseInt(getNumero2, 10);
    
    var numero1
    var adicao = numero1 + numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;
    var modulo = numero1 % numero2;
    
    
    var elementoPai = document.body;    
    var paragrafoResultado = document.createElement('p');
    var texto = document.createTextNode(adicao);
    paragrafoResultado.appendChild(texto);
    elementoPai.appendChild(paragrafoResultado);
    var resultadoMultiplicacao = document.createElement('p');
    texto = document.createTextNode(multiplicacao);
    resultadoMultiplicacao.appendChild(texto);
    elementoPai.appendChild(resultadoMultiplicacao);
});

