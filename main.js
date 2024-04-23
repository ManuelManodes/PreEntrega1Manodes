// Preguntar al usuario por su nombre
var name = prompt("Cuál es tu nombre?");

// Preguntar al usuario por su edad
var age = prompt("Cuál es tu edad?");

// Preguntar al usuario por su ocupación
var occupation = prompt("Cuál es tu ocupación?");

// Preguntar al usuario por su preferencia entre programación y diseño
var preference = prompt("Prefieres programación o diseño?");

// Verificar la respuesta del usuario y mostrar un mensaje de acuerdo a su preferencia
if (preference === "programación") {
  alert("Hola " + name + ", tu respuesta indica que prefieres programación. ¡Eres un futuro programador!");
} else if (preference === "diseño") {
  alert("Hola " + name + ", tu respuesta indica que prefieres diseño. ¡Eres un futuro diseñador!");
} else {
  alert("Hola " + name + ", tu respuesta no fue clara. Por favor intenta de nuevo.");
}
