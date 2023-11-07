import DataService from "../Model/DataService.js";
const ALAPVEGPONT = "http://localhost:8000/writers"
class Controller {

    constructor() {
        this.dataservice = new DataService();
        this.dataservice.getAxiosData(ALAPVEGPONT,this.megjelenit)
        this.dataservice.postAxiosData(ALAPVEGPONT,{
            "nev" : "Valaki",
            "szul":1589,
        })
    }
    megjelenit(list){
        console.log(list)
    }
  }
  export default Controller;