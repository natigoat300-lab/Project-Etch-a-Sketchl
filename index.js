const body = document.querySelector('body')
//create a div container
const container = document.createElement('div')
container.classList.add('container')
body.append(container)
//ask user input
const humanChoice = function() {
    let user =  parseInt(prompt("Enter a number not more than 100 and not less than 1"))
    return user
}
// create a function that create pixels
function createPixel(userInput) {
    container.innerHTML = '';
    if (userInput <= 100 && userInput > 0) {
        for(let i = 0; i < userInput; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        container.append(div)

        for(let i = 0; i < userInput; i++) {
            let pixel = document.createElement('div')
            
            //set initial state for 10% darkening
            pixel.style.backgroundColor = "black";
            pixel.style.opacity = "0";
            // add hover listner
            pixel.addEventListener('mouseover', () => {
                let currentOpacity = parseFloat(pixel.style.opacity)
                if (currentOpacity < 1) {
                    pixel.style.opacity = (currentOpacity + 0.1).toString();
                }
        });
            div.append(pixel)
        }
    }
    }else{
        alert("Invalid value! will set it to 16x16")
        createPixel(16)
    }
}
createPixel(16)
//add button that call the creatdiv function
const btn = document.createElement('button')
btn.textContent = "SET GRID"
btn.addEventListener('click', () => createPixel(humanChoice()))
body.append(btn)
