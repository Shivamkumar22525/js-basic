const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if(height==='' || height<=0 || isNaN(height)){
        result.innerHTML = `${height}, Please enter valid number!!!`;
    }else if (weight==='' || weight<=0 || isNaN(weight)){
        result.innerHTML = `${weight}, Please enter valid number!!!`;
    }else{
        const Bmi = (weight/((height*height)/10000).toFixed(2));
        result.innerHTML = `<span>${Bmi}</span>`;
    }

});