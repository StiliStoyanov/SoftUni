const url = `http://localhost:3030/jsonstore/collections/students`
const tbody = document.querySelector('tbody')
const inputFields = document.querySelectorAll('.inputs input')
const firstNameInput = inputFields[0]
const lastNameInput =  inputFields[1]
const numberInput = inputFields[2]
const gradeInput = inputFields[3]




document.getElementById('submit').addEventListener('click', (e)=> {
    e.preventDefault()

    const trInput = document.createElement('tr')

    let firstName  = document.createElement('td')
    firstName.textContent = firstNameInput.value
    trInput.appendChild(firstName)

    let lastName  = document.createElement('td')
    lastName.textContent = lastNameInput.value
    trInput.appendChild(lastName)

    let number  = document.createElement('td')
    number.textContent = numberInput.value
    trInput.appendChild(number)

    let grade  = document.createElement('td')
    grade.textContent = gradeInput.value
    trInput.appendChild(grade)

    tbody.appendChild(trInput)


})
async function postRequest() {
    const response = await fetch(url)
    const data = await response.json()

   Object.values(data).forEach(person => {
    const tr = document.createElement('tr')
    let firstName  = document.createElement('td')
    firstName.textContent = person.firstName
    tr.appendChild(firstName)

    let lastName  = document.createElement('td')
    lastName.textContent = person.lastName
    tr.appendChild(lastName)

    let number  = document.createElement('td')
    number.textContent = person.facultyNumber
    tr.appendChild(number)

    let grade  = document.createElement('td')
    grade.textContent = person.grade
    tr.appendChild(grade)

    tbody.appendChild(tr)
   })
}

