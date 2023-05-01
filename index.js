let buttonAdd = document.querySelector('.btn_add-counter')
let buttonReset = document.querySelector('.btn_reset-counter')
let counterText = document.querySelector('.counter')

let counter = 0;

buttonAdd.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;
}
) 

buttonReset.addEventListener('click', function(){
    counter = 0;

    counterText.innerText = counter;
})

