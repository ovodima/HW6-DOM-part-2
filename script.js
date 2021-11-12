const button = document.querySelector('.button')

button.addEventListener('click', () => {
    const figure = document.getElementById('figure')
    const select = document.getElementById('type-figure').value
    const inputColor = document.getElementById('color')

    if(select === 'square') {
        figure.classList.toggle('square')
        figure.classList.remove('triangle', 'circle')
        figure.style.background = inputColor.value
    } else if(select === 'triangle') {
       
        figure.classList.remove('square', 'circle')
        figure.classList.toggle('triangle')
        figure.style.background = inputColor.value
    } else if(select === 'circle') {
        figure.classList.toggle('circle')
        figure.classList.remove('square', 'triangle')
        figure.style.background = inputColor.value
    } else {
        console.log('black')
    }
 

})