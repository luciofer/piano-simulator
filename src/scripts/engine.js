const pianoKeys = document.querySelectorAll(".key")
const keysCheck = document.querySelector(".keys-check input")

let audio = new Audio("./src/tunes/a.wav")
let mappedKeys = []
const volumeSlider = document.querySelector(".volume-slider input")

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`
    audio.play()

 const clickedKey = document.querySelector(`[data-key=${key}]`)
 clickedKey.classList.add("active")

 setTimeout(() => {
    clickedKey.classList.remove("active")
 }, 150)
}

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key))
    mappedKeys.push(key.dataset.key)
})


document.addEventListener('keydown', (event) => {
    if(mappedKeys.includes(event.key)){
        playTune(event.key)
    }
})

const handleVolume = (event) => {
    audio.volume = event.target.value
}

volumeSlider.addEventListener('input', handleVolume)

const toggleKeys = () => {
    pianoKeys.forEach(key => {
        key.classList.toggle("hide")
    })
}

keysCheck.addEventListener('click', toggleKeys)