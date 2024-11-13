function fibonacci(numero){
    let n1, n2, sucessor;
    n1 = 0;
    n2 = 1;

    if(numero <= 0){
        return []
    } else if (numero == 1){
        return [0]
    } else if (numero == 2){
        return[0, 1]
    }

    let numeros = [0, 1]
    for (i = 2; i < numero; i++){
        sucessor = n1 + n2;
        n1 = n2;
        n2 = sucessor;
        numeros.push(sucessor);
    }
    return numeros


}

module.exports = fibonacci;


