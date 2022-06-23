function solve() {
    let firstName = document.getElementById('fname')
    let lastName = document.getElementById('lname')
    let email = document.getElementById('email')
    let birth = document.getElementById('birth')
    let position = document.getElementById('position')
    let salary = document.getElementById('salary')

    let arrayWithInputs = [firstName,lastName, email, birth, position, salary]

    let hireButton = document.getElementById('add-worker')
    hireButton.addEventListener('click', (e) =>{
        e.preventDefault()
        if (firstName.value == '' ||lastName.value == '' ||email.value == '' ||
        birth.value == '' ||position.value == '' ||salary.value == '') {
            return
        }
        let tBody = document.getElementById('tbody')

        let tr =  document.createElement('tr')

        for (const input of arrayWithInputs) {
            let td = document.createElement('td')
            td.textContent = input.value
            tr.appendChild(td)
        }
        const firedButton = document.createElement('button')
        firedButton.textContent = 'Fired'
        firedButton.classList.add('fired')
        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.classList.add('edit')
        tr.appendChild(firedButton)
        tr.appendChild(editButton)
        tBody.appendChild(tr)
        
        let salarySum = document.getElementById('sum')
        let currentSum = Number(salarySum.textContent)
        let finalSum = currentSum + Number(salary.value)
        salarySum.textContent = finalSum.toFixed(2)

        firstName.value = ''
        lastName.value = ''
         email.value =  ''
         birth.value =  ''
        position.value =  ''
        salary.value =  ''

        const editBtn = tr.querySelector('.edit');
        editBtn.addEventListener('click', edit)

        const fireBtn = tr.querySelector('.fired');
        fireBtn.addEventListener('click', fire)
    })

    function edit(e) {

        let tBODY = document.getElementById('tbody')
        let tableRow = e.target.parentElement
        let trData = Array.from(tableRow.querySelectorAll('td'))

         
        firstName.value = trData[0].textContent
        lastName.value =  trData[1].textContent
        email.value =  trData[2].textContent
        birth.value =  trData[3].textContent
        position.value =  trData[4].textContent
        salary.value =  trData[5].textContent

        let salarySum = document.getElementById('sum')
        let currentSum = Number(salarySum.textContent)
        let finalSum = currentSum - Number(salary.value)
        salarySum.textContent = finalSum.toFixed(2)
        tableRow.remove()
}
        function fire(e) {
            
            let tableRow = e.target.parentElement
            let tr = Array.from(tableRow.querySelectorAll('td'))

            let salarySum = document.getElementById('sum')
            let currentSum = Number(salarySum.textContent)
            let finalSum = currentSum - Number(tr[5].textContent)
            salarySum.textContent = finalSum.toFixed(2)
            tableRow.remove()

        }
    }
solve()