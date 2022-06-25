import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IsabellaListServiceService {
  constructor(private http: HttpClient) {}
  list;
  drink;
  instrucao;
  categoria;

  getList() {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      )
      .subscribe((data) => {
        this.list = JSON.stringify(data);
        this.drink = data.drinks[0].strDrink;
        this.instrucao = data.drinks[0].strInstructions;
        this.categoria = data.drinks[0].strCategory;
        console.log(this.list.length);
      });
    return this.list;
  }
}
