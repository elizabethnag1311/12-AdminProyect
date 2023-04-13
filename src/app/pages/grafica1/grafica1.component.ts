import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {

  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ]
  public data1 = { 
      data: [350, 450, 100],
      backgroundColor:['#60E0DC','#C764E3','#5FE36A']
  }
}