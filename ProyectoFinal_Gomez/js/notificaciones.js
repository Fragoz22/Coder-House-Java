export function confirmarAgregarProducto(nombreProducto) {
  return Swal.fire({
    title: '¿Agregar al carrito?',
    text: `¿Deseas agregar "${nombreProducto}" al carrito?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, agregar',
    cancelButtonText: 'Cancelar'
  });
}

export function mostrarToastExito(mensaje) {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: mensaje,
    showConfirmButton: false,
    timer: 2000
  });
}
export function confirmarEliminarProducto(nombreProducto) {
  return Swal.fire({
    title: '¿Eliminar del carrito?',
    text: `¿Desea eliminar "${nombreProducto}" (x1)?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No',
    confirmButtonColor: '#e74c3c',
    cancelButtonColor: '#95a5a6'
  });
}

export function mostrarToastError(mensaje) {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'error',
    title: mensaje,
    showConfirmButton: false,
    timer: 2000
  });
}
