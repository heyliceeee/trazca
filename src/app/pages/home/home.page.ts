import { FoodAPIService } from './../../food-api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  foods = [];

  constructor(private foodService: FoodAPIService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadFoods();
  }

  async loadFoods(){
    //loading spinner
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();


    this.foodService.getBestFood().subscribe(res => {
      loading.dismiss();

      this.foods = res;

      console.log(this.foods);
    });
  }
}
