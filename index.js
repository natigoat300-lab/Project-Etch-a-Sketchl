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
// create a function that create divs
function createDiv(userInput) {
    container.innerHTML = '';
    if (userInput <= 100 && userInput > 0) {
        for(let i = 0; i < userInput; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        container.append(div)
        for(let i = 0; i < userInput; i++) {
            let divs = document.createElement('div')
            div.append(divs)
        }
    }
    }else{
        alert("Invalid value! will set it to 16x16")
        createDiv(16)
    }
}
createDiv(16)
//add button that call the creatdiv function
const btn = document.createElement('button')
btn.textContent = "SET GRID"
btn.addEventListener('click', () => createDiv(humanChoice()))
body.append(btn)

