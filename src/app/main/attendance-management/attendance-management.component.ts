import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.scss'],
})
export class AttendanceManagementComponent implements OnInit {
  absentees: number;
  toggleButtons: any;
  toggleSelected: string;

  constructor() {}

  ngOnInit(): void {
    this.absentees = 0;
    this.toggleSelected = 'Today';
    this.toggleButtons = {
      today: moment().format('DD/MM/YYYY'),
      month: moment().format('MMMM, YYYY'),
    };
  }
}
