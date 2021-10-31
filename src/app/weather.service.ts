import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(location: any) {
    return this.http.get(`
    https://api.weatherapi.com/v1/current.json?key=bce23efcff794dbbbc9163632212703&q=${location}`);
  }
}
