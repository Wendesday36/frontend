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
       
        
       
    this.adatleiro = new AdatModel();
    console.log(this.adatleiro.leiro);
   
    this.UrlapView = new UrlapView($(".urlap"), this.adatleiro.leiro());
    
    $(window).on("katt", (event) => {
      console.log("katt",event.detail);
      this.dataservice.postAxiosData("api/writers",event.detail)
    });
    $(window).on("torles", (event) => {
        //console.log("torles",event.detail);
        this.dataservice.deleteAxiosData("api/writers",event.detail.id)
      });
      $(window).on("megse", (event) => {
        //console.log("megse",event.detail);
      });
      $(window).on("kesz", (event) => {
        //console.log("kesz",event.detail);
        this.dataservice.putAxiosData("api/writers",event.detail.index)
        
      });
    }
    adatokMegj =(lista)=> {
        // console.log(lista)
      // console.log(leiro); 
        new AdatView(lista, $(".lista"),this.adatleiro.leiro());
      }
      
      hibaMegj(error) {
        //console.log(error);
        new HibaView(error, $(".lista"));
      }
  }
  export default Controller;


 
