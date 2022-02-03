let a;
let b;
let nombres =[];
let dnis =[];
let nombre;

while (a!="SALIR"){

  a=prompt("Ingrese su Nombre:");
  b=prompt("Ingrese su DNI:");
  nombres.push(a);
  dnis.push(b);
}
//Usamos esto para quitar los SALIR 
nombres.pop();
dnis.pop();

let buscar = prompt("Indique nombre a buscar:");


if (nombres.includes(buscar)==true){
  i=0;
  for (nombre of nombres){
    if(buscar==nombre){
      alert(`Nombre: ${nombre}`);
      alert(`DNI: ${dnis[i]}`);
    }
    i=i+1;
  }
}
else{
  alert("Nombre no existe");
}
