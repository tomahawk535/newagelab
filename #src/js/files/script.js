const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const closeIcon = document.querySelector('.close__icon');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
if (closeIcon) {
    closeIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const formInput = document.querySelectorAll('.input');
const submitBtn = document.querySelector('.submit__btn');
if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
        console.log('well done');
        console.log(formInput);
        formInput.forEach( e => console.log(e.id + ' - ' + e.value));
        formInput.forEach(e => e.value = '');
    });
}