import { Observable, Subject, take } from "rxjs"
import { ManagerRest } from "@/service/rest/rest.schedule"
import type { RegisterDate } from "@/models/model.register-date";

export class MenegerService {
    constructor(
        private _manager = new ManagerRest(),
    ) { }

    private manager$: Subject<any> = new Subject<any>()

    manager: Observable<any> = this.manager$.asObservable()

    getListMeneger() {
        this._manager.getListMeneger()
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.manager$.next(response)
                }
            });
    }

    getMenegerByEnvironment(nameEnvironment: string) {
        this._manager.getMenegerByEnvoronment(nameEnvironment)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.manager$.next(response)
                },
            });
    }

    updateMeneger(body: RegisterDate) {
        this._manager.updateMeneger(body)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.manager$.next(response);
                }
            });
    }

    crateMeneger(body: RegisterDate) {
        this._manager.createMeneger(body)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.manager$.next(response);
                },
            });
    }

    excludeMeneger(idMeneger: string) {
        this._manager.excludeMeneger(idMeneger)
            .pipe(take(1))
            .subscribe({
                next: (response) => {
                    this.manager$.next(response);
                },
            });
    }
}