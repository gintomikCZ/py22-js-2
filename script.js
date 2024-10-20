// když zmáčkneme plus, zvedne se číslo o 1

const divs = document.querySelectorAll('.square')
const btns = document.querySelectorAll('button')

const btnClick = (e) => {
  // vybrat si div který budeme měnit divs[0] : divs[1]
  const index = e.target.textContent.indexOf('první') > -1 ? 0 : 1

  divs[index].textContent = e.target.textContent.indexOf('plus') > -1
    ? + divs[index].textContent + 1
    : + divs[index].textContent - 1
}

btns.forEach((btn, index) => {
  // if (['plus', 'minus'].indexOf(btn.textContent) > -1) {
  // if (index < 2) {
    btn.addEventListener('click', btnClick)
  // }
})

// převod stringu na číslo ..... + str
// převod čísla na string ..... '' + num