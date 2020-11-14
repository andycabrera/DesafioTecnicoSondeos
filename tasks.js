const form = document.getElementById('form')
const table = document.getElementById('tbody')
const descriptionInput = document.getElementById('description')

const tasks = []

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var data = new FormData(form)

    if(descriptionInput.value.trim() !="" ){
        tasks.push(data.get("description"))
        descriptionInput.value = null
        refreshTable()
    }else{
        alert("No puede ingresar una tarea vacia");
    }
})

const refreshTable = () => {
    table.innerHTML = ``
    for (let task of tasks){
        table.innerHTML += `
        <tr>
            <td id="taskDescription">${task}</td>
            <td> <button id="deleteButton" class="btn btn-danger" onclick="deleteRow()">Eliminar</button>
            </td>
        </tr>` 
    }
}

function deleteRow() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    var index = Array.from(tr.parentNode.children).indexOf(tr);
    tr.parentNode.removeChild(tr);
    
    tasks.splice(index,1);
}