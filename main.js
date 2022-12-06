function calgastos() {

  // ingreso de valores//

let destino = prompt ("ingresa tu destino");

let presupuesto = prompt ("ingresa tu presupuesto");

let transporte = prompt("ingresa tus gastos de transporte");

let alojamiento = prompt("ingresa tus gastos de alojamiento");

let comida = prompt("ingresa tus gastos de comida");

 const valores = [destino, presupuesto, transporte, alojamiento, comida];

 console.log(valores);

   // calculo de gastos //

 let gastos = parseInt(transporte) + parseInt(alojamiento) + parseInt(comida);

 console.log(gastos);
  
       // balance de gastos contra el presupuesto //

 let balance = presupuesto - gastos ;

 console.log(balance)

   if(balance < 0) {

     alert ("tu presupuesto no es suficiente para viajar a " + destino + ", te faltan $"+balance + " a seguir ahorrando");
     
     }
     
     else if(balance > 0) {
     
     alert("Felicitaciones podes relizar tu viaje a " + destino + ", tenes un exedente de $" + balance + " que disfrutes tus vacaciones");
    
     

 }  
 }

calgastos()   

