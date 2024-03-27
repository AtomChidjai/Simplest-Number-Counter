const number = document.getElementById("number");
const increase_button = document.getElementById("increase");
const decrease_button = document.getElementById("decrease");
const reset_button = document.getElementById("reset");
const number_input = document.getElementById("input-number");

let countnum = 0; //initial number

increase_button.addEventListener('click', ()=>{ // increase function
    countnum++;
    number.innerHTML = countnum; 
});

decrease_button.addEventListener('click', ()=>{ // decrease function
    countnum--;
    number.innerHTML = countnum; 
});

reset_button.addEventListener('click', ()=>{ // reset function
    countnum = 0;
    number.innerHTML = countnum; 
});

number_input.addEventListener('keydown', (event) => { // input number from keyboard and enter
    if(event.key === 'Enter')
    {
        append_number();
    }
});

function append_number(){ // convert text to number and add
    const input = number_input.value;
    const numberappend = parseInt(input);
    countnum += numberappend;
    number.innerHTML = countnum;
}