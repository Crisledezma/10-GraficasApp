import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar'
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A',backgroundColor: 'rgba(0,0,255,.5)'  },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B',backgroundColor: 'rgba(0,255,0,.5)'  },
      { data: [ 8, 25, 78, 99, 45, 72, 90 ], label: 'Series C',backgroundColor: 'rgba(255,0,0,.5)' },
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets.forEach(({data})=>{
      for (let i = 0; i < data.length; i++) {
        data[i] = Math.round(Math.random()*100);        
      }
    })
    this.chart?.update();
  }
}