// let gridd = document.getElementById("inner");

// let cell = document.createElement("div");

// cell.innerHTML = 'НОВОСТИ';
// cell.className = 'item';

// gridd.appendChild(cell);

function AddElement(TEXT){
    let gridd = document.getElementById("inner");
    let cell = document.createElement("div");
    cell.innerHTML = TEXT;
    cell.className = 'item';
    gridd.appendChild(cell);

    setTimeout(function() {
        cell.classList.add('show');
    }, 100);
}

AddElement('    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima quos vel, aliquid corrupti incidunt consectetur error velit, voluptates ipsum odit reprehenderit porro deserunt officiis beatae, quisquam natus odio esse quibusdam ut! Vel, ex aut? Quod sit veniam, perferendis illum nemo consequatur ab similique consectetur impedit, fuga iusto est numquam?')