import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any = [
    'Elena', 'Evgenii', 'RoRo'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
