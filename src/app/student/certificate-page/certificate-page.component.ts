import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-certificate-page',
  templateUrl: './certificate-page.component.html',
  styleUrls: ['./certificate-page.component.css']
})
export class CertificatePageComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  checked = false;
  menuNumber = 4;

  constructor(private fb: FormBuilder, private router: Router) {
    this.firstFormGroup = this.fb.group({
      select1: ['', [Validators.required]]
    })
    this.secondFormGroup = this.fb.group({
      select2: ['по месту требования', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  confirm() {
    this.router.navigate(['/documents']);
  }
}
