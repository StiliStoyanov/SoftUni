window.addEventListener('load', solve);

function solve() {
   const typeProduct = document.getElementById('type-product')
   const description = document.getElementById('description')
   const clientName = document.getElementById('client-name')
   const clientPhone = document.getElementById('client-phone')

 
   
   

   const sendButton = document.querySelector('#right button[type=submit]')
   sendButton.addEventListener('click', (e)=>{
    e.preventDefault()
    if (description.value == '' || clientName.value == '' || clientPhone == '') {
        return
    }
    const div = document.createElement('div');
    div.className = 'container';
    div.innerHTML= `
    <h2>Product type for repair: ${typeProduct.value}</h2>
    <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
    <h4>Description of the problem: ${description.value}</h4>
    <button class="start-btn">Start repair</button>
    <button class="finish-btn" disabled>Finish repair</button>`

    let receivedOrdersSection = document.getElementById('received-orders')
   receivedOrdersSection.appendChild(div)

   typeProduct.value= ''
   clientName.value= ''
   clientPhone.value= ''
   description.value= ''


   const startButton = div.querySelector('.start-btn')
   const finishButton = div.querySelector('.finish-btn')


   startButton.addEventListener('click',() => {
   startButton.disabled = true;
   finishButton.disabled = false
   })
  
   finishButton.addEventListener('click', (e) => {
    let parentDiv = e.target.parentElement
    let completeedOrdersSection =  document.getElementById('completed-orders')
     startButton.remove()
    finishButton.remove()
    completeedOrdersSection.appendChild(parentDiv)
})
   })

   let clearButton = document.querySelector('.clear-btn')
   clearButton.addEventListener('click', (e) => {
    let divsToDelete = Array.from(document.querySelectorAll('#completed-orders .container'))
    for (const div of divsToDelete) {
        div.remove()
    }
   })
}