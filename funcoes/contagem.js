function contagem(array) {
  let contador = 0;
  
  for (let i = 0; i <= array.length; i++) {
    if (Number.isInteger(array[i])) {
      contador++;
    }
  }

  return contador;
}

module.exports = contagem;





    
