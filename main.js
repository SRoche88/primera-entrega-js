function Valores() {
    
    let destino = prompt ("ingresa tu destino");
    
    let presupuesto = prompt ("ingresa tu presupuesto");
    
    let transporte = prompt("ingresa tus gastos de transporte");
    
    let alojamiento = prompt("ingresa tus gastos de alojamiento");
    
    let comida = prompt("ingresa tus gastos de comida");

}

function calgastos() {
   
    const { destino, presupuesto, transporte, alojamiento, comida} = Valores();
 
    let gastos = parseInt(transporte) + parseInt(alojamiento) + parseInt(comida);

    let balance = presupuesto - gastos ;

    alert(balance);

}

function balancefinal() {

    const {balance} = calgastos();
  
  
      if(balance < 0) {
        alert ("tu presupuesto no es suficiente para esta viaje, te faltan $" +balance + "a seguir ahorrando");
      }
      else if(balance > 0) {
       
        alert("Felicitaciones podes relizar tu viaje, tenes un exedente de $" + balance + "puedes pasar por el giftshop");

    }  
  }
    calgastos()
    balancefinal()

