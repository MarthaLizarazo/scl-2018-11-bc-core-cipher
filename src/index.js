//window.onload

function cifrarTexto(){
    const root= document.getElementById("root");
    let offset = document.getElementById("offset").value;
    let mensaje= document.getElementById("introtext").value;
    root.innerHTML = window.cipher.encode(offset, mensaje);
    }
    
    function descifrarTexto(){
        const root= document.getElementById("root");
        let offset = document.getElementById("offset").value;
        let mensaje= document.getElementById("introtext").value;
        root.innerHTML = window.cipher.decode(offset, mensaje);
    }