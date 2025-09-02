// Claves de storage
const STORAGE_KEY = "personajes";
const STORAGE_SEL = "seleccion";

// Personajes por defecto
const defaultPersonajes = [
  { nombre: "Garen", vida: 1000, ataque: 60 },
  { nombre: "Ashe", vida: 500, ataque: 100 },
  { nombre: "Tryndamere", vida: 700, ataque: 80 }
];

// Cargar desde localStorage
function cargarPersonajes() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [...defaultPersonajes];
}

function guardarPersonajes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(personajes));
}

function cargarSeleccion() {
  const data = localStorage.getItem(STORAGE_SEL);
  return data ? JSON.parse(data) : null;
}

function guardarSeleccion(sel) {
  if (sel) {
    localStorage.setItem(STORAGE_SEL, JSON.stringify(sel));
  } else {
    localStorage.removeItem(STORAGE_SEL);
  }
}

// Estado inicial
let personajes = cargarPersonajes();
let seleccion = cargarSeleccion();

// Referencias DOM
const contenedor = document.getElementById("contenedorPersonajes");
const btnAgregar = document.getElementById("btnAgregar");
const seleccionTexto = document.getElementById("seleccionTexto");
const btnReset = document.getElementById("btnReset");

function mostrarPersonajes() {
  contenedor.innerHTML = "";
  personajes.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "personaje";
    div.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>Vida: ${p.vida}</p>
      <p>Ataque: ${p.ataque}</p>
      <button onclick="elegir(${index})">Elegir</button>
      <button onclick="eliminar(${index})">Eliminar</button>
    `;
    contenedor.appendChild(div);
  });
}

function mostrarSeleccion() {
  if (seleccion) {
    seleccionTexto.textContent = `Elegiste a ${seleccion.nombre} (Vida: ${seleccion.vida}, Ataque: ${seleccion.ataque})`;
  } else {
    seleccionTexto.textContent = "No has elegido ningún personaje.";
  }
}

function elegir(i) {
  seleccion = personajes[i];
  guardarSeleccion(seleccion);
  mostrarSeleccion();
}

function eliminar(i) {
  personajes.splice(i, 1);
  guardarPersonajes();
  mostrarPersonajes();
  if (seleccion && i === personajes.indexOf(seleccion)) {
    seleccion = null;
    guardarSeleccion(null);
  }
  mostrarSeleccion();
}

btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const vida = Number(document.getElementById("vida").value);
  const ataque = Number(document.getElementById("ataque").value);

  if (nombre && vida > 0 && ataque > 0) {
    personajes.push({ nombre, vida, ataque });
    guardarPersonajes();
    mostrarPersonajes();
  }
});

btnReset.addEventListener("click", () => {
  personajes = [...defaultPersonajes];
  guardarPersonajes();
  seleccion = null;
  guardarSeleccion(null);
  mostrarPersonajes();
  mostrarSeleccion();
});

// Inicializar
mostrarPersonajes();
mostrarSeleccion();
