const button = document.querySelector('.button')

button.addEventListener('click', () => {
    const figure = document.getElementById('figure')
    const option = document.querySelectorAll('option')
    const inputColor = document.getElementById('color')

    option.forEach((item, e) => {
        e.stopPropagation()
       if(item.label === 'Square') {
            figure.classList.add('square')
            figure.style.background = inputColor.value
       } else if(item.label === 'Triangle') {
            figure.classList.remove('square')
            figure.classList.add('triangle')
            figure.style.background = inputColor.value
       } else if(item.label === 'Circle') {
            figure.classList.remove('triangle')
            figure.classList.add('circle')
            figure.style.background = inputColor.value
    } 
    })
    

})