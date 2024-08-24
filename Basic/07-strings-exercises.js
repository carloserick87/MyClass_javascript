/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto
     
      let _name = 'Carlos Erick';
      let _greeting = 'Hola mi nombre es ' + _name;
      console.log(_greeting);

// 2. Muestra la longitud de una cadena de texto

     console.log(_greeting.length);

// 3. Muestra el primer y último carácter de un string

      console.log(_greeting[0]);
      console.log(_greeting[29]);

// 4. Convierte a mayúsculas y minúsculas un string

      console.log(_greeting.toLocaleUpperCase());
      console.log(_greeting.toLocaleLowerCase());

// 5. Crea una cadena de texto en varias líneas

      let _list = `Lista de compras:
                   * Pescado
                   * Leche
                   * Pan
                   * Cafe`;
       console.log(_list);

// 6. Interpola el valor de una variable en un string
       let _subject = 'JavaScript'
       console.log(`Mi nombre es ${_name} y estudio ${_subject}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
       
       console.log(_greeting.replace(' ','-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
       
       console.log(_greeting.includes('Carlos'));
       console.log(_greeting.includes('mi'));

// 9. Comprueba si dos strings son iguales
       
       let _phraseOne = 'Es mi curso JavaScript';
       let _phraseTwo = 'Es mi curso JavaScript';

       console.log(_phraseOne == _phraseTwo);
     

// 10. Comprueba si dos strings tienen la misma longitud

      console.log( _phraseOne.length == _phraseTwo.length);