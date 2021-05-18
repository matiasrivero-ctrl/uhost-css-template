var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var gettingPlanButtons = document.querySelectorAll('.plan button');

/* Nothing changed */
for (let button of gettingPlanButtons) {
    button.addEventListener('click', function(){
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    })
}