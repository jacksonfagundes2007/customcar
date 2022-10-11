let button = document.querySelectorAll('.btn-white');
let hexagon = document.querySelectorAll('.hexagon');
let icon = document.querySelectorAll('.icon');

for(let i = 0; i<3; i++) {
    button[i].addEventListener('mouseover', () => {
        hexagon[i].style.fill = '#fff'
        icon[i].style.stroke = '#000'
    })
    button[i].addEventListener('mouseout', () => {
        hexagon[i].style.fill = 'transparent'
        icon[i].style.stroke = '#fff'
    })
}

