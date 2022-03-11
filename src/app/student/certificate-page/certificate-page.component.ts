import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDrawerMode} from "@angular/material/sidenav";
import {ICertificate} from "../../shared/model/Model";
import {CertificateService} from "../../shared/service/CertificateService";
import {FormatReference, TypeReference} from "../../shared/model/Enums";

@Component({
  selector: 'app-get-certificate-page',
  templateUrl: './certificate-page.component.html',
  styleUrls: ['./certificate-page.component.css']
})
export class CertificatePageComponent implements OnInit {

  public menuPath = 'certificate';
  menuStatus!: boolean
  burgerHide!: boolean
  burgerStatusHide!: boolean
  mode!: MatDrawerMode
  quantity!: number
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  checked = false;


  constructor(private fb: FormBuilder,
              private router: Router,
              private certificateService: CertificateService ) {
    this.firstFormGroup = this.fb.group({
      select1: ['', [Validators.required]]
    })
    this.secondFormGroup = this.fb.group({
      select2: ['по месту требования', [Validators.required]],
      select3: ['по месту требования', [Validators.required]],
      select4: ['по месту требования', [Validators.required]]
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
    let certificate = new class implements ICertificate {
      formatReference: FormatReference = FormatReference.PAPER;
      typeReference: TypeReference = TypeReference.PERIOD;
      userId: number = 1;
    }
    this.certificateService.createCertificate(certificate);


    console.log(this.firstFormGroup.controls['select1'].value)
    console.log(this.secondFormGroup.controls['select2'].value)
    /*
    this.router.navigateByUrl('/documents', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/documents']);
    })*/
  }
}
