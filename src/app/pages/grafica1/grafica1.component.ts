import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {

  public doughnutChartLabels: string[] = ['pan','refresco','tacos',];

  public data1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [10, 20, 100],
        backgroundColor:['#60E0DC','#C764E3','#5FE36A']
      },
    ],
  };
}