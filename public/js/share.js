const modalBtns = document.querySelectorAll('.share-btn');

for(let btn of modalBtns) {
    btn.addEventListener('click', function(e){
        let div = btn.nextElementSibling;
        div.classList.toggle('hidden');
    })
}

