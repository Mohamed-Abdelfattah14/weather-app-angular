import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeather(location: any) {
    return this.http.get(`http://api.weatherstack.com/current?access_key=1b8c5444ddf53e87d2f0c69202e4027e&query=${location}`);
  }
}
