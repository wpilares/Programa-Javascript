let a;
let b;
let nombres =[];
let dnis =[];
let nombre;

while (a!="SALIR"){

  a=prompt("Ingrese su Nombre:");
  if (a=="SALIR")
  break;
  b=prompt("Ingrese su DNI:");
  nombres.push(a);
  dnis.push(b);
}

function buscador(buscar){

  if (nombres.includes(buscar)==true){
  i=0;
  for (nombre of nombres){
    if(buscar==nombre){
      alert(`Nombre: ${nombre}`);
      alert(`DNI: ${dnis[i]}`);
    }
    i++;
  }
}
else{
  alert("Nombre no existe");
}
}

let c = prompt("Indique nombre a buscar:");
buscador(c);
