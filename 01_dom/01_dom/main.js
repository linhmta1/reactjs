const inputFn= document.querySelector('#fullname');
const showData= document.querySelector('#showData');

console.log(inputFn);
function handlerInput(evt){
    console.log(evt.target.value);
    showData.innerText=evt.target.value;
}

inputFn.addEventListener('input', handlerInput);