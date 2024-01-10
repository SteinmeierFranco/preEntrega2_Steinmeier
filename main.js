let jugadores= [];
 
function Jugador (nombre,edad,posicion,numerodecamiseta){
  this.nombre=nombre;
  this.edad= edad;
  this.posicion= posicion;
  this.numerodecamiseta= numerodecamiseta;
    
}  
for (let i= 0; i<3; i++) {
  let nombre = prompt("Ingrese su nombre");
  let edad = Number(prompt("Ingrese su edad"));
  let posicion= prompt("Ingrese su posicion");
  let numerodecamiseta= Number(prompt("Ingrese su numero de camiseta"));
  let jugador1 = new Jugador(nombre,edad,posicion , numerodecamiseta );
  jugadores.push(jugador1)
  alert(`
  nombre:${jugador1.nombre}
  Edad: ${jugador1.edad}
  posicion:${jugador1.posicion}
  numerodecamiseta:${jugador1.numerodecamiseta}`)
} 

    let nombre1= prompt("Ingrese el nombre del jugador a buscar");
    const caracteristica= jugadores.find((item)=>item.nombre ===nombre1);
if (caracteristica){
  alert(`
  Nombre: ${caracteristica.nombre}
  Edad: ${caracteristica.edad}
  posicion:${caracteristica.posicion}
  numero de camiseta: ${caracteristica.numerodecamiseta}
  `);
}else{
  alert("jugador no disponible")
}

