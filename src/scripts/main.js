AOS.init();

const dataDoAniversario = new Date("Mar 7, 2024 00:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

//set interval chama a mesma função repetidamente com um intervalo definido
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    //1000ms ou 1s x 60 = 1mnt x 60 = 1hr x 24 = 1dia
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmms = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutoEmms);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutoEmms) / 1000);

    console.log(diasAteOAniversario);
    console.log(horasAteOAniversario);
    console.log(minutosAteOAniversario);
    console.log(segundosAteOAniversario);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario} dias ${horasAteOAniversario}hr's ${minutosAteOAniversario}mnt's e ${segundosAteOAniversario}s`;

    if(distanciaAteOAniversario < 0) {
        document.getElementById('distancia-evento').innerHTML = "Evento expirado!";
    };

}, 1000);