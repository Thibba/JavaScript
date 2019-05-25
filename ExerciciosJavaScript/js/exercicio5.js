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
            numeroGerado = Math.floor((Math.random() * 1000 + 1) + 1);
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

    function swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    function selectionSort(items){

        var len = items.length,
            min;
    
        for (i=0; i < len; i++){
               
            min = i;
            for (j=i+1; j < len; j++){
                if (items[j] < items[min]){
                    min = j;
                }
            }
    
            //if the minimum isn't in the position, swap it
            if (i != min){
                swap(items, i, min);
            }
        }
    
        return items;
    }
    console.log(selectionSort(numeros));
});