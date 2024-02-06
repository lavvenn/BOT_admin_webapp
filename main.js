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

AddElement('hello')