import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {AppModule} from "../app.module";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.url);
  }
}
