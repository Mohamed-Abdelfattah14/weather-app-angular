import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


  public weatherSearchForm: FormGroup;
  public weatherData!: any;
  constructor(private formBilder: FormBuilder, private Api: WeatherService) {
    this.weatherSearchForm = this.formBilder.group({
      location: ['']
    })
  }

  ngOnInit() {

  }

  sendApi(formValues: any) {
    console.log(formValues);
    this.Api.getWeather(formValues.value.location).subscribe((data: any) => { console.log(data); this.weatherData = data })
  }

}
