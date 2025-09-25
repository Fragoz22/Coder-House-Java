import { agregarAlCarrito, finalizarCompra } from "./carrito.js";

async function obtenerProductos() {
  const res = await fetch("./cafes.json");
  return await res.json();
}

export async function mostrarProductos() {
  const productos = await obtenerProductos();
  const output = document.getElementById("output");
  output.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.title}">
      <h4>${prod.title}</h4>
      <p class="product-price">$${prod.price}</p>
      <button class="btn-comprar">Agregar</button>
    `;
    card.querySelector(".btn-comprar").addEventListener("click", () => agregarAlCarrito(prod));
    output.appendChild(card);
  });

  document.getElementById("finalizar").addEventListener("click", finalizarCompra);
}
