let x = Array.from(document.querySelectorAll('.x'));
let display = document.querySelector('.display');

x.forEach(function(item){
    item.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
                display.value = eval(display.value);
        }
        else if(e.target.innerHTML == 'AC'){
                display.value = '';
        }
        else if(e.target.innerHTML == 'x'){
                display.value = display.value.slice(0, -1);
        }
        else{
                display.value += e.target.innerHTML;
        }
    });
});