function tabla() {
    for (let i = 0; i < 99; i++) {
        if (i == 1 || i == 10 ) {
            tab[i] = 1;
        } else if (i==10 || i==11 ) {
            tab[i] = 2;
        } else {
            tab[i] = 0;
        }
    }
}

function moverJ1(num) {
    aux = posicionJ1;
    aux = aux + num;
    aux3 = 6;
    let a;
    if (aux == 1) {
        jug1.style.marginTop = "656px";
        jug1.style.left = "6px";
        posicionJ1 = posicionJ1 + num;
        return false;
    } else if (aux < 11) {
        console.log((33 + mov) + 33 + "px")

        posicionJ1 = posicionJ1 + num;
        jug1.style.left = "856px";
        aux2 = aux - 1;
        mov = 10 * aux2;
        jug1.style.left = (2 + mov) * 6 + "px";
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 10 && aux < 12) {
        jug1.style.marginTop = "756px";
        aux2 = aux - 1;
        a = aux2 * 100;
        mov = 10 * aux2;
        jug1.style.marginTop = (2 + mov) / 6 + "px";
        posicionJ1 = posicionJ1 + num;
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 11 && aux < 20) {
        jug1.style.marginTop="756px";
        posicionJ1 = posicionJ1 + num;
        jug1.style.marginTop = "66px";
        aux2 = aux - 10;
        a = 100 * aux2;
        mov = 800 - a;
        jug1.style.left = (30 + mov) + "6px";
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 19 && aux < 21) {
        posicionJ1 = posicionJ1 + num;
        jug1.style.left = "120px";
        aux2 = aux - 20;
        mov = aux2 * 100;
        jug1.style.marginTop = (30 + mov) + "6px";
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 21 && aux < 30) {
        jug1.style.marginTop = "66px";
        aux2 = aux - 20;
        mov = 100 * aux2;
        jug1.style.left = (20 + mov) + "6px";
        posicionJ1 = posicionJ1 + num;
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 30 && aux < 31) {
        jug1.style.left = "302px";
        aux2 = aux - 31;
        a = 100 * aux2;
        mov = 400 - a;
        jug1.style.marginTop = (30 + mov) + "px";
        posicionJ1 = posicionJ1 + num;
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 31 && aux < 40) {
        jug1.style.marginTop = "362px";
        aux2 = aux - 30;
        a = 100 * aux2;
        mov = 700 - a;
        jug1.style.left = (30 + mov) + "px";
        posicionJ1 = posicionJ1 + num;
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 41 && aux < 50) {
        jug1.style.left = "424px";
        aux2 = aux - 41;
        mov = aux2 * 100;
        jug1.style.marginTop = (30 + mov) + "px";
        posicionJ1 = posicionJ1 + num;
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 51 && aux < 61) {
        posicionJ1 = posicionJ1 + num;
        jug1.style.marginTop = "486px";
        aux2 = aux - 51;
        mov = 100 * aux2;
        jug1.style.left = (30 + mov) + "px";
        posicionJ1 = posicionJ1 + num;
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 61 && aux < 71) {
        jug1.style.left = "548px";
        aux2 = aux - 61;
        a = 100 * aux2;
        mov = 300 - a;
        jug1.style.marginTop = (30 + mov) + "px";
        posicionJ1 = posicionJ1 + num;
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux > 81 && aux < 91) {
        jug1.style.marginTop = "602px";
        aux2 = aux - 81;
        a = 100 * aux2;
        mov = 600 - a;
        jug1.style.left = (30 + mov) + "px";
        posicionJ1 = posicionJ1 + num;
        alert("Vas en la casilla: " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return false;
    } else if (aux >= 100) {
        posicionJ1 = 100;
        jug1.style.marginTop = "1100px";
        jug1.style.left = "668px";
        alert("LLegaste a la casilla " + posicionJ1);
        serpientesEscaleras1(tab[posicionJ1 - 1], posicionJ1);
        return true;
    }
}

function moverJ2(num) {
    aux = posicionJ2;
    aux = aux + num;
    let a;
    if (aux == 1) {
        jug2.style.marginTop = "656px";
        jug2.style.left = "6px";
        posicionJ2 = posicionJ2 + num;
        return false;
    } else if (aux < 11) {
        posicionJ2 = posicionJ2 + num;
        jug2.style.left = "856px";
        aux2 = aux - 1;
        mov = 10 * aux2;
        jug2.style.left = (2 + mov) * 6 + "px";
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 10 && aux < 12) {
        
        jug2.style.left = "756px";
        aux2 = aux + 10;
        a = aux2 * 100;
        mov = 10 - a;
        jug2.style.marginTop = (2 + mov) *6 + "px";
        posicionJ2 = posicionJ2 + num;
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 11 && aux < 20) {
        jug1.style.marginTop="756px";
        console.log ((2 + mov) / 6 +"px" );
        posicionJ2 = posicionJ2 + num;
        jug2.style.marginTop = "756px";
        aux2 = aux - 10;
        a = 100 * aux2;
        mov = 800 - a;
        jug2.style.left = (2 + mov) /  6 + "px";
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 20 && aux < 31) {
        posicionJ2 = posicionJ2 + num;
        jug2.style.left = "656px";
        aux2 = aux - 10;
        mov = aux2 * 100;
        jug2.style.marginTop = (20 + mov) / 6 + "px";
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 31 && aux < 41) {
        jug2.style.marginTop = "246px";
        aux2 = aux - 30;
        mov = 100 * aux2;
        jug2.style.left = (30 + mov) + "6px";
        posicionJ2 = posicionJ2 + num
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 41 && aux < 51) {
        jug2.style.left = "px";
        aux2 = aux - 41;
        a = 100 * aux2;
        mov = 400 - a;
        jug2.style.marginTop = (70 + mov) + "6px";
        posicionJ2 = posicionJ2 + num
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 51 && aux < 61) {
        jug2.style.marginTop = "6px";
        aux2 = aux - 42;
        a = 100 * aux2;
        mov = 700 - a;
        jug2.style.left = (30 + mov) + "6px";
        posicionJ2 = posicionJ2 + num
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 62 && aux < 71) {
        jug2.style.left = "6px";
        aux2 = aux - 51;
        mov = aux2 * 100;
        jug2.style.marginTop = (70 + mov) + "6px";
        posicionJ2 = posicionJ2 + num
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 71 && aux < 81) {
        posicionJ2 = posicionJ2 + num;
        jug2.style.marginTop = "6px";
        aux2 = aux - 60;
        mov = 100 * aux2;
        jug2.style.left = (30 + mov) + "6px";
        posicionJ2 = posicionJ2 + num
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 81 && aux < 91) {
        jug2.style.left = "6px";
        aux2 = aux - 71;
        a = 100 * aux2;
        mov = 300 - a;
        jug2.style.marginTop = (70 + mov) + "6px";
        posicionJ2 = posicionJ2 + num
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux > 82 && aux < 91) {
        jug2.style.marginTop = "910px";
        aux2 = aux - 81;
        a = 100 * aux2;
        mov = 600 - a;
        jug2.style.left = (30 + mov) + "6px";
        posicionJ2 = posicionJ2 + num
        alert("Vas en la casilla: " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return false;
    } else if (aux >= 100) {
        posicionJ2 = 100;
        jug2.style.marginTop = "666px";
        jug2.style.left = "666px";
        alert("LLegaste a la casilla " + posicionJ2);
        serpientesEscaleras2(tab[posicionJ2 - 1], posicionJ2);
        return true;
    }
}


function serpientesEscaleras1(num, posi) {
    switch (num) {
        case 1:
            switch (posi) {
                case 2:
                    posicionJ1 = 23;
                    jug1.style.marginTop = "330px";
                    jug1.style.left = "330px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 6:
                    posicionJ1 = 45;
                    jug1.style.marginTop = "230px";
                    jug1.style.left = "530px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 20:
                    posicionJ1 = 59;
                    jug1.style.marginTop = "230px";
                    jug1.style.left = "130px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 52:
                    posicionJ1 = 72;
                    jug1.style.marginTop = "230px";
                    jug1.style.left = "130px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 57:
                    posicionJ1 = 96;
                    jug1.style.marginTop = "230px";
                    jug1.style.left = "130px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 71:
                    posicionJ1 = 92;
                    jug1.style.marginTop = "230px";
                    jug1.style.left = "130px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
            }
            break;
        case 2:
            switch (posi) {
                case 43:
                    posicionJ1 = 17;
                    jug1.style.marginTop = "230px";
                    jug1.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpiente!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 56:
                    posicionJ1 = 8;
                    jug1.style.marginTop = "430px";
                    jug1.style.left = "30px";
                    alert("¡¡¡Has bajado por una serpiente!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 50:
                    posicionJ1 = 5;
                    jug1.style.marginTop = "530px";
                    jug1.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 73:
                    posicionJ1 = 15;
                    jug1.style.marginTop = "230px";
                    jug1.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpiente!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 87:
                    posicionJ1 = 49;
                    jug1.style.marginTop = "430px";
                    jug1.style.left = "30px";
                    alert("¡¡¡Has bajado por una serpiente!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 84:
                    posicionJ1 = 63;
                    jug1.style.marginTop = "530px";
                    jug1.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
                case 98:
                    posicionJ1 = 40;
                    jug1.style.marginTop = "530px";
                    jug1.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ1);
                    break;
            }
            break;
        case 0:
            break;
    }
}

function serpientesEscaleras2(num, posi) {
    switch (num) {
        case 1:
            switch (posi) {
                case 2:
                    posicionJ2 = 23;
                    jug2.style.marginTop = "370px";
                    jug2.style.left = "330px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 6:
                    posicionJ2 = 45;
                    jug2.style.marginTop = "270px";
                    jug2.style.left = "530px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 20:
                    posicionJ2 = 59;
                    jug2.style.marginTop = "270px";
                    jug2.style.left = "130px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 52:
                    posicionJ2 = 72;
                    jug2.style.marginTop = "370px";
                    jug2.style.left = "330px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 57:
                    posicionJ2 = 96;
                    jug2.style.marginTop = "270px";
                    jug2.style.left = "530px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 71:
                    posicionJ2 = 92;
                    jug2.style.marginTop = "270px";
                    jug2.style.left = "130px";
                    alert("¡¡¡Has subido una escalera!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
            }
            break;
        case 2:
            switch (posi) {
                case 43:
                    posicionJ2 = 17;
                    jug2.style.marginTop = "270px";
                    jug2.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 56:
                    posicionJ2 = 8;
                    jug2.style.marginTop = "470px";
                    jug2.style.left = "30px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 50:
                    posicionJ2 = 5;
                    jug2.style.marginTop = "570px";
                    jug2.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 73:
                    posicionJ2 = 15;
                    jug2.style.marginTop = "470px";
                    jug2.style.left = "30px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 84:
                    posicionJ2 = 63;
                    jug2.style.marginTop = "570px";
                    jug2.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 81:
                    posicionJ2 = 49;
                    jug2.style.marginTop = "470px";
                    jug2.style.left = "30px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
                case 98:
                    posicionJ2 = 40;
                    jug2.style.marginTop = "570px";
                    jug2.style.left = "830px";
                    alert("¡¡¡Has bajado por una serpientes!!!");
                    alert("Vas en la casilla: " + posicionJ2);
                    break;
            }
            break;
        case 0:
            break;
    }
}

