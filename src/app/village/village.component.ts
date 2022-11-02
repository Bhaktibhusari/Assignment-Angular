import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
  @Input()
  cityName = 'Bangalore'
  constructor() { }

  ngOnInit(): void {
  }

}
