import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-get-certificate-page',
  templateUrl: './certificate-page.component.html',
  styleUrls: ['./certificate-page.component.css']
})
export class CertificatePageComponent implements OnInit {

  menuNumber = 4;
  menuStatus!: boolean
  burgerHide!: boolean
  burgerStatusHide!: boolean
  mode!: MatDrawerMode

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  checked = false;


  constructor(private fb: FormBuilder, private router: Router) {
    this.firstFormGroup = this.fb.group({
      select1: ['', [Validators.required]]
    })
    this.secondFormGroup = this.fb.group({
      select2: ['по месту требования', [Validators.required]]
    })
  }

  ngOnInit(): void {
    if(window.screen.availWidth >= 1000) {
      this.mode = "side"
      this.burgerStatusHide = true
      this.menuStatus = false
      this.burgerHide = false

      this.clickOnButton()
    } else {
      this.mode = "over"
      this.menuStatus = false
      this.burgerHide = false
    }
  }

  menuStatusReplace() {
    this.menuStatus = !this.menuStatus
    this.burgerHide = !this.burgerHide
    this.clickOnButton()
  }

  clickOnButton() {
    let element: HTMLElement = document.getElementById('toggle') as HTMLElement;
    element.click();
  }

  confirm() {
    this.router.navigateByUrl('/documents', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/documents']);
    })
  }
}
