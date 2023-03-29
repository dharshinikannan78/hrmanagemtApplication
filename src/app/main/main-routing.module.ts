import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ReportComponent } from './report/report.component';
import { AssetComponent } from './asset-management/asset-management.component';
import { calendarComponent } from './calendar/calendar.component';
import { MainComponent } from './main.component';
import { TaskCalendarComponent } from './task-calendar-details/task-calendar.component';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'add-task', component: calendarComponent },
      { path: 'asset-management', component: AssetComponent },
      { path: 'attendance-management', component: AttendanceManagementComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'report', component: ReportComponent },
      { path: 'taskDetails-kanban', component: TaskCalendarComponent },
      { path: 'Employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
      { path: '', redirectTo: 'Employee', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/main/attendance', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
