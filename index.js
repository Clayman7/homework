function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui
      let x = numero % 2;
   
    if(x === 0){
        console.log("Es par");
        
    let num = numero;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return binary;
        
    }else{
        console.log("Es inpar");
        let hexadecimal = numero.toString(16);
        return hexadecimal;
    }
    }

    function alan(){
    let datos = {
        nombre: "Alan",
        edad: 25,
        nacionalidad: "Mexicana"
    }
    
    return datos;
}