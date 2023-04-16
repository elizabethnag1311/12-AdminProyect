import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  year = new Date().getFullYear();
  public linkTheme = document.querySelector('#theme');


  constructor() { }

  ngOnInit(): void {

    const url = localStorage.getItem('theme') || './assets/css/colors/megna-dark.css'
  
    this.linkTheme!.setAttribute('href', url);
  
  }
}
