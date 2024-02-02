function lockedProfile() {

    let SHOW_MORE = 'Show more';
    let HIDE_IT = 'Hide it';

    let btnElements = Array.from(document.querySelectorAll('div button'));

    for (const btn of btnElements) {
        btn.addEventListener('click' , show);
    }

    function show(e){
        let divChildren = Array.from(e.target.parentElement.children);
        let isLocked = divChildren[2].checked;

        if(isLocked){
            return
        }
        
        let hiddenElement = e.target.previousElementSibling;

        if(e.target.textContent === SHOW_MORE){
            hiddenElement.style.display = 'inline';
            e.target.textContent = HIDE_IT;

            return;
        }

        hiddenElement.style.display = '';
        e.target.textContent = SHOW_MORE;
    }

    }
