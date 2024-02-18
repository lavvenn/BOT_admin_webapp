// let gridd = document.getElementById("inner");

// let cell = document.createElement("div");

// cell.innerHTML = 'НОВОСТИ';
// cell.className = 'item';

// gridd.appendChild(cell);

let counter = 0



function changeElementStyles(element) {
    // Пример изменения стилей grid-column-start и grid-column-end
    element.style.gridColumnStart = '1'; // Устанавливаем значение grid-column-start
    element.style.gridColumnEnd = '3'; // Устанавливаем значение grid-column-end
}


function AddElement(TEXT){
    counter++
    let gridd = document.getElementById("inner");
    let cell = document.createElement("div");
    cell.innerHTML = TEXT;
    cell.className = 'item' + counter ;
    cell.addEventListener('click', function() {

        
        console.log('Объект был нажат', event.target);

        changeElementStyles(event.target)

        setTimeout(function() {
            cell.classList.add('show');
        }, 100);

        


    });

    gridd.appendChild(cell);

    setTimeout(function() {
        cell.classList.add('show');
    }, 100);

    

    console.log(counter)
}

AddElement('    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima quos vel, aliquid corrupti incidunt consectetur error velit, voluptates ipsum odit reprehenderit porro deserunt officiis beatae, quisquam natus odio esse quibusdam ut! Vel, ex aut? Quod sit veniam, perferendis illum nemo consequatur ab similique consectetur impedit, fuga iusto est numquam?')