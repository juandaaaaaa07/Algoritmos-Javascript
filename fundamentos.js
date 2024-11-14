//Tipos de datos primitivos
let nombre = 'Juan Garzón'
let edad = 18
let mayorEdad  = true 
let estatura 
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof mayorEdad)
console.log(typeof estatura)

//Tipos de datos complejos 
let frutas = ['pera' , 'manzana' , 'melón']

let auto={
    medelo: 2024,
    marca: 'chevrolet',
    color: 'blanco',
    cilindraje: 2100,
    tipo: 'camioneta'
}

//Concatenando variables
console.log(' Bienvenido Usuario ' + nombre + ' su edad es  ' + edad + ' y su fruta favorita es ' + frutas[1])

//Estructuras de control condicional 
console.log('--------------------------------------------------')

if (edad > 25) {
    console.log ('Es un adulto')
}
else if(edad >18){
    console.log('Es un joven')
}

else if( edad >13){
    console.log('Es un pleado')
}
else{
    console.log('Es un niño')
}

let tipoSuscripción = 'platinum'

switch (tipoSuscripción) {
    case 'basico':
        console.log('Muy suave o pobre')
        break;
    case 'gold':
        console.log('Buen plan, pero sigue siendo pobre')
        break;
    case 'platinum':
        console.log('El mejor plan')
        break;
    default:
        console.log('Este plan no existe')
        break;
}

//Estructuras de control de bucles

let contador = 0;

while (contador <11) {
    console.log('Este es el numero ' + contador)
    contador = contador + 1
}

for(let i = 100; i>0 ; i=i-5){
    console.log('Contador con for numero ' + i )
}

