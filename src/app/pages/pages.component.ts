import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../service/settings.service';

declare function customInitFuntion(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  year = new Date().getFullYear();

  constructor( private settingService: SettingsService) { }

  ngOnInit(): void {
  
    customInitFuntion()
  }
}
