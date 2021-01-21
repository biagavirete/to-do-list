const form = document.querySelector('#form-list')
const list = document.querySelector('#items-list')
const clearButton = document.querySelector('.clear-list')
const itemList = document.querySelector('#item')

loadEventListeners()

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getList)    
  form.addEventListener('submit', addItemToList) 
  clearButton.addEventListener('click', clearList) 
}

function getList() {
  let items
  if(localStorage.getItem('items') === null) {
    items = []
  } else {
    items = JSON.parse(localStorage.getItem('items'))
  } 

  items.map(function(item) {  
    createList(item)
  })

}

function addItemToList(e) {
    e.preventDefault()

    createList(itemList.value)
    itemToLocalStorage(itemList.value)
    itemList.value = ''
}

function createList(itemValue) {
  const item = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  item.appendChild(checkbox)

  const span = document.createElement('span')
  span.textContent = itemValue

  item.appendChild(span)
  list.appendChild(item)
}

function clearList() {
  list.textContent = ''
  localStorage.clear()
}

function itemToLocalStorage(item) {
  let items
  if(localStorage.getItem('items') === null) {
    items = []
  } else {
    items = JSON.parse(localStorage.getItem('items'))
  }

  items.push(item)

  localStorage.setItem('items', JSON.stringify(items))
} 