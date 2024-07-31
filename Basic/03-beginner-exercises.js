/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
      
      // Este es un comentario de una linea

// 2. Escribe un comentario en varias líneas
      
      /* Este es
         un texto 
         de varias
         lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

      let _text = 'Este es un texto';
      let _numb = 15;
      let _dec  = 7.8;
      let _dataUndefined;
      let _valueNull = null;
      let _boolean = true;
      let _mySymbol = Symbol("mysymbol");
      let _numbLarge = BigInt(4433434343359685948372838574854545454545454546666666);
      let _numbLarge2 = 4433434343359685948372838574854545454545454546666666n;

// 4. Imprime por consola el valor de todas las variables

      console.log(_text);
      console.log(_numb);
      console.log(_dec);
      console.log(_dataUndefined);
      console.log(_valueNull);
      console.log(_boolean);
      console.log(_mySymbol);
      console.log(_numbLarge);
      console.log(_numbLarge2);

// 5. Imprime por consola el tipo de todas las variables

      console.log(typeof _text);
      console.log(typeof _numb);
      console.log(typeof _dec);
      console.log(typeof _dataUndefined);
      console.log(typeof _valueNull);
      console.log(typeof _boolean);
      console.log(typeof _mySymbol);
      console.log(typeof _numbLarge);
      console.log(typeof _numbLarge2);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
      
      _text = 'Otro texto';
      _numb = 37;
      _dec = 58.1
      _dataUndefined;
      _valueNull = null;
      _boolean = false;
      _mySymbol = Symbol("otherSymbol");
      _numbLarge = BigInt(66434837569823754349812345654322118374888579842874624758829938888495);
      _numbLarge2 = 66434837569823754349812345654322118374888579842874624758829938888495n;

      console.log(_text);
      console.log(_numb);
      console.log(_dec);
      console.log(_dataUndefined);
      console.log(_valueNull);
      console.log(_boolean);
      console.log(_mySymbol);
      console.log(_numbLarge);
      console.log(_numbLarge2);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser