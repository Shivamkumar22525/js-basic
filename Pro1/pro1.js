const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='Red'){
            body.style.background = e.target.id;
        }
        if(e.target.id ==='Yellow'){
            body.style.background = e.target.id;
        }
        if(e.target.id ==='Blue'){
            body.style.background = e.target.id;
        }
        if(e.target.id ==='Green'){
            body.style.background = e.target.id;
        }
        
    })
});