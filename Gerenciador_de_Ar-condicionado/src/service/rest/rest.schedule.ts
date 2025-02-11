import { Observable } from "rxjs";
import api from "../config/service.config.rxjs";
import { RegisterDate } from "@/models/model.register-date";


export class ManagerRest {  
    getListMeneger(): Observable<any> {          
        return api.get("/getList")
    }

    getMenegerByEnvoronment(environment: String): Observable<any> { 
        return api.get(`/getEnvironment/${environment}`);
    }
    
    createMeneger(body: RegisterDate): Observable<any> {       
        return api.post("/create", body);       
    }

    updateMeneger(body: RegisterDate): Observable<any> {
        return api.put(`/update`, body);
    } 

    excludeMeneger(idMeneger: string): Observable<any> {
        return api.deleteR(`/exclude/${idMeneger}`);
    }
}