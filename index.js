const homeBtn = document.getElementById('home')
const emailUs = document.getElementById('emailUs')
const about = document.getElementById('aboutUs')
const directions = document.getElementById('directions')
const findUs = document.getElementById('findUs')
const wiki = document.getElementById('wiki')
const call = document.getElementById('callUs')
const bottomEmail = document.getElementById('bottomEmail')

// adding in the links dynamically to the page

homeBtn.addEventListener('click', () => {
    homeBtn.href = 'localHost:5500/index.html'
})

emailUs.addEventListener('click', () => {
    alert(message='Email us at jkkajfdlk@gmail.com')
})

about.addEventListener('click', () => {
    about.href = 'localHost:5500/about.html'
})

directions.addEventListener('click', () => {
    directions.href = 'https://maps.google.com'
})
findUs.addEventListener('click', () => {
    findUs.href = 'https://maps.google.com'
})
wiki.addEventListener('click', () => {
    wiki.href = 'https://www.wikepeda.com'
})
call.addEventListener('click', () => {
    alert('Our Phone Number is 260-555-5555')
})
bottomEmail.addEventListener('click', ()=> {
    alert('email us at kdfalkjdf@gmail.com')
})
