import { Observable, Subject, take } from "rxjs"
import { EnvironmentRest } from "@/service/rest/rest.environment"
import type { CEnvironment } from "@/models/model.environment";

export class EnvironmentService {
    constructor(
        private _environment = new EnvironmentRest(),
    ) { }

    private environment$: Subject<any> = new Subject<any>()

    environment: Observable<any> = this.environment$.asObservable()

    getListEnvironment() {
        this._environment.getListEnvironment()
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response)
                }
            });
    }

    getEnvironmentOne(id: string) {
        this._environment.getEnvironmentOne(id)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response)
                },
            });
    }

    updateEnvironment(id: string, body: CEnvironment) {
        this._environment.updateEnvironment(id, body)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response);
                }
            });
    }

    crateEnvironment(body: CEnvironment) {
        this._environment.createEnvironment(body)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response);
                },
            });
    }

    excludeEnvironment(id: string) {
        this._environment.excludeEnvironment(id)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.environment$.next(response);
                },
            });
    }
}