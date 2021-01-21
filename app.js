const bancoLocal = new BancoLocal()
const lista = new Lista()


lista.botaoAdicionar.addEventListener("click", () => {
  bancoLocal.gravar(lista.inputItem.value)
  bancoLocal.ler()
  lista.adicionarNaLista(bancoLocal.minhaLista)
})

lista.botaoApagar.addEventListener("click", () => {
  bancoLocal.apagar()
  lista.apagarLista()
})

window.addEventListener("DOMContentLoaded", () => {
  bancoLocal.ler()
  lista.adicionarNaLista(bancoLocal.minhaLista)
})