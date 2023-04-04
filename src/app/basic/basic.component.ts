import {Component} from "@angular/core";

@Component({
  selector: `app-basic`,
  templateUrl: `./basic.component.html`,
  styleUrls: [`./basic.component.css`]
})
export class BasicComponent{
  earthPath: string = './assets/images/Earth.svg';
  disconnected :boolean = true;

  routerPath: string = './assets/images/Router.svg'
  xPath: string = './assets/images/X.svg';

}
