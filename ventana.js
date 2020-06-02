/**
 * @author Rafael Jesús Nieto Cardador
 */
{
  let inicio = function(){
    let p = Array.from(document.getElementsByTagName("p"));
    gato = new Gato(p[0].innerHTML, p[1].innerHTML, p[2].innerHTML, p[3].innerHTML);

    let img = document.getElementById("img");

    let mensaje = document.getElementById("mensaje");

    let botones = Array.from(document.getElementsByTagName("button"));

    botones.forEach(boton => {
      switch(boton.id){
        case "edadGato":
          boton.addEventListener("click",function (){
            let edad = gato.getEdad();
            if(edad == 0){
              mensaje.innerHTML = gato.nombre+" es un recién nacido.";
            }else if(edad==1){
              mensaje.innerHTML = gato.nombre+" tiene 1 año.";
            }else{
              mensaje.innerHTML = gato.nombre+" tiene "+edad+" años.";
            }
            
          });
          break;
        case "darComer":
          boton.addEventListener("click",function (){
            gato.darComer();
            if(gato.isVivo()){
              img.src = "img/gatocomiendo.png";
              mensaje.innerHTML = `${gato.nombre} está comiendo.`;
            }else{
              deshabilitarBotones(botones);
              
              img.src = "img/gatomuertoGor.png";
              mensaje.innerHTML = gato.nombre+" ha muerto por un ataque al corazón.";
            }
            actualizarPeso(p[1], gato.peso);
          });
          break;
        case "jugar":
          boton.addEventListener("click",function (){
            gato.jugar();
            if(gato.isVivo()){
              img.src = "img/gatojugando.png";
              mensaje.innerHTML = `${gato.nombre} está jugando.`;
            }else{
              deshabilitarBotones(botones);

              img.src = "img/gatomuerto.jpg";
              mensaje.innerHTML = gato.nombre+" ha muerto de inanición.";
            }
            actualizarPeso(p[1], gato.peso);
            
          });
          break;
      }
    });
  }

  let deshabilitarBotones = function(botones){
    botones.forEach(boton =>{
      boton.disabled = true;
    });
  }

  let actualizarPeso = function(pPeso, peso){
    pPeso.innerHTML = peso;
  }

  document.addEventListener("DOMContentLoaded", inicio);
}
