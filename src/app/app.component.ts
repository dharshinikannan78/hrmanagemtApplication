import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  UserName: string = localStorage.getItem('userName')

  title = 'hrmanagementapplication';

  
}
