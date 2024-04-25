// Preguntas a usuario
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
let ocupacion = prompt("Por último ¿A qué te dedicas?");
let preferencia = prompt("¿Cuál es tu preferencia? Selecciona una opción:\n1. Programación\n2. Diseño\n3. Otro");

// Verificar la respuesta del usuario y mostrar un mensaje de acuerdo a su preferencia
if (preferencia == "1") {
  alert("Has seleccionado programación.");
} else if (preferencia == "2") {
  alert("Has seleccionado diseño.");
} else if (preferencia == "3") {
  alert("Has seleccionado otra opción.");
} else {
  alert("Selección no válida.");
}