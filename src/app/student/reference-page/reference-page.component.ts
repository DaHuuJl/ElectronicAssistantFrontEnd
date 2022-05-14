import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDrawerMode} from "@angular/material/sidenav";
import {IReferenceRequestInput} from "../../shared/model/Model";
import {ReferenceService} from "../../shared/service/ReferenceService";
import {FormatReference, TypeReference} from "../../shared/model/Enums";

@Component({
  selector: 'app-get-reference-page',
  templateUrl: './reference-page.component.html',
  styleUrls: ['./reference-page.component.css']
})
export class ReferencePageComponent implements OnInit {

  public menuPath = 'certificate';
  menuStatus!: boolean
  burgerHide!: boolean
  burgerStatusHide!: boolean
  mode!: MatDrawerMode
  quantity!: number
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  checked = false;
  typeReference = "1";
  formatReference = "1";


  constructor(private fb: FormBuilder,
              private router: Router,
              private referenceService: ReferenceService ) {
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
    for(let i = 0; i < this.quantity; i++) {
      let reference: IReferenceRequestInput = {
        formatReference: this.getFormatReference(this.formatReference),
        typeReference: this.getTypeReference(this.typeReference),
        placePresentation: this.getPlacePresentation(i)
      }
      this.referenceService.createRequestReference(reference);
    }
    document.location.href = "/documents";
  }

  getFormatReference(value: string): FormatReference {
    switch(value) {
      case "1":
        return FormatReference.PAPER;
      case "2":
        return FormatReference.ELECTRONIC;
      default:
        return FormatReference.PAPER;
    }
  }

  getTypeReference(value: string): TypeReference {
    switch(value) {
      case "1":
        return TypeReference.PERIOD;
      case "2":
        return TypeReference.WORK;
      default:
        return TypeReference.PERIOD;
    }
  }

  getPlacePresentation(value: number): String {
    switch(value) {
      case 0:
        return this.secondFormGroup.controls['select2'].value;
      case 1:
        return this.secondFormGroup.controls['select3'].value;
      case 2:
        return this.secondFormGroup.controls['select4'].value;
      default:
        return "по месту требования";
    }
  }
}
