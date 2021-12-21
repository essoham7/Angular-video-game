import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';


@Component({
  selector: 'app-games-tabs',
  templateUrl: './games-tabs.component.html',
  styleUrls: ['./games-tabs.component.scss']
})
export class GamesTabsComponent implements OnInit {
  @Input() game: Game | any;
  constructor() { }

  ngOnInit(): void {
  }

}
