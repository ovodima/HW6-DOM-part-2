const button = document.querySelector('.button')

button.addEventListener('click', () => {
    const figure = document.getElementById('figure')
    const select = document.getElementById('type-figure').value
    const inputColor = document.getElementById('color')

    if(select === 'square') {
        figure.classList.remove('triangle', 'circle')
        figure.classList.toggle('square')
        
        figure.style.backgroundColor = inputColor.value
    } else if(select === 'triangle') {
       
        figure.classList.remove('square', 'circle')
        figure.classList.toggle('triangle')
        figure.style.borderBottom = `200px solid ${inputColor.value}`
        figure.style.backgroundColor = 'white'
    } else if(select === 'circle') {
        figure.classList.remove('square', 'triangle')
        figure.classList.toggle('circle')
        
        figure.style.backgroundColor = inputColor.value
    } else {
        console.log('black')
    }
})