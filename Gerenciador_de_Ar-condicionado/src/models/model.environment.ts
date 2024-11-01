export class Company {
  constructor(
    public id?: number,
    public name?: string,
    public branch?: string,
    public sector?: Environment[],
    public administrators?: User[]
  ) { }
}

export class User {
  constructor(
    public id?: string,
    public email?: string,
    public login?: string,
    public password?: string,
  ) { }
}

export class Environment {
  constructor(
    public id?: number,
    public environmentName?: string,
    public deviceNumber?: number,
    public devices?: Device[],
    public grade?: Programming[],
    public defaultTemperature?: number
  ) { }
}

export class Device {
  constructor(
    public id?: number,
    public brand?: string,
    public model?: string,
    public power?: string
  ) { }
}

export class Programming {
  constructor(
    public id?: number,
    public date?: string,
    public activation?: Duration[],
  ) { }
}

export class Duration {
  constructor(
    public id?: number,
    public startTime?: string,
    public endTime?: string,
  ) { }
}