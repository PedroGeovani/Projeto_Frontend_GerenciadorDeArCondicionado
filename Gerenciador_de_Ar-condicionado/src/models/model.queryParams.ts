import type { CDates, CEnvironment, CTimes } from "./model.environment";

export class QueryParams {
  constructor(
    public _id?: String,
    public environment?: CEnvironment,
    public dates?: CDates[],
    public times?: CTimes[]
  ) { }
}