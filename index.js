const body = document.querySelector('body')
//create a div container
const container = document.createElement('div')
container.classList.add('container')
body.append(container)
// create a function that create divs

let user =  parseInt(prompt("Enter a number not more than 100 and not less than 1"))



function createDiv(userInput) {
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
createDiv(user)

