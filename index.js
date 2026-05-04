const body = document.querySelector('body')
//create a div container
const container = document.createElement('div')
container.classList.add('container')
body.append(container)
// create a function that create divs
let user =  parseInt(prompt("insert < 100"))
function createDiv() {
    for(let i = 0; i < user; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        container.append(div)
        for(let i = 0; i < user; i++) {
            let divs = document.createElement('div')
            div.append(divs)
        }

    }
}
createDiv()

