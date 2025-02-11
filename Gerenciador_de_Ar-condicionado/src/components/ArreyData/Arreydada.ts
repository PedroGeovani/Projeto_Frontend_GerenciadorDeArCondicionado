import type { RegisterDate } from "@/models/model.register-date";

export const DataProduts = {
  getRegisterTime(): RegisterDate[] {
    return [
      {
        environment: 'name',
        startTimeMorning: '2025 10 25 12:40;10',
        endTimeMorning: '2025 10 25 12:40;10',
        startTimeAfternoon: '2025 10 25 12:40;10',
        endTimeAfternoon: '2025 10 25 12:40;10',
        startTimeNight: '2025 10 25 12:40;10',
        endTimeNight: '2025 10 25 12:40;10',
      }
    ]
  }
}  