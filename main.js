function Valores() {
    
    let destino = prompt ("ingresa tu destino");
    
    let presupuesto = prompt ("ingresa tu presupuesto");
    
    let transporte = prompt("ingresa tus gastos de transporte");
    
    let alojamiento = prompt("ingresa tus gastos de alojamiento");
    
    let comida = prompt("ingresa tus gastos de comida");

}

function calgastos() {
   
  Valores()
 
    let gastos = parseInt(transporte) + parseInt(alojamiento) + parseInt(comida);

    let balance = presupuesto - gastos ;

    alert(balance);

}

function balancefinal() {
    
      if(balance < 0) {
        alert ("tu presupuesto no es suficiente para viajar a " + destino + ", te faltan $" +balance + "a seguir ahorrando");
      }
      else if(balance > 0) {
       
        alert("Felicitaciones podes relizar tu viaje a" + destino + ", tenes un exedente de $" + balance + "puedes pasar por el giftshop");

    }  
  }
    calgastos()
    balancefinal()

