




document.addEventListener("DOMContentLoaded", () => {
    
    let stores = document.querySelectorAll('.store_info');
    let iframes = document.querySelectorAll('.iframe iframe');

    
    stores.forEach((store, i) => {
        store.addEventListener('click', ()=>{
            stores.forEach(e =>{
                e.classList.remove('active');
            });
            iframes.forEach(e => {
                e.classList.remove('zindex');
            });
            store.classList.add('active');
            iframes[i].classList.add('zindex');
        });
    });


  });


