const $submitBt = document.querySelector('[data-button]');

if ($submitBt) {
    $submitBt.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log('Enviado...');
    });    
}