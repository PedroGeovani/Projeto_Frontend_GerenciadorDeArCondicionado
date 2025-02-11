import { Observable, Subject, take } from "rxjs"
import { EnvironmentRest } from "@/service/rest/rest.environment"
import { EnvironmentDate } from "@/models/model.environment"

export class EnvironmentService {
    constructor(
        private _environment = new EnvironmentRest()
    ) { }

    private environment$: Subject<any> = new Subject<any>()

    environment: Observable<any> = this.environment$.asObservable()
/*
    getListEnvironment() {
        this._environment.getListEnvironment()
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response)
                }
            });
    }*/
    
    getEnvironmentOne(idEnvironment: string) {
        this._environment.getEnvironmentOne(idEnvironment)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response)
                },
            });
    }
/*
    updateEnvironment(body: EnvironmentDate) {
        this._environment.updateEnvironment(body)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response);
                }
            });
    }
*/
    crateEnvironment(body: EnvironmentDate) {
        this._environment.createEnvironment(body)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response);
                },
            });
    }
/*
    excludeEnvironment(idEnvironment: string) {
        this._environment.excludeEnvironment(idEnvironment)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response);
                },
            });
    }*/
}