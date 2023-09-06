import { comprarProducto } from "./carrito.js";

const divProductos = document.getElementById("productos");

export let librosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
    generarCardsBeats(librosDisponibles)
})


export const generarCardsBooks = (productos) => {
    
    divProductos.innerHTML = "";
    
    productos.forEach((productos) => {

        const { imagen, nombre, bpm, precio, id} = productos
        
        let card = document.createElement("div")

        card.className = "producto"
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${imagen}" class="card-img-top" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Autor: ${autor}</p>
        <p class="card-text"><b>$${precio}</b></p>
        <buttom id="Comprar${id}" class="btn btn-primary">Comprar</buttom>
        </div>
        </div>
        `;

        divProductos.appendChild(card);

        const btnComprar = document.getElementById(`Comprar${id}`)
        btnComprar.addEventListener("click", () => comprarProducto(id))

    });
}