
const BOTON = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");


BOTON.addEventListener("click", () => {
    const PESO = document.getElementById("peso").valueAsNumber;
    let volumenDiario = 0;
    if ((document.getElementById('peso').value) > 0) {
        ERROR.style.display = 'none';
        if (PESO <= 30) {
            volumenDiario = hollidaySegar(PESO);
            FLU.innerHTML = Math.round(volumenDiario / 24) + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + Math.round((volumenDiario / 24) * 1.5) + ' cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }
        else {
            volumenDiario = superficieCorporal(PESO);
            FLU.innerHTML = Math.floor(volumenDiario * 1500) + ' SC Multiplicado por 1500';
            MAN.innerHTML = Math.floor(volumenDiario * 2000) + ' SC Multiplicado por 2000';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }

    }
    else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
    function superficieCorporal(peso) {
        let Aux1, Aux2;
        Aux1 = ((peso * 4) + 7);
        Aux2 = (peso + 90);
        console.log(Aux1, Aux2);
        return Aux1 / Aux2;
    }
    function hollidaySegar(peso) {
        let volumenDiario;
        if (PESO <= 10) {
            volumenDiario = PESO * 100;

        }
        else if (PESO <= 20) {
            volumenDiario = 1000 + (PESO - 10) * 50;

        }
        else {
            volumenDiario = 1500 + (PESO - 20) * 20;
        }
        return volumenDiario;

    }

});