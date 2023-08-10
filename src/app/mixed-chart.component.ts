import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.css']
})
export class MixedChartComponent {
  mixedChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', type: 'bar' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', type: 'bar' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', type: 'bar' },
    

    {
      data: [], 
      label: 'Curve',
      type: 'line',
      fill: false,
    },

  ];
  
  

  mixedChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  mixedChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        labels: this.mixedChartLabels 
      },
     
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  };

mixedChartType: any;


 
  constructor() {
   
    this.calculateLineGraphData();
   }


   

  private calculateLineGraphData(): void {
    const seriesAData = this.mixedChartData[0].data as number[];
    const seriesBData = this.mixedChartData[1].data as number[];
    const seriesCData = this.mixedChartData[2].data as number[];

    const curveData = seriesAData.map((value, index) => value + seriesBData[index] + seriesCData[index]);
    this.mixedChartData[3].data = curveData;
  }
  ngOnInit(): void {
    
  }
}
