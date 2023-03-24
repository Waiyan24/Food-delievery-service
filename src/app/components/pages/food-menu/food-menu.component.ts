import {Component, OnInit} from '@angular/core';
import {Food} from "../../../shared/models/Food";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  foods: Food[] = [];
  searchTerm = '';

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = foodService.getAll();
    })

  }

  ngOnInit(): void {
  }

  search(term: string): void {
    if (term)
      this.router.navigateByUrl('/search/' + term);
  }

}
