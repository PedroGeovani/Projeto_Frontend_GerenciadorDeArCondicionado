import { Observable } from "rxjs";
import api from "../config/service.config.rxjs";
import type { CEnvironment } from "@/models/model.environment";

export class EnvironmentRest {  
    getListEnvironment(): Observable<any> {          
        return api.get("/")
    }

    getEnvironmentOne(id: String): Observable<any> { 
        return api.get(`/${id}`);
    }
    
    createEnvironment(body: CEnvironment): Observable<any> {       
        return api.post("/", body);       
    }

    updateEnvironment(id: string, body: CEnvironment): Observable<any> {
        return api.put(`/${id}`, body);
    } 

    excludeEnvironment(id: string): Observable<any> {
        return api.deleteR(`/${id}`);
    }
}