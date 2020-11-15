
function accordionFn(){

    //get section
    const section = document.querySelector('.answer--section');
    //get button
    const button = section.querySelectorAll('button');
    //get title
     const title = section.querySelectorAll('h2');



function showFn(e) {
    e.preventDefault();
    const answer = document.querySelectorAll('p');
 


    //get parent 
    const parent = e.target.parentElement;
    const para = parent.querySelector('p');
   
   
  
   para.classList.toggle('show');

    
    
    
}

   





    //events
    button.forEach((icon)=>icon.addEventListener('click', showFn));
    title.forEach((title=>title.addEventListener('click', showFn)));


}












//window-event

window.addEventListener('DOMContentLoaded', accordionFn)