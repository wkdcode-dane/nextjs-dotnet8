export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DateOnly {
    year: number;
    month: number;
    day: number;
    dayOfWeek: DayOfWeek;
    dayOfYear: number;
    readOnly: true;
    dayNumber: number;
}

export interface WeatherForecast {
    date: DateOnly;
    temperatureC: String;
    temperatureF: String;
    summary: String;
}