import {Component} from "@angular/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { MatButton } from "@angular/material/button";

@Component({
    selector: `app-basic`,
    templateUrl: `./basic.component.html`,
    styleUrls: [`./basic.component.scss`, `../shared/shared.scss`],
    standalone: true,
    imports: [MatButton, RouterLink, RouterLinkActive, RouterOutlet],
})
export class BasicComponent{

}
