import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() color: string = 'light ';
  @Input() line: number = 0;
  @Input() column: number = 0;

  available = false;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(line: number, column: number) {
    switch ((line + column)%2) {
      case 0:
        return 'light';
      default:
        return 'dark';
    }
  }

}
