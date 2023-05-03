let buttonAddCircle = document.getElementById("btn_add-counter")
let buttonReset = document.getElementById("btn_reset-counter")
let counterText = document.getElementById("counter")

const COUNTER_INITIAL_CIRCLE = 0;

let counter = COUNTER_INITIAL_CIRCLE;
counterText.innerText = counter;

buttonAddCircle.addEventListener('click', function() {
    counter++;

    counterText.innerText = counter;
}
) 

buttonReset.addEventListener('click', function(){
    counter = COUNTER_INITIAL_CIRCLE;

    counterText.innerText = counter;
}
)

