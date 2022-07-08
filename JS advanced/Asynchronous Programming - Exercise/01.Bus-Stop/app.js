async function getInfo() {
    const stopNameElement  = document.getElementById('stopName')
    const timetableElements  = document.getElementById('buses')

    const inputField = document.getElementById('stopId').value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${inputField}` 


  

  try {
    timetableElements.innerHTML = ''
    const res = await fetch(url)
    const data = await res.json()

    stopNameElement.textContent = data.name 

    Object.entries(data.buses).forEach(b=>{
        const listElement = document.createElement('li');
        listElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
        timetableElements.appendChild(listElement)
    })
  } catch (error) {
    stopNameElement.textContent = 'Erorr' 
  }
}