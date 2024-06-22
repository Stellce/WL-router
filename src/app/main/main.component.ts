import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.url);
  }
}
