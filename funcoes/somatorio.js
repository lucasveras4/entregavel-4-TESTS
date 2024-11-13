function somatorio(array){
    let contador = 0
    
    for (i = 0; i < array.length; i++){
        contador += array[i]
    }

    return contador
}

somatorio([10, 20, 30, 40, 50])

module.exports = somatorio;
