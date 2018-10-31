import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ExcelService } from '../services/excel.service';
import {Chart} from 'chart.js';
@Component({
  selector: 'incident-tab',
  templateUrl: './incidenttab.component.html',
  styleUrls: ['./incidenttab.component.css'],
  providers:[ExcelService]
})

export class IncidentComponent {
    data: any = [{
        IncidentId: '1000',
        Status: 'Inprogress',
        Severity: 3
      }, {
        IncidentId: '800',
        Status: 'New',
        Severity: 4
      }, {
        IncidentId: '1200',
        Status: 'Open',
        Severity: 2
      }];
    constructor(private excelService: ExcelService) {
    }
    ngOnInit(){

    }
    gotoExport(){
        console.log("inside")
       this.excelService.exportAsExcelFile(this.data, 'sample');

        //this.router.navigateByUrl('');
    }
}