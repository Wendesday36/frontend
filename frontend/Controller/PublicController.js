import AdatModel from "../Model/AdatModel.js";
import DataService from "../Model/DataService.js";
import DivView from "../View/DivView.js";
class PublicController{
    constructor() {
        this.dataservice = new  DataService();
        this.dataservice.getAxiosData("api/writers",this.adatokMegj)
        this.adatleiro = new AdatModel();
        console.log(this.adatleiro.leiro())
    }
    adatokMegj(lista){
        new DivView(lista, $(".fotablak"))
    }
}
export default PublicController