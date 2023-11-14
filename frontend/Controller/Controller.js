import AdatModel from "../Model/AdatModel.js";
import AdatView from "../View/AdatView.js";
import HibaView from "../View/HibaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";
import DataService from "../Model/DataService.js";
class Controller {

    constructor() {
        this.dataservice = new DataService();
        this.dataservice.getAxiosData("api/writers",this.adatokMegj,
            this.hibaMegj)
       /*  this.dataservice.postAxiosData("api/writers",{
            "nev" : "Valaki",
            "szul":1589,
        }) */
       /*  this.dataservice.putAxiosData("api/writers",{
          id:1,
          nev:"Vlamai József Attila",
          szul:1485,
        }) */
        
       
    this.adatleiro = new AdatModel();
    console.log(this.adatleiro.leiro);
   
    this.UrlapView = new UrlapView($(".urlap"), this.adatleiro.leiro);
    $(window).on("katt", (event) => {
      console.log(event.detail);
    });
    $(window).on("torles", (event) => {
        console.log(event.detail);
        this.dataservice.deleteAxiosData("api/writers",event.detail)
      });
      $(window).on("megse", (event) => {
        console.log(event.detail);
      });
      $(window).on("kesz", (event) => {
        console.log(event.detail);
      });
    }
    adatokMegj(lista) {
        // console.log(lista)
        /* console.log(leiro); */
        new AdatView(lista, $(".lista"));
      }
      hibaMegj(error) {
        console.log(error);
        new HibaView(error, $(".lista"));
      }
  }
  export default Controller;


 
