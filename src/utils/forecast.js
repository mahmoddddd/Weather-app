const request = require('request')
const forecast = (location, callback) => {
    const apiKey = '55a2de0670e1021323a91fefd88b299c';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const largTemp = body.main.temp // 300 celven
            const smallTemp = (largTemp - 273)
                // note .. to convert from celvin to celisius 
                // درجة الحرارة بالسلسيوس = درجة الحرارة بالكلفن – 273.15
            callback(undefined, smallTemp + ' It is currently ' + body.weather[0].description)
        }
    })
}

module.exports = forecast