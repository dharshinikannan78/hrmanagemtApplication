import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import moment from 'moment';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import readXlsxFile from 'read-excel-file';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.scss'],
})
export class AttendanceManagementComponent implements OnInit {
  absentees: number;
  toggleButtons: any;
  toggleSelected: string;
  displayedColumns: string[] = [
    'index',
    'name',
    'employeeId',
    'department',
    'leaveEndDate',
  ];
  dataSource: any[] = [];

  @ViewChild('fileInput')
  fileInput: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.absentees = 0;
    this.toggleSelected = 'Today';
    this.toggleButtons = {
      today: moment().format('DD/MM/YYYY'),
      month: moment().format('MMMM, YYYY'),
    };
  }

  onToggleChange(toggleData: MatButtonToggleChange) {
    this.toggleSelected = toggleData.value;
  }

  onExcelUpload(event: any) {
    readXlsxFile(event.target.files[0]).then((rows: any) => {
      let dataValue: any = [];
      rows.forEach((data: any, index: number) => {
        if (!index) {
          return;
        }
        dataValue.push({
          index: dataValue.length + 1,
          name: data[0],
          leaveStartDate: moment(data[1]).format('DD/MM/YYYY'),
          leaveEndDate: moment(data[2]).format('DD/MM/YYYY'),
        });
      });
      const todayAbsentees = dataValue.filter(
        (data: any) => data.leaveStartDate === moment().format('DD/MM/YYYY')
      );
      this.dataSource = [...todayAbsentees, ...this.dataSource];
      this.absentees = this.dataSource.length;
      this.changeDetectorRef.detectChanges();
      this.fileInput.nativeElement.value = '';
    });
  }
}
