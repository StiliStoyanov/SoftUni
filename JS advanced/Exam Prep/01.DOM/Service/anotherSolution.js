function solve() {
    const input = {
        typeProduct: document.getElementById('type-product'),
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone'),
    };

    const orders = {
        received: document.getElementById('received-orders'),
        completed: document.getElementById('completed-orders')
    };

    document.querySelector('#right button[type=submit]').addEventListener('click', send);
    document.querySelector('.clear-btn').addEventListener('click', clear);

    function send(event) {
        event.preventDefault();

        // read input fields
        const typeProduct = input.typeProduct.value;
        const description = input.description.value;
        const clientName = input.clientName.value;
        const clientPhone = input.clientPhone.value;

        // validate input
        if (!description || !clientName || !clientPhone) {
            return;
        }

        // create div item
        const div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `
            <h2>Product type for repair: ${typeProduct}</h2>
            <h3>Client information: ${clientName}, ${clientPhone}</h3>
            <h4>Description of the problem: ${description}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>`;

        // add functionality to buttons
        const startRepairBtn = div.querySelector('.start-btn');
        startRepairBtn.addEventListener('click', startRepair);
        const finishRepairBtn = div.querySelector('.finish-btn');
        finishRepairBtn.addEventListener('click', finishRepair);

        // append to first list
        orders.received.appendChild(div);

        // clear input fields
        //input.typeProduct.value = input.typeProduct[0].value;
        input.description.value = '';
        input.clientName.value = '';
        input.clientPhone.value = '';

        function startRepair() {
            startRepairBtn.setAttribute('disabled', '');
            finishRepairBtn.removeAttribute('disabled');
        }

        function finishRepair() {
            startRepairBtn.remove();
            finishRepairBtn.remove();

            orders.completed.appendChild(div);
        }
    }

    function clear() {
        const containers = Array.from(document.querySelectorAll('#completed-orders .container'));

        containers.forEach(div => {
            div.remove();
        });
    }
}