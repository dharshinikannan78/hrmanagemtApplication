import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task-calendar',
  templateUrl: 'task-calendar.component.html',
  styleUrls: ['task-calendar.component.scss']
})

export class TaskCalendarComponent {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) { }
  ngOnInit(): void {

  }
  onClick() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;

      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }

    }
    this.modal.open(this.modalContent, { size: 'lg' });
  }





  items = ['Resource 1', 'Resource 2', 'Resource 3', 'Resource 4', 'Resource 5'];

  basket = ['Asset 1', 'Asset 2', 'Asset 3', 'Asset 4', 'Asset 5'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}


