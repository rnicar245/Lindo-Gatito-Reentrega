/**
 * @author Rafael Jesús Nieto Cardador
 */

  function Gato(nombre, peso, fecha, raza) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.peso = peso;
    this.raza = raza;
    this.vivo = true;
  }

  Gato.prototype.darComer = function(){
    if(!this.vivo)
      return;
    this.peso++;
    if(this.peso>15)
      this.vivo = false
  }

  Gato.prototype.jugar = function(){
    if(!this.vivo)
      return;
    this.peso--;
    if(this.peso<1)
      this.vivo = false;
  }

  Gato.prototype.isVivo = function(){
    return this.vivo;
  }
  
  Gato.prototype.getEdad = function(){
    if(!this.vivo)
      return;
    let regex = /[\/-]/g;
    let arrayFecha = this.fecha.split(regex);
    let localDate = new Date();

    let edad = localDate.getFullYear() - arrayFecha[2];
    
    if(localDate.getMonth()+1 < arrayFecha[1]){
      edad--;
    }else if(localDate.getMonth()+1 == arrayFecha[1] && localDate.getDay() < arrayFecha[0]){
      edad--;
    }
    
    return edad;
  }


