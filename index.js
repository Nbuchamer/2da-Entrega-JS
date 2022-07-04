let titulo = document.getElementById("titulo")
console.log (titulo.innerText)
titulo.innerText= "Segunda Entrega del Proyecto Final"
console.log (titulo.innerText);

let container = document.getElementById("subtitulo");
container.innerHTML = "<h2>Distintos tipos de Bebidas que Vendemos</h2>"
container.className = "subtitulo"
console.log (document.getElementsByClassName("subtitulo"));
console.log (container);

const cervezas =  [{id:1, nombre: "Cerveza Lata Stella Artois", precio: 2900},
                    {id:2, nombre: "Cerveza Lata Heineken", precio: 3900},
                    {id:3, nombre: "Cerveza Porron Corona 330 ml", precio: 4600},
                    {id:4, nombre: "Cerveza Corona 710ml", precio: 3400},
]
let buttonCerveza = document.getElementById("buttonCerveza");
buttonCerveza.addEventListener(`click`, listadoCervezas)

function listadoCervezas() {
    for (const producto of cervezas) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="tarjeta">
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>
                                <h4> ID: ${producto.id}</h4>
                                <button onclick="avisoCompra(${producto.id})">Comprar</button>
                                </div>`;
        document.body.appendChild(contenedor);
    }
}

const vinosTinto =  [{id:5, nombre: "Cordero con piel de lobo - Malbec", precio: 2800},
                    {id:6, nombre: "Portillo - Malbec", precio: 3000},
                    {id:7, nombre: "Trumpeter-Malbec", precio: 5500},
                    {id:8, nombre: "Nicasia - Malbec", precio: 6200},
]
let buttonVinoTinto = document.getElementById("buttonVinoTinto");
buttonVinoTinto.addEventListener(`click`, listadoVinoTinto)

function listadoVinoTinto() {
    for (const producto of vinosTinto) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="tarjeta">
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>
                                <h4> ID: ${producto.id}</h4>
                                <button onclick="avisoCompra(${producto.id})">Comprar</button>
                                </div>`;
        document.body.appendChild(contenedor);
    }
}
const vinosBlanco =  [{id:9, nombre: "Santa Julia - Chennin Dulce", precio: 4000}
]
let buttonVinoBlanco = document.getElementById("buttonVinoBlanco");
buttonVinoBlanco.addEventListener(`click`, listadoVinoBlanco)

function listadoVinoBlanco() {
    for (const producto of vinosBlanco) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="tarjeta">
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>
                                <h4> ID: ${producto.id}</h4>
                                <button onclick="avisoCompra(${producto.id})">Comprar</button>
                                </div>`;
        document.body.appendChild(contenedor);
    }
}
const whisky =  [{id:10, nombre: "Johnnie Walker - Red Label Litro", precio: 4500},
                 {id:11, nombre: "Johnnie Walker - Black Label Litro", precio: 6500}
]
let buttonWhisky = document.getElementById("buttonWhisky");
buttonWhisky.addEventListener(`click`, listadoWhisky)

function listadoWhisky() {
    for (const producto of whisky) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="tarjeta">
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>
                                <h4> ID: ${producto.id}</h4>
                                <button onclick="avisoCompra(${producto.id})">Comprar</button>
                                </div>`;
        document.body.appendChild(contenedor);
    }
}
const aperitivos =  [{id:12, nombre: "Fernet Branca - 750ml", precio: 1100},
                     {id:13, nombre: "Campari bitter - 750 ml", precio: 900}
]
let buttonAperitivo = document.getElementById("buttonAperitivo");
buttonAperitivo.addEventListener(`click`, listadoAperitivos)

function listadoAperitivos() {
    for (const producto of aperitivos) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="tarjeta">
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>
                                <h4> ID: ${producto.id}</h4>
                                <button onclick="avisoCompra(${producto.id})">Comprar</button>
                                </div>`;
        document.body.appendChild(contenedor);
    }
}


function avisoCompra(id) {
    let index = id-1
    alert(`Gracias por agregar al Carrito ${cervezas[index].nombre}`);
}

/*var edad = +prompt("Ingresa tu edad (recuerda que debes ser mayor de 18 años)")

if (edad >= 18){
    resultado= ("Bienvenido, eres mayor de edad")
}else {
    resultado= ("Eres menos de edad, no podras comprar en el sitio");
}

alert(resultado);*/

/*let productos = document.getElementsByClassName ("productos"); 

console.log(productos[0].innerHTML);
console.log(productos[1].innerHTML);
console.log(productos[2].innerHTML);
console.log(productos[3].innerHTML);
console.log(productos[4].innerHTML);

document.getElementById("cerveza1").value = "Lata Stella Artois x 24u.";
document.getElementById("cerveza1valor").value = 2900;
document.getElementById("cerveza2").value = "Lata Heineken x 24 u.";
document.getElementById("cerveza2valor").value = 3700;
document.getElementById("vinoTinto1").value = "Trumpeter-Malbec";
document.getElementById("vinoTinto1valor").value = 5500;
document.getElementById("vinoTinto2").value = "Nicasia-Malbec";
document.getElementById("vinoTinto2valor").value = 6200;
document.getElementById("vinoBlanco1").value = "Santa Julia Chennin Dulce";
document.getElementById("vinoBlanco1valor").value = 4000;
document.getElementById("aperitivo1").value = "Fernet Branca 750";
document.getElementById("aperitivo1valor").value = 1000;
document.getElementById("whisky1").value = "Johnnie Walker Red Label";
document.getElementById("whisky1valor").value = 3800;*/

/*["cerveza", "vinotinto", "aperitivos", "vinoblanco", "whisky"];

console.log ("Diferentes tipos de bebidas que podes encontrar:")
function mostrarBebidas(){
for (let i=0; i < bebidas.length; i++){
    console.log (`La escala de bebidas mas vendidas ${i+1} es ${bebidas[i]}`);
}
} 
mostrarBebidas();

const array = ["cerveza", "vinotinto", "aperitivos", "vinoblanco", "whisky"];

console.log(array.push(`licores`));
console.log(array)*/

/*let cerveza = +prompt("Ingrese la cantidad de Cervezas que quieras comprar")
let vinoTinto = +prompt("Ingrese la cantidad de Vino tinto que quieras comprar")
let aperitivos = +prompt("Ingrese la cantidad de Aperitivos que quieras comprar")
let vinoBlanco = +prompt("Ingrese la cantidad de Vino blanco que quieras comprar")
let whisky = +prompt("Ingrese la cantidad de Whisky que quieras comprar")

function sumaDeProductos (cerveza,vinoTinto,aperitivos,vinoBlanco,whisky){
resultado = cerveza + vinoTinto + aperitivos + vinoBlanco + whisky;
}
sumaDeProductos (cerveza,vinoTinto,aperitivos,vinoBlanco,whisky);

alert("El total de productos que quieres comprar es " + resultado);*/
