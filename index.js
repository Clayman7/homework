function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  // Si es un numero par convertirlo a binario y si es impar convertirlo a hexadecimal

  if (numero % 2) return "0x" + numero.toString(16);
  return numero.toString(2);
}

console.log(laCajaDePandora(12));
console.log(laCajaDePandora(13));
console.log(laCajaDePandora(25));
