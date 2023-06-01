import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private siteName = environment.siteName;

  private apisUrl = environment.apisUrl;
  apis$ = new ReplaySubject<any>();
  apis2$ = new ReplaySubject<any>();
  private apis: any;

  constructor(private http: HttpClient, private authService: TokenService) {
    this.apis2$.subscribe((res: any) => {
      if (res.maintanance == 1) {
        this.authService.setMaintanance(res.maintanance);
      } else if (res.maintanance == 2) {
        this.authService.setMaintanance(res.maintanance);
      } else if (res.maintanance == 0) {
        this.authService.removeMaintanance();
      }
      let hostname = window.origin;
      // console.log(res.fSource)
      if (hostname.indexOf('cricbuzzer') > -1 || hostname.indexOf('winplus247') > -1 || hostname.indexOf('dreamcric') > -1 || hostname.indexOf('localhost') > -1) {
        res.ip = res.devIp;
        // res.sportApi = res.allSportApi;
        // res.sportSocketApi = res.allSportSocketApi;
        // res.fSource = 1;

      } else {
        res.ip = res.sslclient;
      }
      if (location.protocol === 'https:') {
        res.racingApi = res.sslRacingApi;
        res.racingSocketApi = res.sslracingSocketApi;
        res.sportApi = res.sslSportApi;
        res.sportSocketApi = res.sslsportSocketApi;
        res.allSportApi = res.sslAllSportApi;
        res.allSportSocketApi = res.sslAllSportSocketApi;
        if (hostname.indexOf('cricbuzzer') > -1  || hostname.indexOf('winplus247') > -1 || hostname.indexOf('dreamcric') > -1 || hostname.indexOf('localhost') > -1) {
          res.ip = res.devIp;
          // res.sportApi = res.sslAllSportApi;
          // res.sportSocketApi = res.sslAllSportSocketApi;
          // res.fSource = 1;


        } else {
          res.ip = res.sslclient;
        }

      }
      if (this.siteName=='lc247' || this.siteName=='lc365') {
        res.fSource = 1;
      }
      this.apis = res;
    })
  }

  getApis() {
    return this.http.get(`${this.apisUrl}`);
  }
}
