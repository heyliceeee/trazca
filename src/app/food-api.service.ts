import { Food } from './models/food.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodAPIService {

  constructor(private http: HttpClient) { }

  //obter da API

  getBestFood(): Observable<Food>{
    return this.http.get<Food>(`${environment.baseUrl}/best-foods`);
  }

  getFood(id: string){
    return this.http.get<Food>(`${environment.baseUrl}/best-foods/${id}`);
  }
}
