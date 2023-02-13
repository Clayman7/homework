function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}

let fray = (nombre, edad, nacionalidad)=>{
    return {
        nombre,
        edad,
        nacionalidad
    }
}
//prueba 07

