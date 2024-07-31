/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

    let _specificValue = 'Carlos Erick';

    if( _specificValue == 'Carlos Erick'){

        console.log('La variable es verdadero');
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

      let _userName = 'Carlos';
      let _passwrod = 123456;

       if(_userName == 'Carlos' && _passwrod == 123456){
        console.log('Usuario y contraseña son correctos');
       }

       else{
        console.log('Por favor intenta de nuevo');
       }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
       
       let _verifyNumber;

       if(_verifyNumber > 0){
        console.log('EL numero es positivo');
       }

       else if(_verifyNumber < 0){
        console.log('El numero es negativo');
       }

       else{
        console.log('No hay numero, es cero!');
       }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

      let _age = 18;
      let _missingYears = 18;

      if(_age >= 18){
        console.log('Puedes ir a votar');
      }

      else {
         _missingYears - _age;
         console.log(`No puedes votar. Te faltan ${_missingYears} años para poder votar`);

      }


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

       let _userTwo = 17;
       let _result = (_userTwo >= 18) ? '  Adulto' : 'Menor';
       console.log(_result);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
       
      let _nameMonth = 'a';

        if(_nameMonth == 'E'){
            console.log('Estamos en Enero');
        }

        else if(_nameMonth == 'F'){
            console.log('Estamos en Febrero');
        }

        else if(_nameMonth == 'M'){
            console.log('Estamos en Marzo');
        }

        else if(_nameMonth == 'A'){
            console.log('Estamos en Abril');
        }

        else if(_nameMonth == 'm'){
            console.log('Estamos en Mayo');
        }

        else if(_nameMonth == 'J'){
            console.log('Estamos en Junio');
        }

        else if(_nameMonth == 'j'){
            console.log('Estamos en Julio');
        }

        else if(_nameMonth == 'a'){
            console.log('Estamos en Agosto');
        }

        else if(_nameMonth == 'S'){
            console.log('Estamos en Septiembre');
        }

        else if(_nameMonth == 'O'){
            console.log('Estamos en Octubre');
        }

        else if(_nameMonth == 'N'){
            console.log('Estamos en Noviembre');
        }

        else if(_nameMonth == 'D'){
            console.log('Estamos en Diciembre');
        }
     
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch

       
        if(_nameMonth == 'E'){
            console.log('Enero tiene 31 dias');
        }

        else if(_nameMonth == 'F'){
            console.log('Febrero tiene 28 dias, pero tiene 29 en los años bisiestos');
        }

        else if(_nameMonth == 'M'){
            console.log('Marzo tiene 31 dias');
        }

        else if(_nameMonth == 'A'){
            console.log('Abril tiene 30 dias');
        }

        else if(_nameMonth == 'm'){
            console.log('Mayo tiene 31 dias');
        }

        else if(_nameMonth == 'J'){
            console.log('Junio tiene 30 dias');
        }

        else if(_nameMonth == 'j'){
            console.log('Julio tiene 31 dias');
        }

        else if(_nameMonth == 'a'){
            console.log('Agosto tiene 31 dias');
        }

        else if(_nameMonth == 'S'){
            console.log('Septiembre tiene 30 dias');
        }

        else if(_nameMonth == 'O'){
            console.log('Octubre tiene 31 dias');
        }

        else if(_nameMonth == 'N'){
            console.log('Noviembre tiene 30 dias');
        }

        else if(_nameMonth == 'D'){
            console.log('Diciembre tiene 31 dias');
        }
     
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

      let _lenguage = 'J';

      switch(_lenguage){

         case 'S':
            console.log('Hola bienvenido!');
            break;

        case 'E':
            console.log('Hi, welcome! ');
            break;

        case 'J':
            console.log('こんにちは、ようこそ');
            break;
        
        default:
            console.log('No hay ningun idioma');
            
      }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

      let _monthOne = new Date ().getMonth();

      switch(_monthOne){
         
         case 0:
            console.log('Estamos enEnero');
            break;

        case 1:
            console.log('Estamos en Febrero');
            break;

        case 2:
            console.log('Estamos en Marzo');
            break;

        case 3:
            console.log('Estamos en Abril');
            break;

        case 4:
            console.log('Estamos en Mayo');
            break;

        case 5:
            console.log('Estamos en Junio');
            break;

        case 6:
            console.log('Estamos en Julio');
            break;

        case 7:
            console.log('Estamos en Agosto');
            break;

        case 8:
            console.log('Estamos en Septiembre');
            break;

        case 9:
            console.log('Estamos en Octubre');
            break;

        case 10:
            console.log('Estamos en Noviembre');
            break;

        case 11:
            console.log('Estamos en Dciembre');
            break;

        default:
            console.log('ERROR no se encontro el mes!!')
      }

// 10. Usa un switch para hacer de nuevo el ejercicio 7

       let _daysNumb = new Date ().getMonth();

      switch(_daysNumb){

        case 0:
            console.log('Enero tiene 31 dias ');
            break;
        
        case 1:
            console.log('Febrero tiene 28 dias pero tiene 29 dias año biciesto');
            break;

        case 2:
            console.log('Marzo tiene 32 dias');
            break;

        case 3:
            console.log('Abril tiene 30 dias');
            break;

        case 4:
            console.log('Mayo tiene 31 dias');
            break;

        case 5:
            console.log('Junio tiene 30 dias');
            break;
        
        case 6:
            console.log('Julio tiene 31 dias');
            break;

        case 7:
            console.log('Agosto teiene 31 dias');
            break;

        case 8:
            console.log('Septiembre tiene 30 dias');
            break;

        case 9:
            console.log('Octubre tiene 31 dias');
            break;

        case 10:
            console.log('Noviembre tiene 30 dias');
            break;

        case 11:
            console.log('Diciembre tiene 31 dias');
            break;

        default:
            console.log('No hay mes ni dias!');

      }
