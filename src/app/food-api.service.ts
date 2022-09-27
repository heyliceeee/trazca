import { Injectable } from '@angular/core';

const KEY = '';
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

@Injectable({
  providedIn: 'root'
})
export class FoodAPIService {

  private headers;

  constructor() { }


}
