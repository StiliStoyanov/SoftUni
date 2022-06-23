function solve() {

   

    let addToListButton = document.getElementById('add')
    let resetButton = document.getElementById('reset')
    let listOfMails = document.getElementById('list')

    addToListButton.addEventListener('click', addNewMail)
    resetButton.addEventListener('click', resetForm)

     function addNewMail(e){
         e.preventDefault();
        let recipientName = document.getElementById('recipientName')
        let title = document.getElementById('title')
        let message = document.getElementById('message')

        if (recipientName.value == '' || title.value == '' || message.value=='') {
            return
        }
       
        const li = document.createElement('li');
        li.innerHTML = `
        <h4>Title: ${title.value}</h4>
        <h4>Recipient Name: ${recipientName.value}</h4>
        <span>${message.value}</span>
        <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
        </div>`;

        listOfMails.appendChild(li);

        recipientName.value = '';
        title.value = '';
        message.value = '';
        const sendButton = document.getElementById('send')
        const deleteButton1 = document.getElementById('delete')
    
        sendButton.addEventListener('click', sendMail)
        deleteButton1.addEventListener('click', deleteMail1)

    }
    function resetForm(e) {
        e.preventDefault();
        let recipientName = document.getElementById('recipientName')
        let title = document.getElementById('title')
        let message = document.getElementById('message')
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

 

    function sendMail(e) {
        e.preventDefault();
        let target = e.target;
        let parent = target.parentElement;//parent of "target"
        let finelParent = parent.parentElement
        let toText =  finelParent.children[1].textContent.slice(16)
        let titleText =  finelParent.children[0].textContent.slice(7)

        finelParent.remove()

        const li = document.createElement('li');
        li.innerHTML = `
        <span>To: ${toText}</span>
        <span>Title: ${titleText}</span>
        <div class="btn">
        <button type="submit" class="delete">Delete</button>
        </div>`;

        let listOfSentMails = document.querySelector('.sent-list')

        listOfSentMails.appendChild(li);

        const deleteButton2 = document.querySelector('.delete')
        deleteButton2.addEventListener('click', deleteMail2)

    }
    function deleteMail1(e) {
        e.preventDefault();
        let target = e.target;
        let parent = target.parentElement;//parent of "target"
        let finelParent = parent.parentElement
        let toText =  finelParent.children[1].textContent.slice(16)
        let titleText =  finelParent.children[0].textContent.slice(7)
        finelParent.remove()

        const li = document.createElement('li');
        li.innerHTML = `
        <span>To: ${toText}</span>
        <span>Title: ${titleText}</span>`;

        let listOfDeletedMails = document.querySelector('.delete-list')

        listOfDeletedMails.appendChild(li);
        
    }
    function deleteMail2(e) {
        e.preventDefault();
        let target = e.target;
        let parent = target.parentElement;//parent of "target"
        let finelParent = parent.parentElement
        let toText =  finelParent.children[0].textContent.slice(4)
        let titleText =  finelParent.children[1].textContent.slice(7)
        finelParent.remove()

        const li = document.createElement('li');
        li.innerHTML = `
        <span>To: ${toText}</span>
        <span>Title: ${titleText}</span>`;

        let listOfDeletedMails = document.querySelector('.delete-list')

        listOfDeletedMails.appendChild(li);
        
    }



}
solve()