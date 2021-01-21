class BancoLocal {
  constructor() {
    this.minhaLista = JSON.parse(localStorage.getItem("item")) || []
  }

  ler() {
    this.minhaLista = JSON.parse(localStorage.getItem("item"))
  }

  gravar(item) {
    let lista = this.minhaLista || []
    lista.push(item)
    localStorage.setItem("item", JSON.stringify(lista))
  }

  apagar() {
    localStorage.clear()
  }
}