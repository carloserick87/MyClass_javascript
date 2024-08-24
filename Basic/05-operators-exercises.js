/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética
    
    let a = 4;
    let b = 2;

    console.log('4 + 2 =', + a+b); //Suma
    console.log('4 - 2 =', + a-b); //Resta
    console.log('4 * 2 =', + a*b); //Multiplicación
    console.log('4 / 2 =', + a/b); //División
    console.log('4 % 2 =', + a%b); //Módulo
    console.log('4 ** 2 =',+ a+b); //Exponenciación

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
      
     let _plus   = 6;
     let _minus  = 6;
     let _times  = 6;
     let _divide = 6;
     let _module = 6;

     console.log('6 += 2 =', _plus += 2); //Asignación de adición
     console.log('6 -= 2 =', _minus -= 2); //Asginación de sustracción
     console.log('6 *= 2 =', _times *= 2); //Asignación de multiplicación
     console.log('6 /= 2 =', _divide /= 2); //Asignación de división
     console.log('6 %= 2 =', _module %= 2); //Asignación de modulo
     
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

     console.log('5 > 4 =', 5 > 4); //Mayor que
     console.log('4 < 5 =', 4 < 5); //Menor que
     console.log('4 == 4 =', 4 == 4); //Igualdad
     console.log('4 != 5 =', 4 != 5); //No igualdad
     console.log('4 === 4 =', 4 === 4); //Igualdad estricta

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

     console.log('5 <= 4 =', 5 <= 4); //Menor que o igual
     console.log('4 >= 5 =', 4 >= 5); //Mayor que o igual
     console.log('4 == 5 =', 4 == 5); //Igualdad
     console.log('4 != 4 =', 4 != 4); //No igualdad
     console.log('4 !== 5 =', 4 === 5); //No igualdad estricta

// 5. Utiliza el operador lógico and

     console.log('a > b && b < a =', a > b && b < a ); //AND Logico
     console.log('a > b && b > a =', a > b && b > a );
     console.log('a < b && b < a =', a < b && b < a );
     console.log('a == b && b == a =', a == b && b == a );
     
// 6. Utiliza el operador lógico or

     console.log('a > b || b < a =', a > b || b < a ); //OR Logico
     console.log('a > b || b > a =', a > b || b > a );
     console.log('a < b || b < a =', a < b || b < a );
     console.log('a == b || b == a =', a == b || b == a );

// 7. Combina ambos operadores lógicos

     console.log('a > b && b > a || b < a =',a > b && b > a || b < a);

// 8. Añade alguna negación
    
    console.log('!true =', !true); //Negacion (NOT)
    console.log('!false =', !false);

// 9. Utiliza el operador ternario
   
   let _result = (a > b) ? 'Es mayor a' : 'Es menor b';
   console.log(_result);

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(a + b > 4  && b < a);