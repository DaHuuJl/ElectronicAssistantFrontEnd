import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IReferenceRequestInput} from "../model/Model";


@Injectable({
  providedIn: "root"
})
export class ReferenceService {

  constructor(private http:HttpClient) {}

  public createRequestReference(reference : IReferenceRequestInput) {
    let url = '/api/reference/createReferenceForInput'
    this.http.post<boolean>(url, reference)
      .subscribe({
        next: (result) => {
          return result;
        },
        error: (e) => console.error(e)
      });
  }
}
