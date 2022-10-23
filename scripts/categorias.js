//mostrar categorias//
let catOculto = true;
function mostrarCatOculto(){
    if (catOculto == true){
        document.getElementById("categoriasOculto").style.display = "revert";
        catOculto = false;
    } else {
        document.getElementById("categoriasOculto").style.display = "none";
        catOculto = true;
    }
}

//mostrar preços//
let precoOculto = true;
function mostrarPrecoOculto(){
    if (precoOculto == true){
        document.getElementById("precoOculto").style.display = "revert";
        precoOculto = false;
    } else {
        document.getElementById("precoOculto").style.display = "none";
        precoOculto = true;
    }
}