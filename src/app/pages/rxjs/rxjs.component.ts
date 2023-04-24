import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {
    
    this.intervalSubs = this.retornaIntervalo()
    .subscribe(console.log);
  }
  
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  
  retornaIntervalo(): Observable<number> {
    return interval(100)
    .pipe(
      map((value) => value + 1),
      filter( value => (value % 2 === 0) ? true: false),
      //take(10),
      );
    }
    
    //   this.retornaObservable().pipe(
    //     retry()
    //   ).subscribe(
    //     value => console.log('Subs:', value),
    //     error => console.warn('Error;', error),
    //     () => console.info('Obs Terminado')
    //   );

    //  retornaObservable(): Observable<number> {
  //   let i = -1;

  //   return new Observable<number>( observe => {
  //     const intervalo = setInterval(() => {
  //       i++;
  //       observe.next(i);

  //       if ( i === 4) {
  //         clearInterval( intervalo );
  //         observe.complete()
  //       }
  //       if (i === 2) {
  //         console.log('I es igual a 2.... error')
  //         observe.error('I llego al valor 2')
  //       }
  //     }, 1000);
  //   });
  //}
}
