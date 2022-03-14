const timeDIV = document.getElementById("time")
const citeDIV = document.getElementById("cite")
const authorDIV = document.getElementById("author")
displayRemainingTime()
displayQuote().then(r => {/* */})
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



async function displayQuote() {
    const quote = await getQuote()
    citeDIV.textContent = quote.text
    authorDIV.textContent = quote.author
    console.log(quote)
}

async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes")
    const res = await response.json()
    return res[getRandomInt(res.length)]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}