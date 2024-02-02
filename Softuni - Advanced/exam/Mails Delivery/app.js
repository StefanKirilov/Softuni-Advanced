function solve() {

    let recipientValue = document.getElementById('recipientName');
    let titleValue = document.getElementById('title');
    let messageValue = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    let ulList = document.getElementById('list');
    let ulListSend = document.querySelector('.sent-list');
    let ulListDelete = document.querySelector('.delete-list');
    
    
    

    addBtn.addEventListener('click', addText);
    resetBtn.addEventListener('click', resetText);

    function addText(e){

        e.preventDefault();

        let recipient = recipientValue.value;
        let title = titleValue.value;
        let message = messageValue.value;

        if (recipient === '' || title === '' || message == '' ){
            return;
        }

        

        let li = document.createElement('li');
        let h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${title}`;
        let h4Name = document.createElement('h4');
        h4Name.textContent = `Recipient Name: ${recipient}`;
        let span = document.createElement('span');
        span.textContent = message;
        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');
        let sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.setAttribute('id', 'send');
        sendBtn.setAttribute('type', 'submit');

        sendBtn.addEventListener('click', function (e){

            e.preventDefault();
        
            let sendLi = document.createElement('li');
            let spanNameLi = document.createElement('span');
            spanNameLi.textContent = `To: ${recipient}`;
            let spanTitleLi = document.createElement('span');
            spanTitleLi.textContent = `Title: ${title}`;
            let divBtn = document.createElement('div');
            divBtn.classList.add('btn');
            let deleteBtnInSend = document.createElement('button');
            deleteBtnInSend.classList.add('delete');
            deleteBtnInSend.setAttribute('type', 'submit');
            deleteBtnInSend.textContent = 'Delete';

            deleteBtnInSend.addEventListener('click', function (e){

                let deleteLi = document.createElement('li');
                let spanNameLiDelete = document.createElement('span');
                spanNameLiDelete.textContent = `To: ${recipient}`;
                let spanTitleLiDelete = document.createElement('span');
                spanTitleLiDelete.textContent = `Title: ${title}`;
                deleteLi.appendChild(spanNameLiDelete);
                deleteLi.appendChild(spanTitleLiDelete);
                ulListDelete.appendChild(deleteLi);

                e.target.parentElement.parentElement.remove();
            });

            divBtn.appendChild(deleteBtnInSend);
            sendLi.appendChild(spanNameLi);
            sendLi.appendChild(spanTitleLi);
            sendLi.appendChild(divBtn);
        
            ulListSend.appendChild(sendLi);
        
            e.target.parentElement.parentElement.remove();
        
        });
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('id', 'send');
        deleteBtn.setAttribute('type', 'submit');

        deleteBtn.addEventListener('click', function (e){

            let deleteLi = document.createElement('li');
            let spanNameLiDelete = document.createElement('span');
            spanNameLiDelete.textContent = `To: ${recipient}`;
            let spanTitleLiDelete = document.createElement('span');
            spanTitleLiDelete.textContent = `Title: ${title}`;
            deleteLi.appendChild(spanNameLiDelete);
            deleteLi.appendChild(spanTitleLiDelete);
            ulListDelete.appendChild(deleteLi);

            e.target.parentElement.parentElement.remove();
        });

        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        li.appendChild(h4Title);
        li.appendChild(h4Name);
        li.appendChild(span);
        li.appendChild(div);

        ulList.appendChild(li);

        recipientValue.value = '';
        titleValue.value = '';
        messageValue.value = '';
        
    }

    function resetText(e){
         
        e.preventDefault();

        recipientValue.value = '';
        titleValue.value = '';
        messageValue.value = '';
    }

}
solve()