import { Component, OnInit } from '@angular/core';
import { IsabellaListServiceService } from '../isabella-list-service.service';

@Component({
  selector: 'app-isabella-home-component',
  templateUrl: './isabella-home-component.component.html',
  styleUrls: ['./isabella-home-component.component.css'],
})
export class IsabellaHomeComponentComponent implements OnInit {
  constructor(public servico: IsabellaListServiceService) {}

  ngOnInit() {}
}
