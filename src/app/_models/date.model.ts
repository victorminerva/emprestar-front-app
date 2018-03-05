export class DateApp {
  date: number;
  day: number;
  hours: number;
  minutes: number;
  month: number;
  seconds: number;
  time: number;
  timezoneOffset: number;
  year: number;

  constructor() {
    this.date = new Date().getDate();
    this.day = new Date().getDay();
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
    this.time = new Date().getTime();
    this.timezoneOffset = new Date().getTimezoneOffset();
  }

  setDate(date: Date): DateApp {
    const dateApp = new DateApp();
    dateApp.date = date.getDate();
    dateApp.day = date.getDay();
    dateApp.month = date.getMonth();
    dateApp.year = date.getFullYear();
    dateApp.hours = date.getHours();
    dateApp.minutes = date.getMinutes();
    dateApp.seconds = date.getSeconds();
    dateApp.time = date.getTime();
    dateApp.timezoneOffset = date.getTimezoneOffset();
    return dateApp;
  }
}
