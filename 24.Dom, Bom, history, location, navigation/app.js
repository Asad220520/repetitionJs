// const body = document.body
// const h1 = document.createElement('h1')
// body.appendChild(h1)
// h1.textContent = 'asad'
// h1.style.color = 'red'
// console.log(h1);
// h1.className = 'asaaa'
// const asaaa = document.getElementsByClassName('asaaa')
// h1.remove()


const add = document.querySelector('#add');
add.addEventListener('click', addTodo)


function addTodo () {
    const input = document.querySelector('#input');
    const data = {
        title: input.value,
    }
    const ul = document.querySelector('#todolist')
    const li = renderTodo(data)
    ul.appendChild(li)
    input.value = ''
}

function renderTodo (data) {
    const {title} = data
    const li = document.createElement('li')
    li.textContent = title;

    return li
}

// const add2 = document.querySelector('#add2')
// add2.addEventListener('click', () => {
//     const input2 = document.querySelector('#input2')
//     input2.value
//     const ul = document.querySelector('#todolist2')
//     const li = document.createElement('li')
//     li.textContent = input2.value
//     ul.appendChild(li)
//     input2.value = ''
// })

const add3 = document.querySelector('#add2')
add3.addEventListener('click', addTodof)

function addTodof () {
    const input2 = document.querySelector('#input2')
    const data = {
        title: input2.value,
    }   
    const ul = document.querySelector('#todolist2')
    const fd = renderTodo(data)
    ul.appendChild(fd)
    
}

function renderTodo (data) {
    const {title} = data
    const li = document.createElement('li')
    li.textContent = title
    return li
}