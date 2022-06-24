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
 alert("¡¡¡Bienvenido al juego de Serpientes y escaleras!!!\nInstrucciones:\nCada jugador tendra un turno en el que tirara el dado y depende del número su pieza avanzara");
 alert("Gana el primero en llegar a la casilla 100\nSi caes en la cabeza de la serpiente caeras hasta llegar a su cola\nSi tocas el inicio de una escalera podras subir");
 var n1 = prompt("Ingrese el nombre del jugador 1");
 var n2 = prompt("Ingrese el nombre del jugador 2");
 setTimeout(function(){ alert("Es el turno de "+n1+" (el negro)\nToque el dado");   }, 300);
 tabla();

 a1.addEventListener('click',function(){
     if(j1==true){
         if(ganador!=true){
             let cant = Math.floor(Math.random()*(6)+1);
             dadoNegro(cant);
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
             dadoBlanco(cant);
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
 




