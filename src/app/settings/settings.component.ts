import { Component, OnInit } from '@angular/core';
import {AirconeService} from '../providers/tipsProvider/aircone.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  public settings:any = {mobileNumber: '', whatsAppNumber: '', email: ''}
  constructor(public airconeService: AirconeService) {
    this.loadSetting();
   }

  ngOnInit() {
  }

  saveSetting() {

    this.airconeService.createSettings(this.settings)
    .then( res => {
      this.settings = {}
    })
  }

  updateSettings() {
  this.airconeService.updateSettings(this.settings)
  .then( res => {
    this.settings = res[0]
  })
}

  loadSetting() {
    this.airconeService.loadSettings()
    .then( res => {
      this.settings = res[0]
    })
  }

}
