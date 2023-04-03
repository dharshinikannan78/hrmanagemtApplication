import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-details',
  templateUrl: './configuration-details.component.html',
  styleUrls: ['./configuration-details.component.scss']
})
export class ConfigurationDetailsComponent implements OnInit {

  customStyle = {
    objectFit: "cover",
    cursor: "pointer",
    fontWeight: '700'
  };

  constructor() { }

  ngOnInit(): void {
  }

  mhePicks = [
    { processType: "MHE PICKS", processDesc: "10", shift: "Shift 1", status: "Active" },
    { processType: "MHE PICKS", processDesc: "N/A", shift: "Shift 2", status: "InActive" },
    { processType: "MHE PICKS", processDesc: "HR/DD", shift: "Shift 3", status: "In Progress" },
    { processType: "MHE PICKS", processDesc: "N/A", shift: "Shift 3", status: "In Progress" }
  ];
  mezzPicks = [
    { processType: "MEZZ PICKS", processDesc: "A/B", shift: "Shift 1", status: "InActive" },
    { processType: "MEZZ PICKS", processDesc: "VC", shift: "Shift 2", status: "In Progress" },
    { processType: "MEZZ PICKS", processDesc: "A/B", shift: "Shift 3", status: "Active" }
  ];
  sorting = [
    { processType: "SORTING", processDesc: "MOD/TAB", shift: "Shift 1", status: "InActive" },
    { processType: "SORTING", processDesc: "SORT CELL", shift: "Shift 2", status: "In Progress" },

  ];
  dispatching = [
    { processType: "DISPATCHING", processDesc: "BL/UGS", shift: "Shift 1", status: "InActive" },
    { processType: "DISPATCHING", processDesc: "SORT CELL", shift: "Shift 2", status: "In Progress" },

  ];
  others = [
    { processType: "Others", processDesc: "EXPORT", shift: "Shift 1", status: "InActive" },
    { processType: "Others", processDesc: "INBOUND", shift: "Shift 2", status: "In Progress" },
    { processType: "Others", processDesc: "PROCESS", shift: "Shift 2", status: "In Progress" },

  ]
}
