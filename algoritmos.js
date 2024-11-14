function saludar(){
    console.log("Hola mundo")
    alert("Hello World")
}
//Algoritmo que realiza una suma entre dos valores ingresados por el usuario
function suma(){
    //1.Declarar las variables necesarias para la función  algoritmo
    let A = 0
    let B = 0
    let SUMA = 0

    //2. Solicitar al usuario que ingrese los valores
    // y estos se asignan a las variables

    A = parseInt(prompt("Ingrese el primer valor a sumar"))
    B = parseInt(prompt("Ingrese el segundo valor a sumar"))

    //3.Realizar el procedimiento

    SUMA = A + B

    //4. Mostrar el resultado
    
    alert("El resultado de la suma es " + SUMA)
}

//Algoritmo que realiza una suma, resta, multiplicación y división entre dos valores ingresados por el usuario
function operaciones(){

    let P = 0
    let S = 0
    let OPERACIONES = 0 


    P = parseInt(prompt("Ingrese el primer valor"))
    S =parseInt(prompt("Ingrese el segundo valor"))

    OPERACIONES = P + S
   
    alert("el resultado de la suma es " + OPERACIONES)

    OPERACIONES = P - S 

    alert("El esultado de la resta es " + OPERACIONES)

    OPERACIONES = P * S 
    alert("El esultado de la multiplicación es " + OPERACIONES)

    OPERACIONES = P / S 
    alert("El esultado de la división es " + OPERACIONES)
}


//Realizar un algoritmo que determine el cuadrado de un numero ingresado por el usuario 
function cuadrado(){
    let C = 0
    let resultado = 0

    C = parseInt(prompt("Ingrese un número"))

    resultado = C ** 2
    alert("El resultado del numero al cuadrado es " + resultado)
}


//Realizar un algoritmo que determine el area de un triangulo apartir de la base y la altura ingresados por el usuario 
function area(){
    let b = 0 
    let h = 0
    let total = 0

    b = parseInt(prompt("Ingrese la base "))
    h = parseInt(prompt("Ingrese la altura "))

    total = (b * h) / 2
    alert("El area de un triangulo es " + total)

    
}

//Conversion de unidades: realizar un sistema que convierta en ML, CTMS KM y M a un valor dado en pulgadas
function pulgadas(){
    let pulgadas = 0 
    let km = 0
    let m = 0
    let mm = 0
    let cm = 0

    pulgadas = parseInt(prompt("Ingrese el valor en pulgadas"))

    km = pulgadas * 0.0000254
    m = pulgadas * 0.054
    cm = pulgadas * 2.54
    mm = pulgadas * 25.4

    alert ("El resultado en kilometros es " + km)
    alert ("El resultado en metros es " + m)
    alert ("El resultado en milimetros es " + mm)
    alert ("El resultado en centimetros es " + cm)
}

 //algoritmo que deterine si un umero ingresado por el usuario es par o inpar
 function parImpar(){
    let numero = 0

    numero = parseInt(prompt("Ingrese un número"))

    if (numero % 2 == 0) {
        alert("El número es par")
    }
    else {
        alert ("El número es impar")
    }
}

 //algoritmo que determine el mayor de dos numeros ingresados por el usuario 
function mayor(){
    let num1 = 0
    let num2 = 0

    num1 = parseInt(prompt("Ingrese un número "))
    num2 = parseInt(prompt("Ingrese otro número "))

    if (num1 > num2 ){
        alert("El número " + num1 + " es mayor que " + num2 )
    }
    else if(num1 == num2){
        alert("Los dos números son iguales")
    }
    else{
        alert("El número " + num2 + " es mayor que " + num1)
    }
    
}
 //algorimo que determine el menor de tres numeros ingresados por el usuario 
 function menor(){
    let n1 = 0
    let n2 = 0
    let n3 = 0

    n1 = parseInt(prompt("Ingrese el primer número "))
    n2 = parseInt(prompt("Ingrese el segundo número "))
    n3 = parseInt(prompt("Ingrese el tercer número "))

    if ((n1 < n2) && (n1<n3)){
        alert("El número " + n1 + " es menor que " + n2 + " y " + n3)
    }
    else if((n2 < n1) && (n2 < n3)){
        alert("El número " + n2 + " es menor que " + n1 + " y " + n3)
    }
    else if( (n3 < n1) && (n3 < n2)){
        alert("El número " + n3 + " es menor que " + n1 + " y " + n2)
    }
    else if(n1 == n2 == n3){
        alert("Los tres números son iguales")
    }
}

 // el colegio ABC requiere un sistema que capture el nombre del estudiante, materia y 7 calificaciones entre el 1-10 
 //con esta informacion determinar si el estudiante aprobo o reprobo teniendo en cuenta que se aprueba con 6.1 
 function colegio(){
    let nom = 0
    let materia = 0
    let nota1 = 0
    let nota2 = 0 
    let nota3 = 0 
    let nota4 = 0 
    let nota5 = 0 
    let nota6 = 0 
    let nota7 = 0  
    let total = 0

    nom = prompt("Ingrese su nombre ")
    materia = prompt("Ingrese la materia ")
    nota1 = parseInt(prompt("Ingrese la nota 1 "))
    nota2 = parseInt(prompt("Ingrese la nota 2 "))
    nota3 = parseInt(prompt("Ingrese la nota  3"))
    nota4 = parseInt(prompt("Ingrese la nota 4 "))
    nota5 = parseInt(prompt("Ingrese la nota 5 "))
    nota6 = parseInt(prompt("Ingrese la nota 6 "))
    nota7 = parseInt(prompt("Ingrese la nota 7 "))

    total = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7

    if (total > 6.1  ){
        alert("Señor estudiante " + nom + ", usted aprobo la materia " + materia + " con " + total)
    }
    else{
        alert("Señor estudiante " + nom + ", usted reprobo la materia " + materia + " con " + total)
    }
 }

 // Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numero de años 
 //teniendo en cuenta que el banco paga un interes mensual del 0,7%

 function banco(){
    let tiempo = 0 
    let capital = 0
    let interesGanancia = 0
    let totalGanancia = 0

    capital = parseInt(prompt("Ingrese su capital a invertir "))
    tiempo = parseInt(prompt("Ingrese el tiempo en años "))

    interesGanancia = (capital * 0.084) * tiempo
    totalGanancia = capital + interesGanancia
    alert("Su ganancia es de " + interesGanancia)

    alert("Su ganancia total es de " + totalGanancia)


 }