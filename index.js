/**
 * @author Rafael Jesús Nieto Cardador
 */
{
  let inicio = function(){

    let arrayFormulario = Array.from(document.querySelectorAll('input,select'));
    arrayFormulario.pop();

    document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {
        e.preventDefault();
        muestra(arrayFormulario);
    });

    cambiarFechaMaxima(arrayFormulario[1]);

    let span = Array.from(document.getElementsByTagName("span"));
    span.forEach(elemento => {
      elemento.style.color = "red";
    });
  }

  let muestra = function(elementos){
    
    let fechaArray = elementos[1].value.split(/[\/-]/g);  
    let nuevaFecha = fechaArray[2]+"-"+fechaArray[1]+"-"+fechaArray[0];
    let ventana = window.open("", "", "top=0,left=1000,width=1000,height=1000");
    ventana.document.write(`
      <html>
        <head>
          <script src=\"gato.js\"></script>
          <script src=\"ventana.js\"></script>
        </head>
        <body>
          <label>Nombre: <p id=\"nombreP\">${elementos[0].value}</p></label>
          <label>Peso: <p id=\"pesoP\">${elementos[2].value}</p></label>
          <label>Fecha de nacimiento: <p id=\"fechaP\">${nuevaFecha}</p></label>
          <label>Raza: <p>${elementos[3].value}</p></label>
          <br><img id=\"img\"src=\"img/longcat.jpg\" alt=\"Imagen de un gato\" width=\"400\" height=\"450\"><br><br>
          <button id=\"edadGato\">Edad gato</button>
          <button id=\"darComer\">Dar de comer</button>
          <button id=\"jugar\">Jugar con el gato</button>
          <p id=\"mensaje\"></p>
        </body>
                      `);
    ventana.document.close();
  }


  let cambiarFechaMaxima = function(inputFecha){
    let fechaActual = new Date();
    let dia = fechaActual.getDay();
    let mes = fechaActual.getMonth()
    if(dia<10){
      dia = "0"+dia;
    }

    if(mes<10){
      mes = "0"+mes;
    }
    inputFecha.max = fechaActual.getFullYear()+"-"+mes+"-"+dia;
  }
  document.addEventListener("DOMContentLoaded", inicio);
}
