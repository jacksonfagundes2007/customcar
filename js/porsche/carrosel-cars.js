let um = document.querySelector('#um');
let dois = document.querySelector('#dois');
let tres = document.querySelector('#tres');
let quatro = document.querySelector('#quatro')

let previous = document.querySelector('#previous');
let next = document.querySelector('#next');


// avançar img
if(window.onload = true) {
    dois.classList = 'front'
    tres.classList = 'front'
    quatro.classList = 'front'
}
let cont = 0;

next.addEventListener('click', () => {
    if(cont == 0) {
        um.classList = 'back'
        dois.classList = 'mid'
        cont++
        console.log(cont);
    } else if (cont == 1) {
        dois.classList = 'back'
        tres.classList = 'mid'
        cont++
        console.log(cont);

    } else if (cont == 2) {
        tres.classList = 'back'
        quatro.classList = 'mid'
        cont++
        console.log(cont);
    } else if (cont == 3) {
        um.classList = 'mid'
        dois.classList = 'front'
        tres.classList = 'front'
        quatro.classList = 'front'
        cont--
        cont--
        cont--
        console.log(cont);
    }
})


// voltar img
previous.addEventListener('click', () => {
    if (cont == 3) {
        quatro.classList = 'front'
        tres.classList = 'mid'
        cont--
        console.log(cont);
    }
    else if(cont == 2) {
        tres.classList = 'front'
        dois.classList = 'mid'
        cont--
        console.log(cont);

    } else if (cont == 1) {
        dois.classList = 'front'
        um.classList = 'mid'
        cont--
        console.log(cont);

    } else if (cont == 0) {
        um.classList = 'back'
        dois.classList = 'back'
        tres.classList = 'back'
        quatro.classList = 'mid'
        cont++
        cont++
        cont++
        console.log(cont);

    }
});