function laCajaDePandora(numero) {
    // proximamente escribiremos codigo aqui
    // Si es un numero par convertirlo a binario y si es impar convertirlo a hexadecimal
      if (numero % 2 === 0) {
      return numero.toString(2);
    } else {
      return numero.toString(16);
    } 
  }

  function misDatos() {
    return {
      nombre: 'Sergio Mikhail Baez',
      edad: '33',
      nacionalidad: 'Mexicana'
    };
  } 