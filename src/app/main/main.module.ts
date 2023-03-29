import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { calendarComponent } from './calendar/calendar.component';
import { EmployeeModule } from './employee/employee.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';
import { TaskCalendarComponent } from './task-calendar-details/task-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AssetComponent } from './asset-management/asset-management.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
@NgModule({
  declarations: [
    calendarComponent,
    AssetComponent,
    MainComponent,
    TaskCalendarComponent,
    ConfigurationComponent,
    AttendanceManagementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainRoutingModule,
    EmployeeModule,
    AvatarModule,
    DragDropModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class MainModule {}
