async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const main = document.getElementById('main')

    const response = await fetch(url);
    const data = await response.json();

    main.innerHTML = ''
    
    Object.entries(data).forEach(person => {
        console.log(person);
        const div = document.createElement('div')
        div.className = 'profile'
        div.innerHTML= `<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${person[1].username}" disabled readonly />
        <div class="user1Username" style="display:none;">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${person[1].email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user1Age" value="${person[1].age}" disabled readonly />
        </div>
        
        <button>Show more</button>`
        main.appendChild(div)
        

    })
     let btns = Array.from(document.querySelectorAll('button'))
    for (const btn of btns) {
        
        btn.addEventListener('click', (e)=> {
            const divToHide = e.target.previousElementSibling
            const lockedButton = e.target.parentElement.children[2]
            if (lockedButton.checked) {
                
            }
            else{
                if (e.target.textContent == 'Show more') {
                    divToHide.style.display = 'block'
                    e.target.textContent = 'Hide it'
                }
                else if(e.target.textContent == 'Hide it'){
                    divToHide.style.display = 'none'
                    e.target.textContent = 'Show more'
                }
            }

          
        })
    }
    
       
}