const ul = document.querySelector('ul')
const strong = document.querySelector('strong')

ul.addEventListener('click', (e) => {
  console.log('ul clicked', e)
  e.stopPropagation() // zamezuje dalšímu bublání události
  // console.log('clicked')
  // console.log(e.target)
  if (e.target.tagName === 'LI') {
    strong.textContent = e.target.textContent
  }
})

// Event Dellegation

// click outside
// el.contains(el2) - vrátí true, pokud el2 leží uvnitř el, jinak false

document.addEventListener('click', (e) => {
  console.log('document clicked')
  // leží e.target uvnitř ul ?????
  // if (!ul.contains(e.target)) {
  //   strong.textContent = ''
  // }
  strong.textContent = ''
})
const btn = document.querySelector('button')
btn.addEventListener('mouseenter', (e) => {
  console.log('mouseenter', e)
})
btn.addEventListener('mouseover', (e) => {
  console.log('mouseover', e)
})

btn.addEventListener('mouseleave', (e) => {
  console.log('mouseleave', e)
})
btn.addEventListener('mouseout', (e) => {
  console.log('mouseout', e)
})


