// Event driven language

// událost => volání funkce
// click, mouseover, mouseout, input, change, focus, blur, keydown, keyup ...

// el.addEventListener('event-type', callback)

// const btn = document.querySelector('button')
// btn.addEventListener('click', () => {
//   console.log('clicked')
// })

// na kliknutí tlačítka dát čtverečku bleděmodré pozadí
/*
  - vybrat čtvereček z domu
  - vybrat tlačítko z domu
  - napsat css třídu - modré pozadí
  - nastavit na tlačítko event listener
    - přidat čtverečku tu css třídu
*/

const square = document.querySelector('.square')
const btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
  console.log(e)
  square.classList.toggle('bg-blue')
  // if (btn.textContent === 'paint blue') {
  //   btn.textContent = 'paint white'
  // } else {
  //   btn.textContent = 'paint blue'
  // }
  e.target.textContent = e.target.textContent === 'paint blue' ? 'paint white' : 'paint blue'
})


