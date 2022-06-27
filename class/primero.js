 //variables
 var posicionJ1=0;
 var posicionJ2=0;
 let aux;
 var aux2;
 var mov;
 var tab=[];
 var jug1=document.getElementById("j1");
 var jug2=document.getElementById("j2");
 var j1=true;
 var ganador=false;
 a1=document.getElementById('Dado');
 alert("¡Bienvenido al Serpientes y escaleras!\n UWU");
 console.log("¡Bienvenido al juego de Serpientes y escaleras!\n*Instrucciones:\n-Cada jugador tendra un turno en el que tirara el dado y depende del número su pieza avanzara\n-Gana el primero en llegar a la casilla 100\n-Si caes en la cabeza de la serpiente caeras hasta llegar a su cola\n-Si tocas el inicio de una escalera podras subir");
 alert("Intrucciones en consola");

 var n1 = prompt("Ingrese el nombre del player 1");
 var n2 = prompt("Ingrese el nombre del player 2");
 
 setTimeout(function(){ alert("Es el turno de "+n1+" (el negro)\nToque el dado");   }, 300);
 tabla();

 a1.addEventListener('click',function(){
     if(j1==true){
         if(ganador!=true){
             let cant = Math.floor(Math.random()*(6)+1);
             alert("Te salio: "+cant);
             ganador=moverJ1(cant);
             if(ganador==true){
                 alert("Feliciades ha ganado "+n1);
             }else{
                 setTimeout(function(){ alert("Es el turno de "+n2+" (el blanco)\nToque el dado");   }, 300);
             }
             j1=false;
         }
     }else{
         if(ganador!=true){
             cant = Math.floor(Math.random()*(6)+1);
             alert("Te salio: "+cant);
             ganador=moverJ2(cant);
             if(ganador==true){
                 alert("Feliciades ha ganado "+n2);
             }else{
                 setTimeout(function(){ alert("Es el turno de "+n1+" (el negro)\nToque el dado");   }, 300);
             }
             j1=true;
         }
     }
 });
 




