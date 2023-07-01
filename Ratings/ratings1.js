let radioElement=document.querySelectorAll('input');

const ratings=document.querySelector('.rating-value');
radioElement.forEach((radio)=>{
    radio.addEventListener('click',()=>{
        let value=radio.value;
        ratings.innerText=`${value} of 5`;

    });
});