import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficaService } from '../../services/grafica.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  datos: number[] = [];
  doughnutChartLabels: string[] = [];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: [''],
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(
    public dataService: GraficaService
  ) { }
  
  ngOnInit() {
    // this.gettingData();
    this.getDatosManipulados();
  }

  gettingData() {
    this.dataService.getUsuariosRedes()
      .subscribe((info) => {
        this.doughnutChartData = {
          labels: Object.keys(info),
          datasets: [{data: Object.values(info)}]
        }
      })
  }

  getDatosManipulados() {
    this.dataService.getDatosManipulados().subscribe(({labels, values}) => {
      this.doughnutChartData = {
        labels: labels,
        datasets: [{data: values}]
      }
    })
  }

}
