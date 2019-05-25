var botao = document.querySelector("#calcula");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    var numero = document.querySelector("#numero").value;
    var numeros = [];
    var count = 0;
    var count2 = 1;
    var verificaNumero = 0;
    var numeroGerado = 0;
    var verifica = true;

    console.log("início");

    do {
        var verifica = true;
        count2 = 0;
        do {
            numeroGerado = Math.floor((Math.random() * 100 + 1) + 1);
            console.log(numeroGerado);
            for (var i = 0; i < numeros.length; i++) {
                if (numeroGerado == numeros[i]) {
                    count2++;
                }
            }
            if (count2 == 0) {
                verifica = true;
                numeros.push(numeroGerado);
            }
        } while (verifica == false);
        count++
    } while (count <= numero);

    console.log("Números Desordenados")
    
    console.log(numeros)

    //let bubbleSort = (numeros) => {
      len = numeros.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (numeros[j] > numeros[j + 1]) {
                    let tmp = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = tmp;
                }
            }
        }
        return numeros;    

    console.log("Números Ordenados");
    
});