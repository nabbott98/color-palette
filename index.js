const colorPalette = document.querySelector('#color-palette')
const myPalette = document.querySelector('#my-palette')
const generate = document.querySelector('#generate')

console.log(colorPalette, myPalette, generate)

const addColor = (event) => {
    // select color of the element that we clicked
    const color = event.target.style.backgroundColor
    //create a new `div`
    const newSquare = document.createElement('div')
    // add the square class
    newSquare.classList.add('square')
    // add the background color
    newSquare.style.background = color
    // add to my palette
    myPalette.appendChild(newSquare)
}

const makePalette = () => {


    while (colorPalette.firstChild) {
        // remove that thing
        colorPalette.removeChild(colorPalette.firstChild)
    }

    for (let i = 0; i < 150; i++){
        // create a div
        const square = document.createElement('div')
        // add the class of `square`
        square.classList.add('square')
        // adding created square to color palette
        colorPalette.appendChild(square)
        // random colors
        const red = Math.floor(Math.random()* 255)
        const green = Math.floor(Math.random()* 255)
        const blue = Math.floor(Math.random()* 255)
        // Create an rgb string with random color values
        const color = `rgb(${red}, ${green}, ${blue})`

        // take our random color and put it in our style
        square.style.backgroundColor = color

        square.addEventListener('click', addColor)
    }
}

// Waits until the dom is loaded
document.addEventListener('DOMContentLoaded', () =>(
    // call make palette
    makePalette()
))

generate.addEventListener('click', makePalette)