import {Component, HostListener, OnInit} from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import timezones from '../../assets/json/timezones.json';
import {map, Observable} from "rxjs";
import { RouterLink } from "@angular/router";
import { MatButtonToggleGroup, MatButtonToggle } from "@angular/material/button-toggle";
import { MatRadioGroup, MatRadioButton } from "@angular/material/radio";
import { MatButton } from "@angular/material/button";
import { MatOption } from "@angular/material/core";
import { NgFor, AsyncPipe } from "@angular/common";
import { MatAutocompleteTrigger, MatAutocomplete } from "@angular/material/autocomplete";
import { MatInput } from "@angular/material/input";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatStepper, MatStep, MatStepLabel, MatStepperNext, MatStepperPrevious } from "@angular/material/stepper";
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
    selector: `app-quick-setup`,
    templateUrl: `./quick-setup.component.html`,
    styleUrls: [`../shared/shared.scss`, `./quick-setup.component.scss`],
    standalone: true,
    imports: [MatCard, MatCardContent, MatStepper, MatStep, ReactiveFormsModule, MatStepLabel, MatFormField, MatInput, MatAutocompleteTrigger, MatAutocomplete, NgFor, MatOption, MatButton, MatStepperNext, MatLabel, MatRadioGroup, MatRadioButton, MatStepperPrevious, MatButtonToggleGroup, MatButtonToggle, RouterLink, AsyncPipe]
})
export class QuickSetupComponent implements OnInit{
  isEditable: boolean = true;
  constructor(private _formBuilder: FormBuilder) {}
  timeZoneGroup = this._formBuilder.group({
    timeZone: ['', Validators.required]
  })
  wanConnGroup = this._formBuilder.group({
    conType: ['', Validators.required],
    cloneMac: ['', Validators.required]
  })
  wirelessSettingsGroup = this._formBuilder.group({
    isSignal24: ['', Validators.required],
    ssid: ['', Validators.required],
    password: ['', Validators.required]
  })

  wanConnTypes = [
    "Dynamic IP",
    "Static IP",
    "PPPoE",
    "L2TP",
    "PPTP"
  ]
  wanConnSelected = "";
  cloneMAC = [
    "Do NOT clone MAC address",
    "Clone MAC address"
  ];
  wirelessSettings = {
    isSignal24: "ON",
    ssid: "TP-LINK_7B00",
    password: "tplinkpassword"
  }
  filteredTimeZones: Observable<string[]> | undefined;
  TimeZoneOptions: string[] = timezones.map(el => el.text);
  innerWidth: number;
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.TimeZoneOptions.filter(TimeZoneOption => TimeZoneOption.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    this.filteredTimeZones = this.timeZoneGroup.get("timeZone")?.valueChanges.pipe(
      map(value => this._filter(value || ''))
    );
    this.setDefaultsForm();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  setDefaultsForm() {
    this.wirelessSettingsGroup.get('isSignal24')?.setValue(this.wirelessSettings.isSignal24);
    this.wirelessSettingsGroup.get('ssid')?.setValue(this.wirelessSettings.ssid);
    this.wirelessSettingsGroup.get('password')?.setValue(this.wirelessSettings.password);
  }
  onWanConnDetect() {
    this.wanConnSelected = this.wanConnTypes[0];
  }
  onConfirm() {
    //send values to service, then to router
    console.log(this.timeZoneGroup.value, this.wanConnGroup.value, this.wirelessSettingsGroup.value);

  }

  protected readonly window = window;
}
