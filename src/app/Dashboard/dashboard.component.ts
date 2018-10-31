import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ExcelService } from '../services/excel.service';
import {Chart} from 'chart.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-LandingPage',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ExcelService]
})

export class DashboardComponent {
  
  chart:any;
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];
  constructor(private excelService: ExcelService,private router:Router) {
  }
  ngOnInit(){
    this.chart= new Chart('canvas',{
      type: 'doughnut',
      data: {datasets: [{
        data: [10, 20, 30,5],
        backgroundColor:['#ff9900','#ff5050','#99ff33','#80b3ff']
      }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Sev 1',
        'Sev 2',
        'Sev 3',
        'Sev 4',
      ]}
    
  })
  var myLineChart = new Chart('lines', {
    type: 'line',
    data:{
      labels:['DAY 1','DAY 2','DAY 3','DAY 4','DAY 5'],
      datasets:[{
        data:[21,23,16,19,10],
        fill:false,
        borderColor:'red'
    }, {
       data: [24,20,14,19,13],
        fill:false,
        borderColor:'orange'
       
    }]
    },
    options: {
      legend: {
        display: true,
        labels:["SM9","SM9"]
      }
    }
});

var myBarChart = new Chart('bar', {
  type: 'bar',
  data:{
    labels:['Open','New','Inprogress','Submitted','Closed'],
    datasets:[{
      data:[21,23,16,19,15],
      fill:true,
      backgroundColor:'red'
  }]
  },
  options: {
    legend: {
      display: true,
      labels:["SM9","SM9"]
    }
  }
});

  }
  exportAsXLSX(): void {
       this.excelService.exportAsExcelFile(this.data, 'sample');
  }
  
  gotoIncidenttab(){
    console.log("inside")
    this.router.navigateByUrl('IncidentTab');
}
}