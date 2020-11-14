const addButton = document.getElementById('addButton')
const form = document.getElementById('form')

form.addEventListener('submit', () => {
    var data = new FormData(form)

    console.log(data.description)
})