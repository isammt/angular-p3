import { Component, OnInit } from '@angular/core';
import { IsabellaListServiceService } from '../isabella-list-service.service';

@Component({
  selector: 'app-isabella-list-component',
  templateUrl: './isabella-list-component.component.html',
  styleUrls: ['./isabella-list-component.component.css'],
})
export class IsabellaListComponentComponent implements OnInit {
  constructor(public servico: IsabellaListServiceService) {}

  ngOnInit() {}
}
