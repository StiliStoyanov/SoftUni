window.addEventListener("load", solve);

function solve() {
    let make = document.getElementById('make')
    let model = document.getElementById('model')
    let year = document.getElementById('year')
    let fuel = document.getElementById('fuel')
    let originalCost = document.getElementById('original-cost')
    let sellingPrice = document.getElementById('selling-price')

    let arrayWithInputs = [make,model, year, fuel, originalCost, sellingPrice]

    let publishButton = document.getElementById('publish')

    publishButton.addEventListener('click', (e)=> {
      e.preventDefault()
      if (make.value == '' ||model.value == '' ||year.value == '' ||
      fuel.value == '') {
        return
      }
      if (originalCost.value >= sellingPrice.value) {
        return
      }

      let tBody = document.getElementById('table-body')
      let tr =  document.createElement('tr')
      tr.className = 'row'

      for (const input of arrayWithInputs) {
        let td = document.createElement('td')
        td.textContent = input.value
        tr.appendChild(td)
    }
    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.className = 'action-btn edit'
    const sellButton = document.createElement('button')
    sellButton.textContent = 'Sell'
    sellButton.className = 'action-btn sell'
    tr.appendChild(editButton)
    tr.appendChild(sellButton)
    tBody.appendChild(tr)


    make.value = ''
    model.value = ''
    year.value = ''
    fuel.value = ''
    originalCost.value = ''
    sellingPrice.value = ''

      const editBtn = tr.querySelector('.edit');
        editBtn.addEventListener('click', (e) => {
          let tableRow = e.target.parentElement
          let trData = Array.from(tableRow.querySelectorAll('td'))

          make.value = trData[0].textContent
          model.value =  trData[1].textContent
          year.value =  trData[2].textContent
          fuel.value =  trData[3].textContent
          originalCost.value =  trData[4].textContent
          sellingPrice.value =  trData[5].textContent

        tableRow.remove()
        })


        const sellBtn = tr.querySelector('.sell');
        sellBtn.addEventListener('click', (e) => {
          let ulToAppend = document.getElementById('cars-list')
          let tableRow = e.target.parentElement
          let trData = Array.from(tableRow.querySelectorAll('td'))
          let profit = Number(trData[5].textContent) - Number(trData[4].textContent)
          tableRow.remove()
          const li = document.createElement('li');
          li.className = 'each-list';
          li.innerHTML = `
         <span>${trData[0].textContent} ${trData[1].textContent}</span>
         <span>${trData[2].textContent}</span>
         <span>${profit}</span>
          `
          ulToAppend.appendChild(li)

          let profitToDisplay = document.getElementById('profit')
          let currentProfit = Number(profitToDisplay.textContent)
          let toAdd = Number(profit)
          let finalResult = currentProfit + toAdd
          profitToDisplay.textContent = finalResult.toFixed(2)
        })
    })
}
