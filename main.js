
// En primera instancia creo una función que encapsule todo el script
function obtenerDatosUsuario() {

  // Creo una alert para contextualizar y dar la bienvenida al usuario
  alert("¡Bienvenido al Test de preferencias!\nContesta las siguientes preguntas para conocer tu vocación.");

      // Luego, creo variables que obtendrán información de usuario    
      let nombre = prompt("Para empezar nuestra conversación, ¿podrías decirme tu nombre?");
      let edad = parseInt(prompt("¿Cuántos años tienes?"));
      let ocupacion = prompt("Por último, ¿Qué es lo que haces en tu día a día?");
      
      // A continuación defino un arreglo el cual muestra diferentes preguntas y orienta
      // al usuario para que su respuesta sea un valor entre 1 a 5
      const preguntas = [
          { pregunta: "En una escala del 1 al 5, ¿qué tan cómodo te sientes programando? (1: No cómodo en absoluto, 5: Muy cómodo)" },
          { pregunta: "¿Qué tan hábil te consideras en diseño visual? (1: No hábil en absoluto, 5: Muy hábil)" },
          { pregunta: "En una escala del 1 al 5, ¿qué tan hábil te consideras en la gestión de proyectos? (1: Poco hábil, 5: Muy hábil)" },
          { pregunta: "En una escala del 1 al 5, ¿qué tan interesado estás en el análisis de datos? (1: Nada interesado, 5: Muy interesado)" }

      ];
      
      // Defino una variable en 0 para alojar la suma de los valores
      let sumaValoraciones = 0;
  
      // Acá genero un bucle para asegurar que la respuesta del arreglo de preguntas sea un 
      // valor númerico
      for (let i = 0; i < preguntas.length; i++) {
          let respuesta;
          do {
              respuesta = parseInt(prompt(preguntas[i].pregunta));
              if (isNaN(respuesta)) {
                  alert("Por favor, introduce un valor numérico válido.");
              }
          } while (isNaN(respuesta));
          
          // Sumo la variable en 0 + la suma de las respuestas del arreglo.
          sumaValoraciones += respuesta;
      }

      // En este bloque define según condiciones el valor de preferencias, según
      // las respuestas del usuario 
      let preferencia;
      if (sumaValoraciones >= 8) {
          preferencia = "Programación";
      } else if (sumaValoraciones >= 5) {
          preferencia = "Diseño";
      } else {
          preferencia = "Otro";
      }
  
      // Se genera una respuesta para el usuario
      alert("Basado en tus respuestas, tu preferencia es: " + preferencia);
  
      // Genero una variable y una sentencia para confirmar si el usuario quiere repetir
      // el proceso o simplemente cerrar.
      let volverATestear = confirm("¿Quieres realizar el test nuevamente?");
      if (volverATestear) {
          obtenerDatosUsuario();
      } else {
          alert("Gracias por participar en el test. ¡Hasta luego!");
      }
  }
  
  // Se ejecuta la función
  obtenerDatosUsuario();