function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  // Si es un numero par convertirlo a binario y si es impar convertirlo a hexadecimal
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}

function Sergio() {
  return {
    nombre: "Sergio Mikhail Baez",
    edad: "33",
    nacionalidad: "Mexicana",
  };
}

function lara() {
  const info = {
    nombre: "Lara",
    nacionalidad: "Argentina",
    edad: 25,
  };
  return info;
}

function Christian() {
  return {
    nombre: "Christian",
    edad: 30,
    nacionalidad: "Argentina",
  };
}

function victor() {
  return {
    name: "victor21231232",
    age: 21223,
    country: "Peru",
  };
}
