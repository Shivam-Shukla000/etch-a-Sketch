
function createGrid() {
    document.querySelector('.container').innerHTML = ''
    let x = document.querySelector('.pixelCount').value
    let item = document.querySelector('.container')

    let amount = x * x
    for (let i = 0; i < amount; i++) {
        // generating pixels with java script
        item.style = `grid-template-columns: repeat(${x}, 1fr)`;
        let createDiv = document.createElement('div')
        createDiv.className = 'gridElement'
        item.append(createDiv)
        // to change color when mouseover 
        let block = document.querySelectorAll('.gridElement')[i]
        block.addEventListener('mouseover', gridChangeColor)
    }
}



function gridChangeColor(e) {
       this.style.backgroundColor = 'black'
}       

function resetPixels() {
        let pixel = document.querySelectorAll('.gridElement')
        pixel.forEach((value) => value.style.backgroundColor = 'white')
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', resetPixels)

let Generate = document.querySelector('.Generate')
Generate.addEventListener('click' , createGrid)
