const button = document.querySelector('.button')

button.addEventListener('click', () => {
    const figure = document.getElementById('figure')
    const select = document.getElementById('type-figure').value
    const inputColor = document.getElementById('color')

    if(select === 'square') {
        figure.classList.remove('rectangle', 'circle')
        figure.classList.toggle('square')
        
        figure.style.backgroundColor = inputColor.value
    } else if(select === 'rectangle') {
       
        figure.classList.remove('square', 'circle')
        figure.classList.toggle('rectangle')
        figure.style.backgroundColor = inputColor.value
    } else if(select === 'circle') {
        figure.classList.remove('square', 'rectangle')
        figure.classList.toggle('circle')
        
        figure.style.backgroundColor = inputColor.value
    } else {
        console.log('black')
    }
})