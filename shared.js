var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
var gettingPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (let button of gettingPlanButtons) {
    button.addEventListener('click', function(){
        /* backdrop.style.display = 'block';
        modal.style.display = 'block'; */
        modal.classList.add('open');
        backdrop.style.display = "block";
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 200);
    })
}

backdrop.addEventListener('click', function()  {
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    if(modal){         
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');

    setTimeout(function() {
        backdrop.style.display = 'none';
    }, 200);
}

toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 200);
});