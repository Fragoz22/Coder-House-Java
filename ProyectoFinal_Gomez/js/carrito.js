import { mostrarToastExito, confirmarEliminarProducto, mostrarToastError } from "./notificaciones.js";


let carrito = [];

export function agregarAlCarrito(producto) {
  const existente = carrito.find(item => item.id === producto.id);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  renderCarrito();
  mostrarToastExito("Producto agregado al carrito");
}

async function eliminarDelCarrito(id) {
  const item = carrito.find(prod => prod.id === id);

  if (!item) return;

  const resultado = await confirmarEliminarProducto(item.title, item.cantidad);

  if (resultado.isConfirmed) {
    if (item.cantidad > 1) {
      item.cantidad--;
    } else {
      carrito = carrito.filter(prod => prod.id !== id);
    }
    renderCarrito();
    mostrarToastError("Producto eliminado del carrito");
  }
}



function renderCarrito() {
  const itemsDiv = document.getElementById("items-carrito");
  const totalDiv = document.getElementById("total");
  itemsDiv.innerHTML = "";
  let total = 0;

  carrito.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carrito-item");
    itemDiv.innerHTML = `
      <span>${item.title} (x${item.cantidad})</span>
      <span>$${item.price * item.cantidad}</span>
      <button class="btn-eliminar">Eliminar</button>
    `;
    itemDiv.querySelector(".btn-eliminar").addEventListener("click", () => eliminarDelCarrito(item.id));
    itemsDiv.appendChild(itemDiv);
    total += item.price * item.cantidad;
  });

  totalDiv.textContent = "Total: $" + total;
}

export function finalizarCompra() {
  if (carrito.length === 0) {
    Swal.fire("Carrito vacío", "Agrega productos antes de finalizar.", "info");
    return;
  }
  Swal.fire("Compra realizada", "¡Gracias por tu compra!", "success");
  carrito = [];
  renderCarrito();
}
