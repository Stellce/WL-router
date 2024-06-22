import {ChangeDetectionStrategy, Component} from "@angular/core";
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MatButton } from "@angular/material/button";

@Component({
    selector: `Advanced`,
    templateUrl: `./advanced.component.html`,
    styleUrls: [`./advanced.component.scss`, `../shared/shared.scss`],
    standalone: true,
    imports: [MatButton, RouterLink, RouterLinkActive, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedComponent {}
