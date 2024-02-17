// let gridd = document.getElementById("inner");

// let cell = document.createElement("div");

// cell.innerHTML = 'НОВОСТИ';
// cell.className = 'item';

// gridd.appendChild(cell);

let counter = 0



// function changeStyleOnClick() {
//     var elements = document.querySelectorAll('.clickable'); // выбираем все элементы с классом 'clickable'
//     elements.forEach(function(element) {
//         element.addEventListener('click', function() {
//             this.style.grid_column_start = 1; // изменяем  элемент
//             this.style.grid_column_start = 2; // изменяем  элемент
//         });
//     });
//     console.log('all oooook')
// }

function AddElement(TEXT){
    counter++
    let gridd = document.getElementById("inner");
    let cell = document.createElement("div");
    cell.innerHTML = TEXT;
    cell.className = 'item' + counter ;
    // cell.onclick = changeStyleOnClick()
    gridd.appendChild(cell);

    setTimeout(function() {
        cell.classList.add('show');
    }, 100);

    console.log(counter)
}

AddElement('    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima quos vel, aliquid corrupti incidunt consectetur error velit, voluptates ipsum odit reprehenderit porro deserunt officiis beatae, quisquam natus odio esse quibusdam ut! Vel, ex aut? Quod sit veniam, perferendis illum nemo consequatur ab similique consectetur impedit, fuga iusto est numquam?')