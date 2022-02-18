import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ICertificate} from "../model/Model";
import {Observable} from "rxjs";
import {FormatReference, TypeReference} from "../model/Enums";

@Injectable({
  providedIn: "root"
})
export class CertificateService {

  constructor(private http:HttpClient) {}

  public createCertificate(certificate: { formatReference: FormatReference; typeReference: TypeReference; userId: number }): Observable<String> {
    return this.http.put<String>('/api/product/getAll', certificate);
  }
}
