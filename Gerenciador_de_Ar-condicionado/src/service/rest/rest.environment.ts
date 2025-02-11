import { Observable } from "rxjs";
import api from "../config/service.config.rxjs";
import type { EnvironmentDate } from "@/models/model.environment";

export class EnvironmentRest {  
    getListEnvironment(): Observable<any> {          
        return api.get("/getListEnvironment")
    }

    getEnvironmentOne(environment: String): Observable<any> { 
        return api.get(`/getEnvironmentOne/${environment}`);
    }
    
    createEnvironment(body: EnvironmentDate): Observable<any> {       
        return api.post("/createEnvironment", body);       
    }

    updateEnvironment(body: EnvironmentDate): Observable<any> {
        return api.put(`/updateEnvironment`, body);
    } 

    excludeEnvironment(idMeneger: string): Observable<any> {
        return api.deleteR(`/excludeEnvironment/${idMeneger}`);
    }
}