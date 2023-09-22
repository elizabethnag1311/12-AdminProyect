import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {

  public doughnutChartLabels: string[] = ['Chrome','Microsoft Edge','Firefox', 'Safari', 'Opera', ' Otros'];
  public doughnutChartLabels1: string[] = ['Examen Final','Cuestionarios','Proyectos en Clase', 'Participacion en clase'];

  public data1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [47, 20, 5, 1, 2],
        backgroundColor:['#60E0DC','#A872DA','#5FE36A', '#175EEA', '#F24C79 ']
      },
    ],
  };

  public data2: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [
      { data: [50, 20, 20, 10],
        backgroundColor:['#60E0DC','#A872DA ','#5FE36A', '#175EEA']
      },
    ],
  };
}