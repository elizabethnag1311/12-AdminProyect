import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  public doughnutChartLabels: string[] = ['label1','label2','label3',];
  public doughnutChartType: ChartType = 'doughnut';

  @Input() title: string = 'Sin Titulo';

  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],
        backgroundColor:['#60E0DC','#C764E3','#5FE36A']
      },
    ],
  };

    // events
    public chartClicked({
      event,
      active,
    }: {
      event: ChartEvent;
      active: {}[];
    }): void {
      console.log(event, active);
    }
  
    public chartHovered({
      event,
      active,
    }: {
      event: ChartEvent;
      active: {}[];
    }): void {
      console.log(event, active);
    }

}
