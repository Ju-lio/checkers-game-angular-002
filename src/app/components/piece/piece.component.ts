import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent implements OnInit {
  @Input() color: string = 'light ';

  constructor() {}

  ngOnInit(): void {}
}
