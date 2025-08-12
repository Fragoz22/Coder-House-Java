/* 
Me voy a ayudar del ejercicio propuesto por la cátedra.

Ejercicio 3: Menú de selección de personaje
Simulación: Selección de un personaje en un juego.
*/

const seleccionPersonaje = () => {
    alert("Bienvenido a la selección de personajes!!");

    let nombreUsuario = prompt("Ingrese su nombre:");

    alert(`Bienvenido ${nombreUsuario} !!`);

    alert(mostrarPersonajes());

    let elegido = prompt("Escriba el nombre del personaje que desea usar:");

    let personajeSeleccionado = null;

    for (let i = 0; i < personajes.length; i++) {
        if (personajes[i].nombre.toLowerCase() === elegido.toLowerCase()) {
            personajeSeleccionado = personajes[i];
            break;
        }
    }
    if (personajeSeleccionado) {
        alert(`Has seleccionado a ${personajeSeleccionado.nombre} `);
    } else {
        alert("Personaje no encontrado. Por favor, intente de nuevo.");
        seleccionPersonaje(); // Volver a llamar a la función si no se encuentra el personaje
    }

}

const personajes = [
        { nombre: "Garen", vida: 1000, ataque: 60},
        { nombre: "Ashe", vida: 500, ataque: 100},
        { nombre: "Tryndamere", vida: 700, ataque: 80}
];

const mostrarPersonajes = () => {
    let disponibles = "Personajes disponibles:\n";

    for (let i = 0; i < personajes.length; i++) {
        disponibles += `
        - Nombre: ${(personajes[i].nombre)}
        - Vida: ${personajes[i].vida}
        - Ataque: ${personajes[i].ataque}
        `;
    }
    return disponibles;
};

seleccionPersonaje()