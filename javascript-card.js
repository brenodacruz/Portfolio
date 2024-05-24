let frontCalc = document.querySelector('.button1')
let frontNike = document.querySelector('.button2')
let frontAndroid = document.querySelector('.button3')
let frontThenews = document.querySelector('.button4')

let card1 = document.querySelector('.card1')
let card2 = document.querySelector('.card2')
let card3 = document.querySelector('.card3')
let card4 = document.querySelector('.card4')

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            card1.classList.add('mostrar')
            card1.classList.remove('voltar')
            
        } else {
            card1.classList.remove('mostrar')
            card1.classList.add('voltar')
        }
    })
})

observer1.observe(frontCalc)

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            card2.classList.add('mostrar')
            card2.classList.remove('voltar')
            card1.classList.add('voltar')
            
        } else {
            card2.classList.remove('mostrar')
            card2.classList.add('voltar')
            card1.classList.remove('voltar')
        }
    })
})

observer2.observe(frontNike)



const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            card3.classList.add('mostrar')
            card3.classList.remove('voltar')
            card2.classList.add('voltar')
        } else {
            card3.classList.remove('mostrar')
            card3.classList.add('voltar')
            card2.classList.remove('voltar')
        }
    })
})

observer3.observe(frontAndroid)

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            card4.classList.add('mostrar')
            card4.classList.remove('voltar')
            card3.classList.add('voltar')
            
        } else {
            card4.classList.remove('mostrar')
            card4.classList.add('voltar')
            card3.classList.remove('voltar')
        }
    })
})

observer4.observe(frontThenews)