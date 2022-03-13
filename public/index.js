const timeDIV = document.getElementById("time")
displayRemainingTime()
setInterval(displayRemainingTime, 1000)

function displayRemainingTime() {
    const today = new Date()
    const end = new Date(2024, 6, 1)

    const msRemaining = (end - today)
    const daysRemaining = Math.floor(msRemaining / (24 * 60 * 60 * 1000))
    const daysms = msRemaining % (24 * 60 * 60 * 1000)
    const hoursRemaining = Math.floor(daysms / (60 * 60 * 1000))
    const hoursms = msRemaining % (60*60*1000);
    const minutesRemaining = Math.floor(hoursms / (60*1000));
    const minutesms = msRemaining % (60*1000);
    const secondsRemaining = Math.floor(minutesms / 1000);
    timeDIV.textContent = daysRemaining + ' jours ' + hoursRemaining + ' heures ' + minutesRemaining + ' minutes et ' + secondsRemaining + ' secondes ' + 'avant le diplôme'
}


