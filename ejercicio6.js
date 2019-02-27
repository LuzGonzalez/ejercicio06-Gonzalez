const fs=require('file-system');


fs.readFile('./alumnos.csv',leer);

function leer(error,datos){
    if (error)
      console.log(error);
    else
      
      var alumnos = datos.toString();
      var arr_filas = alumnos.split('\n');
      var cadena_alumnos = "";
      for(var i=1; i<arr_filas.length-1;i++){
        var alumno = arr_filas[i].split(',');
      cadena_alumnos+='# : '+i+ '\n'+'num_control: '+alumno[0]+'\n'+'nombre: '+alumno[1]+'\n'+'calificacion: '+alumno[2];
      }
      fs.writeFile("alumnos2.txt",cadena_alumnos,function(err){
          if(err){
              return console.log(err);
          }
          console.log("El archivo fue guardado");

      });
    }
