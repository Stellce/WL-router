import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import timezones from '../../assets/json/timezones.json';
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: `app-quick-setup`,
  templateUrl: `./quick-setup.component.html`,
  styleUrls: [`./quick-setup.component.scss`]
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
    isSignal24: true,
    ssid: "TP-LINK_7B00",
    password: "tplinkpassword"
  }
  onTest() {
    console.log(timezones[0].text);
  }
  timezones = timezones;
  filteredTimeZones: Observable<string[]> | undefined;
  TimeZoneOptions: string[] = timezones.map(el => el.text);
  private _filter(value: any): string[] {
    const filterValue = value.toLowerCase();
    return this.TimeZoneOptions.filter(TimeZoneOptions => TimeZoneOptions.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    this.filteredTimeZones = this.timeZoneGroup.get("timeZone")?.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value || ''))
    );
  }
  onWanConnDetect() {
    this.wanConnSelected = this.wanConnTypes[0];
  }
  onConfirm() {
    //send values to service, then to router
    console.log(this.timeZoneGroup.value, this.wanConnGroup.value, this.wirelessSettingsGroup.value);

  }
}
