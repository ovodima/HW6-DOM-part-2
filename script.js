const section = document.getElementById('type-figure')
const button = document.querySelector('.button')
const figure = document.getElementById('figure')

section.addEventListener('click', () => {


    if(section.value === 'square') {
        figure.classList.remove('rectangle', 'circle')
        figure.classList.toggle('square')
        
        
    } else if(section.value === 'rectangle') {
       
        figure.classList.remove('square', 'circle')
        figure.classList.toggle('rectangle')
        
    } else if(section.value === 'circle') {
        figure.classList.remove('square', 'rectangle')
        figure.classList.toggle('circle')
        
       
    } else {
        console.log('black')
    }
})

button.addEventListener('click', () => {
    const inputColor = document.getElementById('color')

    figure.style.background = inputColor.value
})