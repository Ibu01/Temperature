const apiKey = `17f58653d63c3f12ca3fa094db75df7f`
const searchtemp = () => {
    const city = document.getElementById('city-name')
    const cityText = city.value
    city.value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${apiKey}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}
const displayTemparature = temparature => {
    setInnerText('city', temparature.name)
    setInnerText('temperature', temparature.main.temp)
    setInnerText('sky-condition', temparature.weather[0].main)
    const url = `https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
    const images = document.getElementById('icons')
    images.setAttribute('src', url)
}