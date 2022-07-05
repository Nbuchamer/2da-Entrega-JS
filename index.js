let titulo = document.getElementById("titulo")
console.log (titulo.innerText)
titulo.innerText= "Segunda Entrega del Proyecto Final"
console.log (titulo.innerText);

let container = document.getElementById("subtitulo");
container.innerHTML = "<h2>Distintos tipos de Bebidas que Vendemos</h2>"
container.className = "subtitulo"
console.log (document.getElementsByClassName("subtitulo"));
console.log (container);

let contenedorProducto = document.getElementById("contenedorProducto")
let contenedorChango = document.getElementById("contenedorChango")
let chango = [];

cargarChango();
mostrarProductos();
mostrarChango();
contenedorChango();



function cargarChango() {
    if(localStorage.getItem("StorageChango" !== null)){
        chango=JSON.parse(localStorage.getItem("StorageChango"));
        return;
    }else {
        localStorage.setItem("StorageChango", JSON.stringify(chango));
        return;
    }
}

function mostrarProductos(){
    producto.forEach((producto)=>{
        contenedorProducto.innerHTML += `
        <div class="tarjeta">
        <p> Producto: ${producto.nombre}</p>
        <b> $ ${producto.precio}</b>
        <h4> ID: ${producto.id}</h4>
        <button onclick="agregadoChango(${producto.id})">Comprar</button>
        </div>`;
    }
    )
}
function mostrarChango(){
    chango.forEach((chango)=>{
        contenedorChango.innerHTML += `
        <div class="tarjeta">
        <p> Producto: ${chango.nombre}</p>
        <b> $ ${chango.precio}</b>
        <h4> ID: ${chango.id}</h4>
        <button onclick="quitarChango(${chango.id})">Quitar Chango</button>
        </div>`;
    }
    )
}

function contenedorChango(identificador){
    let indice = identificador -1
    let objeto_seleccionado = {}
    objeto_seleccionado = producto[indice]
    if (!chango.some(e=>e.id===identificador)){
        chango.push(objeto_seleccionado)
        localStorage.setItem("StorageChango", JSON.stringify(chango));
        location.reload()
    }else {
        alert ("el producto ya se encuentra en el chango")
    }
}

function quitarChango(id){
    let.chango_filtrado = chango.filter((elemento)=>elemento.id != id);
    chango=chango_filtrado;
    localStorage.setItem("StorageChango", JSON.stringify(chango));
    location.reload()
}