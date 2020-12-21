const homeBtn = document.getElementById('home')
const emailUs = document.getElementById('emailUs')
const about = document.getElementById('aboutUs')
const directions = document.getElementById('directions')

homeBtn.addEventListener('click', () => {
    homeBtn.src = 'localHost:5500/index.html'
})
emailUs.addEventListener('click', () => {
    alert(message='Email us at jkkajfdlk@gmail.com')
})
about.addEventListener('click', () => {
    about.src = 'localHost:5500/about.html'
})
directions.addEventListener('click', () => {
    directions.src = 'https://maps.google.com'
})
