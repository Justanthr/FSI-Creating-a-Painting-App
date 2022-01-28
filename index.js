let selectedColor = "blue";
let painting = document.querySelector(".painting");
painting.addEventListener("click", function (e) {
  e.target.style.backgroundColor = selectedColor;
});

let palette = document.querySelector('.palette')
palette.addEventListener('click', function(e){
    selectedColor = e.target.id
})

let purple = document.createElement('div')
purple.setAttribute('class', 'color-choice')
purple.setAttribute('id', 'purple')
purple.textContent = '■'

palette.append(purple)

let white = document.createElement('div')
white.setAttribute('class', 'color-choice')
white.setAttribute('id', 'white')
white.textContent = '■'

palette.append(white)