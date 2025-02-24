export class CEnvironment {
  constructor(
    public environment: string,
    public dates: CDates[],
    public _id?: string
  ) { }
}

export class CDates {
  constructor(
    public date: Date,
    public times: CTimes[],
    public _id?: string
  ) { }
}

export class CTimes {
  constructor(
    public start_time: Date,
    public end_time: Date,
    public _id?: string
  ) { }
}