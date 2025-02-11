export class RegisterDate {
  constructor(
    public id: string,
    public environment: string,
    public startTimeMorning?: string,
    public endTimeMorning?: string,
    public startTimeAfternoon?: string,
    public endTimeAfternoon?: string,
    public startTimeNight?: string,
    public endTimeNight?: string
  ) { }
}