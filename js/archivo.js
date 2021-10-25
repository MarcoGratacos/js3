 /* for (let i = 3; i <= 12; i++) {
  
    if(i == 4){
        continue;
    }
    if(i == 5){
        continue;
    }
    if(i == 7){
        continue;
    }
    if(i == 8){
        continue;
    }
    if(i == 10){
        continue;
    }
    if(i == 11){
        continue;
    }


    alert("Con tu compra de $1.000 " + i + " cuotas sin interes"  );
}
*/
function saludarCliente () {
let nombreIngresado = prompt ("ingresa tu nombre")

alert( "Bienvenid@ " + nombreIngresado)
}

saludarCliente()

let cuotas = parseInt (prompt("Ingresar un monto"));

switch (cuotas) {
    case 1000:
         alert("con tu compra de $1.000 tenes 3 cuotas sin interes.");
         break;
     case 3000:
         alert("con tu compra de $3.000 tenes 6 cuotas sin interes.");
         break;
         case 5000:
         alert("con tu compra de $5.000 tenes 9 cuotas sin interes.");
         break;
         case 8000:
         alert("con tu compra de $8.000 tenes 12 cuotas sin interes.");
         break;
    default:
        alert("ingresa un monto valido")
        break;
}

function despedirCliente () {
    alert ("Gracias por tu compra")

}

despedirCliente ()
