class Lista {
  constructor() {
    this.inputItem = document.querySelector("#item")
    this.botaoAdicionar = document.querySelector("#adicionar")
    this.lista = document.querySelector("#lista")
    this.botaoApagar = document.querySelector("#apagar")
  }

  apagarLista() {
    this.lista.innerHTML = ''
  }

  getList() {
    let items;
    if (localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }

    items.forEach(function (item) {
      //build list
      buildList(item);
    });

  }

  adicionarNaLista(itemValue) {
    const item = document.createElement('label');

    //create input checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    //append checkbox
    item.appendChild(checkbox);

    //create span
    const span = document.createElement('span');

    //add content to span
    span.textContent = itemValue;

    //append span
    item.appendChild(span);

    //append item tolist
    list.appendChild(item);

    this.lista.innerHTML = listaHTML
    this.inputItem.value = ''
  }

}