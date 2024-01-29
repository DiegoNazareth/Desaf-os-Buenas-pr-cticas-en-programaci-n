//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Bienvenido/a");

//Crea una variable llamada "nombre" y asígnale tu nombre. 
//Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let nombre="Diego";
console.log(`Hola, ${nombre}`);

//Crea una variable llamada "nombre" y asígnale tu nombre. 
//Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

let nombre1="Diego";
alert(`Hola, ${nombre1}`);

//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
//Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let lenguaje=prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguaje);

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
//Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
// Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1=2;
let valor2=3;
resultadoSuma=valor1+valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
//Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
//Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1_1=4;
let valor2_2=9;
resultadoResta=valor2_2-valor1_1;
console.log(`La diferencia emtre ${valor1_1} y ${valor2_2} es igual a ${resultadoResta}.`);

//Pide al usuario que ingrese su edad con prompt. 
//Con base en la edad ingresada, utiliza un if para verificar 
//si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad=prompt("Ingrese su edad: ");
if(edad>=18){
    console.log("Usted es mayor de edad")
}else{
    console.log("Usted es menor de edad")
}

//Crea una variable "numero" y solicita un valor con prompt. 
//Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero2=prompt("Ingresa un valor");
if(numero2<0){
    console.log("El valor es negativo");
}else{
    console.log("El valor es positivo")
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let contador=1;
while(contador<=10){
    console.log(contador);
    contador++;
}

//Crea una variable "nota" y asígnale un valor numérico. 
//Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota=2;

if (nota>=7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroAleatorio=Math.random();
console.log(numeroAleatorio);

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numeroAleatorio1=Math.floor(Math.random()*10)+1;
console.log(numeroAleatorio1);

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numeroAleatorio2=Math.floor(Math.random()*1000)+1;
console.log(numeroAleatorio2);