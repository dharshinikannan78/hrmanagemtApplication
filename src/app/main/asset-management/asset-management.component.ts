import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './asset-management.component.html',
  styleUrls: ['./asset-management.component.scss']
})
export class AssetComponent implements OnInit {
  showForms: boolean;

  ngOnInit(): void {
  }

  showUserForms(showForms: boolean) {
    this.showForms = showForms;
  }

  onClick() {
    this.showForms = !this.showForms;
  }

  isDataValue = [
    { firstName: ' Asset', lastName: ' 1' },
    { firstName: ' Asset', lastName: ' 2' },
    { firstName: ' Asset', lastName: ' 3' },
    { firstName: ' Asset', lastName: ' 4' },
    { firstName: ' Asset', lastName: ' 5' },
    { firstName: ' Asset', lastName: ' 6' },
    { firstName: ' Asset', lastName: ' 7' },
  ]
}



