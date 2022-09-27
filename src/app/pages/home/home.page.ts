import { FoodAPIService } from './../../food-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private foodService: FoodAPIService) { }

  ngOnInit() {
    this.foodService.getBestFood().subscribe(result => {
      //console.log(result.id);
      console.log(result);
    });
  }
}
