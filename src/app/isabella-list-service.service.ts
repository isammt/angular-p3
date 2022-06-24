import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IsabellaListServiceService {
  constructor(private http: HttpClient) {}
  list;

  getList() {
    this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
      )
      .subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
    return this.list;
  }
}
