const timeDIV = document.getElementById("time")
displayRemainingTime()
setInterval(displayRemainingTime,3600000)

function displayRemainingTime() {
    const today = Date.now()
    const end = new Date(2024, 6, 1)

    const msRemaining = (end - today)
    const daysRemaining = Math.floor(msRemaining / (24*60*60*1000))
    const daysms = msRemaining % (24*60*60*1000)
    const hoursRemaining = Math.floor(daysms / (60*60*1000))
    timeDIV.textContent = daysRemaining + ' jours et ' + hoursRemaining + ' heures avant le diplôme'
}


