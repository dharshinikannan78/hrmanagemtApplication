import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  showForms: boolean;
  values: any = {};

  constructor(private router: Router, private api: ApiServiceService) { }

  sourceData = [{
    id: 1, name: 'MHE PICKS', values: ['10', 'N/A', 'HR/DD']
  },
  {
    id: 2, name: 'MEZZ PICKS', values: ['A/B', 'VC']
  },
  {
    id: 3, name: 'SORTING', values: ['MOD/TAB', 'SORT CELL']
  },
  {
    id: 4, name: 'DISPATCHING', values: ['BL/UGS', 'SORT CELL', 'EXPORT']
  },
  {
    id: 5, name: 'OTHERS', values: ['INBOUND', 'PROJECTS']
  },
  ];

  ngOnInit(): void {
    this.values = this.sourceData.filter(x => x.id == 1)[0].values;
  }

  onClick() {
    this.showForms = !this.showForms;
  }

  showUserForms(showForms: boolean) {
    this.showForms = showForms;
  }

  onChange(deviceValue: any) {
    console.log(deviceValue, 'device');
    this.values = this.sourceData.filter(x => x.id == deviceValue.target.value)[0].values;
  }

}
