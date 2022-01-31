import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lightswitch-comp',
  templateUrl: './lightswitch-comp.component.html',
  styleUrls: ['./lightswitch-comp.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LightswitchCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOn: boolean = false;

  switch() {
    this.isOn = !this.isOn;
  }

}
