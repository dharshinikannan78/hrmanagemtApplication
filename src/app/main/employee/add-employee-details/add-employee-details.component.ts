import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.scss']
})


export class AddEmployeeDetailsComponent implements OnInit {

  showForms: boolean;
  constructor(private router: Router, private api: ApiServiceService) { }
  onClick() {
    this.router.navigate(['/login']);
  }

  showUserForms(showForms: boolean) {
    this.showForms = showForms;
  }
  ngOnInit(): void {

  }
}


