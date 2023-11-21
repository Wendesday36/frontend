import TablazatSorView from "./TablazatSorView.js";
class AdatView {
  #lista = [];
  #leiro
  constructor(lista, szuloElem,leiro) {
    this.#lista = lista;
    this.#leiro = leiro;
    szuloElem.append(`<table class= table  table-hover table-striped >`);
    this.tablaElem = szuloElem.children("table");
    console.log(leiro)
    this.megjelenit();
  }
  megjelenit() {
    this.fejlec()
    this.tablaElem.append("<tbody>")
    this.#lista.forEach((elem, index) => {
      new TablazatSorView(elem, this.tablaElem, index);
    });
  }
  fejlec() {
    let txt = "<thead>";
    txt+="<tr>"
    for (const key in this.#leiro) {
      txt += `<th>${this.#leiro[key].megj}</th>`;
    }
    txt += `</tr>`;

    this.tablaElem.append(txt);
  }
}
export default AdatView;
