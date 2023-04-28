import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public title!: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router) { 
    
    this.tituloSubs$ = this.getDataRutas()
        .subscribe( ({title}) => {
      this.title = title;
      document.title = `AdminProyect - ${title}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getDataRutas(){
    return this.router.events
    .pipe(
      filter( (event): event is ActivationEnd => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data),
      )
  }

  ngOnInit(): void {
  }

}
