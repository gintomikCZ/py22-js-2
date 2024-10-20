/*
- vyhledat li - udělat z nich pole
- vyhledat strong
- na všechny li nastavit listener (v cyklu)
  - textContent li vložit do strongu
*/

// const lis = document.querySelectorAll('li')
const strong = document.querySelector('strong')

const myFn = (e) => {
  console.log('li clicked')
  console.log(e.target)
  strong.textContent = e.target.textContent
}

const lis = Array.from(document.getElementsByTagName('li'))

document.body.addEventListener('click', (e) => {
  console.log('body clicked')
  console.log(e.target)

})

document.addEventListener('click', (e) => {
  console.log('document clicked')
  console.log(e.target)

})


lis.forEach((li) => {
  li.addEventListener('click', myFn)
  // li.removeEventListener('click', myFn)
})

document.querySelector('ul').addEventListener('click', (e) => {
  console.log('ul clicked')
  console.log(e.target)

})





// EVENT BUBBLING
