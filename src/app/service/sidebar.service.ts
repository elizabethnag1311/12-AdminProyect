import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard!!!',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', path: '/'},
        {title: 'Grafica', path: 'grafica1'},
        {title: 'ProgressBar', path: 'progress'},
        {title: 'Promesas', path: 'promesas'},
        {title: 'Rxjs', path: 'rxjs'},
      ]
    }
  ]

  constructor() { }
}
