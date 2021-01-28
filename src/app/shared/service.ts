import { environment } from 'src/environments/environment'
import { AbstractType, Inject, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs'
import { DatePipe } from '@angular/common'
import { catchError, retry } from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  constructor(private httpclient: HttpClient, private router: Router) {}

  getToken() {
    return localStorage.setItem('access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMTc0MzQ2NH0.bV4UgRy8b6Na2vbFx-_fmLyespC5y5bgZsBH-FRA_5w')
  }

  GetMemberShip() {
    var reqHeader = new HttpHeaders({'access-token': localStorage.getItem('access-token')});
    return this.httpclient.get(environment.apiBaseUrl + '/get_all_memberhships', { headers: reqHeader });
  }

  GetMemberShipDetails(id) {
    var reqHeader = new HttpHeaders({'access-token': localStorage.getItem('access-token')});
    return this.httpclient.get(environment.apiBaseUrl + '/get_all_memberhships?membershipId='+id , { headers: reqHeader });
  }



}
