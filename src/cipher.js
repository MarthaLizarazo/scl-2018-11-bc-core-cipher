window.cipher = {
  encode: (offset,mensaje) => {
  let resultado="";
  offset=parseInt(offset);                                          // el parseInt trae el valor como numero, no como string
  for (let i= 0; i<mensaje.length; i++) {
    let letraAscci = mensaje.charCodeAt(i);

    if (letraAscci >= 65 && letraAscci<= 90){
     resultado += String.fromCharCode((letraAscci-65+offset)%26+65) // el += es para traerme la cadena completa de texto
    }else if (letraAscci>=97 && letraAscci<=122) {                  // condición código ASCII (Valores minúsculas)
     resultado += String.fromCharCode((letraAscci-97+offset)%26+97) //Obtener el nuevo código ASCII mediante fórmula
    }else{
    resultado += String.fromCharCode(letraAscci);
    }
  }

  return resultado;

  },
  decode: (offset,mensaje) => {
  let resultado="";
  offset=parseInt(offset);                                          // el parseInt trae el valor como numero, no como string
  for (let i= 0; i<mensaje.length; i++) {
    let letraAscci = mensaje.charCodeAt(i);

    if (letraAscci >= 65 && letraAscci<= 90){
     resultado+= String.fromCharCode((letraAscci-65-offset)%26+65) // el += es para traerme la cadena completa de texto
    
    }else if (letraAscci>=97 && letraAscci<=122) {                  // condición código ASCII (Valores minúsculas)
     resultado+= String.fromCharCode((letraAscci-97-offset)%26+97)
    
    }else{
     resultado+= String.fromCharCode(letraAscci);
    }
  }
  return resultado;
  }
}
