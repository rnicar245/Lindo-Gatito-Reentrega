/**
    * @author Rafael Jesús Nieto Cardador
*/


    let Validar = (function() {
        function validarNombre(nombre){
            if(nombre == ""){
                return "El campo está vacío.";
            }
            return "";
        }
        
        function validarPeso(num){
            if(num == ""){
                return "El campo está vacío.";
            }

            if(isNaN(num)){
                return "La cadena introducida no es numérica."
            }

            if(num <0 || num >15){
                return "Con ese peso dudo que el pobre gatito vaya a durar mucho..."
            }

            return "";
        }


        function validarFecha(fecha){
            try{
                if(fecha == ""){
                    return "El campo está vacío.";
                }

                let [,ano,, mes, dia] = /^(\d{4})([/-])(\d{2})\2(\d{2})$/.exec(fecha);              

                console.log(ano);
                console.log(mes);
                console.log(dia);
                let fechaObjeto = new Date(`${ano}/${mes}/${dia}`);

                console.log(fechaObjeto);
                

                if(Number(dia) != fechaObjeto.getDate() || Number(mes) != fechaObjeto.getMonth() +1 || Number(ano) != fechaObjeto.getFullYear()){
                    return "La fecha no existe, ten en cuenta los límites de días de cada mes.";
                }  

                return "";
            }catch(er){
                return "Formato correcto: DD-MM-AAAA (01-01-1999)";
            }
        }

        return{
            validarNombre: validarNombre,
            validarPeso: validarPeso,
            validarFecha: validarFecha,
        }

    })();
