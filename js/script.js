const mounthsLeft = document.getElementById("mounths-count");
const daysLeft = document.getElementById("days-count");
const hoursLeft = document.getElementById("hours-count");
const minutesLeft = document.getElementById("minutes-count");
const secondsLeft = document.getElementById("seconds-count");

const meses = document.getElementsByClassName('mounths')[0];
const days = document.getElementsByClassName('days')[0];
const hours = document.getElementsByClassName('hours')[0];
const minutes = document.getElementsByClassName('minutes')[0];
const seconds = document.getElementsByClassName('seconds')[0];

const containerCountdown = document.getElementsByClassName('countdown');

const countdown = () => {
    const serratecEnds = new Date(2021, 08, 01);
    const currentDate = new Date();
    
    const differenceBetweenDates = new Date(serratecEnds - currentDate);

    const contagemMeses = differenceBetweenDates.getMonth() - 1;
    const contagemDias = differenceBetweenDates.getDate();
    const contagemHoras = differenceBetweenDates.getHours();
    const contagemMinutos = differenceBetweenDates.getMinutes();
    const contagemSegundos = differenceBetweenDates.getSeconds();
    
    // January starts from index 0
    mounthsLeft.innerHTML = contagemMeses;

    daysLeft.innerHTML = contagemDias;
    hoursLeft.innerHTML = contagemHoras;
    minutesLeft.innerHTML = contagemMinutos;
    secondsLeft.innerHTML = contagemSegundos;

    meses.innerHTML = addOrRemovePlural(meses, contagemMeses);
    days.innerHTML = addOrRemovePlural(days, contagemDias);
    hours.innerHTML = addOrRemovePlural(hours, contagemHoras);
    minutes.innerHTML = addOrRemovePlural(minutes, contagemMinutos);
    seconds.innerHTML = addOrRemovePlural(seconds, contagemSegundos);

    hideElementIfCountIsZero(containerCountdown[0], contagemMeses);
    hideElementIfCountIsZero(containerCountdown[1], contagemDias);
    hideElementIfCountIsZero(containerCountdown[2], contagemHoras);
    hideElementIfCountIsZero(containerCountdown[3], contagemMinutos);
    hideElementIfCountIsZero(containerCountdown[4], contagemSegundos);
}

const hideElementIfCountIsZero = (element, elementCount) => {
    if(elementCount == 0) {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}
const addOrRemovePlural = (element, elementCount) => {
    if(elementCount == 1) {
        return removePlural(element);
    }
    else {
        return addPlural(element);
    }
}

const removePlural = (element) => {
    const conteudo = element.innerHTML;
    const conteudoSemUltimaLetra = conteudo.substr(0, (conteudo.length - 1));

    switch(conteudo) {
        case 'Meses':
            return 'Mês';
        case 'Dias':
            return conteudoSemUltimaLetra;
        case 'Horas':
            return conteudoSemUltimaLetra;
        case 'Minutos':
            return conteudoSemUltimaLetra;
        case 'Segundos':
            return conteudoSemUltimaLetra;
        default:
            return conteudo;
    }
}

const addPlural = (element) => {
    const conteudo = element.innerHTML;

    switch(conteudo) {
        case 'Mês':
            return 'Meses';
        case 'Dia':
            return conteudo + 's';
        case 'Hora':
            return conteudo + 's';
        case 'Minuto':
            return conteudo + 's';
        case 'Segundo':
            return conteudo + 's';
        default:
            return conteudo;
    }
}

countdown();

setInterval(countdown, 1000);
