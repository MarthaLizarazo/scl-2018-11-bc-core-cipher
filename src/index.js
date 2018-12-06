
window.onload = ()=>{

const boton1=document.getElementById("cifrarTexto"); //get= consedguir y guarda un elemento con el Id asignado

boton1.addEventListener("click", () =>{   //Cuando se hace "click" llama a la funcion listener=escucha, los () significa que es una funcion
        const root= document.getElementById("root");
        let offset = document.getElementById("offset").value;
        let mensaje= document.getElementById("introtext").value;
        root.innerHTML = window.cipher.encode(offset, mensaje);
    });

    
const boton2=document.getElementById("descifrarTexto");

boton2.addEventListener("click", () =>{
        const root= document.getElementById("root");
        let offset = document.getElementById("offset").value;
        let mensaje= document.getElementById("introtext").value;
        root.innerHTML = window.cipher.decode(offset, mensaje);
    });
}
